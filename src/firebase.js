// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDlebaL8_bgoI7uzL_RaN0MnqZxF9hqxw",
  authDomain: "todoproject-16908.firebaseapp.com",
  projectId: "todoproject-16908",
  storageBucket: "todoproject-16908.appspot.com",
  messagingSenderId: "405334187130",
  appId: "1:405334187130:web:25526d2468dca0d66a2fc3",
  measurementId: "G-CJJ2V63T5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);