<script>
	// No script needed for a simple, fluid loop.
</script>

<section class="edito-section">
	<div class="edito-grid">
		<div class="text-block-1">
			<h2 class="title">EDITO</h2>
			<p>
				Ce magazine a pour but de présenter une vision personnelle du monde, à travers mes
				expériences, mes doutes, mes passions sous formes de <strong>sketchbook art</strong>.
			</p>
		</div>

		<div class="video-container">
			<video
				src="/Image_Animated_to_Cascade.mp4"
				autoplay
				loop
				muted
				playsinline
				preload="auto"
				class="video-element"
			></video>
		</div>

		<div class="text-block-2">
			<p>
				Il rassemble des <strong>fragments</strong> de moi-même: ce que j'aime, ce que je crains, ce que
				j'espère devenir. Chaque page est une fenêtre ouverte sur mes réflexions, mes
				contradictions, mes élans de sincérité.
			</p>
		</div>

		<div class="text-block-3">
			<p>
				<strong>Hors-Cadre</strong> n'est pas un simple projet, c'est une exploration. Celle d'un
				esprit curieux, parfois perdu, mais toujours en quête de sens.
			</p>
		</div>
	</div>
</section>

<style>
	.edito-section {
		position: relative;
		min-height: 100vh;
		background: radial-gradient(ellipse at center, #FFFFFF 50%, #f7f7f7 100%);
		color: #1a1a1a;
		padding: 4rem 0;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden; /* Hide anything that might bleed out */
	}

	.edito-grid {
		height: 100vh;
		width: 100%;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(12, 1fr);
		align-items: center;
		max-width: 90rem;
		margin: 0 auto;
		gap: 1rem;
		padding: 2rem;
		box-sizing: border-box;
	}

	.video-container {
		grid-column: 1 / -1;
		grid-row: 1 / -1;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-50px);
	}

	.video-element {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
	}

	.title {
		font-family: 'Press Start 2P', cursive;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	p {
		font-family: var(--font-sans);
		font-size: 1.125rem;
		line-height: 1.7;
		max-width: 25ch;
	}

	.text-block-1,
	.text-block-2,
	.text-block-3 {
		background-color: rgba(255, 255, 255, 0.8);
		padding: 1.5rem;
		border-radius: 8px;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		z-index: 2;
	}

	.text-block-1 {
		grid-column: 2 / span 3;
		grid-row: 3 / span 4;
	}

	.text-block-2 {
		grid-column: 9 / span 3;
		grid-row: 2 / span 5;
	}

	.text-block-3 {
		grid-column: 9 / span 3;
		grid-row: 8 / span 4;
	}
</style>
