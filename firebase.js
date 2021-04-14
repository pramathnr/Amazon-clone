import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2xJqkb7DDauaay6H_9b7Hx5s1rzaWarM",
    authDomain: "clone-eaba8.firebaseapp.com",
    projectId: "clone-eaba8",
    storageBucket: "clone-eaba8.appspot.com",
    messagingSenderId: "494585165971",
    appId: "1:494585165971:web:a655274b458aed1ad8b566",
    measurementId: "G-8KQGEGYV7E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};