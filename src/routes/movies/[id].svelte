<script context="module">
	export async function load({ params }) {
		return {
			props: {
				id: params.id
			}
		};
	}
</script>

<script>
	import GetMovie from '../../api/getmovies';
	import { blur, scale } from 'svelte/transition';
	import { DolbyIcon, PlayOnlineIcon, StarIcon, DolbyVerticalIcon } from '$lib/svg-loader/index';
	import { onMount } from 'svelte';
	import Button from '../../lib/Components/Common/Button.svelte';
	export let isPlayMovie = false;

	let afterButtonPlay = 'absolute bottom-0';
	let afterButtonPlayCredit = 'md:grid md:grid-cols-2';
	let afterButtonPlayProduction = '';
	export let id;
	let movie = [];
	let credits = [];
	let video = [];
	onMount(async () => {
		DetailsMovie = await GetMovie(id);
		movie = await DetailsMovie.movie;
		credits = await DetailsMovie.credit;
		video = await DetailsMovie.video;
	});
	function handlePlayMovie() {
		isPlayMovie = true;
		afterButtonPlay = ' md:absolute top-0 md:translate-y-[800px]';
		afterButtonPlayCredit = '  md:absolute  md:translate-x-[800px]';
		afterButtonPlayProduction = ' hidden';
	}
	let DetailsMovie = [];

	$: movie = movie;
	$: credits = credits;
	$: video = video;
</script>

<div>
	{#await movie then item}
		<div class="absolute top-0 bottom-0 w-full">
			{#if isPlayMovie}
				<iframe
					width="100%"
					src="https://www.youtube.com/embed/{video}?autoplay=1"
					title="YouTube video player"
					autoplay
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
					picture-in-picture"
					class="h-[195px] md:h-[717px]" />
			{:else}
				<img
					src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
					alt={item.title}
					class={'brightness-50 h-screen w-screen object-cover object-center	 md:object-fill '}
					in:blur={{ amount: 100 }} />
			{/if}

			<!-- {#if isPlayMovie !== true} -->
			<div
				class="text-white bg-gradient-to-t from-[#0F161D] transition-opacity-0 w-full md:py-[10px]
				transition-transform duration-500 {afterButtonPlay}">
				<div class="relative mx-[16px] md:mx-[5.5rem] max-w-lg" in:scale>
					<h1 class="text-white text-left text-[32px] md:text-[42px] font-bold after:text-red-500">
						{item.title}
					</h1>
					<p class="hidden text-white md:block">{item.overview}</p>
					<div class="opacity-60">
						<p class="text-white py-[9px] md:py-[16px]">
							{#each item.genres || [] as item}{item.name},&nbsp;{/each}
						</p>
						<div class="flex items-stretch ">
							<div class="self-auto mr-[14px]">
								<DolbyVerticalIcon size="71" color="#fff" />
							</div>
							<div class="self-center ">
								<DolbyIcon size="36" color="#fff" />
							</div>
						</div>
						<div class=" py-[9px] md:py-[16px] hidden md:flex">
							<div class="self-center">
								<StarIcon size="20" />
							</div>
							<div class="self-end mx-2 align-middle">{item.vote_average}</div>
						</div>
					</div>
					{#if isPlayMovie !== true}
						<Button
							addClass={'bg-red-500 flex justify-center py-[6px] '}
							on:click={() => handlePlayMovie()}>
							<strong class="self-center text-[24px] md:text-[32px] mx-2">Play Now</strong>
							<div class="self-center">
								<PlayOnlineIcon size="32" />
							</div>
						</Button>
					{/if}

					<p class="block md:hidden pt-[24px] text-white text-justify">{item.overview}</p>
				</div>
			</div>
			<div class=" mx-[16px] md:container md:mx-auto">
				<div class="{afterButtonPlayCredit} md:py-[10px] transition-transform duration-500">
					<div id="credits">
						<h1 class="font-bold text-left text-white text-[32px] md:text-[42px]">Credits</h1>
						{#each credits.slice(0, 4) as item}
							<div class="flex py-[12px]">
								<div class="self-center">
									<figure>
										<img
											src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
											class="rounded-full w-[64px] h-[64px] object-cover"
											alt={item.original_name} />
									</figure>
								</div>
								<div class="self-center mx-[20px]">
									<p class="text-xl text-white md:text-2xl font-bold">{item.name}</p>
									<p class="md:text-xl text-white opacity-75">{item.character}</p>
								</div>
							</div>
						{/each}
					</div>

					<div id="production" class={afterButtonPlayProduction}>
						<h1 class="text-left text-white pt-[67px] md:pt-0 font-bold text-[32px] md:text-[42px]">
							Production Companies
						</h1>
						{#each item.production_companies || [] as data}
							<div class="flex py-[12px]">
								<div class="self-center">
									<p class="text-xl text-white md:text-2xl font-bold">{data.name}</p>
									<p class="md:text-xl text-white opacity-75">{data.origin_country}</p>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	{:catch error}
		<!-- movie was rejected -->
	{/await}
</div>
