const data = null;
const type = "movie"; 
const id = "tt1375666";
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText);
        const movieInfoDiv = document.getElementById("movie-info");
        
        movieInfoDiv.innerHTML = `
            <h2>${response.title || 'Título não disponível'}</h2>
            <p><strong>Ano:</strong> ${response.year || 'Ano não disponível'}</p>
            <p><strong>Gênero:</strong> ${response.genre || 'Gênero não disponível'}</p>
            <p><strong>Descrição:</strong> ${response.plot || 'Descrição não disponível'}</p>
        `;
    }
});

xhr.open('GET', `https://streaming-availability.p.rapidapi.com/shows/${type}/${id}`);
xhr.setRequestHeader('x-rapidapi-key', '58e37bd5c1msh5729766143535e9p1e5192jsn715bbcba8b47');
xhr.setRequestHeader('x-rapidapi-host', 'streaming-availability.p.rapidapi.com');

xhr.send(data);