import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeWSw3ObBUVh-t-CADblJXr3SWHNAEj3A",
  authDomain: "softeem-model.firebaseapp.com",
  projectId: "softeem-model",
  storageBucket: "softeem-model.appspot.com",
  messagingSenderId: "1061993915362",
  appId: "1:1061993915362:web:96f09e8dd122f0bd8e8fbb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);
};
