<script>
	export let message;
	import Button from '$lib/Components/Common/Button.svelte';
	import { ChevronLeftIcon, ChevronRightIcon } from '$lib/svg-loader/index';
</script>

<div
	class="text-white py-6 text-[24px] md:text-265 font-bold flex justify-between mx-[16px]
	md:mx-[6rem]">
	<p class="text-white self-center">{message}</p>
	<div class="flex self-center">
		<Button addClass={`bg-slide px-[9.5px] py-[0.5rem]  mr-2 `}>
			<ChevronLeftIcon size="13" />
		</Button>
		<Button addClass={'shadow bg-slide px-[9.5px] py-[0.5rem] '}>
			<ChevronRightIcon size="13" />
		</Button>
	</div>
</div>
<slot />
