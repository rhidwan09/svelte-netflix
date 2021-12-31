import Credits from './creadits';
import Videos from './videos';
export default async function GetMovie(id) {
	// let slug = value.replace(/[-]/g,' ')

	// console.log(slug,"w")
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=ed05f9d8c70b859db8a7f327ee6e5d75`;
	let res = await fetch(url, {
		method: 'GET'
	});

	let result = await res.json();

	let movie_id = result.id;
	let getCredits = await Credits(movie_id);
	let getVideos = await Videos(movie_id);

	if (getCredits) {
		let resultAll = {
			movie: result,
			credit: getCredits.cast,
			video: getVideos.results[0].key
		};

		return resultAll;
	}

	return true;
}
