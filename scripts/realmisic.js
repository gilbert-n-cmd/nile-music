const playBtn = document.getElementById("playBtn");


let playing = false;


playBtn.addEventListener("click",()=>{


playing = !playing;


if(playing){

playBtn.innerHTML =
`<i class="fa-solid fa-pause"></i>`;

}

else{

playBtn.innerHTML =
`<i class="fa-solid fa-play"></i>`;

}


});

