// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "testing-for-react.firebaseapp.com",
    databaseURL: "https://testing-for-react-default-rtdb.firebaseio.com",
    projectId: "testing-for-react",
    storageBucket: "testing-for-react.appspot.com",
    messagingSenderId: "439857693976",
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: "G-X6C3T80D4N"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const database = getDatabase(app);
export const db = getDatabase(app);
