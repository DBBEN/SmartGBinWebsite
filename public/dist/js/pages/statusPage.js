let progressBar1 = document.querySelector(".cp-first");
let progressBar2 = document.querySelector(".cp-second");
let progressBar3 = document.querySelector(".cp-third");
let progressBar4 = document.querySelector(".cp-fourth");
let valueContainer1 = document.querySelector(".cpText-first");
let valueContainer2 = document.querySelector(".cpText-second");
let valueContainer3 = document.querySelector(".cpText-third");
let valueContainer4 = document.querySelector(".cpText-fourth");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

let progress1 = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

