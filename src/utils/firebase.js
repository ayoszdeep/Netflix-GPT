// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRZoiKc6ImSCHW552nvkG1eBdpJUqMzTE",
  authDomain: "netflixgpt-b7594.firebaseapp.com",
  projectId: "netflixgpt-b7594",
  storageBucket: "netflixgpt-b7594.firebasestorage.app",
  messagingSenderId: "1005533092835",
  appId: "1:1005533092835:web:a1a21fe94f1979711d1ed6",
  measurementId: "G-80V7PJZCR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);