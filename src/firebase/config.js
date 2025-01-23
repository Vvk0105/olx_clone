import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMQIweJXLlD00E9OFH-ezPIEWprgEsyVE",
  authDomain: "olx-clone-44763.firebaseapp.com",
  projectId: "olx-clone-44763",
  storageBucket: "olx-clone-44763.firebasestorage.app",
  messagingSenderId: "413306417851",
  appId: "1:413306417851:web:35cd7217e24c07aeb46f9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app) 

export {app, auth, db}

export default app;