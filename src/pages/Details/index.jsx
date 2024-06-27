import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "./style";


function Detail () {

    const { id } = useParams()
    const [movie, setMovie] = useState({});
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() =>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json', // OBS: As vezes a chave não funciona como variável 
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjAzNmE2MDE1MWQ2NDM2NWRiZWE2NWNhNDQ4MWUwZCIsIm5iZiI6MTcxOTI1MTg1Ny41MTQ0MjIsInN1YiI6IjY2Nzk4OWViZmFlMDk3NTE3MTNiNDBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJeHaDKF1i8nkR6611dlroIf1he_u730ZlZyr2aGaYg` 
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
            .then(response => response.json())
            .then(data => {
            console.log(data)
                const movie = {
                    id, 
                    title: data.title,
                    summary: data.overview, 
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date
                }
                setMovie(movie)
            })
            .catch(err => console.error(err));
    }, [id]) // Toda vez que o id mudar, o useEffect será chamado novamente, pois se o id muda, é necessário uma nova requisição para acessar as informações do novo filme

    return(
        <Container>
            <div className="movie">
                <img src={movie.image} alt={movie.title} />
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.summary}</span>                    
                    <span className="release-date">Data de lançamento: {movie.releaseDate}</span>
                    <Link to="/"><button>Voltar</button></Link>
                </div>
            </div>
        </Container>
    )
}

export default Detail; 