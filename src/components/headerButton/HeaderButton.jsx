import Users from "../../assets/users.svg?react"
import { Button } from "./HeaderButtonStyle"

function HeaderButton () {
    return (
        <Button to="/employees">
            <Users />
            View Current Employees
        </Button>
    )
}

export default HeaderButton