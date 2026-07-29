/* =====================================
   MELODY MUSIC - ARTISTS PAGE JS
===================================== */


/* ===============================
YEAR UPDATE
================================ */

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}





/* ===============================
PLAY BUTTONS
================================ */


const playButtons = document.querySelectorAll(
    ".artist-card button, .song-row button"
);


playButtons.forEach(button=>{


    button.addEventListener("click",()=>{


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
FOLLOW ARTISTS
================================ */


const followButton = document.querySelector(
    ".follow-box button"
);


if(followButton){


followButton.addEventListener(
"click",
()=>{


    if(
    followButton.innerText.includes("Follow")
    ){


        followButton.innerHTML=
        `
        <i class="fa-solid fa-check"></i>
        Following
        `;


        followButton.style.background="#00c853";

        followButton.style.color="white";


    }

    else{


        followButton.innerHTML=
        `
        <i class="fa-solid fa-user-plus"></i>
        Follow Artists
        `;


        followButton.style.background="white";

        followButton.style.color="#7020ff";


    }



});


}







/* ===============================
ARTIST CARD CLICK
================================ */


const artistCards = document.querySelectorAll(
    ".artist-card"
);



artistCards.forEach(card=>{


    card.addEventListener(
    "click",
    ()=>{


        const artist =
        card.querySelector("h3").textContent;



        console.log(
        "Opening artist:",
        artist
        );



        alert(
        artist +
        " artist page coming soon 🎵"
        );


    });


});






/* ===============================
RISING ARTIST CLICK
================================ */


const risingArtists =
document.querySelectorAll(
".rising-card"
);



risingArtists.forEach(card=>{


    card.addEventListener(
    "click",
    ()=>{


        const name =
        card.querySelector("h3").textContent;



        alert(
        "Discovering " + name + " 🎤"
        );


    });


});






/* ===============================
SEARCH ARTISTS
================================ */


/*
Add this input later:

<input id="artistSearch">

*/


const searchInput =
document.getElementById(
"artistSearch"
);



if(searchInput){


searchInput.addEventListener(
"keyup",
()=>{


let value =
searchInput.value.toLowerCase();



artistCards.forEach(card=>{


let name =
card.querySelector("h3")
.textContent
.toLowerCase();



if(name.includes(value)){


card.style.display="block";


}

else{


card.style.display="none";


}



});



});


}






/* ===============================
SMOOTH SCROLL
================================ */


document.querySelectorAll(
".section-title a"
)
.forEach(link=>{


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
"Melody Artists Page Loaded 🎤"
);

