import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container } from "./style";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const image_path = 'https://image.tmdb.org/t/p/w500';

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60); 
        const remainingMinutes = minutes % 60; // Pega a sobra da divisão e joga pros minutos
        return `${hours}h ${remainingMinutes}min`;
    };

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZjAzNmE2MDE1MWQ2NDM2NWRiZWE2NWNhNDQ4MWUwZCIsIm5iZiI6MTcxOTI1MTg1Ny41MTQ0MjIsInN1YiI6IjY2Nzk4OWViZmFlMDk3NTE3MTNiNDBjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BJeHaDKF1i8nkR6611dlroIf1he_u730ZlZyr2aGaYg`
            }
        };

        fetch(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`, options)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                const movie = {
                    id,
                    title: data.title,
                    subtitle: data.tagline,
                    summary: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    second_image: `${image_path}${data.backdrop_path}`,
                    releaseDate: data.release_date,
                    budget: data.budget,
                    revenue: data.revenue,
                    genres: data.genres.map(genre => genre.name),
                    runtime: data.runtime
                };
                setMovie(movie);
            })
            .catch(err => console.error(err));
    }, [id]); // Toda vez que o id mudar, o useEffect será chamado novamente

    return (
        <Container>
            <div className="movie">
                <div className="images">
                    <img src={movie.image} alt={movie.title} />
                    <img className="second-image" src={movie.second_image} alt={`Segunda imagem do ${movie.title}`} />
                </div>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <h2>{movie.subtitle}</h2>
                    <span>Sinopse: {movie.summary}</span>
                <div className="subdetails">
                    <span>Data de lançamento: {movie.releaseDate}</span>
                    <span>Gêneros: {movie.genres && movie.genres.join(', ')}</span>
                    <span>Duração: {movie.runtime && formatRuntime(movie.runtime)}</span>
                    <span>Custo de produção: {movie.budget && formatCurrency(movie.budget)}</span> 
                    <span>Lucro gerado: {movie.revenue && formatCurrency(movie.revenue)}</span> 
                </div>
                    <Link to="/"><button>Voltar</button></Link>
                </div>
            </div>
        </Container>
    );
}

export default Detail;
