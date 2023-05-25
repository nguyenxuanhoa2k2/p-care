// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyCHkqZGyVBuFbog9kS-C1DPmOm1bXX9-9w",
//   authDomain: "fir-max30100.firebaseapp.com",
//   databaseURL: "https://fir-max30100-default-rtdb.firebaseio.com",
//   projectId: "fir-max30100",
//   storageBucket: "fir-max30100.appspot.com",
//   messagingSenderId: "313222019148",
//   appId: "1:313222019148:web:be223cbd781811bc545ce9",
//   measurementId: "G-0B6DL6G15X"
// };

const firebaseConfig = {
  apiKey: "AIzaSyASd6mjrpA3DB-At1PR1RA8VL_L-kNcM3U",
  authDomain: "p-care-c53d2.firebaseapp.com",
  databaseURL: "https://p-care-c53d2-default-rtdb.firebaseio.com",
  projectId: "p-care-c53d2",
  storageBucket: "p-care-c53d2.appspot.com",
  messagingSenderId: "189527122498",
  appId: "1:189527122498:web:201a5beda2c40a95c4c3db",
  measurementId: "G-VQ2MLMNZF8"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
const analytics = getAnalytics(app);