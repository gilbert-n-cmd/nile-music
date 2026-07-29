// =====================================
// MELODY MUSIC - LYRICS PAGE JS
// =====================================


// ===============================
// SONG DATA
// ===============================


const songData = {


title:"Way Maker",

artist:"Sinach",

cover:
"https://images.unsplash.com/photo-1506157786151-b8491531f063?w=500&auto=format&fit=crop",


lyrics:[

"Way maker, miracle worker",

"Promise keeper, light in the darkness",

"My God, that is who You are",

"You are here, moving in our midst",

"You are here, working in this place",

"I worship You",

"I worship You",

"You are touching every heart",

"You are healing every life",

"You are turning lives around"

]


};





// ===============================
// LOAD SONG INFORMATION
// ===============================


const cover =
document.getElementById("cover");


const title =
document.getElementById("title");


const artist =
document.getElementById("artist");


const lyricsContainer =
document.getElementById("lyricsContainer");




cover.src =
songData.cover;


title.textContent =
songData.title;


artist.textContent =
songData.artist;





// ===============================
// DISPLAY LYRICS
// ===============================


function loadLyrics(){


lyricsContainer.innerHTML="";


songData.lyrics.forEach(
(line,index)=>{


const p =
document.createElement("p");


p.className="line";


if(index===0){

p.classList.add("active");

}


p.textContent=line;


lyricsContainer.appendChild(p);


});


}



loadLyrics();







// ===============================
// SEARCH LYRICS
// ===============================


const search =
document.getElementById(
"searchLyrics"
);



search.addEventListener(
"input",
()=>{


const value =
search.value.toLowerCase();



document
.querySelectorAll(".line")
.forEach(line=>{


if(
line.textContent
.toLowerCase()
.includes(value)
){


line.style.display="block";


}

else{


line.style.display="none";


}


});


});







// ===============================
// PLAY BUTTON
// ===============================


const playBtn =
document.querySelector(
".play-btn"
);



let playing=false;



playBtn.addEventListener(
"click",
()=>{


playing=!playing;



if(playing){


playBtn.innerHTML=
`
<i class="fa-solid fa-pause"></i>
Pause
`;



startLyricsAnimation();



}

else{


playBtn.innerHTML=
`
<i class="fa-solid fa-play"></i>
Play
`;



clearInterval(
lyricsTimer
);



}



});







// ===============================
// AUTO HIGHLIGHT LYRICS
// ===============================


let currentLine=0;

let lyricsTimer;



function startLyricsAnimation(){


const lines =
document.querySelectorAll(
".line"
);



lyricsTimer =
setInterval(()=>{


lines.forEach(line=>{

line.classList.remove(
"active"
);

});



if(lines[currentLine]){


lines[currentLine]
.classList.add(
"active"
);



lines[currentLine]
.scrollIntoView({

behavior:"smooth",

block:"center"

});


}



currentLine++;



if(
currentLine >= lines.length
){

currentLine=0;

}


},3000);



}







// ===============================
// FAVORITE BUTTON
// ===============================


const likeBtn =
document.querySelector(
".like-btn"
);



let liked=false;



likeBtn.addEventListener(
"click",
()=>{


liked=!liked;



if(liked){


likeBtn.innerHTML=
`
<i class="fa-solid fa-heart"></i>
Liked
`;



likeBtn.style.background=
"#a832ff";


}

else{


likeBtn.innerHTML=
`
<i class="fa-regular fa-heart"></i>
Favorite
`;



likeBtn.style.background=
"#252530";


}


});







// ===============================
// SHARE BUTTON
// ===============================


const shareBtn =
document.querySelector(
".share-btn"
);



shareBtn.addEventListener(
"click",
()=>{


if(
navigator.share
){


navigator.share({

title:
songData.title,

text:
`Listen to ${songData.title} by ${songData.artist} on Melody Music`

});


}

else{


alert(
"Share link copied!"
);


}



});







// ===============================
// YEAR UPDATE
// ===============================


const year =
document.getElementById(
"year"
);



if(year){

year.textContent =
new Date()
.getFullYear();

}