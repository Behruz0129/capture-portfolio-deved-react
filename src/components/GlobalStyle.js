import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }

    body {
        background-color: #1b1b1b;
        font-family: 'Comfortaa', cursive;
        padding-top: 62.5px;
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
        &:hover {
            background: #0096bb;
        }
    }
    .greem {
        margin-right: 1rem;
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
