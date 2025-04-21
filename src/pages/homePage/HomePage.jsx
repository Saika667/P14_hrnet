import EmployeeForm from "../../components/employeeForm/EmployeeForm"
import { Page, Wrapper, Title } from "../../utils/Atoms"

function HomePage() {
    return (
        <Page>
            <Wrapper>
                <Title>Create Employee</Title>
                <EmployeeForm />
            </Wrapper>
        </Page>
    )
}

export default HomePage