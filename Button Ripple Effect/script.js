const btn = document.querySelectorAll(".btn");

btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft; // Corrected typo: offsetleft to offsetLeft

    const xInside = x - btnLeft;
    const yInside = y - btnTop;
    //  console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px"; // Corrected typo: top to left

    btn.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
