<script>
	import { page } from '$app/state';

	let mobileOpen = $state(false);

	const links = [
		{ href: '/', label: 'Accueil' },
		{ href: '/articles', label: 'Articles' },
		{ href: '/chapitres', label: 'Chapitres' },
		{ href: '/a-propos', label: 'À propos' }
	];

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<nav class="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="/" class="font-serif text-xl font-bold tracking-wider text-text">HORS-CADRE</a>

		<!-- Desktop nav -->
		<ul class="hidden gap-8 sm:flex">
			{#each links as { href, label }}
				<li>
					<a
						{href}
						class="text-sm uppercase tracking-widest transition-colors duration-300 {page.url.pathname === href ? 'text-accent' : 'text-muted hover:text-accent'}"
						>{label}</a
					>
				</li>
			{/each}
		</ul>

		<!-- Mobile hamburger -->
		<button
			class="sm:hidden text-text"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
			aria-expanded={mobileOpen}
		>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				{#if mobileOpen}
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div class="border-t border-border bg-bg sm:hidden">
			<ul class="flex flex-col gap-4 px-6 py-6">
				{#each links as { href, label }}
					<li>
						<a
							{href}
							onclick={closeMobile}
							class="text-sm uppercase tracking-widest transition-colors duration-300 {page.url.pathname === href ? 'text-accent' : 'text-muted hover:text-accent'}"
							>{label}</a
						>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</nav>
