<script>
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
	import ArticleCard from '$lib/features/articles/ArticleCard.svelte';

	let { data } = $props();
</script>

<SEOHead title={data.chapter.title} description={data.chapter.description} />

<Section>
	<Container>
		<h1 class="font-serif text-3xl font-bold text-text">{data.chapter.title}</h1>
		{#if data.chapter.description}
			<p class="mt-4 text-lg text-muted">{data.chapter.description}</p>
		{/if}

		<div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.articles as article}
				<ArticleCard {article} />
			{/each}
		</div>
	</Container>
</Section>
