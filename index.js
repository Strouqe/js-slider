"use strict";
let imgArray = [
    "./img/gal-1.jpeg",
    "./img/gal-2.jpeg",
    "./img/gal-3.jpeg",
    "./img/gal-4.jpeg",
    "./img/gal-5.jpeg",
    "./img/gal-6.jpeg",
    "./img/gal-7.jpeg",
    "./img/gal-8.jpeg",
    "./img/gal-9.jpeg",
    "./img/gal-10.jpeg",
    "./img/gal-11.jpeg",
    "./img/gal-12.jpeg",
    "./img/gal-13.jpeg",
    "./img/gal-14.jpeg",
];
let btnNext = document.getElementById("btn-next");
let btnPrev = document.getElementById("btn-prev");
let img = document.getElementById("img");
let i = 0;
let sliderTimeout = setTimeout(() => {
    slider;
}, 3000);
img.setAttribute("src", imgArray[0]);
function timeoutReset() {
    clearTimeout(sliderTimeout);
    sliderTimeout = setTimeout(slider, 3000);
}
function nextImg() {
    btnNext.disabled = true;
    timeoutReset();
    img.classList.add("animation");
    if (i == imgArray.length - 1) {
        i = 0;
    }
    else {
        i++;
    }
    setTimeout(() => {
        img.setAttribute("src", imgArray[i]);
    }, 500);
    setTimeout(() => {
        img.classList.remove("animation");
        btnNext.disabled = false;
    }, 800);
}
function prevImg() {
    btnPrev.disabled = true;
    timeoutReset();
    img.classList.add("animation");
    if (i == 0) {
        i = imgArray.length - 1;
    }
    else {
        i--;
    }
    setTimeout(() => {
        img.setAttribute("src", imgArray[i]);
    }, 500);
    setTimeout(() => {
        img.classList.remove("animation");
        btnPrev.disabled = false;
    }, 850);
}
function slider() {
    timeoutReset();
    img.classList.add("animation");
    if (i == imgArray.length - 1) {
        i = 0;
    }
    else {
        i++;
    }
    setTimeout(() => {
        img.setAttribute("src", imgArray[i]);
    }, 400);
    setTimeout(() => {
        img.classList.remove("animation");
    }, 850);
}
timeoutReset();
