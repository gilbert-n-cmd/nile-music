/* =====================================
   MELODY MUSIC - DOWNLOADS JS
===================================== */


/* ===============================
SEARCH DOWNLOADS
================================ */

const searchInput = document.getElementById("downloadSearch");

const downloadItems = document.querySelectorAll(".download-item");


if(searchInput){

    searchInput.addEventListener("input",()=>{

        let value = searchInput.value.toLowerCase();


        downloadItems.forEach(song=>{


            let title = song
            .querySelector("h3")
            .textContent
            .toLowerCase();


            let artist = song
            .querySelector("p")
            .textContent
            .toLowerCase();



            if(
                title.includes(value) ||
                artist.includes(value)
            ){

                song.style.display="flex";

            }

            else{

                song.style.display="none";

            }


        });


    });

}




/* ===============================
PLAY BUTTON
================================ */


const playButtons = document.querySelectorAll(".play-btn");


playButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        let icon = button.querySelector("i");


        if(icon.classList.contains("fa-play")){


            icon.classList.remove("fa-play");

            icon.classList.add("fa-pause");


            showMessage("Playing song 🎵");


        }


        else{


            icon.classList.remove("fa-pause");

            icon.classList.add("fa-play");


            showMessage("Song paused");


        }



    });


});





/* ===============================
REMOVE DOWNLOAD
================================ */


const removeButtons =
document.querySelectorAll(".remove-btn");



removeButtons.forEach(button=>{


button.addEventListener("click",()=>{


    let item =
    button.closest(".download-item");



    item.style.transform="translateX(100%)";

    item.style.opacity="0";



    setTimeout(()=>{


        item.remove();


        updateStorage();


    },400);



    showMessage("Removed from downloads");


});


});







/* ===============================
DOWNLOAD ALL BUTTON
================================ */


const downloadAll =
document.querySelector(".section-title button");



if(downloadAll){


downloadAll.addEventListener("click",()=>{


    showMessage(
        "All songs already downloaded ✔"
    );


});


}






/* ===============================
STORAGE UPDATE
================================ */


function updateStorage(){


    let songs =
    document.querySelectorAll(".download-item");


    let used =
    songs.length * 0.15;



    let progress =
    document.querySelector(".progress span");



    let storageText =
    document.querySelector(".storage-card p");



    if(progress){


        let percent =
        Math.min(
            (used / 10) * 100,
            100
        );


        progress.style.width =
        percent+"%";


    }



    if(storageText){


        storageText.innerHTML =
        used.toFixed(1)
        +" GB of 10 GB";


    }



}







/* ===============================
TOAST MESSAGE
================================ */


function showMessage(text){



    let toast =
    document.createElement("div");


    toast.className="toast";


    toast.innerHTML=text;



    document.body.appendChild(toast);




    setTimeout(()=>{


        toast.remove();


    },2500);



}






/* ===============================
TOAST STYLE
================================ */


const toastStyle = document.createElement("style");


toastStyle.innerHTML=`

.toast{

position:fixed;

bottom:30px;

right:30px;

background:#a832ff;

color:white;

padding:12px 20px;

border-radius:30px;

font-size:14px;

z-index:9999;

box-shadow:0 5px 20px rgba(0,0,0,.4);

animation:slideToast .3s ease;

}



@keyframes slideToast{

from{

transform:translateY(30px);

opacity:0;

}

to{

transform:translateY(0);

opacity:1;

}

}


`;


document.head.appendChild(toastStyle);





/* ===============================
INITIAL LOAD
================================ */


document.addEventListener(
"DOMContentLoaded",
()=>{

    updateStorage();

});

