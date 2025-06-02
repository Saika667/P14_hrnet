import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    &.half {
        width: 49%;
    }

    @media only screen and (max-width : 768px) {
        &.half {
            width: 100%;
        }
    }
`

export const Label = styled.label`
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
`

export const Select = styled.select`
    border: 1px solid #2d79e5;
    padding: 0.5rem;
    border-radius: 7px;
    font-size: 1.5rem;
    color: #242471;

    &:focus {
        outline: 2px solid blue;
    }
`

export const Option = styled.option`

`