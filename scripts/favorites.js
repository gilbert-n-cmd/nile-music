/* =====================================
   MELODY MUSIC - FAVORITES JS
===================================== */


/* ===============================
PLAY BUTTON
================================ */


const playButtons = document.querySelectorAll(".play-btn");


playButtons.forEach(button =>{


    button.addEventListener("click",()=>{


        const icon = button.querySelector("i");


        if(icon.classList.contains("fa-play")){


            icon.classList.remove("fa-play");

            icon.classList.add("fa-pause");


            button.style.background="#ff2d55";


        }else{


            icon.classList.remove("fa-pause");

            icon.classList.add("fa-play");


            button.style.background="#a832ff";


        }


    });


});





/* ===============================
LIKE / UNLIKE ANIMATION
================================ */


const likes = document.querySelectorAll(".liked");


likes.forEach(like=>{


    like.addEventListener("click",()=>{


        like.classList.toggle("active");



        if(like.classList.contains("active")){


            like.style.color="#ff2d55";


            like.style.transform="scale(1.3)";


            setTimeout(()=>{

                like.style.transform="scale(1)";

            },200);



        }else{


            like.style.color="#777";


        }


    });


});





/* ===============================
SEARCH FAVORITES
================================ */


const searchInput = document.querySelector(".search input");


const favoriteItems =
document.querySelectorAll(".favorite-item");



if(searchInput){


searchInput.addEventListener("keyup",()=>{


    const value =
    searchInput.value.toLowerCase();



    favoriteItems.forEach(song=>{


        const title =
        song.querySelector("h3")
        .textContent
        .toLowerCase();



        const artist =
        song.querySelector("p")
        .textContent
        .toLowerCase();



        if(
            title.includes(value) ||
            artist.includes(value)
        ){


            song.style.display="flex";


        }else{


            song.style.display="none";


        }


    });


});


}





/* ===============================
CARD HOVER EFFECT
================================ */


const cards =
document.querySelectorAll(
".artist-card,.album-card"
);



cards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{


        card.style.transition=".3s";


    });


});





/* ===============================
YEAR FOOTER
================================ */


const year =
document.getElementById("year");


if(year){

    year.textContent =
    new Date().getFullYear();

}

