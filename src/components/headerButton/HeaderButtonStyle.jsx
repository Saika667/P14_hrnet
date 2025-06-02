import { Link } from "react-router-dom"
import styled from "styled-components"

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat", sans-serif;
    background-color: #242471;
    color: #ffffff;
    padding: .5rem 1rem;
    border-radius: 5rem;
    text-decoration: none;
    
    & svg {
        width: 2rem;
        height: 2rem;
        padding-right: 1rem;
    }
`

export const Text = styled.span`
    font-weight: 800;
    
    @media only screen and (max-width : 768px) {
        width: 75px;
        text-align: center;
        font-size: .8rem;
    }
       
    

`