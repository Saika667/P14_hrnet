import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../feature/user.slice"
import modalReducer from "../feature/modal.slice"


export default configureStore({
    reducer : {
        user: userReducer,
        modal: modalReducer
    }
})