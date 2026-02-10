<script>
  import { onMount } from 'svelte';

  let visible = $state(false);
  onMount(() => {
    setTimeout(() => (visible = true), 200);
  });
</script>

<article class="cover" class:visible>
  <div class="content">
    <!-- Mask-wrapped title words -->
    <div class="title-line">
      <div class="mask"><span class="word w1">Hors</span></div>
    </div>
    <div class="title-line">
      <div class="mask"><span class="word w2">Cadre</span></div>
    </div>

    <!-- Decorative line -->
    <div class="deco-line"></div>

    <!-- Subtitle with mask -->
    <div class="mask sub-mask">
      <p class="subtitle">un magazine autobiographique</p>
    </div>
  </div>

  <!-- Scroll hint -->
  <div class="scroll-hint">
    <div class="scroll-line"></div>
  </div>
</article>

<style>
  .cover {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a1a1c;
    color: #fff;
    position: relative;
    padding: 0 7vw;
  }

  .content {
    display: flex;
    flex-direction: column;
  }

  /* Mask reveal system */
  .mask {
    overflow: hidden;
    display: inline-block;
  }

  .title-line {
    overflow: hidden;
  }

  .word {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(3rem, 12vw, 15vh);
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    line-height: 1.2;
    display: block;
    transform: translateY(130%) rotate(8deg);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }

  .w1 {
    transition-delay: 0.5s;
  }

  .w2 {
    transition-delay: 0.65s;
  }

  .visible .word {
    transform: translateY(0) rotate(0deg);
  }

  /* Decorative horizontal line */
  .deco-line {
    height: 1px;
    background: #fff;
    margin: 4vh 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.9s;
    width: 40%;
  }

  .visible .deco-line {
    transform: scaleX(1);
  }

  /* Subtitle */
  .sub-mask {
    overflow: hidden;
  }

  .subtitle {
    font-family: 'Fira Code', monospace;
    font-size: clamp(0.7rem, 2vh, 1.1rem);
    font-weight: 300;
    letter-spacing: 0.5vh;
    text-transform: uppercase;
    transform: translateY(130%) rotate(5deg);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.1s;
    display: block;
    opacity: 0.6;
  }

  .visible .subtitle {
    transform: translateY(0) rotate(0deg);
  }

  /* Scroll hint — animated line */
  .scroll-hint {
    position: absolute;
    bottom: 6vh;
    left: 50%;
    transform: translateX(-50%);
    height: 5vh;
    width: 1px;
    overflow: hidden;
    opacity: 0;
    transition: opacity 1.5s ease 2s;
  }

  .visible .scroll-hint {
    opacity: 0.4;
  }

  .scroll-line {
    width: 1px;
    height: 100%;
    background: #fff;
    animation: scrollDown 2s ease-in-out infinite 3s;
  }

  @keyframes scrollDown {
    0% { transform: translateY(-120%); }
    40% { transform: translateY(0%); }
    60% { transform: translateY(0%); }
    100% { transform: translateY(120%); }
  }

  @media (max-width: 768px) {
    .cover {
      padding: 0 5vw;
    }

    .word {
      font-size: clamp(2.5rem, 15vw, 6rem);
    }

    .deco-line {
      width: 60%;
    }
  }
</style>
