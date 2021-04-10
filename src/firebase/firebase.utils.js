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

export const createUserProfileDocument = async (userAuth, payload) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...payload,
      });
    } catch (error) {
      console.log("Error at creating user!", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
