const slider = document.querySelector(".slider");
const imgs = document.querySelectorAll(".slider img");

const prevBtn = document.querySelector("#prev_btn");
const nextBtn = document.querySelector("#next_btn");

let currentImgIndex = 1;

let timer;

function slide() {
    slider.style.transform = `translateX(${ (-imgs[0].clientWidth * currentImgIndex) }px)`;

    window.clearInterval(timer);
    timer = setInterval(() => {
        if ( currentImgIndex >= imgs.length -1 ) return;
    
            slider.style.transition = "transform .5s ease-out";
            currentImgIndex++;
            slide();
    }, 3000);
}


// event listeners
nextBtn.addEventListener("click", () => {
    if ( currentImgIndex >= imgs.length -1 ) return;

    currentImgIndex++;
    slider.style.transition = "transform .5s ease-out";
    slide();
});

prevBtn.addEventListener("click", () => {
    if ( currentImgIndex <= 0 ) return;

    slider.style.transition = "transform .5s ease-out";
    currentImgIndex--;
    slide();
});

slider.addEventListener("transitionend", () => {
    if (imgs[currentImgIndex].id === "clone_ultima_img") {
        slider.style.transition = "none";
        currentImgIndex = imgs.length -2;
        slide();
    }
    if (imgs[currentImgIndex].id === "clone_primeira_img") {
        slider.style.transition = "none";
        currentImgIndex = imgs.length - currentImgIndex;
        slide();
    }
});

