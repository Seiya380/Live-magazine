<script>
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
</script>

<SEOHead title="Mentions légales" description="Mentions légales du site HORS-CADRE" />

<Section>
	<Container>
		<div class="mx-auto max-w-prose">
			<h1 class="font-serif text-3xl font-bold text-text">Mentions légales</h1>

			<div class="mt-8 space-y-8 text-base leading-relaxed text-text">
				<div>
					<h2 class="font-serif text-xl font-bold text-text">Éditeur</h2>
					<p class="mt-2 text-muted">
						HORS-CADRE — Magazine autobiographique<br />
						Site personnel à caractère non commercial.
					</p>
				</div>

				<div>
					<h2 class="font-serif text-xl font-bold text-text">Hébergement</h2>
					<p class="mt-2 text-muted">
						Site statique hébergé sur Netlify.<br />
						Netlify, Inc. — San Francisco, CA, États-Unis.
					</p>
				</div>

				<div>
					<h2 class="font-serif text-xl font-bold text-text">Propriété intellectuelle</h2>
					<p class="mt-2 text-muted">
						L'ensemble du contenu (textes, images, design) est protégé par le droit d'auteur.
						Toute reproduction est interdite sans autorisation préalable.
					</p>
				</div>

				<div>
					<h2 class="font-serif text-xl font-bold text-text">Données personnelles</h2>
					<p class="mt-2 text-muted">
						Ce site ne collecte aucune donnée personnelle. Aucun cookie n'est déposé.
						Aucun outil de suivi ou d'analyse n'est utilisé.
					</p>
				</div>
			</div>
		</div>
	</Container>
</Section>
