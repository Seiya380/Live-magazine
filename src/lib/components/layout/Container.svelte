<script>
	let { children, class: className = '' } = $props();
</script>

<div class="mx-auto max-w-6xl px-6 {className}">
	{@render children()}
</div>
