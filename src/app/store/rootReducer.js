import { combineReducers } from "redux"
import { authReducer } from "../../features/account/authReducer"

export const rootReducer = combineReducers({
    auth: authReducer
})