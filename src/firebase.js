import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNfvtDmagSxksMzQHMi9UIHSPf212EAaM",
  authDomain: "slack-clone-60917.firebaseapp.com",
  projectId: "slack-clone-60917",
  storageBucket: "slack-clone-60917.appspot.com",
  messagingSenderId: "264733567274",
  appId: "1:264733567274:web:510046c8d4099cd68a9653",
  measurementId: "G-0RX988JQV0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
