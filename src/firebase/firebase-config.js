import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBieondR24q3oNc52ku8tm9P3s7QvkJ_Ls",
    authDomain: "react-app-journal-ff647.firebaseapp.com",
    projectId: "react-app-journal-ff647",
    storageBucket: "react-app-journal-ff647.appspot.com",
    messagingSenderId: "909087844459",
    appId: "1:909087844459:web:8f788381f5b32a5f9fe92e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  const db = firebase.firestore();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider ();


  export  {
      db,
      googleAuthProvider,
      firebase  
      
  }