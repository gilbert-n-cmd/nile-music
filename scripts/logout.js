import {auth}
from "./firebase-config.js";


import {
signOut
}

from

"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



document
.getElementById("logoutBtn")
.onclick=async()=>{


await signOut(auth);


window.location.href="login.html";


};

