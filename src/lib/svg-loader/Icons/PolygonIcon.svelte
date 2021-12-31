<script>
	export let size = '100%';
	export let height;
	export let width;
	export let color = '#000000';

	if (size !== '100%') {
		size = size.slice(-1) === 'x' ? size.slice(0, size.length - 1) + 'em' : parseInt(size) + 'px';
	}
</script>

<svg
	width={width || size}
	height={width || size}
	viewBox="0 0 26 17"
	fill={color}
	xmlns="http://www.w3.org/2000/svg">
	<path
		d="M10.1862 1.78495C11.7449 0.242243 14.2551 0.242242 15.8138 1.78495L24.2726 10.157C26.8125
		12.6709 25.0324 17 21.4588 17H4.54116C0.967593 17 -0.812538 12.6709 1.72735 10.157L10.1862
		1.78495Z"
		fill="#0F161D" />
</svg>
