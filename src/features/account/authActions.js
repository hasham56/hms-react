import firebase from '../../app/config/firebase'
import { getUserProfile } from '../../app/firestore/firebaseStore'
import { listenToCurrentUserProfile } from '../profile/profileActions'
import { dataFromSnapshot } from '../../app/firestore/firebaseStore'
import { SIGN_IN_USER, SIGN_OUT_USER } from './authConstants'
import { asyncActionStart, asyncActionFinish } from '../../app/async/asyncReducer'

export const signInUser = (user) => {
    return {
        type: SIGN_IN_USER,
        payload: user
    }
}

export const signOutUser = () => {
    return {
        type: SIGN_OUT_USER
    }
}

export const verifyAuth = () => {
    return function (dispatch) {
        dispatch(asyncActionStart())
        return firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    const profileRef = getUserProfile(user.uid)
                    profileRef.onSnapshot(snapshot => {
                        dispatch(listenToCurrentUserProfile(dataFromSnapshot(snapshot)))
                    })
                    dispatch(signInUser(user))
                    dispatch(asyncActionFinish())
                }
                else {
                    dispatch(signOutUser())
                    dispatch(asyncActionFinish())
                }    
        })
    }
}