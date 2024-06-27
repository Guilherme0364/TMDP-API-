import styled from "styled-components";

export const Container = styled.div`
    h1{
        margin: 3rem 0 0.8rem 0;
        font-size: 300%;
    }

    h2{
        margin-bottom: 2.5rem;
        font-size: 150%;
        opacity: 85%;
    }

    padding: 4rem 0;
    margin: 0 8rem;

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .second-image{
        margin-top: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 4rem;
        min-width: 50%;
    }

    button{
        background-color: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 1rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: 0.3s;
    }

    button:hover{
        background-color: #5848c2;
    }

    span{
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .subdetails{
        display: flex;
        flex-direction: column;
        margin-top: 1.5rem;
    }
`