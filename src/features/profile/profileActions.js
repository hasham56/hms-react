import { LISTEN_TO_CURRENT_USER_PROFILE } from './profileConstants'
import { CHANGE_PASSWORD } from './profileConstants'

export const listenToCurrentUserProfile = (profile) => {
    
    return {
        type: LISTEN_TO_CURRENT_USER_PROFILE,
        payload: profile
    }
}

export const setChangePassword = (value) => {

    return {
        type: CHANGE_PASSWORD,
        payload: value
    }
}