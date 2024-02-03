// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "placepulse-b6376.firebaseapp.com",
  projectId: "placepulse-b6376",
  storageBucket: "placepulse-b6376.appspot.com",
  messagingSenderId: "42392130568",
  appId: "1:42392130568:web:6112ea64d70e600b502dbd",
  measurementId: "G-PYT6H8VYHH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
