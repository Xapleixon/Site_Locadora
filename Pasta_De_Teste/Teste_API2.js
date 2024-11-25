
console.log("Teste");

const data = null;

const xhr = new XMLHttpRequest();
//xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);

		var jsonResponse = JSON.parse(this.responseText);

		console.log(jsonResponse);
	}
});

xhr.open('GET', 'https://streaming-availability.p.rapidapi.com/shows/search/title?country=br&title=Batman&series_granularity=show&show_type=movie&output_language=en');
xhr.setRequestHeader('x-rapidapi-key', '58e37bd5c1msh5729766143535e9p1e5192jsn715bbcba8b47');
xhr.setRequestHeader('x-rapidapi-host', 'streaming-availability.p.rapidapi.com');

xhr.send(data);
console.log(xhr.status);