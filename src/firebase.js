import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Tempel config object dari Firebase Console
  apiKey: "AIzaSyDe2FJbd4Ty8Sg5XFmS00imgqJvYTbpEQ0",
  authDomain: "lost-found-61d0c.firebaseapp.com",
  projectId: "lost-found-61d0c",
  storageBucket: "lost-found-61d0c.firebasestorage.app",
  messagingSenderId: "247315226129",
  appId: "1:247315226129:web:ad0cbd295fcc85fc49dbb0",
  measurementId: "G-Y6RDNDJR60",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
