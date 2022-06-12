import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCtZSv1hI21jwPLI2FMtBuq5U6hPse2XKI",
  authDomain: "hostpital-management.firebaseapp.com",
  projectId: "hostpital-management",
  storageBucket: "hostpital-management.appspot.com",
  messagingSenderId: "907380400324",
  appId: "1:907380400324:web:bda843f3b979d2afc8a991",
  measurementId: "G-GXX38QEFZ5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)