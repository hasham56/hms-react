import firebase from '../config/firebase'

const db = firebase.firestore()

export const setUserProfileData = (user) => {
    return db.collection('users').doc(user.uid).set({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || '',
        phone: user.phone || '',
        address: user.address || '',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const getUserProfile = (userId) => {
    return db.collection('users').doc(userId)
}

export async function updateUserPhoto(downloadURL) {

    const user = firebase.auth().currentUser
    
    try {
        await db.collection('users').doc(user.uid).update({
            photoURL: downloadURL
        })
        return await user.updateProfile({
            photoURL: downloadURL
        })
    } catch (error) {
        throw error
    }
}