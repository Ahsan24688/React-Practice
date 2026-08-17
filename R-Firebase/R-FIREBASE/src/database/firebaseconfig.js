// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, doc, getDocs,updateDoc, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfOutTxG2jvjm43tkbaALZ6MTp5JoEDBI",
  authDomain: "react-app-with-authentic-812c4.firebaseapp.com",
  projectId: "react-app-with-authentic-812c4",
  storageBucket: "react-app-with-authentic-812c4.firebasestorage.app",
  messagingSenderId: "645645400383",
  appId: "1:645645400383:web:127fbfeff283d3996bbb8a",
  measurementId: "G-3ZGDM3LXJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {db, addDoc, collection, doc, getDocs, updateDoc, deleteDoc};