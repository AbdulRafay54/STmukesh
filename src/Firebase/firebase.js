import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGNZ9xgnx1pVgnzaRx-848NAQThGFK0DE",
  authDomain: "blogging-app-9a26a.firebaseapp.com",
  projectId: "blogging-app-9a26a",
  storageBucket: "blogging-app-9a26a.appspot.com",
  messagingSenderId: "878879403569",
  appId: "1:878879403569:web:8b19fe82d33451c915ef10",
  measurementId: "G-PQ6V404JBM"
};

const app = initializeApp(firebaseConfig);

// Auth add karo 👇
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // YE ADD KARO
// Analytics (optional safe check)
export const analytics =
  typeof window !== "undefined" ? getAnalytics(app) : null;