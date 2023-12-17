const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
console.log(leftBtn);
const rightBtn = document.getElementById("right");

let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide++;
  console.log(activeSlide);

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
});

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
});

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => {
    slide.classList.remove("acitve");
  });

  slides[activeSlide].classList.add("active");
}
