<script>
  import { untrack, tick } from 'svelte';
  import { useMagazine } from '../state.svelte.js';
  import { transitions, resolveKeyframes } from '../transitions.js';

  const mag = useMagazine();

  let viewportEl = $state(null);
  let previousPage = $state(null);
  let activePage = $state(mag.currentPage);
  let transitionDirection = $state(1);
  let showBlackout = $state(false);

  $effect(() => {
    const newPage = mag.currentPage;
    const dir = mag.direction;

    untrack(() => {
      if (newPage === activePage) return;
      previousPage = activePage;
      transitionDirection = dir;
      activePage = newPage;

      // Wait for Svelte to flush DOM, then start animation
      tick().then(() => {
        requestAnimationFrame(() => runTransition());
      });
    });
  });

  function runTransition() {
    const transName = activePage.transition ?? 'fade';
    const config = transitions[transName] ?? transitions.fade;
    const dir = transitionDirection;

    if (config.sequenced) {
      runSequencedTransition(config, dir);
    } else {
      runStandardTransition(config, dir);
    }
  }

  function runStandardTransition(config, dir) {
    const outEl = viewportEl?.querySelector('.page-outgoing');
    const inEl = viewportEl?.querySelector('.page-incoming');

    const outFrames = resolveKeyframes(config, 'outgoing', dir);
    const inFrames = resolveKeyframes(config, 'incoming', dir);

    if (outEl) {
      outEl.animate([outFrames.from, outFrames.to], {
        duration: config.duration,
        easing: config.easing,
        fill: 'forwards',
      });
    }

    if (inEl) {
      const anim = inEl.animate([inFrames.from, inFrames.to], {
        duration: config.duration,
        easing: config.easing,
        fill: 'forwards',
      });

      anim.onfinish = () => {
        previousPage = null;
        mag.transitionEnd();
      };
    } else {
      previousPage = null;
      mag.transitionEnd();
    }
  }

  function runSequencedTransition(config, dir) {
    const outEl = viewportEl?.querySelector('.page-outgoing');
    const inEl = viewportEl?.querySelector('.page-incoming');

    if (!outEl) {
      // Fallback: no outgoing element, just show incoming
      previousPage = null;
      mag.transitionEnd();
      return;
    }

    const outFrames = resolveKeyframes(config, 'outgoing', dir);
    const inFrames = resolveKeyframes(config, 'incoming', dir);

    // Set transform-origin for zoom focus point (head of the figure)
    outEl.style.transformOrigin = config.transformOrigin ?? '50% 50%';

    // Hide incoming page completely during zoom phase
    if (inEl) {
      inEl.style.opacity = '0';
      inEl.style.visibility = 'hidden';
    }

    // Phase 1: Zoom into the outgoing page (head area)
    const zoomAnim = outEl.animate(
      [outFrames.from, outFrames.to],
      {
        duration: config.outDuration,
        easing: 'cubic-bezier(0.4, 0, 1, 1)',
        fill: 'forwards',
      }
    );

    zoomAnim.onfinish = () => {
      // Phase 2: Black flash — hold for a beat
      showBlackout = true;
      previousPage = null;

      tick().then(() => {
        setTimeout(() => {
          // Phase 3: Reveal new page from darkness
          if (inEl) {
            inEl.style.opacity = '';
            inEl.style.visibility = '';

            const fadeAnim = inEl.animate(
              [inFrames.from, inFrames.to],
              {
                duration: config.inDuration,
                easing: 'cubic-bezier(0, 0, 0.2, 1)',
                fill: 'forwards',
              }
            );

            // Fade out blackout simultaneously
            tick().then(() => {
              const blackEl = viewportEl?.querySelector('.blackout');
              if (blackEl) {
                blackEl.animate(
                  [{ opacity: 1 }, { opacity: 0 }],
                  { duration: config.inDuration, easing: 'ease-out', fill: 'forwards' }
                );
              }
            });

            fadeAnim.onfinish = () => {
              showBlackout = false;
              mag.transitionEnd();
            };
          } else {
            showBlackout = false;
            mag.transitionEnd();
          }
        }, config.blackDuration);
      });
    };
  }
</script>

<div class="magazine-viewport" bind:this={viewportEl}>
  {#if previousPage}
    <div class="page-layer page-outgoing">
      <previousPage.component />
    </div>
  {/if}

  <div class="page-layer page-incoming" class:sole={!previousPage}>
    <activePage.component />
  </div>

  {#if showBlackout}
    <div class="blackout"></div>
  {/if}
</div>

<style>
  .magazine-viewport {
    position: fixed;
    inset: 0;
    overflow: hidden;
  }

  .page-layer {
    position: absolute;
    inset: 0;
    will-change: transform, opacity;
  }

  .page-layer.sole {
    will-change: auto;
  }

  .blackout {
    position: absolute;
    inset: 0;
    background: #000;
    z-index: 10;
  }
</style>
