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
	height={height || size}
	viewBox="0 0 14 8"
	fill="none"
	xmlns="http://www.w3.org/2000/svg">
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M12.8546 6.85491C12.8081 6.90147 12.7529 6.93841 12.6922 6.96362C12.6315 6.98883 12.5663
		7.0018 12.5006 7.0018C12.4348 7.0018 12.3697 6.98883 12.3089 6.96362C12.2482 6.93841 12.193
		6.90147 12.1466 6.85491L6.50057 1.20791L0.854571 6.85491C0.808083 6.90139 0.752894 6.93827
		0.692155 6.96343C0.631415 6.98859 0.566315 7.00154 0.500571 7.00154C0.434827 7.00154 0.369727
		6.98859 0.308988 6.96343C0.248248 6.93827 0.193059 6.90139 0.146571 6.85491C0.100083 6.80842
		0.0632069 6.75323 0.0380478 6.69249C0.0128887 6.63175 -6.00815e-05 6.56665 -6.00815e-05
		6.50091C-6.00815e-05 6.43516 0.0128887 6.37006 0.0380478 6.30932C0.0632069 6.24858 0.100083
		6.19339 0.146571 6.14691L6.14657 0.146907C6.19302 0.100344 6.24819 0.0634011 6.30894
		0.0381947C6.36968 0.0129882 6.4348 1.33514e-05 6.50057 1.33514e-05C6.56634 1.33514e-05 6.63146
		0.0129882 6.6922 0.0381947C6.75295 0.0634011 6.80813 0.100344 6.85457 0.146907L12.8546
		6.14691C12.9011 6.19335 12.9381 6.24853 12.9633 6.30927C12.9885 6.37002 13.0015 6.43514 13.0015
		6.50091C13.0015 6.56667 12.9885 6.6318 12.9633 6.69254C12.9381 6.75329 12.9011 6.80846 12.8546
		6.85491V6.85491Z"
		fill="white" />
</svg>
