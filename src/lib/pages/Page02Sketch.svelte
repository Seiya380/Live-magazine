<article class="sketch-page">
  <div class="content">
    <div class="frame">
      <div class="placeholder-art">
        <svg viewBox="0 0 400 300" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="1">
          <rect x="20" y="20" width="360" height="260" rx="4" />
          <line x1="50" y1="150" x2="350" y2="150" />
          <circle cx="200" cy="120" r="40" />
          <path d="M100 250 Q200 180 300 250" />
        </svg>
      </div>
    </div>
    <p class="caption">[ esquisse en attente ]</p>
  </div>
</article>

<style>
  .sketch-page {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1a1a2e;
    color: #c4b8a8;
    font-family: 'Courier New', monospace;
  }

  .content {
    text-align: center;
  }

  .frame {
    border: 1px solid rgba(255, 255, 255, 0.08);
    padding: 2rem;
    display: inline-block;
  }

  .placeholder-art svg {
    width: min(80vw, 400px);
    height: auto;
  }

  .caption {
    margin-top: 2rem;
    font-size: 0.85rem;
    letter-spacing: 0.2em;
    text-transform: lowercase;
    opacity: 0.4;
  }
</style>
