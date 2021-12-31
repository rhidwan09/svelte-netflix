<script>
	import Get from '../../api/get';
	import GetByGenres from '../../api/getbygenres';
	import { fade, fly, blur } from 'svelte/transition';
	import SnapSlider from '$lib/Components/Movies/SnapSlider.svelte';
	import ContentSlider from '$lib/Components/Movies/ContentSlider.svelte';
	import Skeleton from '$lib/Components/Common/Skeleton.svelte';
	import ContainerSlider from '$lib/Components/Movies/ContainerSlider.svelte';
	import Slider from '$lib/Components/Movies/Slider.svelte';
	import Thumbnail from '$lib/Components/Movies/Thumbnail.svelte';
	let selectedPoint = 0;
	let scrollLeft = 0;
	let clientWidth;
	let size = 'h-[10px] w-[10px]';
	import { onMount } from 'svelte';
	let animated = [];
	let adventure = [];
	let superHeroes = [];

	onMount(async () => {
		animated = await GetByGenres('discover/movie', 16);
		adventure = await GetByGenres('discover/movie', 12);
		superHeroes = await GetByGenres('discover/movie', 14);
	});

	$: console.log(adventure, 'by genres');
	function handleScrollSwiper(id, i, clientWidth) {
		selectedPoint = i;
		if (clientWidth > 600)
			return document.getElementById(id).scrollTo({ left: i * 1100, behavior: 'smooth' });
		if (clientWidth < 600)
			return document.getElementById(id).scrollTo({ left: i * 300, behavior: 'smooth' });
	}
	function handleScrollBar(id, type, clientWidth) {
		if (clientWidth > 600)
			return document.getElementById(id).scrollTo({ left: 1500, behavior: 'smooth' });
		if (clientWidth < 600)
			return document.getElementById(id).scrollTo({ left: 500, behavior: 'smooth' });
	}

	let getTranding = Get('trending/all/day');
</script>

<style>
	.selected {
		@apply h-[12px] w-[12px] bg-white;
	}
	.hide-scroll {
		-ms-overflow-style: none;
		scrollbar-width: none;
		-ms-overflow-style: -ms-autohiding-scrollbar;
		-ms-overflow-style: none;
	}
	.hide-scroll::-webkit-scrollbar {
		display: none;
	}
</style>

<!-- COMPONENT CAROUSEL -->
<div bind:clientWidth>
	{#await getTranding}
		<!-- getTranding is pending -->
	{:then data}
		<div
			class="snap-x snap-mandatory flex overflow-x-auto gap-[16px] md:gap-[32px] pb-[16px]
			md:pt-[46px] hide-scroll"
			id="snap-swiper">
			{#each data.body.results.slice(0, 5) as item, index}
				<SnapSlider
					data={item}
					type={'carousell'}
					on:scroll={() => handleScrollSwiper('snap-swiper', index, clientWidth)}>
					<ContentSlider
						data={item}
						on:scroll={() => handleScrollSwiper('snap-swiper', index, clientWidth)} />
				</SnapSlider>
			{/each}
		</div>
		<div class="flex justify-center">
			{#each data.body.results.slice(0, 5) as item, i}
				<div
					class:selected={i === selectedPoint ? 'selected' : ''}
					class="
					{size} relative rounded-full bg-[#C4C4C4] mx-[4px] cursor-pointer "
					id="points"
					on:click|preventDefault={() => handleScrollSwiper('snap-swiper', i, clientWidth)} />
			{/each}
		</div>
	{:catch error}
		<!-- getTranding was rejected -->
	{/await}
</div>

<!-- COMPONENT CARD -->
<!-- pisahkan component dan beri nama lists Movies  -->
<div class=" mx-auto ">
	{#await getTranding}
		<Skeleton addClass="mx-7 py-6 mb-10 w-1/4 rounded" />
		<div class="flex">
			{#each [0, 1, 2, 3, 4, 5] as item}
				<Skeleton addClass="min-w-card min-h-card w-card h-card rounded-card mx-7" />
			{/each}
		</div>
	{:then data}
		<ContainerSlider message={data.message}>
			<Slider>
				{#each data.body.results as item, index}
					<SnapSlider data={item} type={'slider'}>
						<Thumbnail path_img={item.poster_path} title={item.title} />
					</SnapSlider>
				{/each}
			</Slider>
		</ContainerSlider>

		<ContainerSlider message={adventure.name}>
			<Slider>
				{#each adventure.data || [] as item, index}
					<SnapSlider data={item} type={'slider'}>
						<Thumbnail path_img={item.poster_path} title={item.title} />
					</SnapSlider>
				{/each}
			</Slider>
		</ContainerSlider>

		<ContainerSlider message={superHeroes.name}>
			<Slider>
				{#each superHeroes.data || [] as item, index}
					<SnapSlider data={item} type={'slider'}>
						<Thumbnail path_img={item.poster_path} title={item.title} />
					</SnapSlider>
				{/each}
			</Slider>
		</ContainerSlider>
	{:catch error}
		{console.log(error)}
	{/await}
</div>
