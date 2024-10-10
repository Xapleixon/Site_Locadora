// const apiKey = 'f25f4414';
// const Title = 'Batman'
// const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         const movieContainer = document.getElementById('movie-container');
//         // Verifique se a resposta contém os dados esperados
//         if (data && data.Title) {
//             const movieDiv = document.createElement('div');
//             movieDiv.className = 'movie';
//             movieDiv.innerHTML = `
//                 <h2>${data.Title}</h2>
//                 <img src="${data.Poster}" alt="${data.Title}">
//                 <p>Data de Lançamento: ${data.Released}</p>
//                 <p>Resumo: ${data.Plot}</p>
//             `;
//             movieContainer.appendChild(movieDiv);
//         } else {
//             console.error('Dados do filme não encontrados.');
//         }
//     })
//     .catch(error => console.error('Erro:', error));



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
                        movieDiv.innerHTML = `
                            <h2>${movie.Title}</h2>
                            <img src="${movie.Poster}" alt="${movie.Title}">
                        `;
                        movieContainer.appendChild(movieDiv);
                    });
                } else {
                    movieContainer.innerHTML = 'Nenhum filme foi encontrado.';
                }
            })
            .catch(error => console.error('Erro:', error));
    });
