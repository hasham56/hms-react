import { combineReducers } from "redux"
import { authReducer } from "../../features/account/authReducer"
import { photoReducer } from "../../features/editPhoto/photoReducer"
import { iconReducer } from "../../features/header/iconReducer"
import { profileReducer } from "../../features/profile/profileReducer"
import { asyncReducer } from "../async/asyncReducer"
import { doctorsReducer } from "../../features/pages/doctors/doctorsReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    async: asyncReducer,
    icon: iconReducer,
    photo: photoReducer,
    doctors: doctorsReducer
})