<script>
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import ChapterCard from '$lib/features/chapters/ChapterCard.svelte';

	let { data } = $props();
</script>

<SEOHead title="Chapitres" description="Parcourez les chapitres du magazine HORS-CADRE" />

<Section>
	<Container>
		<h1 class="font-serif text-3xl font-bold text-text">Chapitres</h1>
		<p class="mt-4 text-lg text-muted">Les grandes thématiques qui structurent ce récit.</p>

		<div class="mt-12 grid gap-6 sm:grid-cols-2">
			{#each data.chapters as chapter}
				<ChapterCard {chapter} />
			{/each}
		</div>
	</Container>
</Section>
