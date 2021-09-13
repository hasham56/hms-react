import firebase from "../config/firebase"
import { setUserProfileData } from "./firebaseStore"

const db = firebase.firestore()

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
            displayName: creds.displayName,
        })
        return await setUserProfileData(result.user)
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const dataFromSnapshot = (snapshot) => {
    
    if (!snapshot.exists) return undefined
    const data = snapshot.data()

    for (const prop in data) {
        if (data.hasOwnProperty(prop)) {
            if (data[prop] instanceof firebase.firestore.Timestamp) {
                data[prop] = data[prop].toDate()
            }
        }
    }
    return {
        ...data,
        id: snapshot.id
    }
}

export async function updateUserProfile(profile) {

    const user = firebase.auth().currentUser

    try {
        await user.updateEmail(profile.email)
        return await db.collection('users').doc(user.uid).update(profile)
    } catch (error) {
        throw error
    }
}

export async function updatePassword(profile) {

    const user = firebase.auth().currentUser

    try {
        return await user.updatePassword(profile.password)
    } catch (error) {
        throw error
    }
}
