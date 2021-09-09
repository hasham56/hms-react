const ASYNC_ACTION_START = 'ASYN_ACTION_START'
const ASYNC_ACTION_FINISH = 'ASYNC_ACTION_FINISH'

export const asyncActionStart = () => {

    return {
        type: ASYNC_ACTION_START
    }
}

export const asyncActionFinish = () => {
    
    return {
        type: ASYNC_ACTION_FINISH
    }
}

const initialState = {
    loading: false,
    error: null,
}

export const asyncReducer = (state = initialState, {type}) => {

    switch (type) {
        case ASYNC_ACTION_START:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ASYNC_ACTION_FINISH:
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}