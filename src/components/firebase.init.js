// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMoIiTAjDVPbKas1TWG1FOHYXkZEamuyc",
  authDomain: "ema-john-9dfa1.firebaseapp.com",
  projectId: "ema-john-9dfa1",
  storageBucket: "ema-john-9dfa1.appspot.com",
  messagingSenderId: "977380182946",
  appId: "1:977380182946:web:a586a46b6579a6f53540fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// export default app;
