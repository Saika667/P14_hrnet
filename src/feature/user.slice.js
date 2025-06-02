import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employeeForm: [
        {
            id: 'form-first-name',
            value: '',
            error: ''
        },
        {
            id: 'form-last-name',
            value: '',
            error: ''
        },
        {
            id: 'form-birth',
            value: '',
            error: ''
        },
        {
            id: 'form-start',
            value: '',
            error: ''
        },
        {
            id: 'form-street',
            value: '',
            error: ''
        },
        {
            id: 'form-city',
            value: '',
            error: ''
        },
        {
            id: 'form-zipcode',
            value: '',
            error: ''
        },
        {
            id: 'form-state',
            value: 'Alabama',
            error: ''
        },
        {
            id: 'form-department',
            value: 'Sales',
            error: ''
        }
    ],
    employees: []
}

export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        setInputValue: (state, { payload }) => {
            const { id, value } = payload
            state.employeeForm.forEach(input => {
                if (input.id === id) {
                    input.value = value
                }
            });
        },
        setInputError: (state, { payload }) => {
            const { id, value } = payload
            state.employeeForm.forEach(input => {
                if (input.id === id) {
                    input.error = value
                }
            });
        },
        resetForm: (state) => {
            state.employeeForm = initialState.employeeForm
        },
        createEmployee: (state, { payload }) => {
            const employee = payload
            state.employees.push(employee)
        }
    }
})

export const { setInputValue, setInputError, resetForm, createEmployee } = userSlice.actions
export default userSlice.reducer