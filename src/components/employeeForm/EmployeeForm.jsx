import { useDispatch, useSelector } from "react-redux"
import Input from "../input/Input"
import { AdressContainer, ButtonContainer, Form, FormTitle, InputDuoContainer, UserContainer } from "./EmployeeFormStyle"
import { resetForm, setInputError, setInputValue, createEmployee as createEmployeeSlice } from "../../feature/user.slice"
import SelectMenu from "../selectMenu/SelectMenu"
import { statesData, departmentData } from "../../data/data"
import FormButton from "../formButton/FormButton"
import { setIsOpen } from "../../feature/modal.slice"

function EmployeeForm () {
    const storeInputs = useSelector(({ user }) => user.employeeForm)
    const employeesList = useSelector(({ user }) => user.employees)
    const dispatch = useDispatch()

    const getInputValue = (inputId) => {
        return storeInputs.find(storeInput => storeInput.id === inputId).value
    }
    
    const getErrorValue = (inputId) => {
        return storeInputs.find(storeInput => storeInput.id === inputId).error
    }

    const handleInputChange = (inputId, value) => {
        dispatch(setInputValue({ id: inputId, value: value }))
    }

    const createEmployee = (e) => {
        e.preventDefault()

        let hasError = false
        let newEmployee = {}

        storeInputs.forEach(obj => {
            if (obj.value === "") {
                hasError = true
                dispatch(setInputError({ id: obj.id, value: "Le champ ne peut pas être vide." }))
            } else {
                dispatch(setInputError({ id: obj.id, value: "" }))
            }
        })

        if (hasError) {
            return
        }

        storeInputs.forEach(obj => {
            const inputKey = obj.id.replace('form-', '')

            if (inputKey === "birth" || inputKey === "start") {
                const [year, month, day] = obj.value.split("-")
                const newDate = `${ day }-${ month }-${ year }`
                newEmployee[inputKey] = newDate
            } else {
                newEmployee[inputKey] = obj.value
            }
        })
        
        const lastId = employeesList.length > 0 ? employeesList[employeesList.length - 1].id : 0
        newEmployee.id = lastId + 1
        dispatch(createEmployeeSlice(newEmployee))

        dispatch(setIsOpen(true))

        dispatch(resetForm())
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
                        onkeydown={ (e) => {
                            if (e.key === "Enter") {
                                createEmployee(e)
                            }
                        }}
                        errorMessage={ getErrorValue("form-first-name") }
                    />

                    <Input
                        id="form-last-name"
                        label="Last Name"
                        type="text"
                        inputValue={ getInputValue("form-last-name") }
                        change={ (value) => handleInputChange('form-last-name', value) }
                        classname="half"
                        onkeydown={ (e) => {
                            if (e.key === "Enter") {
                                createEmployee(e)
                            }
                        }}
                        errorMessage={ getErrorValue("form-last-name") }
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
                        onkeydown={ (e) => {
                            if (e.key === "Enter") {
                                createEmployee(e)
                            }
                        }}
                        errorMessage={ getErrorValue("form-birth") }
                    />

                    <Input
                        id="form-start"
                        label="Start Date"
                        type="date"
                        inputValue={ getInputValue("form-start") }
                        change={ (value) => handleInputChange('form-start', value) }
                        classname="half"
                        onkeydown={ (e) => {
                            if (e.key === "Enter") {
                                createEmployee(e)
                            }
                        }}
                        errorMessage={ getErrorValue("form-start") }
                    />
                </InputDuoContainer>
            </UserContainer>

            <AdressContainer>
                <FormTitle>Address</FormTitle>

                <Input
                    id="form-street"
                    label="Street"
                    type="text"
                    inputValue={ getInputValue("form-street") }
                    change={ (value) => handleInputChange('form-street', value) }
                    onkeydown={ (e) => {
                        if (e.key === "Enter") {
                            createEmployee(e)
                        }
                    }}
                    errorMessage={ getErrorValue("form-street") }
                />

                <Input
                    id="form-city"
                    label="City"
                    type="text"
                    inputValue={ getInputValue("form-city") }
                    change={ (value) => handleInputChange('form-city', value) }
                    onkeydown={ (e) => {
                        if (e.key === "Enter") {
                            createEmployee(e)
                        }
                    }}
                    errorMessage={ getErrorValue("form-city") }
                />
                <InputDuoContainer>
                    <SelectMenu
                        data={ statesData }
                        label="State"
                        id="form-state"
                        classname="half"
                        selectValue={ getInputValue("form-state") }
                        change={ (value) => handleInputChange("form-state", value) }
                    />

                    <Input
                        id="form-zipcode"
                        label="Zipcode"
                        type="number"
                        inputValue={ getInputValue("form-zipcode") }
                        change={ (value) => handleInputChange('form-zipcode', value) }
                        classname="half"
                        onkeydown={ (e) => {
                            if (e.key === "Enter") {
                                createEmployee(e)
                            }
                        }}
                        errorMessage={ getErrorValue("form-zipcode") }
                    />
                </InputDuoContainer>
            </AdressContainer>

            <FormTitle>Department</FormTitle>

            <SelectMenu
                data={ departmentData }
                label="State"
                id="form-department"
                selectValue={ getInputValue("form-department") }
                change={ (value) => handleInputChange("form-department", value) }
            />

            <ButtonContainer>
                <FormButton onclick={ (e) => createEmployee(e) }/>
            </ButtonContainer>
        </Form>
    )
}

export default EmployeeForm