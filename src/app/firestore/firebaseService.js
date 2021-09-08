import firebase from "../config/firebase"
import { setUserProfileData } from "./firebaseStore"

export const signInWithEmail = (creds) => {
    return firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password)
}

export const signOutFirebase = () => {
    return firebase.auth().signOut()
}

export async function registerInFirebase(creds) {
    try{
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(creds.email, creds.password)
        await result.user.updateProfile({
            displayName: creds.displayName
        })
        return await setUserProfileData(result.user)
    } catch (error) {
        console.log(error)
        throw error
    }
}