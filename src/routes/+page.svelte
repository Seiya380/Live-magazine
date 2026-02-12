<script>
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import HeroArticle from '$lib/features/home/HeroArticle.svelte';
	import ArticleCard from '$lib/features/articles/ArticleCard.svelte';
	import ChapterCard from '$lib/features/chapters/ChapterCard.svelte';

	let { data } = $props();
</script>

<SEOHead
	title="HORS-CADRE"
	description="Magazine autobiographique — Les hommes s'offrent des fleurs qu'ils ne peuvent cultiver eux-mêmes"
/>

{#if data.featured}
	<HeroArticle article={data.featured} />
{/if}

{#if data.recent.length > 0}
	<section class="py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-10">
			<h2 class="font-serif text-3xl font-bold text-text sm:text-4xl">Articles récents</h2>

			<div class="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-12">
				{#each data.recent as article}
					<ArticleCard {article} />
				{/each}
			</div>
		</div>
	</section>
{/if}

{#if data.chapters.length > 0}
	<section class="relative py-24 sm:py-32">
		<!-- Subtle background shift -->
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-bg-alt/50 to-bg-alt/80"></div>

		<div class="relative mx-auto max-w-7xl px-6 lg:px-10">
			<h2 class="font-serif text-3xl font-bold text-text sm:text-4xl">Chapitres</h2>

			<div class="mt-12 grid gap-6 sm:grid-cols-2">
				{#each data.chapters as chapter}
					<ChapterCard {chapter} />
				{/each}
			</div>
		</div>
	</section>
{/if}
