// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDoL4xpSepifu-DpuiWz_H-P8Uq0a79FSM",
  authDomain: "portifolio-3004c.firebaseapp.com",
  projectId: "portifolio-3004c",
  storageBucket: "portifolio-3004c.appspot.com",
  messagingSenderId: "1038743598600",
  appId: "1:1038743598600:web:533e33093942ef6d7a03bd",
  measurementId: "G-G6XB59SD15"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)