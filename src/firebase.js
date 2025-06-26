// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABhMomxMdxDFF3fxT1_ZLjvm7xh5SiVoc",
  authDomain: "patteform.firebaseapp.com",
  databaseURL: "https://patteform-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "patteform",
  storageBucket: "patteform.firebasestorage.app",
  messagingSenderId: "107509586416",
  appId: "1:107509586416:web:e9eec71b7aeeb2b9b7a535",
  measurementId: "G-NBGP624277"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };