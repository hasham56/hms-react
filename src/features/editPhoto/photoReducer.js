const UPDATE_PHOTO_SOURCE = 'UPDATE_PHOTO_SOURCE'

export const updatePhotoSource = (source) => {

    return {
        type: UPDATE_PHOTO_SOURCE,
        payload: source
    }
}

const initialState = {
    photoSource: null,
    filename: ''
}

export const photoReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case UPDATE_PHOTO_SOURCE:
            return {
                ...state,
                photoSource: payload.photoSource,
                filename: payload.filename
            }
        default: 
            return state
    }
}