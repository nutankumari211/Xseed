import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  // Add your Firebase configuration details here
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB-hgW9AOdvzTky0_Lj4qNLcsyJmWeSOS8",
    authDomain: "edtech-d2fdc.firebaseapp.com",
    databaseURL: "https://edtech-d2fdc-default-rtdb.firebaseio.com",
    projectId: "edtech-d2fdc",
    storageBucket: "edtech-d2fdc.appspot.com",
    messagingSenderId: "754344247278",
    appId: "1:754344247278:web:e5f66b5339023ba6bcd8ff"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
