import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {

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