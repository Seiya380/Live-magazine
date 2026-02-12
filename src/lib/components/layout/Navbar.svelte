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

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 mix-blend-difference text-white">
	<div class="mx-auto flex w-full items-center justify-between px-6 py-6 sm:px-12">
		<!-- Logo -->
		<a href="/" class="z-50 font-serif text-xl font-bold tracking-widest uppercase relative">
			Hors-Cadre
		</a>

		<!-- Right Actions -->
		<div class="flex items-center gap-8 z-50">
			<!-- Language (Mock) -->
			<div class="hidden sm:flex gap-1 text-xs font-medium tracking-widest">
				<span class="opacity-100">FR</span>
				<span class="opacity-50">/</span>
				<span class="opacity-50 hover:opacity-100 cursor-pointer transition-opacity">EN</span>
			</div>

			<!-- CTA Button -->
			<a href="/a-propos" class="hidden sm:inline-block px-6 py-2 border border-white/30 rounded-full text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300">
				S'abonner
			</a>

			<!-- Hamburger Toggle -->
			<button
				class="group flex flex-col items-end gap-[5px] p-2"
				onclick={() => (mobileOpen = !mobileOpen)}
				aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
				aria-expanded={mobileOpen}
			>
				<span class="h-[1px] w-8 bg-current transition-all duration-300 {mobileOpen ? '-rotate-45 translate-y-[6px]' : ''}"></span>
				<span class="h-[1px] w-8 bg-current transition-all duration-300 {mobileOpen ? 'opacity-0' : ''}"></span>
				<span class="h-[1px] w-8 bg-current transition-all duration-300 {mobileOpen ? 'rotate-45 -translate-y-[6px]' : ''}"></span>
			</button>
		</div>
	</div>

	<!-- Fullscreen Menu Overlay -->
	<div class="fixed inset-0 bg-[#1a1a1a] z-40 flex flex-col items-center justify-center transition-all duration-500 {mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}">
		<ul class="flex flex-col items-center gap-8 text-center">
			{#each links as { href, label }}
				<li>
					<a
						{href}
						onclick={closeMobile}
						class="font-serif text-4xl sm:text-6xl text-[#f5f5f0] hover:text-accent transition-colors duration-300"
						>{label}</a
					>
				</li>
			{/each}
		</ul>
		
		<div class="absolute bottom-12 flex gap-8 text-[#8a8a8a] text-sm tracking-widest">
			<a href="/" class="hover:text-white transition-colors">Instagram</a>
			<a href="/" class="hover:text-white transition-colors">Twitter</a>
			<a href="/" class="hover:text-white transition-colors">LinkedIn</a>
		</div>
	</div>
</nav>
