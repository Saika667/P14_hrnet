import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderElt = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    box-shadow: 0 0 19px 0 #9a89ff;
`

export const Title = styled.h1`
    margin: 0;
`

export const HeaderLink = styled(Link)`
    text-decoration: none;
    color: #242471;
`