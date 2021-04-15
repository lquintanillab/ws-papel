import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDsPRUfH5Q88_ztRXQfP-_6clcZDZ6mKVk",
    authDomain: "e-commerce-34722.firebaseapp.com",
    databaseURL: "https://e-commerce-34722.firebaseio.com",
    projectId: "e-commerce-34722",
    storageBucket: "e-commerce-34722.appspot.com",
    messagingSenderId: "1085977580220",
    appId: "1:1085977580220:web:c6c34e26e3a4e31ffc36b9",
    measurementId: "G-T4L6VFV9B3"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const emailPasswordProvider = new firebase.auth.EmailAuthProvider();
  const googleAuthprovider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {
      db,
      emailPasswordProvider,
      googleAuthprovider,
      storage,
        firebase
  }