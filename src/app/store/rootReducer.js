import { combineReducers } from "redux"
import { authReducer } from "../../features/account/authReducer"
import { profileReducer } from "../../features/profile/profileReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
})