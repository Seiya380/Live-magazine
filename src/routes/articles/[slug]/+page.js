import { getArticles } from '$lib/utils/articles.js';
import { calculateReadingTime } from '$lib/utils/reading-time.js';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const articles = getArticles();
	const index = articles.findIndex((a) => a.slug === params.slug);

	if (index === -1) {
		error(404, 'Article non trouvé');
	}

	const article = articles[index];
	const previous = index < articles.length - 1 ? articles[index + 1] : null;
	const next = index > 0 ? articles[index - 1] : null;

	return { article, previous, next };
};
