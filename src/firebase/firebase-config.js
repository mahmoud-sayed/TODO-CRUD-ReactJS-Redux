import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCk9ZE-Gvz3NYuyH87ObYf76Qgz2lRUh9I",
  authDomain: "todo-crud-using-redux.firebaseapp.com",
  projectId: "todo-crud-using-redux",
  storageBucket: "todo-crud-using-redux.appspot.com",
  messagingSenderId: "242228939604",
  appId: "1:242228939604:web:ac11d50b5049105ca716c1",
  measurementId: "G-2TVBSLQLDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);