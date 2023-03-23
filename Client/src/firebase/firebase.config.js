import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD3SZQXR_YJXBFFdzQeCwpjeBxr3meQXc8",
  authDomain: "mix2pizza-53f3e.firebaseapp.com",
  projectId: "mix2pizza-53f3e",
  storageBucket: "mix2pizza-53f3e.appspot.com",
  messagingSenderId: "324631476009",
  appId: "1:324631476009:web:933418fb888b89c689e938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);