<script>
  import { useMagazine } from '../state.svelte.js';

  const mag = useMagazine();

  function handleKeydown(e) {
    if (mag.isTransitioning) return;
    if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault();
      mag.next();
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      mag.prev();
    }
    if (e.key === 'Home') {
      e.preventDefault();
      mag.goTo(0);
    }
    if (e.key === 'End') {
      e.preventDefault();
      mag.goTo(mag.totalPages - 1);
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<nav class="magazine-nav" aria-label="Page navigation">
  <!-- Large click zones -->
  <button
    class="nav-zone nav-prev"
    onclick={() => mag.prev()}
    disabled={mag.isFirst || mag.isTransitioning}
    aria-label="Page precedente"
  >
    <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>

  <button
    class="nav-zone nav-next"
    onclick={() => mag.next()}
    disabled={mag.isLast || mag.isTransitioning}
    aria-label="Page suivante"
  >
    <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>

  <!-- Page counter — top right, mix-blend for visibility -->
  <div class="page-counter">
    <span class="current">{String(mag.currentIndex + 1).padStart(2, '0')}</span>
    <span class="separator">—</span>
    <span class="total">{String(mag.totalPages).padStart(2, '0')}</span>
  </div>

  <!-- Progress bar — bottom -->
  <div class="progress-bar">
    <div class="progress-fill" style="width: {mag.progress * 100}%"></div>
  </div>
</nav>

<style>
  .magazine-nav {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 100;
    mix-blend-mode: exclusion;
  }

  /* Large invisible click zones — 10% width, full height */
  .nav-zone {
    pointer-events: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 10%;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    color: #fff;
    transition: background 0.3s;
    cursor: pointer;
    padding: 0;
  }

  .nav-zone:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .nav-zone:active {
    background: rgba(255, 255, 255, 0.06);
  }

  .nav-zone:disabled {
    pointer-events: none;
  }

  .nav-prev {
    left: 0;
    justify-content: flex-start;
    padding-left: 2vw;
  }

  .nav-next {
    right: 0;
    justify-content: flex-end;
    padding-right: 2vw;
  }

  .nav-icon {
    opacity: 0;
    transition: opacity 0.3s;
  }

  .nav-zone:hover .nav-icon {
    opacity: 0.5;
  }

  /* Page counter — Musab-style minimal */
  .page-counter {
    pointer-events: none;
    position: absolute;
    top: 4vh;
    right: 7vw;
    display: flex;
    align-items: center;
    gap: 0.8vh;
    font-family: 'Fira Code', monospace;
    font-size: 1.3vh;
    letter-spacing: 0.2vh;
    color: #fff;
    opacity: 0.5;
  }

  .separator {
    opacity: 0.4;
  }

  .total {
    opacity: 0.4;
  }

  /* Progress bar */
  .progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.06);
  }

  .progress-fill {
    height: 100%;
    background: #fff;
    opacity: 0.4;
    transition: width 0.7s cubic-bezier(0.25, 1, 0.5, 1);
  }
</style>
