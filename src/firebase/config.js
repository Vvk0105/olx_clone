// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMQIweJXLlD00E9OFH-ezPIEWprgEsyVE",
  authDomain: "olx-clone-44763.firebaseapp.com",
  projectId: "olx-clone-44763",
  storageBucket: "olx-clone-44763.firebasestorage.app",
  messagingSenderId: "413306417851",
  appId: "1:413306417851:web:35cd7217e24c07aeb46f9e"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export {Firebase}