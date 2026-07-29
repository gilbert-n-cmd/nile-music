// =====================================
// NILE MUSIC PROFILE
// FIREBASE CONNECTION
// =====================================


import { auth, db } from "./firebase-config.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import {
doc,
getDoc,
updateDoc,
collection,
query,
where,
getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ============================
// HTML ELEMENTS
// ============================

const nameElement =
document.querySelector(".user-details h1");


const bioElement =
document.querySelector(".bio");


const avatar =
document.querySelector(".profile-avatar");


const topAvatar =
document.querySelector(".profile img");


const locationElement =
document.querySelector(".user-details p");



const stats =
document.querySelectorAll(".stat-card h2");



// ============================
// CHECK USER LOGIN
// ============================


onAuthStateChanged(auth, async(user)=>{


if(user){


console.log("User:", user.uid);



// Get profile from Firestore

const userRef =
doc(db,"users",user.uid);


const userSnap =
await getDoc(userRef);



if(userSnap.exists()){


const data =
userSnap.data();



// Display user data

nameElement.textContent =
data.name || "Nile Music User";



bioElement.textContent =
data.bio ||
"Music lover • Creating playlists • Discovering new sounds";



if(data.country){

locationElement.innerHTML =
`
<i class="fa-solid fa-location-dot"></i>
${data.country}
`;

}




if(data.photoURL){


avatar.src =
data.photoURL;


topAvatar.src =
data.photoURL;


}



}




// Load statistics

loadStats(user.uid);



// Load playlists

loadPlaylists(user.uid);



// Load favorites

loadFavorites(user.uid);



}

else{


window.location.href =
"login.html";


}



});





// ============================
// STATISTICS
// ============================


async function loadStats(uid){



// Songs played

const playedQuery =
query(
collection(db,"history"),
where("userId","==",uid)
);


const played =
await getDocs(playedQuery);



// Favorites

const favQuery =
query(
collection(db,"favorites"),
where("userId","==",uid)
);


const favorites =
await getDocs(favQuery);



// Playlists

const playlistQuery =
query(
collection(db,"playlists"),
where("userId","==",uid)
);


const playlists =
await getDocs(playlistQuery);




stats[0].textContent =
played.size;


stats[1].textContent =
favorites.size;


stats[2].textContent =
playlists.size;



}






// ============================
// LOAD PLAYLISTS
// ============================


async function loadPlaylists(uid){


const container =
document.querySelector(".playlist-grid");


container.innerHTML="";



const q =
query(
collection(db,"playlists"),
where("userId","==",uid)
);



const snapshot =
await getDocs(q);



snapshot.forEach((item)=>{


const data =
item.data();



container.innerHTML +=
`
<div class="playlist-card">

<img src="${data.cover || 'images/music.jpg'}">


<div>

<h3>${data.name}</h3>

<p>
${data.songs || 0} Songs
</p>

</div>


</div>
`;



});


}







// ============================
// LOAD FAVORITE ARTISTS
// ============================


async function loadFavorites(uid){


const container =
document.querySelector(".artists-grid");


container.innerHTML="";



const q =
query(
collection(db,"favoriteArtists"),
where("userId","==",uid)
);



const snapshot =
await getDocs(q);



snapshot.forEach((item)=>{


const data =
item.data();



container.innerHTML +=
`
<div class="artist-card">


<img src="${data.image || 'images/user.png'}">


<h3>
${data.name}
</h3>


<p>
${data.genre || "Artist"}
</p>


</div>

`;



});


}

// ============================
// EDIT PROFILE
// ============================


const editBtn =
document.getElementById("editProfileBtn");


const modal =
document.getElementById("editModal");


const saveBtn =
document.getElementById("saveProfileBtn");


const closeBtn =
document.getElementById("closeModal");



let currentUser = null;



onAuthStateChanged(auth, (user)=>{


if(user){

currentUser = user;

}


});



if(editBtn){


editBtn.onclick = ()=>{

modal.style.display = "flex";

};


}



if(closeBtn){


closeBtn.onclick = ()=>{

modal.style.display = "none";

};


}



if(saveBtn){


saveBtn.onclick = async()=>{


const name =
document.getElementById("editName").value;


const country =
document.getElementById("editCountry").value;


const bio =
document.getElementById("editBio").value;



if(!currentUser){

alert("You are not logged in");

return;

}



await updateDoc(

doc(db,"users",currentUser.uid),

{

name:name,

country:country,

bio:bio

}

);



alert("Profile updated successfully");


window.location.reload();


};


}