/* =====================================
   MELODY MUSIC - GENRES PAGE JS
===================================== */


/* ==========================
SIDEBAR MOBILE CONTROL
========================== */


const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.add("active");

        if(overlay){
            overlay.classList.add("active");
        }

    });

}



if(closeBtn){

    closeBtn.addEventListener("click",()=>{

        sidebar.classList.remove("active");

        if(overlay){
            overlay.classList.remove("active");
        }

    });

}



if(overlay){

    overlay.addEventListener("click",()=>{

        sidebar.classList.remove("active");

        overlay.classList.remove("active");

    });

}





/* ==========================
SEARCH GENRES
========================== */


const searchInput = document.querySelector(".search input");


if(searchInput){


searchInput.addEventListener("keyup",()=>{


let value = searchInput.value.toLowerCase();



const cards = document.querySelectorAll(".genre-card");



cards.forEach(card=>{


let name =
card.querySelector("h3")
.textContent
.toLowerCase();



if(name.includes(value)){


card.style.display="flex";


}else{


card.style.display="none";


}



});


});

}





/* ==========================
PLAY BUTTONS
========================== */


const playButtons =
document.querySelectorAll(".play-btn");



playButtons.forEach(button=>{


button.addEventListener("click",()=>{


const icon =
button.querySelector("i");



if(icon.classList.contains("fa-play")){


icon.classList.remove("fa-play");

icon.classList.add("fa-pause");


button.innerHTML =
`
<i class="fa-solid fa-pause"></i>
Playing
`;



button.style.background="#ff3366";



}else{


button.innerHTML =
`
<i class="fa-solid fa-play"></i>
Play
`;



button.style.background="#a832ff";


}



});



});







/* ==========================
SONG PLAY BUTTONS
========================== */


const songButtons =
document.querySelectorAll(".song-item button");



songButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


const icon =
btn.querySelector("i");



if(icon.classList.contains("fa-play")){


icon.classList.replace(
"fa-play",
"fa-pause"
);


btn.style.background="#ff3366";



}else{


icon.classList.replace(
"fa-pause",
"fa-play"
);


btn.style.background="#a832ff";


}



});


});







/* ==========================
GENRE CARD CLICK EFFECT
========================== */


const genreCards =
document.querySelectorAll(".genre-card");



genreCards.forEach(card=>{


card.addEventListener("click",()=>{


genreCards.forEach(item=>{

item.classList.remove("selected");

});


card.classList.add("selected");



});



});






/* ==========================
ARTIST CARD CLICK
========================== */


const artists =
document.querySelectorAll(".artist-card");



artists.forEach(artist=>{


artist.addEventListener("click",()=>{


artist.style.transform =
"scale(1.05)";



setTimeout(()=>{


artist.style.transform =
"scale(1)";


},300);



});


});







/* ==========================
YEAR FOOTER
========================== */


const year =
document.getElementById("year");


if(year){

year.textContent =
new Date().getFullYear();

}







/* ==========================
SCROLL ANIMATION
========================== */


const sections =
document.querySelectorAll(".genres-section");



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let position =
section.getBoundingClientRect().top;



let screen =
window.innerHeight - 100;



if(position < screen){


section.style.opacity="1";

section.style.transform=
"translateY(0)";


}



});


});




/* INITIAL ANIMATION */


sections.forEach(section=>{


section.style.opacity="0";

section.style.transform=
"translateY(40px)";

section.style.transition=
"0.6s ease";


});

