import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTbw1l-jILAoP2dAuffKJ2KB_RBPpGEaA",
  authDomain: "slack-clone-app-71cf5.firebaseapp.com",
  projectId: "slack-clone-app-71cf5",
  storageBucket: "slack-clone-app-71cf5.appspot.com",
  messagingSenderId: "36075071574",
  appId: "1:36075071574:web:7479b642c063ff26a2f3f7",
  measurementId: "G-B9Y22HJ1HT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
