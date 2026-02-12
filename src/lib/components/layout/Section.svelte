<script>
	let { children, class: className = '', id = undefined } = $props();
</script>

<section {id} class="py-16 sm:py-24 {className}">
	{@render children()}
</section>
