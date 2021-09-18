const FETCH_DOCTORS = 'FETCH_DOCTORS'

const initialState = {
    doctors: []
}

export const fetchAllDoctors = (doctors) => {

    return {
        type: FETCH_DOCTORS,
        payload: doctors
    }
}

export const doctorsReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case FETCH_DOCTORS:
            return {
                ...state,
                doctors: payload
            }
        default: 
            return state
    }
}