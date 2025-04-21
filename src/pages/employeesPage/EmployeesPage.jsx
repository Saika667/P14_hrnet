import Table from "../../components/table/Table"
import { Page, Title, Wrapper } from "../../utils/Atoms"

function EmployeesPage () {
    return (
        <Page>
            <Wrapper>
                <Title>Current Employees</Title>
                <Table />
            </Wrapper>
        </Page>
    )
}

export default EmployeesPage