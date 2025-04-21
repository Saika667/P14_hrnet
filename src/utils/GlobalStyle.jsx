import { createGlobalStyle } from "styled-components"
import Montserrat from "../assets/MontserratAlternates-Light.ttf"

const StyledGlobalStyle = createGlobalStyle`
    :root {
        font-size: 14px;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        min-height: 100vh;
        background-color: #cec9dd;
        color: #242471;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${ Montserrat }) format("truetype");
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle