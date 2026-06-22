
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "examnotesai-9f16b.firebaseapp.com",
  projectId: "examnotesai-9f16b",
  storageBucket: "examnotesai-9f16b.firebasestorage.app",
  messagingSenderId: "144938098781",
  appId: "1:144938098781:web:4a6170a05eb53e7b7cadb4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}