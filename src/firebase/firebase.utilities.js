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

  export const createUserProfileDocument = async(userAuth, addData)=>{

    if(!userAuth) return;
    const userRef = firestore.doc( `users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addData
        })
      }catch(error){
        console.log('error on creating user :',error.message);
        
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

   const provider =new firebase.auth.GoogleAuthProvider();
   provider.setCustomParameters({promt:'select_account'});

   export  const signInWithGoogle = ()=> auth.signInWithPopup(provider);

     export default firebase;
