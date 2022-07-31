import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqYa_anijA7aq7LX_z4ukSB7SaS5-hwzc",
    authDomain: "whatsapp-clone-a4359.firebaseapp.com",
    projectId: "whatsapp-clone-a4359",
    storageBucket: "whatsapp-clone-a4359.appspot.com",
    messagingSenderId: "635716988827",
    appId: "1:635716988827:web:158ae3541e37ff56263b3e",
    measurementId: "G-HLE60VD5P6"
  };

  // Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;