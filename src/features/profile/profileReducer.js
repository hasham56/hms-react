import { EDIT_PROFILE, LISTEN_TO_CURRENT_USER_PROFILE, CHANGE_PASSWORD } from './profileConstants'

const initialState = {
    currentUserProfile: null,
    changePassword: false,
    userEmail: null,
    editProfile: false
}

export const profileReducer = (state=initialState, {type, payload}) => {

    switch(type){
        case LISTEN_TO_CURRENT_USER_PROFILE:
            return {
                ...state,
                currentUserProfile: payload
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                changePassword: payload.changePassword,
                userEmail: payload.userEmail
            }
        case EDIT_PROFILE:
            return {
                ...state,
                editProfile: payload
            }
        default: {
            return state
        }
    }
}