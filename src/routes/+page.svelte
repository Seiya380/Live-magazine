<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import EditoSection from '$lib/features/home/EditoSection.svelte';
	import SummarySection from '$lib/features/home/SummarySection.svelte';
	import QuiSuisJe from '$lib/features/home/QuiSuisJe.svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// --- Transition 1: Intro -> Edito ---
		const introSection = document.querySelector('.hors-cadre-container');
		gsap.timeline({
			scrollTrigger: {
				trigger: introSection,
				start: 'top top',
				end: '+=200%',
				scrub: true,
				pin: true,
				onLeave: () => gsap.set(introSection, { zIndex: 0 }),
				onEnterBack: () => gsap.set(introSection, { zIndex: 1 })
			}
		}).to(introSection, {
			scale: 0.8,
			opacity: 0,
			ease: 'power2.inOut'
		});

		// --- Transition 2: Edito -> Summary ---
		const editoSection = document.querySelector('.scroll-container section:nth-of-type(2)');
		gsap.timeline({
			scrollTrigger: {
				trigger: editoSection,
				start: 'top top',
				end: '+=200%',
				scrub: true,
				pin: true,
				onLeave: () => gsap.set(editoSection, { zIndex: 1 }),
				onEnterBack: () => gsap.set(editoSection, { zIndex: 2 })
			}
		}).to(editoSection, {
			opacity: 0,
			ease: 'power2.inOut'
		});

		// --- Transition 3: Summary -> QuiSuisJe ---
		const summarySection = document.querySelector('.scroll-container section:nth-of-type(3)');
		gsap.timeline({
			scrollTrigger: {
				trigger: summarySection,
				start: 'top top',
				end: '+=200%',
				scrub: true,
				pin: true,
				onLeave: () => gsap.set(summarySection, { zIndex: 2 }),
				onEnterBack: () => gsap.set(summarySection, { zIndex: 3 })
			}
		}).to(summarySection, {
			opacity: 0,
			ease: 'power2.inOut'
		});
	});
</script>

<SEOHead
	title="HORS-CADRE"
	description="Magazine autobiographique — Les hommes s'offrent des fleurs qu'ils ne peuvent cultiver eux-mêmes"
/>

<div class="scroll-container">
	<section class="hors-cadre-container">
		<div class="background-animation">
			<!-- Background animation assets will go here -->
		</div>

		<div class="main-title-group">
			<h1 class="title">Hors-Cadre</h1>
			<h2 class="subtitle">Edition I</h2>
		</div>

		<div class="author-group">
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

	<QuiSuisJe />
</div>

<style>
	.scroll-container > :global(section) {
		position: sticky;
		top: 0;
		width: 100%;
		min-height: 100vh;
	}
	.scroll-container > :global(section:nth-of-type(1)) {
		z-index: 1;
	}
	.scroll-container > :global(section:nth-of-type(2)) {
		z-index: 2;
	}
	.scroll-container > :global(section:nth-of-type(3)) {
		z-index: 3;
	}
	.scroll-container > :global(section:nth-of-type(4)) {
		z-index: 4;
	}

	.hors-cadre-container {
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
