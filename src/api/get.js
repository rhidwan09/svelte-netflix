export default async function Get(uri) {
	const api_key = '81dede92fd32c54814719e7e25270e56';
	const url = `https://api.themoviedb.org/3/${uri}?api_key=${api_key}`;
	const res = await fetch(url, {
		method: 'GET'
	});

	let result = await res.json();

	if (result) {
		let response = {
			status: 200,
			body: result,
			message: 'Best Of All'
		};
		return response;
	} else {
		console.error();
	}
}
