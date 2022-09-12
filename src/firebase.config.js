import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_tCELwJvFTBHZiByBbQpSj_6_dlu_R4Y",
  authDomain: "min-notes-89eaf.firebaseapp.com",
  projectId: "min-notes-89eaf",
  storageBucket: "min-notes-89eaf.appspot.com",
  messagingSenderId: "330046385037",
  appId: "1:330046385037:web:901910e862abfb41c0ebc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
