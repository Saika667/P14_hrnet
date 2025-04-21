import { useDispatch, useSelector } from "react-redux"
import Input from "../input/Input"
import { AdressContainer, ButtonContainer, Form, FormTitle, InputDuoContainer, UserContainer } from "./EmployeeFormStyle"
import { setInputValue } from "../../feature/user.slice"
import SelectMenu from "../selectMenu/SelectMenu"
import { statesData, departmentData } from "../../data/data"
import FormButton from "../formButton/FormButton"

function EmployeeForm () {
    const storeInputs = useSelector(({ user }) => user.employeeForm)
    const dispatch = useDispatch()
    //TODO : remplacer l'input date of birth, start date par un calendrier de sélection de date
    const getInputValue = (inputId) => {
        return storeInputs.find(storeInput => storeInput.id === inputId).value
    }
    
    const handleInputChange = (inputId, value) => {
        dispatch(setInputValue({ id: inputId, value: value }))
    }

    const createEmployee = () => {
        console.log('create')
    }

    return (
        <Form>
            <UserContainer>
                <InputDuoContainer>
                    <Input
                        id="form-first-name"
                        label="First Name"
                        type="text"
                        inputValue={ getInputValue("form-first-name") }
                        change={ (value) => handleInputChange('form-first-name', value) }
                        classname="half"
                    />

                    <Input
                        id="form-last-name"
                        label="Last Name"
                        type="text"
                        inputValue={ getInputValue("form-last-name") }
                        change={ (value) => handleInputChange('form-last-name', value) }
                        classname="half"
                    />
                </InputDuoContainer>

                <InputDuoContainer>
                    <Input
                        id="form-birth"
                        label="Date of Birth"
                        type="date"
                        inputValue={ getInputValue("form-birth") }
                        change={ (value) => handleInputChange('form-birth', value) }
                        classname="half"
                    />

                    <Input
                        id="form-start"
                        label="Start Date"
                        type="date"
                        inputValue={ getInputValue("form-start") }
                        change={ (value) => handleInputChange('form-start', value) }
                        classname="half"
                    />
                </InputDuoContainer>
            </UserContainer>

            <AdressContainer>
                <FormTitle>Adress</FormTitle>

                <Input
                    id="form-street"
                    label="Street"
                    type="text"
                    inputValue={ getInputValue("form-street") }
                    change={ (value) => handleInputChange('form-street', value) }
                />

                <Input
                    id="form-city"
                    label="City"
                    type="text"
                    inputValue={ getInputValue("form-city") }
                    change={ (value) => handleInputChange('form-city', value) }
                />
                <InputDuoContainer>
                    <SelectMenu
                        data={ statesData }
                        label="State"
                        id="form-state"
                        classname="half"
                    />

                    <Input
                        id="form-zipcode"
                        label="Zipcode"
                        type="number"
                        inputValue={ getInputValue("form-zipcode") }
                        change={ (value) => handleInputChange('form-zipcode', value) }
                        classname="half"
                    />
                </InputDuoContainer>
            </AdressContainer>

            <FormTitle>Department</FormTitle>

            <SelectMenu
                data={ departmentData }
                label="State"
                id="form-state"
            />

            <ButtonContainer>
                <FormButton />
            </ButtonContainer>
        </Form>
    )
}

export default EmployeeForm