import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: false
}

export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: initialState,
    reducers: {
        setIsOpen: (state, { payload }) => {
            state.isOpen = payload
        }
    }
})

export const { setIsOpen } = modalSlice.actions
export default modalSlice.reducer