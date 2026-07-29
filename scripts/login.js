// =====================================
// NILE MUSIC LOGIN & REGISTER
// FIREBASE AUTH
// =====================================


// Firebase Config

import {
auth,
db
} from "./firebase-config.js";



// Firebase Authentication

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



// Firebase Firestore

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





// ==========================
// FORMS
// ==========================


const loginForm =
document.getElementById("loginForm");


const registerForm =
document.getElementById("registerForm");





// ==========================
// LOGIN WITH EMAIL
// ==========================


if(loginForm){


loginForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const email =
loginForm.querySelector("input[type='email']").value;



const password =
document.getElementById("loginPassword").value;




try{


await signInWithEmailAndPassword(

auth,

email,

password

);



alert("Login successful 🎵");



window.location.href =
"profile.html";



}

catch(error){


alert(error.message);


}



});


}








// ==========================
// REGISTER WITH EMAIL
// ==========================


if(registerForm){


registerForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const inputs =
registerForm.querySelectorAll("input");



const name =
inputs[0].value;



const email =
inputs[1].value;



const password =
document.getElementById("registerPassword").value;



const confirmPassword =
document.getElementById("confirmPassword").value;





if(password !== confirmPassword){


alert("Passwords do not match");


return;


}




try{


// Create Firebase account

const userCredential =

await createUserWithEmailAndPassword(

auth,

email,

password

);



const user =
userCredential.user;





// Save user profile

await setDoc(

doc(db,"users",user.uid),

{


name:name,


email:email,


photoURL:"",


country:"Uganda",


bio:
"Music lover • Creating playlists • Discovering new sounds",



createdAt:
new Date()


}



);




alert("Account created successfully 🎶");



window.location.href =
"profile.html";



}


catch(error){


alert(error.message);


}



});


}








// ==========================
// GOOGLE LOGIN / REGISTER
// ==========================


const provider =
new GoogleAuthProvider();



async function googleLogin(){


try{


const result =
await signInWithPopup(
auth,
provider
);



const user =
result.user;



await setDoc(

doc(db,"users",user.uid),

{

name:user.displayName,

email:user.email,

photoURL:user.photoURL,

country:"Uganda",

bio:"Music lover • Creating playlists • Discovering new sounds",

createdAt:new Date()

},

{
merge:true
}

);



alert("Google login successful 🎵");


window.location.href="profile.html";



}

catch(error){


console.log(error);

alert(error.message);


}


}




const googleLoginBtn =
document.getElementById("googleLogin");


const googleRegisterBtn =
document.getElementById("googleRegister");



if(googleLoginBtn){

googleLoginBtn.addEventListener(
"click",
googleLogin
);

}



if(googleRegisterBtn){

googleRegisterBtn.addEventListener(
"click",
googleLogin
);

}


// ==========================
// SWITCH LOGIN / REGISTER
// ==========================


const showRegister =
document.getElementById("showRegister");


const showLogin =
document.getElementById("showLogin");


const loginBox =
document.querySelector(".login-form");


const registerBox =
document.querySelector(".register-form");



showRegister.addEventListener("click", ()=>{


loginBox.style.display = "none";

registerBox.style.display = "block";


});




showLogin.addEventListener("click", ()=>{


registerBox.style.display = "none";

loginBox.style.display = "block";


});