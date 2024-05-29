// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCmH_NO6e1aAyr4RO8lYs9iuUa2PWBZ46w",
  authDomain: "e-comarce-f72cc.firebaseapp.com",
  projectId: "e-comarce-f72cc",
  storageBucket: "e-comarce-f72cc.appspot.com",
  messagingSenderId: "5474476016",
  appId: "1:5474476016:web:b9b80687fef72b8d2f8735"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth