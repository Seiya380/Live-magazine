import { getArticles, getChapters } from '$lib/utils/articles.js';

export const load = () => {
	const articles = getArticles();
	const chapters = getChapters();
	const featured = articles.find((a) => a.featured) || articles[0];
	const recent = articles.filter((a) => a.slug !== featured?.slug).slice(0, 3);

	return { featured, recent, chapters };
};
