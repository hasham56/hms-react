import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDYle386DR3Z6U5imKCrGZ7GjiORxECsaI",
  authDomain: "docfind56.firebaseapp.com",
  projectId: "docfind56",
  storageBucket: "docfind56.appspot.com",
  messagingSenderId: "529447288280",
  appId: "1:529447288280:web:c3d105895927ebc7d486ad"
}

firebase.initializeApp(firebaseConfig)

export default firebase