import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAE4IuwoK2JPbTzqCFg_xr7Z6_kh2U1udI",
  authDomain: "foodsharing-d0b61.firebaseapp.com",
  projectId: "foodsharing-d0b61",
  storageBucket: "foodsharing-d0b61.appspot.com",
  messagingSenderId: "938670280027",
  appId: "1:938670280027:web:1f0032fb7e2d65cf3c5e7e"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;