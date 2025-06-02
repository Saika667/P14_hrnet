import Users from "../../assets/users.svg?react"
import { Button, Text } from "./HeaderButtonStyle"

function HeaderButton () {
    return (
        <Button to="/employees">
            <Users />
            <Text>View Current Employees</Text>
        </Button>
    )
}

export default HeaderButton