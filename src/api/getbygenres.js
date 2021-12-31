import Get from './get';

export default async function GetByGenres(uri, id) {
	const api_key = '81dede92fd32c54814719e7e25270e56';

	const url = `https://api.themoviedb.org/3/${uri}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=${id}`;

	console;

	let res = await fetch(url);
	let resultGenres = await res.json();
	let GetGenresJson = await Get('genre/movie/list');

	let nameGenres = await GetGenresJson.body.genres.filter((item) => {
		return item.id === id;
	});

	let byGenres = {
		data: resultGenres.results,
		name: nameGenres[0].name
	};
	return byGenres;
}
