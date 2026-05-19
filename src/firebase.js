import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Apna Firebase config yahan paste karein
const firebaseConfig = {
  apiKey: "AIzaSyAzcWJu2NEBhsNmjT8nDpH4hIGE1DORM-I",
  authDomain: "attendance-project-e933b.firebaseapp.com",
  projectId: "attendance-project-e933b",
  storageBucket: "attendance-project-e933b.firebasestorage.app",
  messagingSenderId: "183623814607",
  appId: "1:183623814607:web:46edd371c8492ca701d6ba",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
