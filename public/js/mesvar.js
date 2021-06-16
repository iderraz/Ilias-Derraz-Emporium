let darkmode = document.getElementById("boutton-noir");
let lightSide = document.getElementById("boutton-blanc");

let monbody =document.querySelector("body");
console.log(monbody);
let maNav = document.getElementById("maNavBarre");
let titreEmporium = document.getElementById("titreEmp");
let ligne = Array.from(document.querySelectorAll("a"));
let section2 = document.getElementById("bg-section");
let empsec2 = section2.firstElementChild.firstElementChild.children[1];
let mesp =Array.from(document.getElementsByClassName("para-gall"));
let mespp =Array.from(document.getElementsByClassName("para-gallS"));
let recents = document.getElementById("recentsP");











export {maNav,titreEmporium,ligne,section2,empsec2,monbody,mesp,mespp,recents,darkmode,lightSide};