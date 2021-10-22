// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3QdCGn21fK66-XduMJz5DhT-zvhNUKuI",
  authDomain: "reactnetflixweb.firebaseapp.com",
  projectId: "reactnetflixweb",
  storageBucket: "reactnetflixweb.appspot.com",
  messagingSenderId: "1077281082719",
  appId: "1:1077281082719:web:7ffeaf19b15c04f711faea",
  measurementId: "G-00NVWSGPPJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
