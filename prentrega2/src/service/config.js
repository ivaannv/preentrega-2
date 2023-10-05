// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
  authDomain: "prentregafinal.firebaseapp.com",
  projectId: "prentregafinal",
  storageBucket: "prentregafinal.appspot.com",
  messagingSenderId: "295065161633",
  appId: "1:295065161633:web:90313bd2c52215328e05e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);