<script>
	import { fade, fly } from 'svelte/transition';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import EditoSection from '$lib/features/home/EditoSection.svelte';
	import SummarySection from '$lib/features/home/SummarySection.svelte';
</script>

<SEOHead
	title="HORS-CADRE"
	description="Magazine autobiographique — Les hommes s'offrent des fleurs qu'ils ne peuvent cultiver eux-mêmes"
/>

<section class="hors-cadre-container">
	<div class="background-animation">
		<!-- Background animation assets will go here -->
	</div>

	<div class="main-title-group">
		<h1 class="title" in:fly={{ y: -20, duration: 1500, delay: 300 }}>Hors-Cadre</h1>
		<h2 class="subtitle" in:fade={{ duration: 1500, delay: 800 }}>Edition I</h2>
	</div>

	<div class="author-group" in:fade={{ duration: 1500, delay: 1200 }}>
		<p class="author-info">
			Autoportrait en 15
			<br />
			nuances
		</p>
		<p class="author-name">SUAREZ JORIS</p>
	</div>
</section>

<EditoSection />

<SummarySection />

<style>
	.hors-cadre-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: #3d235a;
		color: #f0e8d9;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		box-sizing: border-box;
		overflow: hidden;
		font-family: 'Press Start 2P', cursive;
	}

	.background-animation {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse at center, rgba(74, 42, 111, 0.5) 0%, rgba(61, 35, 90, 0) 70%);
		z-index: 1;
	}

	.main-title-group {
		text-align: center;
		position: relative;
		z-index: 2;
	}

	.author-group {
		text-align: center;
		position: absolute;
		bottom: 2rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 2;
	}

	.title {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: bold;
		margin-bottom: 0.5rem;
		text-shadow: 0 0 10px rgba(240, 232, 217, 0.3);
	}

	.subtitle {
		font-size: clamp(1.5rem, 3vw, 2rem);
		margin-bottom: 5rem;
	}

	.author-info {
		font-size: clamp(1rem, 2vw, 1.25rem);
		margin-bottom: 1rem;
	}

	.author-name {
		font-size: clamp(1rem, 2vw, 1.25rem);
	}
</style>
