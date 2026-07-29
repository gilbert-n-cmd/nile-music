const playNow = document.getElementById("playnow");

const songContainer = document.getElementById("songContainer");


playNow.addEventListener("click",()=>{

    songContainer.classList.toggle("show");

});