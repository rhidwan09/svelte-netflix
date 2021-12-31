<script>
	export let gapMob = '16';
	export let gapDesk = '42';
	export let id = '';
	export let scrollLeft = 0;
</script>

<div
	class={`snap-proximity snap-x flex overflow-x-auto  gap-[16px] md:gap-[42px] relative max-w-full left-0 md:mb-[62px]`}
	on:scroll={({ target }) => (scrollLeft = target.scrollLeft)}
	{id}>
	<slot />
</div>
