async function searchGif(term) {
	const searchTerm = { q: term, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' };
	const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: searchTerm
	});
	const resSize = res.data.data.length;
	if (resSize !== 0) {
		const index = Math.floor(Math.random() * resSize);
		console.log(res.data.data[index].images.original.url);
		const gifURL = res.data.data[index].images.original.url;
		appendGif(gifURL);
	} else {
		alert('Gif Not Found!');
	}
}

function addGif(event) {
	event.preventDefault();
	const inputVal = event.target[0].value;
	const gifURL = searchGif(inputVal);
}

function appendGif(url) {
	$('.results').append(`<img src=${url} class='gif' alt="this is a gif">`);
	$('#searchTerm').attr('value', '');
}

function removeGif() {
	$('.gif').remove();
}

$('#form').on('submit', addGif);
$('#removeImg').on('click', removeGif);
