<script>
	let { article } = $props();

	let formattedDate = $derived(new Date(article.date).toLocaleDateString('fr-FR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}));
</script>

<article class="group">
	<a href="/articles/{article.slug}" class="block">
		<!-- Image with HORS-CADRE watermark -->
		<div class="relative overflow-hidden rounded-sm bg-bg-alt">
			{#if article.image}
				<img
					src={article.image}
					alt={article.title}
					loading="lazy"
					class="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>
			{:else}
				<div class="relative aspect-[16/10] w-full bg-bg-alt flex items-center justify-center">
					<span class="font-serif font-bold text-text/[0.06] text-3xl tracking-[0.15em] select-none">HORS-CADRE</span>
				</div>
			{/if}
		</div>

		<div class="mt-5">
			{#if article.chapter}
				<span class="text-[11px] uppercase tracking-[0.25em] text-accent font-medium">{article.chapter}</span>
			{/if}

			<h3 class="mt-2 font-serif text-xl font-bold text-text transition-colors duration-300 group-hover:text-accent lg:text-2xl">
				{article.title}
			</h3>

			{#if article.excerpt}
				<p class="mt-3 line-clamp-2 text-sm text-muted leading-relaxed">{article.excerpt}</p>
			{/if}

			<time class="mt-4 block text-xs text-muted/70" datetime={article.date}>{formattedDate}</time>
		</div>
	</a>
</article>
