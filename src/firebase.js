import firebase from 'firebase';
// import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCOfC2xr3Mr8jvRX6bL8rf2P7iJ-1f7YjE",
    authDomain: "facebook-messenger-clone-c4932.firebaseapp.com",
    projectId: "facebook-messenger-clone-c4932",
    storageBucket: "facebook-messenger-clone-c4932.appspot.com",
    messagingSenderId: "469224974445",
    appId: "1:469224974445:web:d0c54580dabd1c5c9af764",
    measurementId: "G-D10J6HBPYP"
})

const db = firebaseApp.firestore();

export default db;