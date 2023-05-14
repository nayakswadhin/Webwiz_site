import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth, onAuthStateChanged } from "./firebase.js";

document.getElementById('loginForm').addEventListener('submit',(event)=>{
    event.preventDefault();
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    signInWithEmailAndPassword(auth, email, password)
    .then(()=>{
        alert("Successfully logged in")
    })
    .catch((error)=>{
        // document.getElementById("error").innerHTML = error.message
        alert(error);
    })
})
onAuthStateChanged(auth,(user)=>{
    console.log("Stated Changed",user);
    if(user){
        location.replace("Progress.html")
    }
  })
