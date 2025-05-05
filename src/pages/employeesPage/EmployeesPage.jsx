import Table from "../../components/table/Table"
import { Page } from "../../utils/Atoms"
import { WrapperElt, Title } from "./EmployeesPageStyle"

function EmployeesPage () {
    return (
        <Page>
            <WrapperElt>
                <Title>Current Employees</Title>
                <Table />
            </WrapperElt>
        </Page>
    )
}

export default EmployeesPage