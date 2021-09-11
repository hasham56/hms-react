import { combineReducers } from "redux"
import { authReducer } from "../../features/account/authReducer"
import { iconReducer } from "../../features/header/iconReducer"
import { profileReducer } from "../../features/profile/profileReducer"
import { asyncReducer } from "../async/asyncReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    async: asyncReducer,
    icon: iconReducer
})