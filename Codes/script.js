 document.getElementById('search-button').addEventListener('click', () => {
        const apiKey = 'f25f4414';
        const titulo = document.getElementById('movie-input').value;
        const url = `https://www.omdbapi.com/?s=${titulo}&apikey=${apiKey}`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const movieContainer = document.getElementById('movie-container');
                movieContainer.innerHTML = ''; 
    
                if (data && data.Search) {
                    data.Search.forEach(movie => {
                        const movieDiv = document.createElement('div');
                        movieDiv.classList.add('movie');
                        movieDiv.innerHTML = `
                            <h2>${movie.Title}</h2>
                            <img src="${movie.Poster}" alt="${movie.Title}">
                            <button class="details-button" data-id="${movie.imdbID}">Ver Elenco</button>
                            <div class="actors" id="actors-${movie.imdbID}" style="display: none;"></div>
                            <div class="director" id="director-${movie.imdbID}" style="display: none;"></div>
                        `;
                        movieContainer.appendChild(movieDiv);
                    });
    
                    document.querySelectorAll('.details-button').forEach(button => {
                        button.addEventListener('click', function() {
                            const imdbID = this.getAttribute('data-id');
                            const detailUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
    
                            fetch(detailUrl)
                                .then(response => response.json())
                                .then(movieDetails => {
                                    const actorsDiv = document.getElementById(`actors-${imdbID}`);
                                    const directorDiv = document.getElementById(`director-${imdbID}`);
                                    actorsDiv.style.display = 'block';
                                    actorsDiv.innerHTML = `Elenco: ${movieDetails.Actors}`;
                                    directorDiv.style.display = 'block';
                                    directorDiv.innerHTML = `Diretor: ${movieDetails.Director}`;
                                })
                                .catch(error => console.error('Erro ao buscar detalhes:', error));
                        });
                    });
                } else {
                    movieContainer.innerHTML = 'Nenhum filme foi encontrado.';
                }
            })
            .catch(error => console.error('Erro:', error));

document.getElementById('movie-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});
        });
    