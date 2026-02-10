<script>
  import { onMount } from 'svelte';
  import editoImg from '../../assets/Mag/Edito_upscayl_2x_remacri-4x.png';

  let visible = $state(false);
  onMount(() => {
    setTimeout(() => (visible = true), 100);
  });
</script>

<article class="intro-page" class:visible>
  <!-- Full-bleed background image -->
  <div class="img-wrapper">
    <img src={editoImg} alt="Méditation — Edito Hors Cadre" class="bg-img" />
  </div>

  <!-- Dark gradient overlay -->
  <div class="overlay"></div>

  <!-- Text content — left side, Musab-style mask reveals -->
  <div class="text-block">
    <!-- Large title with mask -->
    <div class="mask">
      <h2 class="heading">EDITO</h2>
    </div>

    <!-- Decorative line -->
    <div class="deco-line"></div>

    <!-- Paragraphs with mask reveals -->
    <div class="mask">
      <p class="body-text t1">
        Ce magazine a pour but de présenter une vision personnelle du monde,
        à travers mes expériences, mes doutes, mes passions sous formes de
        sketchbook art.
      </p>
    </div>

    <div class="mask">
      <p class="body-text t2">
        Il rassemble des fragments de moi-même&nbsp;: ce que j'aime, ce que
        je crains, ce que j'espère devenir. Chaque page est une fenêtre
        ouverte sur mes réflexions, mes contradictions, mes élans de
        sincérité.
      </p>
    </div>

    <div class="deco-line short"></div>

    <div class="mask">
      <p class="body-text t3 closing">
        Hors-Cadre n'est pas un simple projet, c'est une exploration. Celle
        d'un esprit curieux, parfois perdu, mais toujours en quête de sens.
      </p>
    </div>
  </div>

  <!-- Vertical title -->
  <div class="title-stripe">
    <span class="title-text">Hors Cadre</span>
    <span class="title-sub">序章</span>
  </div>
</article>

<style>
  .intro-page {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    background: #1a1a1c;
  }

  /* Image — full bleed with parallax-style reveal */
  .img-wrapper {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 1;
    border-radius: 0;
  }

  .bg-img {
    width: 110%;
    height: 110%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0;
    transition: opacity 1.2s ease 0.3s, transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;
    animation: breathe 8s ease-in-out infinite;
    animation-play-state: paused;
  }

  .visible .bg-img {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
    animation-play-state: running;
  }

  /* Gradient overlay — dark on the left */
  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(26, 26, 28, 0.92) 0%,
      rgba(26, 26, 28, 0.7) 40%,
      rgba(26, 26, 28, 0.15) 70%,
      transparent 100%
    );
    z-index: 2;
    pointer-events: none;
  }

  /* Text block — left aligned, generous spacing */
  .text-block {
    position: absolute;
    left: 7vw;
    top: 50%;
    transform: translateY(-50%);
    max-width: 420px;
    z-index: 3;
    color: #fff;
  }

  /* Mask system */
  .mask {
    overflow: hidden;
  }

  .heading {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(1.5rem, 5vw, 5vh);
    font-weight: 400;
    letter-spacing: 0.15em;
    transform: translateY(130%) rotate(7deg);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;
    display: block;
    text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  }

  .visible .heading {
    transform: translateY(0) rotate(0deg);
  }

  /* Decorative lines */
  .deco-line {
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    margin: 3vh 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) 0.8s;
  }

  .deco-line.short {
    width: 10vw;
    transition-delay: 1.6s;
  }

  .visible .deco-line {
    transform: scaleX(1);
  }

  /* Body text with mask reveals */
  .body-text {
    font-family: 'Courier Prime', monospace;
    font-size: clamp(0.8rem, 1.5vh, 1rem);
    line-height: 1.8;
    letter-spacing: 0.03em;
    margin-bottom: 2vh;
    opacity: 0.7;
    transform: translateY(130%);
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    display: block;
  }

  .body-text.t1 { transition-delay: 1s; }
  .body-text.t2 { transition-delay: 1.15s; }
  .body-text.t3 { transition-delay: 1.8s; }

  .body-text.closing {
    font-style: italic;
    opacity: 0.85;
  }

  .visible .body-text {
    transform: translateY(0);
  }

  /* Vertical title stripe */
  .title-stripe {
    position: absolute;
    right: 4vw;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    opacity: 0;
    transition: opacity 1.5s ease 1.2s;
    mix-blend-mode: exclusion;
  }

  .visible .title-stripe {
    opacity: 1;
  }

  .title-text {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(0.45rem, 1vw, 0.7rem);
    color: #fff;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    opacity: 0.4;
  }

  .title-sub {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.2);
    writing-mode: vertical-rl;
  }

  /* Breathing loop */
  @keyframes breathe {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.02); }
  }

  @media (max-width: 768px) {
    .overlay {
      background: linear-gradient(
        0deg,
        rgba(26, 26, 28, 0.95) 0%,
        rgba(26, 26, 28, 0.6) 50%,
        rgba(26, 26, 28, 0.2) 100%
      );
    }

    .text-block {
      left: 5vw;
      right: 5vw;
      top: auto;
      bottom: 6vh;
      transform: none;
      max-width: none;
    }

    .visible .bg-img {
      opacity: 0.5;
    }

    .title-stripe {
      right: 3vw;
      top: 4vh;
      transform: none;
    }
  }
</style>
