import { getChapters } from '$lib/utils/articles.js';

export const load = () => {
	const chapters = getChapters();
	return { chapters };
};
