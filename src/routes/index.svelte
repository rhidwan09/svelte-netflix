<script context="module">
	export const prerender = true;
</script>

<script>
	import Button from '$lib/Components/Common/Button.svelte';
	let bg_desktop = '/bg-list-movie.png';
	let bg_mobile = 'bg-list-movie-mobile.png';
	let clientWidth = 0;
	$: src = clientWidth > 360 ? bg_desktop : bg_mobile;
	$: clientWidth = clientWidth;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="h-full w-full">
	<div
		class=" w-full text-white top-0 md:mx-auto absolute h-full bg-cover bg-center"
		bind:clientWidth
		style="background:url({src})">
		<!-- <Overlay/> -->
		<div class="absolute bottom-[54px] md:bottom-[140px] md:left-[108px] px-3 z-50">
			<h1
				class="font-extrabold text-white text-4xl md:text-[54px] leading-[63.28px] mb-5 md:mb-[7px]">
				Explore 50.000+ Movies
			</h1>
			<p
				class=" text-[24px] text-white leading-[28.13px] md:py-[7px] md:text-[42px]
				md:leading[49.22px] md:h-[49px] mb-6 md:mb-[56px]">
				Watch anywhere. Cancel anytime
			</p>
			<a href="/movies" sveltekit:prefetch>
				<Button
					addClass="bg-[#FF4244] text-white md:px-[45px] md:py-[19px] leading-[37.5px] font-bold
					w-full md:w-auto">
					Get Started
				</Button>
			</a>
		</div>
	</div>
</div>
