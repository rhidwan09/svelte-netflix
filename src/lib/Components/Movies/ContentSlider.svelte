<script>
	import { DolbyVerticalIcon, DolbyIcon, StarIcon, PlayOnlineIcon } from '../../svg-loader/index';
	import Button from '../Common/Button.svelte';
	export let data;
</script>

<figure class="relative mr-4" on:scroll>
	<img
		src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
		alt={data.original_title}
		class=" shadow-lg max-w-[331px] max-h-[167px] md:max-w-[1273px] md:max-h-[646px] rounded-[12px] " />
	<div
		class="text-white bg-gradient-to-t from-[#0F161D] to-opacity-0 md:to-opacity-[29%] absolute
		bottom-0 h-[134px] rounded-b-[12px] w-full md:h-full ">
		<div class="text-white absolute md:bottom-[66px] md:left-[62px] hidden md:block ">
			<h1 class="text-[2rem] leading-[37.5px] font-black pb-[22px] text-white text-left">
				{data.title}
			</h1>
			<p class="max-w-[522px] pb-[16px] text-white">{data.overview}</p>
			<div class="opacity-60">
				<p class="text-white">Sci-Fi, Action, Comedy</p>
				<div class="flex items-stretch ">
					<div class="self-auto mr-[14px]">
						<DolbyVerticalIcon size="71" color="#fff" />
					</div>
					<div class="self-center ">
						<DolbyIcon size="36" color="#fff" />
					</div>
				</div>
				<div class="flex pb-[16px]">
					<div class="self-center">
						<StarIcon size="20" />
					</div>

					<div class="self-end mx-2 text-white">{data.vote_average}</div>
				</div>
			</div>
			<a href="/movies/{data.id}">
				<Button
					addClass={' bg-[#FF4244] flex  text-[32px] md:px-[32px] md:py-[19px] leading-[37.5px] font-bold w-full md:w-auto'}>
					<strong class="text-white self-center mx-2">Watch Now</strong>
					<div class="self-center">
						<PlayOnlineIcon size="32" />
					</div>
				</Button>
			</a>
		</div>
	</div>
</figure>
