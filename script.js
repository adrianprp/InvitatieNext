"use strict";

document.querySelector("video").playbackRate = 0.65;

const daysEl = document.querySelector(".hero__counter--days");
const hoursEl = document.querySelector(".hero__counter--hours");
const minsEl = document.querySelector(".hero__counter--mins");
const secsEl = document.querySelector(".hero__counter--secs");
const balloonEl = document.querySelector(".balloon");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const yesImg = document.querySelector(".main__image--yes");
const noImg = document.querySelector(".main__image--no");

const DATE = new Date("08/25/2023");

function App() {
  const now = new Date();

  if (DATE != now) {
    setInterval(() => {
      setCounter();
    }, 1000);
  }

  yesBtn.addEventListener("click", () => {
    yesImg.classList.add("animate");
    noImg.classList.remove("animate");
  });
  noBtn.addEventListener("click", () => {
    noImg.classList.add("animate");
    yesImg.classList.remove("animate");
  });
}

App();

function setCounter() {
  const remainingTime = countdown(DATE);

  daysEl.innerText = remainingTime.days;
  hoursEl.innerText = remainingTime.hours;
  minsEl.innerText = remainingTime.minutes;
  secsEl.innerText = remainingTime.seconds;
}

function countdown(date) {
  let now = new Date().getTime();
  let timeLeft = date.getTime() - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
