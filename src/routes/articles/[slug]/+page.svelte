<script>
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import ArticleHeader from '$lib/features/articles/ArticleHeader.svelte';
	import ArticleBody from '$lib/features/articles/ArticleBody.svelte';
	import ArticleNav from '$lib/features/articles/ArticleNav.svelte';

	let { data } = $props();
</script>

<SEOHead
	title={data.article.title}
	description={data.article.excerpt}
	image={data.article.image}
/>

<article>
	<ArticleHeader
		title={data.article.title}
		date={data.article.date}
		chapter={data.article.chapter}
		readingTime={data.article.readingTime || 3}
		image={data.article.image}
	/>

	<ArticleBody>
		{@const Component = data.article.component}
		<Component />
	</ArticleBody>
</article>

<ArticleNav previous={data.previous} next={data.next} />
