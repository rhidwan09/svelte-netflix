<script>
	export let data;
	export let type;
	let snap =
		'snap-center first:ml-[16px] last:mr-[16px] md:first:ml-[103px] md:last:mr-[103px] mr-4';
	switch (type) {
		case 'carousell':
			snap = 'snap-center first:ml-[16px] md:first:ml-[103px] last:mr-[103px]';
			break;
		case 'slider':
			snap =
				'snap-center first:ml-[16px] last:mr-[16px] md:first:ml-[103px] md:last:mr-[103px] mr-4';
			break;
		default:
			break;
	}
</script>

<div class={snap} on:scroll>

	<a href={`/movies/${data.id}`}>
		<slot />
	</a>
</div>
