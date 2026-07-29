/* =====================================
   MELODY MUSIC - ALBUMS PAGE JS
===================================== */


/* ===============================
YEAR UPDATE
================================ */

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}





/* ===============================
PLAY ALBUM BUTTONS
================================ */


const playButtons = document.querySelectorAll(
    ".album-info button, .album-actions button:first-child"
);



playButtons.forEach(button=>{


    button.addEventListener("click",(e)=>{


        e.stopPropagation();


        const icon = button.querySelector("i");


        if(icon.classList.contains("fa-play")){


            icon.classList.remove("fa-play");

            icon.classList.add("fa-pause");


            button.style.background="#00c853";


        }

        else{


            icon.classList.remove("fa-pause");

            icon.classList.add("fa-play");


            button.style.background="#a832ff";


        }



    });



});







/* ===============================
FAVORITE ALBUMS
================================ */


const favoriteButtons =
document.querySelectorAll(
".album-actions button:last-child"
);



favoriteButtons.forEach(button=>{


button.addEventListener(
"click",
(e)=>{


e.stopPropagation();


const icon =
button.querySelector("i");



if(icon.classList.contains("fa-heart")){


icon.classList.remove("fa-heart");

icon.classList.add("fa-solid","fa-check");

button.style.background="#00c853";


}

else{


icon.classList.remove("fa-check");

icon.classList.add("fa-heart");

button.style.background="#a832ff";


}



});


});







/* ===============================
ALBUM CARD CLICK
================================ */


const albumCards =
document.querySelectorAll(
".album-card, .album-box, .featured-card"
);



albumCards.forEach(card=>{


card.addEventListener(
"click",
()=>{


const album =
card.querySelector("h3")
.textContent;



alert(
"Opening album: " + album + " 🎵"
);



});


});







/* ===============================
SEARCH ALBUMS
================================ */


/*
Add this id to search input:

id="albumSearch"

*/


const searchInput =
document.getElementById(
"albumSearch"
);



if(searchInput){


searchInput.addEventListener(
"keyup",
()=>{


const value =
searchInput.value.toLowerCase();



albumCards.forEach(card=>{


const title =
card.querySelector("h3")
.textContent
.toLowerCase();



if(title.includes(value)){


card.style.display="block";


}

else{


card.style.display="none";


}



});



});


}






/* ===============================
POPULAR ALBUM HOVER EFFECT
================================ */


const popularCards =
document.querySelectorAll(
".popular-card"
);



popularCards.forEach(card=>{


card.addEventListener(
"click",
()=>{


const name =
card.querySelector("h3")
.textContent;



console.log(
"Selected playlist:",
name
);



});


});






/* ===============================
SECTION LINKS
================================ */


const links =
document.querySelectorAll(
".section-title a"
);



links.forEach(link=>{


link.addEventListener(
"click",
(e)=>{


e.preventDefault();



window.scrollTo({

top:0,

behavior:"smooth"

});



});


});






console.log(
"Melody Albums Page Loaded 💿"
);

