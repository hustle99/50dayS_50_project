const reset = document.querySelector(".reset");

const stop = document.querySelector(".stop");

const start = document.querySelector(".start");

const seconds = document.querySelector(".seconds");

const miniSecond = document.querySelector(".mini-seconds");

let counter = 0;
let miniCounter = 0;

start.addEventListener("click", () => {
  console.log("start clicked");
  let timerInterval = setInterval(startTimer, 100);

  reset.addEventListener("click", () => {
    clearInterval(timerInterval);
    miniSecond.innerHTML = "00";
    seconds.innerHTML = "00";
  });

  stop.addEventListener("click", () => {
    clearInterval(timerInterval);
  });
});

function startTimer() {
  counter++;
  miniSecond.innerHTML = counter;
  if (counter === 10) {
    counter = 0;
    seconds.innerHTML = miniCounter;
    miniCounter++;
  }
}
