import React, { useEffect } from 'react';
import { Container, MovieList, Movie } from './style';
import { useState } from 'react';
import { apiKey } from '../../config/key';
import { Link } from 'react-router-dom';


function Home() {

    const [movies, setMovies] = useState([]) // O dado inicial é um Arrat vazio, por isso o colchete
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${apiKey}` 
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
                            <Link to={`/details/${movie.id}`}>
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

export default Home;
