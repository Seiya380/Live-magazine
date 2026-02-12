<script>
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import Section from '$lib/components/layout/Section.svelte';
</script>

<SEOHead title="À propos" description="En savoir plus sur l'auteur de HORS-CADRE" />

<Section>
	<Container>
		<div class="mx-auto max-w-prose">
			<h1 class="font-serif text-3xl font-bold text-text">À propos</h1>

			<div class="mt-8 space-y-6 text-base leading-relaxed text-text">
				<p>
					<span class="font-accent text-2xl text-accent">HORS-CADRE</span> est un magazine autobiographique.
					Un espace intime où les souvenirs prennent la forme d'articles, où la mémoire se fait récit.
				</p>

				<p>
					Ce projet est né du besoin de fixer des instants — non pas tels qu'ils ont été,
					mais tels qu'ils résonnent aujourd'hui. Chaque article est une tentative de
					capturer ce qui, sans l'écriture, finirait par s'effacer.
				</p>

				<p>
					Les chapitres suivent non pas une chronologie stricte, mais une logique
					émotionnelle. L'enfance, les départs, les retours — autant de thèmes
					qui dessinent, article après article, le portrait d'une vie en mouvement.
				</p>

				<blockquote class="border-l-2 border-accent pl-6 font-accent text-xl italic text-muted">
					Les hommes s'offrent des fleurs qu'ils ne peuvent cultiver eux-mêmes.
				</blockquote>
			</div>
		</div>
	</Container>
</Section>
