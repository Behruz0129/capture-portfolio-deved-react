import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    ::-moz-selection {
        color: white;
        background: #363636;
    }

    ::selection {
        color: white;
        background: #363636;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        background-color: #353535;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #007997;
        transition: all 0.5s ease;
        &:hover {
            background-color: #006880;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html {
        @media(max-width: 1000px) {
            font-size: 80%;
        }
        @media(max-width: 450px) {
            font-size: 70%;
        }
        @media(max-width: 450px) {
            font-size: 60%;
        }
        @media(max-width: 300px) {
            font-size: 50%;
        }
    }

    body {
        background-color: #1b1b1b;
        font-family: 'Comfortaa', cursive;
        overflow-x: hidden;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #0096bb;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        outline: none;
        margin: 0.5rem 1rem;
        &:hover {
            background: #0096bb;
        }
    }
    .greem {
        margin-left: 0rem;
        @media(max-width: 1000px) {
            margin-left: 0.5rem
        }
    }
    h2 {
        font-weight: lighter;
        font-size: 3rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    a {
        font-size: 1.1rem;
    }
    span {
        font-weight: 900;
        color: #0096bb;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
