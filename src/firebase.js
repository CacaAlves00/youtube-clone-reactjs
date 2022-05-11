// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKzBeVr3_rw_lr6XKrO6PAQE-0dHVP2nM",
  authDomain: "clone-c478d.firebaseapp.com",
  projectId: "clone-c478d",
  storageBucket: "clone-c478d.appspot.com",
  messagingSenderId: "976969833228",
  appId: "1:976969833228:web:414d17de35100b98f88729",
  measurementId: "G-NKY2WH5FJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);