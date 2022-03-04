import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDjtennIfsd34n1sOGHcW8tV2GTMb0ED2o",
  authDomain: "e-commerce-95341.firebaseapp.com",
  projectId: "e-commerce-95341",
  storageBucket: "e-commerce-95341.appspot.com",
  messagingSenderId: "570203468280",
  appId: "1:570203468280:web:9c0c0b594b022a6a8a260d",
  measurementId: "G-1RN1W4GSZB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export {auth, db, storage};