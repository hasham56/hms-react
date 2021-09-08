import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants"

const initialState = {
    authenticated: false,
    currentUser: null
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SIGN_IN_USER:
            return {
                ...state,
                authenticated: true,
                currentUser: {
                    email: payload.email
                }
            }
        case SIGN_OUT_USER:
            return {
                ...state,
                authenticated: false
            }
        default:
            return state
    }
}