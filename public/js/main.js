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
    modal_container.style.zIndex = "0";
    monSecondPop.style.opacity = "1";
    monSecondPop.style.zIndex = "4";
});


connexion3.addEventListener("click", () => {
    modal_container.style.opacity = "1";
    modal_container.style.zIndex = "4";
    monSecondPop.style.opacity = "0";
    monSecondPop.style.zIndex = "0";
    
});


closer.addEventListener("click", () =>{
    monSecondPop.style.opacity = "0";
    monSecondPop.style.zIndex = "0";
    maNav.style.backgroundColor = "white";
})
//inscription

