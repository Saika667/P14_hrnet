import HeaderButton from "../headerButton/HeaderButton"
import { HeaderElt, HeaderLink, Title } from "./HeaderStyle"

function Header () {
    return (
        <HeaderElt>
            <HeaderLink to="/">
                <Title>HRnet</Title>
            </HeaderLink>

            <HeaderButton />
        </HeaderElt>
    )
}

export default Header