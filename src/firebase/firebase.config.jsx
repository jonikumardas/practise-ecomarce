import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCnDfNEObJSAL5xDF3kGIAPQncRaoFpVBM",
  authDomain: "practiceapp-4ef02.firebaseapp.com",
  projectId: "practiceapp-4ef02",
  storageBucket: "practiceapp-4ef02.appspot.com",
  messagingSenderId: "840305160354",
  appId: "1:840305160354:web:7352887a0b05dfc70727fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
