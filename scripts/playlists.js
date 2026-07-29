/* =====================================
   MELODY MUSIC - PLAYLISTS PAGE JS
===================================== */


// PLAYLIST DATA

const playlists = [

{
title:"Morning Worship",
artist:"Melody Worship",
songs:"45 Songs",
image:"https://images.unsplash.com/photo-1506157786151-b8491531f063",
liked:false
},

{
title:"Top Gospel Hits",
artist:"Christian Music",
songs:"50 Songs",
image:"https://images.unsplash.com/photo-1516280440614-37939bbacd81",
liked:false
},

{
title:"Afro Gospel Vibes",
artist:"African Gospel",
songs:"38 Songs",
image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
liked:false
},

{
title:"Sunday Praise",
artist:"Worship Collection",
songs:"42 Songs",
image:"https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b",
liked:false
},

{
title:"Chill & Relax",
artist:"Melody Chill",
songs:"30 Songs",
image:"https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
liked:false
},

{
title:"Workout Energy",
artist:"Fitness Music",
songs:"35 Songs",
image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
liked:false
}

];



// LOAD PLAYLISTS

const playlistContainer = document.querySelector(".playlists-grid");


function displayPlaylists(data){


playlistContainer.innerHTML="";


data.forEach((playlist,index)=>{


const card=document.createElement("div");

card.className="playlist-card";


card.innerHTML=`

<img src="${playlist.image}">


<div class="playlist-info">

<h3>${playlist.title}</h3>

<p>${playlist.artist}</p>

<span>${playlist.songs}</span>


<div class="playlist-actions">


<button class="play-btn"
onclick="playPlaylist('${playlist.title}')">

<i class="fa-solid fa-play"></i>

</button>



<button class="like-btn ${playlist.liked ? "liked":""}"
onclick="toggleLike(${index})">

<i class="${playlist.liked ?
'fa-solid fa-heart':
'fa-regular fa-heart'}"></i>

</button>


</div>


</div>

`;


playlistContainer.appendChild(card);


});


}




displayPlaylists(playlists);





// SEARCH PLAYLISTS


const searchInput=document.querySelector("#playlistSearch");


if(searchInput){


searchInput.addEventListener("input",()=>{


const value=searchInput.value.toLowerCase();


const filtered=playlists.filter(item=>


item.title.toLowerCase().includes(value) ||

item.artist.toLowerCase().includes(value)


);


displayPlaylists(filtered);



});


}






// PLAY BUTTON


function playPlaylist(name){


alert(
"▶ Playing playlist: "+name
);


}





// LIKE BUTTON


function toggleLike(index){


playlists[index].liked =
!playlists[index].liked;


displayPlaylists(playlists);



}





// YEAR FOOTER

const year=document.getElementById("year");


if(year){

year.textContent=new Date().getFullYear();

}

