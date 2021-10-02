import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-bEgjDSXLasOBPD2QqMXAAirFJPV7E7I",
  authDomain: "clone-9c7b4.firebaseapp.com",
  projectId: "clone-9c7b4",
  storageBucket: "clone-9c7b4.appspot.com",
  messagingSenderId: "114431687172",
  appId: "1:114431687172:web:f83eb4fcbfcedbe27e5351",
  measurementId: "G-JHEQ3NL8ZH",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();

export { db, auth };
