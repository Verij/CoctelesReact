//configuracion del firebase
 
 
 import { initializeApp } from "firebase/app";
 import { firebaseConfig, actionCodeSettingsVerification } from "./firebase-config";
 import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
 import {
   doc,
   getDoc,
   setDoc,
   getFirestore,
 } from 'firebase/firestore';

 const app = initializeApp(firebaseConfig);
 export const firestore = getFirestore(app);

 export const createUserProfileDocument = async userAuth =>{
   if(!userAuth) return;

   const userRef = doc(firestore, `users/${userAuth.uid}`)
   const snapShot = await getDoc(userRef)

   if(!snapShot.exists()){
     const { displayName, email} = userAuth;
     const createdAt = new Date();

     try{
       await setDoc(doc(firestore, `users/${userAuth.uid}`),
       {
       displayName: displayName || localStorage.getItem('username'),
       email: email || localStorage.getItem('mail'),
       createdAt});

     }
     catch(error){
       console.log('error en la creacion de usuario', error.message)

     }
   }

   return userRef;
 };



 export const auth = getAuth();
 auth.useDeviceLanguage();



 export const createUser = (email, password, displayName) => createUserWithEmailAndPassword(auth, email, password).then(userCredential => sendEmailVerification(userCredential.user, actionCodeSettingsVerification).then(()=>{
  alert(`mail de verificacion enviado ${email}`);
  localStorage.setItem('username', displayName);
 }));

export const signInUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

 const provider = new GoogleAuthProvider();

 export const signInWithGoogle = () => signInWithPopup(auth, provider);