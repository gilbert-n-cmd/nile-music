/* =====================================
   MELODY MUSIC - PREMIUM JS
===================================== */


/* ===============================
FAQ ACCORDION
================================ */

const faqButtons = document.querySelectorAll(".faq-question");


faqButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const item = button.parentElement;


        // close other FAQs

        document.querySelectorAll(".faq-item")
        .forEach(faq=>{

            if(faq !== item){

                faq.classList.remove("active");

            }

        });



        // open selected

        item.classList.toggle("active");



        const icon = button.querySelector("i");


        if(item.classList.contains("active")){


            icon.classList.remove(
                "fa-chevron-down"
            );


            icon.classList.add(
                "fa-chevron-up"
            );


        }

        else{


            icon.classList.remove(
                "fa-chevron-up"
            );


            icon.classList.add(
                "fa-chevron-down"
            );


        }


    });


});







/* ===============================
PLAN BUTTONS
================================ */


const planButtons =
document.querySelectorAll(".plan-card button");



planButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        let plan =
        button
        .closest(".plan-card")
        .querySelector("h3")
        .textContent;



        showToast(
            plan + " plan selected 👑"
        );



        setTimeout(()=>{


            alert(
                "Continue to payment for "
                + plan
                + " subscription"
            );


        },500);



    });


});







/* ===============================
UPGRADE BUTTONS
================================ */


const upgradeButtons =
document.querySelectorAll(".upgrade-btn");



upgradeButtons.forEach(button=>{


button.addEventListener("click",()=>{


    showToast(
        "Welcome to Melody Premium 🎵"
    );


});


});







/* ===============================
TOAST MESSAGE
================================ */


function showToast(message){



    const toast =
    document.createElement("div");



    toast.className="premium-toast";


    toast.innerHTML = message;



    document.body.appendChild(toast);




    setTimeout(()=>{


        toast.remove();


    },2500);



}







/* ===============================
TOAST STYLE
================================ */


const style =
document.createElement("style");



style.innerHTML=`

.premium-toast{

position:fixed;

bottom:30px;

right:30px;

background:#a832ff;

color:white;

padding:14px 22px;

border-radius:30px;

font-size:14px;

z-index:9999;

box-shadow:0 5px 20px rgba(0,0,0,.4);

animation:premiumToast .3s ease;

}



@keyframes premiumToast{

from{

opacity:0;

transform:translateY(30px);

}


to{

opacity:1;

transform:translateY(0);

}

}

`;



document.head.appendChild(style);







/* ===============================
SCROLL ANIMATION
================================ */


const cards =
document.querySelectorAll(
".plan-card, .benefit-card"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";


}


});


},
{
threshold:.15
}
);





cards.forEach(card=>{


card.style.opacity="0";

card.style.transform=
"translateY(30px)";


card.style.transition=
"all .5s ease";


observer.observe(card);



});






/* ===============================
YEAR UPDATE
================================ */


const year =
document.getElementById("year");


if(year){

year.textContent =
new Date().getFullYear();

}

