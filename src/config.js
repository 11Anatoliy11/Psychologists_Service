import { initializeApp } from "firebase/app";
import { ref, getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRFRG6TjapFA_5i9oSYpeTC6ANDojIgms",
  authDomain: "psychologists-service.firebaseapp.com",
  databaseURL: "https://psychologists-service-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-service",
  storageBucket: "psychologists-service.appspot.com",
  messagingSenderId: "242463338630",
  appId: "1:242463338630:web:754fe0bff2e650a09c2107",
  measurementId: "G-Z7SNPLV02H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const data = getDatabase(app);

export const psychologistsRef = ref(data, "psychologists");
export const usersRef = ref(data, "users");