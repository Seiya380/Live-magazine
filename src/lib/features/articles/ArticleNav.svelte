<script>
	let { previous = null, next = null } = $props();
</script>

<nav aria-label="Navigation entre articles" class="mx-auto max-w-7xl border-t border-border px-6 py-16 lg:px-10">
	<div class="flex items-stretch justify-between gap-12">
		{#if previous}
			<a href="/articles/{previous.slug}" class="group flex-1">
				<span class="text-[11px] uppercase tracking-[0.25em] text-muted/50">&larr; Précédent</span>
				<p class="mt-3 font-serif text-lg text-text transition-colors duration-300 group-hover:text-accent lg:text-xl">
					{previous.title}
				</p>
			</a>
		{:else}
			<div class="flex-1"></div>
		{/if}

		{#if next}
			<a href="/articles/{next.slug}" class="group flex-1 text-right">
				<span class="text-[11px] uppercase tracking-[0.25em] text-muted/50">Suivant &rarr;</span>
				<p class="mt-3 font-serif text-lg text-text transition-colors duration-300 group-hover:text-accent lg:text-xl">
					{next.title}
				</p>
			</a>
		{/if}
	</div>
</nav>
