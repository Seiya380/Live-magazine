<script>
	let { chapter } = $props();
</script>

<a
	href="/chapitres/{chapter.slug}"
	class="group block border border-border bg-bg-alt/50 p-8 transition-all duration-300 hover:border-accent/30 hover:bg-bg-alt sm:p-10"
>
	<h3 class="font-serif text-2xl font-bold text-text transition-colors duration-300 group-hover:text-accent">
		{chapter.title}
	</h3>

	{#if chapter.description}
		<p class="mt-3 text-sm text-muted leading-relaxed">{chapter.description}</p>
	{/if}

	<p class="mt-6 text-[11px] uppercase tracking-[0.25em] text-muted/70">
		{chapter.articles.length} article{chapter.articles.length > 1 ? 's' : ''}
	</p>
</a>
