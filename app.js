async function searchGif(term) {
	const searchTerm = { q: term, api_key: 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym' };
	const res = await axios.get('http://api.giphy.com/v1/gifs/search', {
		params: searchTerm
	});
	const resSize = res.data.data.length;
	if (resSize !== 0) {
		const index = Math.floor(Math.random() * resSize);
		//console.log(res.data.data[index].images.original.url);
		const gifURL = res.data.data[index].images.original.url;
		appendGif(gifURL);
	} else {
		alert('Gif Not Found!');
	}
	$('#searchTerm').val('');
}

function addGif(event) {
	event.preventDefault();
	const inputVal = event.target[0].value;
	const gifURL = searchGif(inputVal);
}

function appendGif(url) {
	let newDiv = $('<div class="col-md-4 col-12 mb-4"></div>');
	let newGif = $(`<img src=${url} class='gif w-100' alt="this is a gif">`);
	newDiv.append(newGif);
	$('#results').append(newDiv);
}

function removeGif() {
	$('.gif').remove();
}

$('#form').on('submit', addGif);
$('#removeImg').on('click', removeGif);
