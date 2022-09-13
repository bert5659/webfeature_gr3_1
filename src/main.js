import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

scroll(animate(".progress-bar", { scaleX: [0, 1] }));

animate(
  ".staggeranimation li",
  { opacity: [0, 1] },
  {
    delay: stagger(1, { start: 2 }),
  }
);

// document.querySelector("#glitch").addEventListener("click", billede);

// function billede() {
//   document.querySelector("#glitch").classList.add("opacity");
// }

// document.querySelector("#glitch2").addEventListener("click", billede2);

// function billede2() {
//   document.querySelector("#glitch2").classList.add("opacity");
// }

// document.querySelector("#glitch2").addEventListener("animationend", visBillede);

// function visBillede() {
//   document.querySelector("#glitch").classList.add("opacityfull");
// }

// billede 1 glitchart
document.querySelector("#glitch").addEventListener("click", billede);

function billede() {
  document.querySelector("#glitch").classList.add("opacity");
}

document.querySelector("#glitch").addEventListener("animationend", visBillede2);

function visBillede2() {
  document.querySelector("#glitch").classList.add("opacityfull");
}

// billede analog
document.querySelector("#analog").addEventListener("click", analogEt);

function analogEt() {
  document.querySelector("#analog").classList.add("opacity");
}

document.querySelector("#analog").addEventListener("animationend", visAnalog);

function visAnalog() {
  document.querySelector("#analog").classList.add("opacityfull");
}

const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);
