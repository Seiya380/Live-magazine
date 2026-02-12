<script>
	import { MetaTags } from 'svelte-meta-tags';

	let { title = 'HORS-CADRE', description = 'Magazine autobiographique', url = '', image = '' } = $props();

	let fullTitle = $derived(title === 'HORS-CADRE' ? title : `${title} — HORS-CADRE`);
</script>

<MetaTags
	title={fullTitle}
	{description}
	canonical={url}
	openGraph={{
		type: 'website',
		title: fullTitle,
		description,
		url,
		images: image ? [{ url: image }] : [],
		siteName: 'HORS-CADRE'
	}}
/>
