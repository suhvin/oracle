import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCHxzsxspMPLMB0g3lSkh1OZ5Gnenea_7c",
  authDomain: "yall-clear.firebaseapp.com",
  projectId: "yall-clear",
  storageBucket: "yall-clear.appspot.com",
  messagingSenderId: "296444638344",
  appId: "1:296444638344:web:bf49b7ef4da2b8e6ab9b3d",
  measurementId: "G-GJMFV9K3WG"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;