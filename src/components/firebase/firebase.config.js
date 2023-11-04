// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0EAxHyX6t9CmkGXneNMJgJ7iR44p_YE0",
  authDomain: "rizzik-shop.firebaseapp.com",
  projectId: "rizzik-shop",
  storageBucket: "rizzik-shop.appspot.com",
  messagingSenderId: "238881046127",
  appId: "1:238881046127:web:82ee6a92fbabf13658179a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;