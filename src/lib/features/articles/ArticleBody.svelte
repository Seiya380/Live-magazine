<script>
	let { children } = $props();
</script>

<div class="
	prose prose-lg prose-invert mx-auto max-w-prose px-6
	prose-headings:font-serif prose-headings:text-text
	prose-p:text-text prose-p:leading-relaxed
	prose-a:text-accent prose-a:no-underline hover:prose-a:underline
	prose-blockquote:border-accent prose-blockquote:font-accent prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:text-muted
	prose-img:rounded-md prose-img:w-full
	prose-strong:text-text
	prose-hr:border-border
">
	{@render children()}
</div>
