// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaZHPHipSQS7JtGYcaApCtY8Fi8Bg5f80",
  authDomain: "jaimeet-portfolio.firebaseapp.com",
  projectId: "jaimeet-portfolio",
  storageBucket: "jaimeet-portfolio.appspot.com",
  messagingSenderId: "469257122144",
  appId: "1:469257122144:web:fa3322f4f5ca274301ee05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 const db = getFirestore();
 export default db; 