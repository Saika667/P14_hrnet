import styled from "styled-components"

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #e0e0ff;
    padding: 2rem;
    border-radius: 1.5rem;
    margin-top: 2rem;
    box-shadow: 0 10px 20px 0 #9a89ff;

    @media only screen and (max-width : 768px) {
        width: 95%;
        box-sizing: border-box;
    }
`

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0;
`