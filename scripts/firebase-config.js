// =====================================
// NILE MUSIC FIREBASE CONFIG
// =====================================


// Firebase App
import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


// Firebase Authentication
import { getAuth }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// Firestore Database
import { getFirestore }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { getStorage }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


// Firebase Configuration

const firebaseConfig = {

  apiKey: "AIzaSyDzWVn72MUkmPs4yC8Fhr-ZmI0E03gi_Mg",

  authDomain: "nile-music-14721.firebaseapp.com",

  projectId: "nile-music-14721",

  storageBucket:
  "nile-music-14721.firebasestorage.app",

  messagingSenderId:
  "662872020281",

  appId:
  "1:662872020281:web:7ca2941c8deb333c8084e8"

};




// Initialize Firebase

const app = initializeApp(firebaseConfig);




// Initialize Services

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// Export

export {
    auth,
    db,
    storage
};

