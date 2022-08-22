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
        throw error
    }
}

export async function updateUserProfile(profile) {

    const user = firebase.auth().currentUser

    try {
        await user.updateEmail(profile.email)
        return await db.collection('users').doc(user.uid).update({
            displayName: profile.displayName,
            email: profile.email,
            photoURL: profile.photoURL || '',
            phone: profile.phone || '',
            address: profile.address || '',
            lastUpdatedAt: firebase.firestore.FieldValue.serverTimestamp()
    })
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

export async function sendPasswordResetEmail(data) {
    try {
        return await firebase.auth().sendPasswordResetEmail(data.email)
    } catch (error) {
        throw error
    }
}

export function updateToFirebaseStorage(file, filename) {
    const user = firebase.auth().currentUser
    const storageRef = firebase.storage().ref()
    
    return storageRef.child(`${user.uid}/user_profile_photo/${filename}`).put(file)
}

export async function socialLogin(selectedProvider) {
    let provider;

    if (selectedProvider === 'google') {
        provider = new firebase.auth.GoogleAuthProvider()
    }

    if (selectedProvider === 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider()
    }

    try {
        const result = await firebase.auth().signInWithPopup(provider)
        console.log(result)
        if (result.additionalUserInfo.isNewUser) {
            await setUserProfileData(result.user)
        }
    } catch (error) {
        throw error
    }
}