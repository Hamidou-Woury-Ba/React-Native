// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmymOoHu0X3xasZbsEeOdV449BOHFXl3k",
  authDomain: "my-project-dff6d.firebaseapp.com",
  projectId: "my-project-dff6d",
  storageBucket: "my-project-dff6d.appspot.com",
  messagingSenderId: "76290520832",
  appId: "1:76290520832:web:94a4920301e7a9fb0a65e5",
  measurementId: "G-N9LD70P2BE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);