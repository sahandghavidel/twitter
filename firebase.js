// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHRkCZ7vOgdW7XdQ7mdQLCfnL07XCgnt4",
  authDomain: "twitter-700bf.firebaseapp.com",
  databaseURL: "https://twitter-700bf-default-rtdb.firebaseio.com",
  projectId: "twitter-700bf",
  storageBucket: "twitter-700bf.appspot.com",
  messagingSenderId: "247702944809",
  appId: "1:247702944809:web:cc47aebbac2d8d1282b038",
  measurementId: "G-QPFHZ8BXN7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
