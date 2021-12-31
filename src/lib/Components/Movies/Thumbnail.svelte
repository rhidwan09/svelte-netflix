<script>
	export let path_img;
	export let title;
</script>

<figure>
	<img
		src={`https://image.tmdb.org/t/p/original/${path_img}`}
		class=" min-h-[126px] min-w-[189px] md:min-w-card md:min-h-card md:h-card rounded-card"
		alt={title} />
</figure>
