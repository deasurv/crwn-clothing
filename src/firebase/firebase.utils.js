import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyASlSbswykspDYVjg0mBDEEGXmxLCFjl7c",
  authDomain: "crwn-db-mjd.firebaseapp.com",
  projectId: "crwn-db-mjd",
  storageBucket: "crwn-db-mjd.appspot.com",
  messagingSenderId: "503874712098",
  appId: "1:503874712098:web:3a8ef6f4f24cfac430107b",
  measurementId: "G-LY4NYQE4LM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
