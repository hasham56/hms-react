import firebase from '../config/firebase'
import cuid from 'cuid'

const db = firebase.firestore()

export const setUserProfileData = ( user ) => {
    return db.collection( 'users' ).doc( user.uid ).set( {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL || '',
        phone: user.phone || '',
        address: user.address || '',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    } )
}

export const getUserProfile = ( userId ) => {
    return db.collection( 'users' ).doc( userId )
}

export async function updateUserPhoto( downloadURL ) {

    const user = firebase.auth().currentUser

    try {
        await db.collection( 'users' ).doc( user.uid ).update( {
            photoURL: downloadURL
        } )
        return await user.updateProfile( {
            photoURL: downloadURL
        } )
    } catch ( error ) {
        throw error
    }
}

export const getAllDoctors = ( observer ) => {

    return db.collection( 'doctors' ).onSnapshot( observer )
}

export const getAllFAQs = ( observer ) => {

    return db.collection( 'faqs' ).orderBy( 'index' ).onSnapshot( observer )
}

export const getHospitalData = ( hospitalId, observer ) => {
    return db.collection( 'hospitals' ).doc( hospitalId ).onSnapshot( observer )
}

export const getReviews = ( doctorId, observer ) => {
    return db.collection( 'reviews' ).doc( doctorId ).onSnapshot( observer )
}

export const dataFromSnapshot = ( snapshot ) => {

    if ( !snapshot.exists ) return undefined
    const data = snapshot.data()

    for ( const prop in data ) {
        if ( data.hasOwnProperty( prop ) ) {
            if ( data[ prop ] instanceof firebase.firestore.Timestamp ) {
                data[ prop ] = data[ prop ].toDate()
            }
        }
    }
    return {
        ...data,
        id: snapshot.id
    }
}

export const addUserMessage = async ( data ) => {

    try {
        return await db.collection( 'contact' ).doc( cuid() ).set( {
            name: data.fullName,
            email: data.email,
            message: data.message
        } )
    } catch ( error ) {
        throw error
    }
}


export const setDoctorData = () => {
    try {
        return db.collection( 'doctors' ).doc( cuid() ).set( {
            name: 'Maha Dactor',
            specialty: [ 'Orthopedic', 'Gynacologist' ],
            phone: '090078607',
            email: 'mahadoctor@gmail.com',
            gender: 'Female',
            university: 'University of NewYork',
            age: 39,
            photoURL: 'https://firebasestorage.googleapis.com/v0/b/docfind56.appspot.com/o/doctors%2FMaha.jpg?alt=media&token=addcf345-4051-4617-b8cb-30e0aa7320f0',
            hospital: {
                id: 'lahore_hospital',
                name: 'Lahore Hospital'
            },
            from: 'NewYork, Punjab',
            experience: [
                7,
                10
            ],
            availability: [
                'Monday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            reviews: []
        } )
    } catch ( error ) {
        console.log( error )
    }
}