// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_mD9qfGr_1bAJWFu_5ok438gp5kd_7hk",
  authDomain: "organic-edge-350009.firebaseapp.com",
  projectId: "organic-edge-350009",
  storageBucket: "organic-edge-350009.appspot.com",
  messagingSenderId: "614021542380",
  appId: "1:614021542380:web:2c85b4fc29ac94e5fc90c9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };