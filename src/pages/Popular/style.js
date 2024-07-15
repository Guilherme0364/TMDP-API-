import styled from 'styled-components';

// Será usado no lugar da 'div' que engloba do HTML no index.jsx
export const Container = styled.div`
    h1{
        text-align: center;
        margin: 4rem 0;
        font-size: 250%;
    }
`

export const MovieList = styled.ul`
    display: grid; //              Um fragmento pode ocupar no máximo 200px
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); // FR é um fragmento, neste caso do grid definido (1/3)
    column-gap: 3rem;
    row-gap: 10rem;
`

export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }

    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a{
        transition: all 0.4s;
    }
    
    a:hover{
        transform: scale(1.1); // Aumenta a imagem
    }
`