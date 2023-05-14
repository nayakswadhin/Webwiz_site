// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, 
        onAuthStateChanged,
        createUserWithEmailAndPassword,
        signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSW5DOwqvguTqyTSwsL925J20WB7voVM8",
  authDomain: "webwiz-login.firebaseapp.com",
  projectId: "webwiz-login",
  storageBucket: "webwiz-login.appspot.com",
  messagingSenderId: "961298226257",
  appId: "1:961298226257:web:877ff176f1107282a16c70",
  measurementId: "G-MLJV93P1GV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}
export{onAuthStateChanged}
export{signOut}
