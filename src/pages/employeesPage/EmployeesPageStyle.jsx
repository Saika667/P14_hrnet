import styled from "styled-components";
import { Wrapper } from "../../utils/Atoms";

export const WrapperElt = styled(Wrapper)`
    width: 80%;

    @media only screen and (max-width : 768px) {
        width: 95%;
        padding: 1rem;
    }
`

export const Title = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin: 1rem 0 3rem 0;
`