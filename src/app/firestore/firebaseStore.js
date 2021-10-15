import firebase from '../config/firebase'
import cuid from 'cuid'

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

export const getAllDoctors = (observer) => {

    return db.collection('doctors').onSnapshot(observer)
}

export const getAllFAQs = (observer) => {

    return db.collection('faqs').orderBy('index').onSnapshot(observer)
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

export async function addUserMessage(data) {

    try {
        return await db.collection('contact').doc(cuid()).set({
            name: data.fullName,
            email: data.email,
            message: data.message
        })
    } catch (error) {
        throw error
    }
}


















// export const setDoctorData = () => {
//     try {
//         return db.collection('doctors').doc(cuid()).set({
//             name: 'Bella Stone',
//             specialty: 'Urologist',
//             phone: '090078607',
//             email: 'bellastone@gmail.com',
//             gender: 'Female',
//             university: 'University of NewYork',
//             age: 39,
//             photoURL: 'https://firebasestorage.googleapis.com/v0/b/docfind56.appspot.com/o/doctors%2FDoctor2.png?alt=media&token=19261e37-9804-4257-89cc-61a4cf5a1cd5',
//             hospital: {
//                 name: 'NewYork Hospital',
//                 address: 'Lahore, Pakistan',
//                 email: 'newyorkhospital@gmail.com',
//                 website: 'www.newyorkhospital.com',
//                 phone: [
//                     '090078601',
//                     '090078602'
//                 ],
//                 specialty: {
//                     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus magni totam similique et reiciendis expedita voluptatibus. Vel quasi voluptates quis, consequuntur dignissimos laborum accusantium. Pariatur laborum inventore assumenda earum!',
//                     specialties: [
//                         'ENT',
//                         'Gynecology',
//                         'Dentistry',
//                         'Neorology',
//                         'Urology'
//                     ]
//                 },
//                 overview: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quas! Quam maxime architecto sequi eos at dicta rerum consectetur recusandae ipsum officia perferendis illo placeat obcaecati laboriosam similique, reprehenderit aliquam?',
//                 detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illo, tempore distinctio consequuntur ea, eos excepturi, tempora consectetur repellendus ex rem rerum sapiente alias doloremque iste soluta. Iure, alias blanditiis! Consectetur laboriosam nostrum fugiat quae atque, odio, earum quaerat impedit, reiciendis excepturi ex reprehenderit nulla quas error maiores. Reiciendis beatae quas reprehenderit minus dolor mollitia asperiores perspiciatis cum ex similique!',
//             },
//             from: 'NewYork, Punjab',
//             experience: [
//                 7,
//                 10
//             ],
//             availability: [
//                 'Monday',
//                 'Friday',
//                 'Saturday',
//                 'Sunday'
//             ],
//             reviews: []
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// {
//     name: '',
//     email: '',
//     rating: 3,
//     photoURL: '',
//     review: ''
// }