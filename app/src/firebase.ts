// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLupdQJsAnw3rRB2Zwu8ieX5icPCSQin0",
  authDomain: "time2meet-123.firebaseapp.com",
  projectId: "time2meet-123",
  storageBucket: "time2meet-123.firebasestorage.app",
  messagingSenderId: "450651838680",
  appId: "1:450651838680:web:03914d534a44c22c2c9fad",
  measurementId: "G-DW5J7991DW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);