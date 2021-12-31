<script>
	import Get from '../../../api/get';
	import { fade } from 'svelte/transition';
	import { PolygonIcon } from '../../svg-loader/index';
	let data = Get('genre/movie/list');
</script>

<style>
	.shadow-menu {
		box-shadow: 0px 4px 4px 0px #00000066;
	}
</style>

<div class="absolute left-[-25px]" in:fade out:fade>
	<div class="flex justify-center">
		<PolygonIcon size="24" color="#fff" />
	</div>
	<div class=" bg-[rgb(15,22,29)] p-2 -mt-2 rounded-[20px] w-[186px] shadow-menu">
		{#await data}
			loading
		{:then value}
			{#each value.body.genres.slice(0, 5) as item}
				<div class="px-[28px] py-[6px]">{item.name}</div>
			{/each}
		{:catch error}
			<!-- promise was rejected -->
		{/await}
	</div>
</div>
