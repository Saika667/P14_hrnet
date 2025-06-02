import styled from "styled-components"

export const Form = styled.form`

`

export const UserContainer = styled.div`

`

export const AdressContainer = styled.div`

`

export const FormTitle = styled.h3`
    font-size: 1.5rem;

    &.adress {

    }

    &.department {

    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

export const InputDuoContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width : 768px) {
        flex-direction: column;
    }
`