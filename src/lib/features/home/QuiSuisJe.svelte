<section class="qui-suis-je-section">
  <div class="grid-container">
    <div class="title-container">
      <h1 class="name">JORIS</h1>
      <div class="character-placeholder"></div>
      <h1 class="name">SUAREZ</h1>
    </div>

    <div class="patchwork-container">
      <div class="patchwork-cell cell-1">Il est bien plus probable qu'un homme ordinaire qui fait ce qu'il aime réussisse, que celui qui s'efforce d'être doué pour ce qu'il n'aime pas</div>
      <div class="patchwork-cell cell-2">Patchwork</div>
      <div class="patchwork-cell cell-3">Une bonne grosse pizza, qui a failli remplacer n'importe quel humain</div>
      <div class="patchwork-cell cell-4">Dans un monde qui exige la performance d'une machine, je revendique le droit d'être humain</div>
      <div class="patchwork-cell cell-5">Je n'ai pas les réponses, je n'ai que des concepts et l'urgence de vivre. Dans ce fatras de concepts je ne suis qu'une seule forme, du moins je le crois, avant de prendre conscience de mes failles et de mes certitudes</div>
      <div class="patchwork-cell cell-6">Le jeu, c'est du travail très sérieux. Le jeu consiste à explorer, à faire semblant et à prendre des risques.</div>
    </div>
  </div>
</section>

<style>
  .qui-suis-je-section {
    min-height: 100vh;
    background-color: #3d235a;
    color: #f0e8d9;
    font-family: var(--font-sans);
    padding: 4rem;
    overflow: hidden;
  }

  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
    height: 100%;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .name {
    font-family: 'Press Start 2P', cursive;
    font-size: clamp(3rem, 7vw, 5rem);
    text-transform: uppercase;
    line-height: 1;
  }

  .character-placeholder {
    width: 100px;
    height: 150px;
    background-color: #f0e8d9; /* Placeholder color */
    margin: 1rem 0;
    /* We'll replace this with the actual pixel art later */
  }

  .patchwork-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    transform: rotate(-15deg);
  }

  .patchwork-cell {
    padding: 1.5rem;
    border: 2px solid #f0e8d9;
    font-size: 0.875rem;
    line-height: 1.5;
  }

  .cell-1 { grid-column: 1 / 3; background-color: #5a3d7d; }
  .cell-2 { grid-column: 3; grid-row: 1 / 3; text-align: center; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: bold; background-color: #e6a84c; color: #3d235a;}
  .cell-3 { grid-column: 1; grid-row: 2; background-color: #a85a4d; }
  .cell-4 { grid-column: 2; grid-row: 2; background-color: #4d8da8; }
  .cell-5 { grid-column: 1 / 4; grid-row: 3; background-color: #5da84d; }
  .cell-6 { grid-column: 1 / 3; grid-row: 1; /* This will overlap with cell-1, adjust if needed */ display: none; } /* Hidden for now to avoid overlap issues */

</style>
