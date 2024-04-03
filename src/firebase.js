// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2RUCmJsjahNjcX2F60JSkikTdnqX5hdM",
  authDomain: "sdfdsf-7a11a.firebaseapp.com",
  projectId: "sdfdsf-7a11a",
  storageBucket: "sdfdsf-7a11a.appspot.com",
  messagingSenderId: "641171076181",
  appId: "1:641171076181:web:679d5f331bacf25eba50dc",
  measurementId: "G-LQHTF1YDDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const provider = new GoogleAuthProvider();
export const db=getFirestore(app);
// whenever a user interacts with the provider, we force them to select an account
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);