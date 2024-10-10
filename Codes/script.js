const apiKey = 'f25f4414';
const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const movieContainer = document.getElementById('movie-container');
        // Verifique se a resposta contém os dados esperados
        if (data && data.Title) {
            const movieDiv = document.createElement('div');
            movieDiv.className = 'movie';
            movieDiv.innerHTML = `
                <h2>${data.Title}</h2>
                <img src="${data.Poster}" alt="${data.Title}">
                <p>Data de Lançamento: ${data.Released}</p>
                <p>Resumo: ${data.Plot}</p>
            `;
            movieContainer.appendChild(movieDiv);
        } else {
            console.error('Dados do filme não encontrados.');
        }
    })
    .catch(error => console.error('Erro:', error));
