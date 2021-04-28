import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDw6nwDhkGqfa-E_Fu88uPNPbFzWeZz8TU",
    authDomain: "crwn-db-f6647.firebaseapp.com",
    projectId: "crwn-db-f6647",
    storageBucket: "crwn-db-f6647.appspot.com",
    messagingSenderId: "69375275230",
    appId: "1:69375275230:web:da253548c90f154c30d24f",
    measurementId: "G-PB9QGW2G0R"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signinWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;