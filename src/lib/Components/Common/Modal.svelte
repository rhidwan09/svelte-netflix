<script>
	import Get from '../../../api/get';
	import { MenuMobile } from '../../stores/MenuMobile';
	import { ChevronDownIcon, ChevronUpIcon, SearchColor, CloseIcon } from '../../svg-loader/index';
	import { slide, fade, fly } from 'svelte/transition';
	import { getRawBody } from '@sveltejs/kit/node';
	let isSubmenu = false;
	let genres = Get('genre/movie/list');
</script>

<style>
	.modal {
		background-color: rgba(0, 0, 0, 0.849);
	}
	.overlay {
		position: fixed;
		z-index: 100;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		height: 100vh;
	}
</style>

<div class="overlay" transition:fly={{ x: 200, duration: 500 }}>
	<div class="modal">
		<div class="h-screen flex-col justify-center">
			<div class="absolute right-[21px] top-[26px]" on:click={() => ($MenuMobile = false)}>
				<CloseIcon size="14" />
			</div>
			<div class="fixed top-1/4 w-full px-6">
				<div class="relative text-black flex mb-12">
					<input
						type="text"
						class="bg-white rounded-[5px] w-full py-[8px] px-[16px]"
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
					<div>
						{#await genres then value}
							{#each value.body.genres.slice(0, 5) as item}
								<div class="py-[6px] px-[20px]">{item.name}</div>
							{/each}
						{/await}
					</div>
				{/if}

				<div class="py-[6px] font-medium ">View Plans</div>
			</div>
		</div>
	</div>
</div>
