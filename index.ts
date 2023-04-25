let imgArray: string[] = [
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

let btnNext = <HTMLButtonElement>document.getElementById("btn-next");
let btnPrev = <HTMLButtonElement>document.getElementById("btn-prev");
let img = <HTMLImageElement>document.getElementById("img");
let i = 0;
let sliderTimeout: ReturnType<typeof setTimeout> = setTimeout(() => {
  slider;
}, 3000);

img.setAttribute("src", imgArray[0]);

function timeoutReset(): void {
  clearTimeout(sliderTimeout);
  sliderTimeout = setTimeout(slider, 3000);
}

function nextImg(): void {
  btnNext.disabled = true;
  timeoutReset();
  img.classList.add("animation");
  if (i == imgArray.length - 1) {
    i = 0;
  } else {
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

function prevImg(): void {
  btnPrev.disabled = true;
  timeoutReset();
  img.classList.add("animation");
  if (i == 0) {
    i = imgArray.length - 1;
  } else {
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

function slider(): void {
  timeoutReset();
  img.classList.add("animation");
  if (i == imgArray.length - 1) {
    i = 0;
  } else {
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
