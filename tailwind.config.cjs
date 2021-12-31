module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.html', './src/**/*.css', './index.html'],
	theme: {
		extend: {
			colors: {
				slide: '#112539'
			},
			fontSize: {
				'265': '2.625rem'
			},
			minWidth: {
				card: '269px'
			},
			minHeigth: {
				card: '403px'
			},
			width: {
				card: '269px'
			},
			height: {
				card: '403px'
			},
			borderRadius: {
				card: '2.5rem'
			}
		}
	},
	plugins: []
};
