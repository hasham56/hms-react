import { LISTEN_TO_CURRENT_USER_PROFILE } from './profileConstants'
import { CHANGE_PASSWORD } from './profileConstants'

const initialState = {
    currentUserProfile: null,
    changePassword: false,
    userEmail: null
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
        default: {
            return state
        }
    }
}