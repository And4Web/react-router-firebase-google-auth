import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIvKWH74FIUOYPt0nXWd_47iXh5__pVXo",
  authDomain: "codesandboxlearning.firebaseapp.com",
  projectId: "codesandboxlearning",
  storageBucket: "codesandboxlearning.appspot.com",
  messagingSenderId: "199768112060",
  appId: "1:199768112060:web:190141ca8d5f1cf1d109b9",
  measurementId: "G-X10GKJ1SEY"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
