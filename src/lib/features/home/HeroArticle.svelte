<script>
	let { article } = $props();
</script>

<section class="relative flex min-h-[70vh] items-end overflow-hidden">
	<!-- Background image -->
	<div class="absolute inset-0">
		{#if article.image}
			<img
				src={article.image}
				alt={article.title}
				class="h-full w-full object-cover"
			/>
		{/if}
		<div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent"></div>
	</div>

	<!-- Content -->
	<div class="relative mx-auto max-w-6xl px-6 pb-16 pt-32 sm:pb-24">
		{#if article.chapter}
			<span class="mb-4 inline-block text-sm uppercase tracking-widest text-accent">
				{article.chapter}
			</span>
		{/if}

		<h1 class="font-serif text-3xl font-bold text-text sm:text-4xl">
			{article.title}
		</h1>

		{#if article.excerpt}
			<p class="mt-4 max-w-2xl text-lg text-muted">
				{article.excerpt}
			</p>
		{/if}

		<a
			href="/articles/{article.slug}"
			class="mt-8 inline-flex items-center gap-2 text-accent transition-colors duration-300 hover:text-text"
		>
			<span class="text-sm uppercase tracking-widest">Lire l'article</span>
			<span aria-hidden="true">&rarr;</span>
		</a>
	</div>
</section>
