<script>
	export let addClass = '';
</script>

<!-- button rounded harusnya 10px / 0.625rem -->
<button class="px-6 py-2 rounded-lg {addClass}" on:click>
	<slot />
</button>
