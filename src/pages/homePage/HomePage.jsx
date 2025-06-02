import { useDispatch, useSelector } from "react-redux"
import EmployeeForm from "../../components/employeeForm/EmployeeForm"
import { Page, Wrapper, Title } from "../../utils/Atoms"
import { Modal } from "projet14-modal-library"
import "projet14-modal-library/dist/index.css"
import { setIsOpen } from "../../feature/modal.slice"
import { useNavigate } from "react-router-dom"

function HomePage() {
    const isModalOpen = useSelector(({ modal }) => modal.isOpen)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onModalClose = () => {
        dispatch(setIsOpen(false))
        navigate('/employees')
    }

    return (
        <Page>
            <Modal open={ isModalOpen } onClose={ onModalClose } backgroundColor="#E3E3E3">
                Employee Created !
            </Modal>
            <Wrapper>
                <Title>Create Employee</Title>
                <EmployeeForm />
            </Wrapper>
        </Page>
    )
}

export default HomePage