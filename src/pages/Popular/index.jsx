import React, { useEffect } from 'react';
import { Container, MovieList, Movie } from './style';
import { useState } from 'react';
// import { apiKey } from '../../config/key'; Issue: Resolver importação da apiKey
import { Link } from 'react-router-dom';


function Popular() {

    const [movies, setMovies] = useState([]) // O dado inicial é um Arrat vazio, por isso o colchete
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json', // OBS: As vezes a chave não funciona como variável 
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjAzNmE2MDE1MWQ2NDM2NWRiZWE2NWNhNDQ4MWUwZCIsIm5iZiI6MTcxOTI1MTg1Ny41MTQ0MjIsInN1YiI6IjY2Nzk4OWViZmFlMDk3NTE3MTNiNDBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJeHaDKF1i8nkR6611dlroIf1he_u730ZlZyr2aGaYg` 
            }
        };

        fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR', options)
            .then(response => response.json())
            .then(data => {
                console.log(data); // Verifique os dados recebidos no console
                if (data.results) {
                    setMovies(data.results);
                } else {
                    console.error('No results found');
                }
            })
            .catch(err => console.error(err));
    }, []); 

    return (
        <Container> {/* O componente 'Container' já é uma div */}
            <h1>Filmes</h1>
            <MovieList>

                {movies.map(movie => { // 'movie' é uma iteração única do Array de objetos 'movies'
                    return(
                        <Movie key={movie.id}>
                            <Link to={`/popular/details/${movie.id}`}>
                                <img src={`${image_path}${movie.poster_path}`} alt={movie.title} />
                            </Link>                 
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        </Container>
    );
}

export default Popular;
