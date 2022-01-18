// Import the functions you need from the SDKs you need

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiErweGnYZK4UmaBws0NRKD6HFX7-6AGs",
  authDomain: "instagram-clone-58124.firebaseapp.com",
  projectId: "instagram-clone-58124",
  storageBucket: "instagram-clone-58124.appspot.com",
  messagingSenderId: "12757455461",
  appId: "1:12757455461:web:1be68c2fe5c8a8bc94ec8c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth,db}

