// Skills Animate Width
let progressSpans = document.querySelectorAll(".progress .skill .line span");
let section = document.querySelector("#our-skills");

function skillsAnimateWidth() {

  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

}

// Trigger the animation onscroll
window.addEventListener('scroll', skillsAnimateWidth);



// Stats Increase Number
let nums = document.querySelectorAll(".stats .box .number");
let statsSection = document.querySelector("#stats");
let started = false; // Function Started ? No

function statsIncreaseNumber() {

  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true; //This will trigger the function one time
    }
  }

}

function startCount(el) {

  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);

}

// Trigger the animation onscroll
window.addEventListener('scroll', statsIncreaseNumber);




// LATEST EVENTS (Countdown Timer)
let countDownDate = new Date("Mar 9, 2023 23:59:59").getTime(); //Number of ms from 1970 until Mar 8, 2023

let counter = setInterval(() => {

  // Get Date Now (from 1970 until now in ms)
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  // Get Time Units
  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }

}, 1000);
