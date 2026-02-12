<script>
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import ArticleCard from '$lib/features/articles/ArticleCard.svelte';

	let { data } = $props();
</script>

<SEOHead title="Articles" description="Tous les articles du magazine HORS-CADRE" />

<Section>
	<Container>
		<h1 class="font-serif text-3xl font-bold text-text">Articles</h1>
		<p class="mt-4 text-lg text-muted">Tous les articles, du plus récent au plus ancien.</p>

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.articles as article}
				<ArticleCard {article} />
			{/each}
		</div>
	</Container>
</Section>
