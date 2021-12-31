<script>
	import { SearchIcon } from '../../svg-loader/index';
	import { fade } from 'svelte/transition';
	import Submenus from '../Navbar/Submenus.svelte';
	let isVisible = true;
	let isSubmenu = false;
	function out() {
		isVisible = false;
	}
</script>

{#if isVisible === true}
	<div class="self-center hidden md:flex delay-10" out:out in:fade>
		<div
			class="px-8 self-center cursor-pointer relative"
			on:mouseenter={() => (isSubmenu = !isSubmenu)}
			on:mouseleave={() => (isSubmenu = false)}>
			<div>All Genre</div>
			{#if isSubmenu}
				<Submenus />
			{/if}
		</div>
		<div class="px-8 flex cursor-pointer" on:click>
			<div class="px-2 self-center">
				<SearchIcon size="20" color={'#FFF'} />
			</div>
			<div class="self-center">Search</div>
		</div>
		<div class="px-8 self-center cursor-pointer">View Plans</div>
	</div>
{/if}
