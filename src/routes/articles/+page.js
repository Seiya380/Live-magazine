import { getArticles } from '$lib/utils/articles.js';

export const load = () => {
	const articles = getArticles();
	return { articles };
};
