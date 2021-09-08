import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer.js'
import { verifyAuth } from '../../features/account/authActions'
import thunk from 'redux-thunk'

export const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(thunk))
    store.dispatch(verifyAuth())
    return store
}