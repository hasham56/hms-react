const CHANGE_ICON_LOCATION_RIGHT = 'CHANGE_ICON_LOCATION_RIGHT'
const CHANGE_ICON_LOCATION_LEFT = 'CHANGE_ICON_LOCATION_LEFT'

export const changeIconLocationRight = () => {

    return {
        type: CHANGE_ICON_LOCATION_RIGHT
    }
}

export const changeIconLocationLeft = () => {

    return {
        type: CHANGE_ICON_LOCATION_LEFT
    }
}

const initialState = {
    iconLocation: 'right'
}

export const iconReducer = (state = initialState, {type}) => {

    switch (type) {
        case CHANGE_ICON_LOCATION_LEFT:
            return {
                ...state,
                iconLocation: 'left'
            }
        case CHANGE_ICON_LOCATION_RIGHT:
            return {
                ...state,
                iconLocation: 'right'
            }
        default: 
            return state
    }
}