// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkji_r3UUSvps4MbROZK72UBwqzDYiUaQ",
    authDomain: "icecream-builder-36aa7.firebaseapp.com",
    databaseURL: "https://icecream-builder-36aa7-default-rtdb.firebaseio.com",
    projectId: "icecream-builder-36aa7",
    storageBucket: "icecream-builder-36aa7.appspot.com",
    messagingSenderId: "769311852987",
    appId: "1:769311852987:web:5ca11eaafe5d5dea8d1c9e",
    measurementId: "G-0G2MC0VF8L"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, push, ref, set };

