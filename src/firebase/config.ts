// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCjJp3HmHqSRSnjQTP-VSE5wF5kycxhAEM",
    authDomain: "laevad-gallery.firebaseapp.com",
    projectId: "laevad-gallery",
    storageBucket: "laevad-gallery.appspot.com",
    messagingSenderId: "106500029722",
    appId: "1:106500029722:web:ac4e2def2501b38b4b80a3",
    measurementId: "G-Q043JEXP39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
