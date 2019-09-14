import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'




const config = {
    apiKey: "AIzaSyCkFvSEn9aciOIbEZTE-j_GbF91s02lQ9U",
    authDomain: "react-ecommerce-7895a.firebaseapp.com",
    databaseURL: "https://react-ecommerce-7895a.firebaseio.com",
    projectId: "react-ecommerce-7895a",
    storageBucket: "",
    messagingSenderId: "827104342201",
    appId: "1:827104342201:web:2aace98155abfb2870ab68"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

   const provider =new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({promt:'select_account'});

   export  const signInWithGoogle = ()=> auth.signInWithPopup(provider);

     export default firebase;
