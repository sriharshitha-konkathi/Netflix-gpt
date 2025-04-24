// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBy5-nK_LYDg0GYIay5dp6utTMvEgOujq0",
  authDomain: "netflixgpt-2a16c.firebaseapp.com",
  projectId: "netflixgpt-2a16c",
  storageBucket: "netflixgpt-2a16c.firebasestorage.app",
  messagingSenderId: "726900306839",
  appId: "1:726900306839:web:68a5f2bdd4443996f10ad2",
  measurementId: "G-FVZQNC2WX3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
