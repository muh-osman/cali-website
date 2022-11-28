//Skill section ==> Animate Width On Scrolling

// let section = document.querySelector("#our-skills");
// let spans = document.querySelectorAll(".progress .skill .line span");

// window.onscroll = () => {
//   if (window.scrollY >= section.offsetTop - 100) {
//     spans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
// };



// //Stats section ==> Increase Numbers On Scrolling
// let numSection = document.querySelector("#stats");
// let numSpans = document.querySelectorAll(".stats .box .number");
// let started = false;

// window.onscroll = () => {
//   if (window.scrollY >= numSection.offsetTop - 100) {
//     if (!started) {
//       numSpans.forEach((num) => sratrCount(num));
//     }
//     started = true;
//   }
// };

// function sratrCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 3000 / goal);
// }






let progressSpans = document.querySelectorAll(".progress .skill .line span");
let section = document.querySelector("#our-skills");

let nums = document.querySelectorAll(".stats .box .number");
let statsSection = document.querySelector("#stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Skills Animate Width
  if (window.scrollY >= section.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}