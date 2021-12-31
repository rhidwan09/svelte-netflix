export default async function GetSearch(keyword) {
	const url =
		'https://api.themoviedb.org/3/search/movie?api_key=ed05f9d8c70b859db8a7f327ee6e5d75&language=en-US&query=' +
		keyword;
	try {
		if (keyword != '') {
			let res = await fetch(url);
			let result = await res.json();
			return result.results;
		}
	} catch (error) {
		console.log(error);
	}
}
