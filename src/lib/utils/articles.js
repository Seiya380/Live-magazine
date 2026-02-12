import { calculateReadingTime } from './reading-time.js';

/**
 * Load all articles from markdown files.
 * @returns {Array} Sorted articles with metadata
 */
export function getArticles() {
	const modules = import.meta.glob('/src/lib/content/articles/*.md', { eager: true });

	const articles = Object.entries(modules).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.md', '');
		const metadata = module.metadata || {};
		const readingTime = calculateReadingTime(module.default?.render ? '' : '');

		return {
			slug,
			...metadata,
			readingTime,
			component: module.default
		};
	});

	return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single article by slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getArticleBySlug(slug) {
	return getArticles().find((a) => a.slug === slug);
}

/**
 * Get articles filtered by chapter slug.
 * @param {string} chapter
 * @returns {Array}
 */
export function getArticlesByChapter(chapter) {
	return getArticles().filter((a) => a.chapter === chapter);
}

/**
 * Get all unique chapters with their article counts.
 * @returns {Array}
 */
export function getChapters() {
	const articles = getArticles();
	const chapterMap = new Map();

	for (const article of articles) {
		if (!article.chapter) continue;
		if (!chapterMap.has(article.chapter)) {
			chapterMap.set(article.chapter, {
				slug: article.chapter,
				title: formatChapterTitle(article.chapter),
				description: article.chapterDescription || '',
				articles: []
			});
		}
		chapterMap.get(article.chapter).articles.push(article);
	}

	return Array.from(chapterMap.values());
}

/**
 * Format a chapter slug into a display title.
 * @param {string} slug
 * @returns {string}
 */
function formatChapterTitle(slug) {
	const titles = {
		enfance: 'Enfance',
		adolescence: 'Adolescence',
		'nouveau-depart': 'Nouveau Départ',
		voyages: 'Voyages',
		introspection: 'Introspection'
	};
	return titles[slug] || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}
