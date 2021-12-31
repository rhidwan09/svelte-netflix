<script>
	import { fade } from 'svelte/transition';
	import { SearchIcon } from '../../svg-loader/index';
	import GetSearch from '../../../api/getsearch';
	import { onMount } from 'svelte';
	let resultSearch = [];
	let resultCompleted = '';
	let isVisible = true;

	function init(e) {
		e.focus();
	}
	function out() {
		isVisible = false;
	}

	onMount(async () => {
		resultSearch = await getSearch(value);
	});

	export let value;
	export let isSearchOpen;

	async function getSearch(keyword) {
		resultSearch = await GetSearch(keyword);
		resultCompleted = resultSearch[0].title;
		return resultCompleted;
	}

	// value length ko ga bisa di panggil . tanyakan ke dyn

	$: if (value != undefined && value.length > 7) {
		getSearch(value);
	} else {
		console.log('data is not valid');
	}
</script>

<!-- PUSAT COMPONENT NAVBAR ADA DI folder layouts/Navbar.svelte -->
{#if isVisible === true}
	<div class="flex w-full delay-300 relative" out:out in:fade>
		<div class="pl-8 pr-2 opacity-50 ">
			<SearchIcon size="20" />
		</div>
		<input
			type="text"
			class="bg-transparent w-full focus:border-0 focus:outline-none after:outline-none opacity-50
			focus:opacity-100 active:opacity-100 after:opacity-100"
			bind:value
			use:init
			on:blur
			on:keypress={() => (isSearchOpen = !isSearchOpen)}
			placeholder="Try Search Ward" />
		<input
			type="text"
			class="absolute md:left-[61px] bg-transparent w-full opacity-30"
			value={value != '' && resultCompleted != 'UNdefined' ? resultCompleted : ''}
			disabled />
	</div>
{/if}
