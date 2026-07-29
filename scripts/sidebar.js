const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay");


menuBtn.addEventListener("click", () => {

    sidebar.classList.add("active");
    overlay.classList.add("show");

});


closeBtn.addEventListener("click", () => {

    sidebar.classList.remove("active");
    overlay.classList.remove("show");

});


overlay.addEventListener("click", () => {

    sidebar.classList.remove("active");
    overlay.classList.remove("show");

});