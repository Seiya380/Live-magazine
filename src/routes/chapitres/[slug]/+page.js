import { getChapters, getArticlesByChapter } from '$lib/utils/articles.js';
import { error } from '@sveltejs/kit';

export const load = ({ params }) => {
	const chapters = getChapters();
	const chapter = chapters.find((c) => c.slug === params.slug);

	if (!chapter) {
		error(404, 'Chapitre non trouvé');
	}

	const articles = getArticlesByChapter(params.slug);
	return { chapter, articles };
};
