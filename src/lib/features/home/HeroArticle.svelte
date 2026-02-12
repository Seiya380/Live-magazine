<script>
	let { article } = $props();
</script>

<section class="relative h-screen min-h-screen w-full overflow-hidden bg-bg">
	<!-- Background Image with Overlay -->
	<div class="absolute inset-0 z-0">
		{#if article.image}
			<img
				src={article.image}
				alt={article.title}
				class="h-full w-full object-cover transition-transform duration-[20s] hover:scale-105"
			/>
		{/if}
		<div class="absolute inset-0 bg-black/20"></div>
		<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
	</div>

	<!-- Content Container -->
	<div class="relative z-10 mx-auto flex h-full w-full max-w-[95rem] flex-col justify-end px-6 pb-8 sm:px-12 sm:pb-16">
		
		<!-- Main Title (Massive Brand Name) -->
		<h1 class="font-serif text-[18vw] leading-[0.8] tracking-tighter text-white mix-blend-overlay select-none pointer-events-none">
			HORS-CADRE
		</h1>

		<!-- Layout: Bottom Info -->
		<div class="mt-4 flex w-full flex-col gap-8 border-t border-white/20 pt-6 sm:flex-row sm:items-start sm:justify-between">
			
			<!-- Scroll Indicator (Left) -->
			<div class="hidden sm:flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-white/70">
				<span>Scroll</span>
				<div class="h-[1px] w-12 bg-white/50"></div>
			</div>

			<!-- Article Info (Right) -->
			<div class="flex max-w-xl flex-col gap-4 text-right sm:text-left">
				<div class="flex flex-col gap-2">
					{#if article.chapter}
						<span class="text-xs uppercase tracking-[0.2em] text-accent">
							{article.chapter}
						</span>
					{/if}
					<h2 class="font-serif text-3xl text-white italic sm:text-4xl">
						{article.title}
					</h2>
				</div>

				<p class="text-base leading-relaxed text-white/80 sm:text-lg">
					{article.excerpt}
				</p>
				
				<a
					href="/articles/{article.slug}"
					class="group mt-2 inline-flex items-center justify-end gap-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:text-accent sm:justify-start"
				>
					<span>Lire l'article</span>
					<span class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
				</a>
			</div>
		</div>
	</div>
</section>
