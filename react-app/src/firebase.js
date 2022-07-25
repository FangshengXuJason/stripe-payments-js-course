import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// UPDATED!!!
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyBP2O_1_yZ2vRjHO-FXbc8T1yzISO0xa3c',
  authDomain: 'test-project-1-d10d8.firebaseapp.com',
  projectId: 'test-project-1-d10d8',
  storageBucket: 'test-project-1-d10d8.appspot.com',
  messagingSenderId: '67946379645',
  appId: '1:67946379645:web:cfe571bfbbe2a86f25b414',
  measurementId: 'G-3BCFY2YNPD',
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
