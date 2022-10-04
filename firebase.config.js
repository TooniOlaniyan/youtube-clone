// Import the functions you need from the SDKs you need
import firebase from 'firebase'
import 'firebase/storage'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAbxVB3DC6PnaYcSobp7Cr2pLJCelNgC7k',
  authDomain: 'facebook-clone-39ad9.firebaseapp.com',
  projectId: 'facebook-clone-39ad9',
  storageBucket: 'facebook-clone-39ad9.appspot.com',
  messagingSenderId: '978822072701',
  appId: '1:978822072701:web:f745bad92268556e7b6414',
  measurementId: 'G-SEW5XWBW43',
}

// Initialize Firebase
const app = !firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore()
const storage = firebase.storage()
export {db , storage}
