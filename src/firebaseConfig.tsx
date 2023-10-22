import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcTfQuPN7S8NutpHuw18UflJR2Jwg5ivs",
  authDomain: "drive-clone-6eb8a.firebaseapp.com",
  projectId: "drive-clone-6eb8a",
  storageBucket: "drive-clone-6eb8a.appspot.com",
  messagingSenderId: "632990803038",
  appId: "1:632990803038:web:b3296d513eaf1c3a5380cf",
  measurementId: "G-6GEXM9P4SR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);