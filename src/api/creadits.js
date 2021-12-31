export default async function Credits(movie_id) {
	const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=ed05f9d8c70b859db8a7f327ee6e5d75&language=en-US`;
	const res = await fetch(url);
	let result = await res.json();
	return result;
}

// comment
