import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnhbN_9S1rVbRPwxOC2fuY1OKrSLAfVj8",
  authDomain: "listing-3ab9c.firebaseapp.com",
  projectId: "listing-3ab9c",
  storageBucket: "listing-3ab9c.appspot.com",
  messagingSenderId: "960908626263",
  appId: "1:1072574112522:web:65fc4e184aed9894dc90f3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
