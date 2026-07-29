/* =====================================
   MELODY MUSIC - CHARTS JAVASCRIPT
===================================== */


// ===============================
// PLAY BUTTON FUNCTION
// ===============================

const playButtons = document.querySelectorAll(".play-btn, .chart-item button");


playButtons.forEach(button => {

    button.addEventListener("click", function(e){

        e.stopPropagation();


        // remove active state
        playButtons.forEach(btn=>{
            btn.classList.remove("playing");
            btn.innerHTML =
            '<i class="fa-solid fa-play"></i>';
        });


        // activate clicked button
        this.classList.add("playing");

        this.innerHTML =
        '<i class="fa-solid fa-pause"></i>';


        console.log("Playing song");

    });

});



// ===============================
// CHART ROW CLICK
// ===============================

const chartRows = document.querySelectorAll(
    ".chart-row, .chart-item"
);


chartRows.forEach(row=>{


    row.addEventListener("click",()=>{


        chartRows.forEach(item=>{
            item.classList.remove("active-song");
        });


        row.classList.add("active-song");


        const title =
        row.querySelector("h3")?.textContent;


        const artist =
        row.querySelector("p")?.textContent;


        console.log(
            "Now Playing:",
            title,
            "-",
            artist
        );


    });


});




// ===============================
// SEARCH CHARTS
// ===============================


const searchInput =
document.querySelector(".search input");


if(searchInput){


searchInput.addEventListener(
"keyup",
function(){


    let value =
    this.value.toLowerCase();


    const songs =
    document.querySelectorAll(
        ".chart-row, .chart-item, .album-card, .artist-card"
    );


    songs.forEach(item=>{


        let text =
        item.innerText.toLowerCase();


        if(text.includes(value)){

            item.style.display="flex";

        }else{

            item.style.display="none";

        }


    });


});


}




// ===============================
// SEE ALL BUTTONS
// ===============================


const seeButtons =
document.querySelectorAll(
".section-title a"
);


seeButtons.forEach(button=>{


button.addEventListener(
"click",
function(e){


e.preventDefault();


alert(
"More charts will be loaded soon 🎵"
);


});


});




// ===============================
// YEAR UPDATE
// ===============================


const year =
document.getElementById("year");


if(year){

    year.textContent =
    new Date().getFullYear();

}




// ===============================
// IMAGE LOADING ANIMATION
// ===============================


const images =
document.querySelectorAll(
".chart-row img, .chart-item img, .album-card img, .artist-card img"
);


images.forEach(img=>{


img.addEventListener(
"load",
()=>{

img.classList.add("loaded");

});


});




// ===============================
// AUTO PLAY DEMO
// ===============================


let currentSong = 0;


function playNextSong(){


const rows =
document.querySelectorAll(
".chart-row"
);


if(rows.length===0)
return;


rows[currentSong].click();


currentSong++;


if(currentSong >= rows.length){

currentSong=0;

}


}



// Optional:
// Automatically change song every 10 seconds
// setInterval(playNextSong,10000);



console.log(
"Melody Charts Loaded Successfully 🎧"
);

