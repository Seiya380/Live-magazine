<script>
	let { title, date, chapter, readingTime, image } = $props();

	let formattedDate = $derived(new Date(date).toLocaleDateString('fr-FR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	}));
</script>

<header class="pt-8 sm:pt-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-10">
		{#if chapter}
			<a href="/chapitres/{chapter}" class="text-[11px] uppercase tracking-[0.25em] text-accent font-medium transition-colors duration-300 hover:text-text">
				{chapter}
			</a>
		{/if}

		<h1 class="mt-4 font-serif text-3xl font-bold text-text sm:text-4xl lg:text-[3.5rem] lg:leading-[1.05]">
			{title}
		</h1>

		<div class="mt-4 flex items-center gap-4 text-sm text-muted/70">
			<time datetime={date}>{formattedDate}</time>
			<span aria-hidden="true" class="text-border">&middot;</span>
			<span>{readingTime} min de lecture</span>
		</div>
	</div>

	<!-- Full-bleed image with HORS-CADRE watermark -->
	<div class="relative mt-10 overflow-hidden">
		{#if image}
			<img
				src={image}
				alt={title}
				class="h-[50vh] w-full object-cover sm:h-[60vh]"
			/>
			<!-- Watermark overlay -->
			<div class="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
				<span
					class="font-serif font-bold text-text/[0.06] whitespace-nowrap tracking-[0.1em]"
					style="font-size: clamp(3rem, 10vw, 12rem);"
				>
					HORS-CADRE
				</span>
			</div>
		{:else}
			<div class="relative h-[50vh] w-full bg-bg-alt sm:h-[60vh] flex items-center justify-center">
				<span
					class="font-serif font-bold text-text/[0.06] whitespace-nowrap tracking-[0.1em]"
					style="font-size: clamp(3rem, 10vw, 12rem);"
				>
					HORS-CADRE
				</span>
			</div>
		{/if}
	</div>
</header>
