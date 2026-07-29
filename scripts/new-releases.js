/* =====================================
   MELODY MUSIC - NEW RELEASES JS
===================================== */


// ================================
// PLAY BUTTONS
// ================================

const playButtons = document.querySelectorAll(".play-btn");


playButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");


        if(icon.classList.contains("fa-play")){

            icon.classList.remove("fa-play");

            icon.classList.add("fa-pause");

            button.style.background = "#ff3366";


        }else{

            icon.classList.remove("fa-pause");

            icon.classList.add("fa-play");

            button.style.background = "#a832ff";

        }


    });


});




// ================================
// LIKE / FAVORITE BUTTON
// ================================


const likeButtons = document.querySelectorAll(".like-btn");


likeButtons.forEach(button=>{


button.addEventListener("click",()=>{


const icon = button.querySelector("i");


if(icon.classList.contains("fa-regular")){


icon.classList.remove("fa-regular");

icon.classList.add("fa-solid");


button.style.color="#ff3366";


}else{


icon.classList.remove("fa-solid");

icon.classList.add("fa-regular");


button.style.color="white";


}



});


});




// ================================
// SEARCH NEW RELEASES
// ================================


const searchInput = document.querySelector("#releaseSearch");


if(searchInput){


searchInput.addEventListener("keyup",()=>{


let value = searchInput.value.toLowerCase();


const cards = document.querySelectorAll(".release-card");


cards.forEach(card=>{


let title = card.querySelector("h3")
.textContent
.toLowerCase();


let artist = card.querySelector("p")
.textContent
.toLowerCase();



if(title.includes(value) || artist.includes(value)){


card.style.display="block";


}else{


card.style.display="none";


}



});


});


}




// ================================
// CARD CLICK
// ================================


const releaseCards = document.querySelectorAll(".release-card");


releaseCards.forEach(card=>{


card.addEventListener("click",()=>{


card.classList.add("active");


setTimeout(()=>{


card.classList.remove("active");


},300);



});


});




// ================================
// SORT BUTTONS
// ================================


const filterButtons =
document.querySelectorAll(".filter-btn");


filterButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


filterButtons.forEach(button=>{

button.classList.remove("active");

});


btn.classList.add("active");


const category =
btn.dataset.category;


const cards =
document.querySelectorAll(".release-card");



cards.forEach(card=>{


if(category==="all"){


card.style.display="block";


}

else{


if(card.dataset.category===category){


card.style.display="block";


}else{


card.style.display="none";


}



}



});



});


});




// ================================
// YEAR FOOTER
// ================================


const year =
document.getElementById("year");


if(year){

year.textContent =
new Date().getFullYear();

}




// ================================
// PAGE LOAD ANIMATION
// ================================


window.addEventListener("load",()=>{


const sections =
document.querySelectorAll(".new-section");


sections.forEach(section=>{


section.style.opacity="0";


section.style.transform=
"translateY(30px)";



setTimeout(()=>{


section.style.transition=
"0.6s ease";


section.style.opacity="1";


section.style.transform=
"translateY(0)";



},200);



});


});

