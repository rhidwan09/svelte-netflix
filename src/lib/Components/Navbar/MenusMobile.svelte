<script>
	import Get from '../../../api/get';
	import { MenuMobile } from '../../stores/MenuMobile';
	import { ChevronDownIcon, ChevronUpIcon, SearchColor, CloseIcon } from '../../svg-loader/index';
	import { slide, fade } from 'svelte/transition';
	let isSubmenu = false;
	let genres = Get('genre/movie/list');
</script>

<div
	class="fixed px-[16px] opacity-95 bg-[rgb(15,22,29)] top-0 bottom-0 z-50 w-full h-screen "
	out:fade
	in:fade>
	<div class="absolute right-[21px] top-[26px]" on:click={() => ($MenuMobile = false)}>
		<CloseIcon size="14" />
	</div>

	<div class="text-black flex relative mt-[133px] mb-[81px]">
		<input
			type="text"
			class="bg-white rounded-[10px] w-full py-[8px] px-[16px]"
			placeholder="Shan-ci" />
		<div class="absolute right-5 bottom-3">
			<SearchColor size="14" color="#000000" />
		</div>
	</div>

	<div class="flex py-[6px] font-medium ">
		All Genre
		<div class="self-center pl-[16px]" on:click={() => (isSubmenu = !isSubmenu)}>
			{#if isSubmenu}
				<ChevronUpIcon size="13" />
			{:else}
				<ChevronDownIcon size="13" />
			{/if}
		</div>
	</div>

	{#if isSubmenu}
		<div in:slide out:slide>
			{#await genres then value}
				{#each value.genres.slice(0, 5) as item}
					<div class="py-[6px] px-[20px]">{item.name}</div>
				{/each}
			{/await}
		</div>
	{/if}

	<div class="py-[6px] font-medium ">View Plans</div>
</div>
