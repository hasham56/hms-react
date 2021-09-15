const CHANGE_ICON_LOCATION = 'CHANGE_ICON_LOCATION'

export const changeIconLocation = (value) => {

    return {
        type: CHANGE_ICON_LOCATION,
        payload: value
    }
}

const initialState = {
    iconLocation: 'right'
}

export const iconReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case CHANGE_ICON_LOCATION:
            return {
                ...state,
                iconLocation: payload
            }
        default: 
            return state
    }
}