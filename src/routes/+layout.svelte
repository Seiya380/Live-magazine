<script>
	import '@fontsource/playfair-display/700.css';
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/caveat/400.css';
	import '../app.css';

	import { page } from '$app/state';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();

	let isHome = $derived(page.url.pathname === '/');
</script>

<!-- Skip to content -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-accent focus:text-bg focus:px-4 focus:py-2 focus:rounded-sm">
	Aller au contenu
</a>

<Navbar />
<main id="main-content" class="min-h-screen {isHome ? '' : 'pt-20'}">
	{@render children()}
</main>
<Footer />
