// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT8wDDFdPDtgEe9YBTtfVNafLd22rKHNM",
  authDomain: "alcontin-mobile-app.firebaseapp.com",
  projectId: "alcontin-mobile-app",
  storageBucket: "alcontin-mobile-app.firebasestorage.app",
  messagingSenderId: "756444183960",
  appId: "1:756444183960:web:49c33a678f23514fc9ffed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);