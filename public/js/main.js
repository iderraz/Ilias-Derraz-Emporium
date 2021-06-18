import {maNav,titreEmporium,ligne,section2,empsec2,monbody,mesp,mespp,recents,darkmode,lightSide,open,modal,close,modal_container,txtCarousel} from './mesvar.js';


//Mon DarkSide//
darkmode.addEventListener("click", () =>{
    monbody.style.backgroundColor = "black";
    maNav.style.backgroundColor = "black";
    titreEmporium.style.color = "white";
    ligne.forEach(element => {
        element.style.color = "white";
    });
    section2.style.backgroundColor = "black";
    empsec2.style.color = "white";
    mesp.forEach(element => {
    element.style.color = "white";
    });
    mespp.forEach(element => {
        element.style.color = "white";
    });
    recents.style.color ="white";
    txtCarousel.forEach(element => {
        element.style.color = "white";
    });
});
//Mon DarkSide//

//mon LightSide
lightSide.addEventListener("click", () =>{
    monbody.style.backgroundColor = "white";
    maNav.style.backgroundColor = "white";
    titreEmporium.style.color = "black";
    ligne.forEach(element => {
        element.style.color = "black";
    });
    section2.style.backgroundColor = "#F3F3F3";
    empsec2.style.color = "black";
    mesp.forEach(element => {
    element.style.color = "black";
    });
    mespp.forEach(element => {
        element.style.color = "black";
    });
    recents.style.color ="black";
    txtCarousel.forEach(element => {
        element.style.color = "black";
    });
});

//mon LightSide

//mon Scroll changement//
window.addEventListener("scroll", () =>{
    if(window.scrollY > 1){
        maNav.classList.add('scroll');
    }else {
        maNav.classList.remove('scroll')
    };
});
//mon Scroll changement//




//connexion
open.addEventListener("click", () =>{
    modal_container.style.opacity = "1";
    maNav.style.backgroundColor = "rgb(0, 0, 0, 0.3)";
    modal_container.style.zIndex = "2";
});

close.addEventListener("click", () =>{
    modal_container.style.opacity = "0";
    maNav.style.backgroundColor = "white";
    modal_container.style.zIndex = "0";
});
//connexion


//inscription
let monSecondPop = document.getElementById("modal_container2");
let inscription = document.getElementById("inscription");
let connexion3 = document.getElementById("connexion3");
let closer = document.getElementById("closer");


inscription.addEventListener("click", () => {
    modal_container.style.opacity = "0";
    modal_container.style.zIndex = "-1";
    monSecondPop.style.opacity = "1";
    monSecondPop.style.zIndex = "4";
});


connexion3.addEventListener("click", () => {
    modal_container.style.opacity = "1";
    modal_container.style.zIndex = "4";
    monSecondPop.style.opacity = "0";
    monSecondPop.style.zIndex = "-1";
    
});


closer.addEventListener("click", () =>{
    monSecondPop.style.opacity = "0";
    monSecondPop.style.zIndex = "-1";
    maNav.style.backgroundColor = "white";
})
//inscription



//mon carousel 
let carouzel = document.getElementById("sec");
console.log(carouzel);
let boutton0 =document.getElementById("btn-0");
let boutton1 =document.getElementById("btn-1");
let boutton2 =document.getElementById("btn-2");
let boutton3 =document.getElementById("btn-3");
console.log(boutton0);
console.log(boutton1);
console.log(boutton2);
console.log(boutton3);



boutton1.addEventListener("click", () =>{
    carouzel.style.transform = "translateX(-360px)";
    carouzel.style.overflow = "visible";
    carouzel.style.transition = "ease 1s";
    console.log("test");
});

boutton2.addEventListener("click", () =>{
    carouzel.style.transform = "translateX(-760px)";
    carouzel.style.overflow = "visible";
    carouzel.style.transition = "ease 1s";
});

boutton3.addEventListener("click", () =>{
    carouzel.style.transform = "translateX(-1100px)";
    carouzel.style.overflow = "visible";
    carouzel.style.transition = "ease 1s";
});

boutton0.addEventListener("click", () =>{
    carouzel.style.transform = "translateX(0px)";
    carouzel.style.overflow = "visible";
    carouzel.style.transition = "ease 1s";
});
// mon carousel


//mon zoom
let divo = Array.from(document.getElementsByClassName("div-img-gall"));
let double = Array.from(document.getElementsByClassName("double"));

divo.forEach(element => {
    element.addEventListener("mouseover", () =>{
        double.forEach(element => {
            element.style.opacity = "1";
            element.style.transition = "1s";
            element.style.display = "block";
        });
});
});





//mon zoom




