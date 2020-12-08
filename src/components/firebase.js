import firebase from "firebase";
import "firebase/auth";

import "firebase/firestore";
var firebaseConfig = {

    apiKey: "AIzaSyAYOODXwCkogGQcd3cARw53zG3wPnvKoOo",
    authDomain: "milklk.firebaseapp.com",
    projectId: "milklk",
    storageBucket: "milklk.appspot.com",
    messagingSenderId: "258676424058",
    appId: "1:258676424058:web:d477db68182a07a260aac3",
    measurementId: "G-527BZ1BF58"
  
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;