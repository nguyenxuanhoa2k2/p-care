// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFu_3jtYj6dkkhub1irvRY4wimU2q50tE",
  authDomain: "esp8266-firebase-7052f.firebaseapp.com",
  databaseURL: "https://esp8266-firebase-7052f-default-rtdb.firebaseio.com",
  projectId: "esp8266-firebase-7052f",
  storageBucket: "esp8266-firebase-7052f.appspot.com",
  messagingSenderId: "728856034202",
  appId: "1:728856034202:web:cb72d7d8ccfcaeb125d823",
  measurementId: "G-HSV9T2T68B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
const analytics = getAnalytics(app);