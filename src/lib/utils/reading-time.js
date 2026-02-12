const WORDS_PER_MINUTE = 200;

/**
 * Calculate reading time from text content.
 * @param {string} content - Raw text or markdown content
 * @returns {number} Minutes to read
 */
export function calculateReadingTime(content) {
	if (!content) return 1;
	const text = content.replace(/<[^>]*>/g, '').replace(/[#*_~`>-]/g, '');
	const words = text.trim().split(/\s+/).length;
	return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
