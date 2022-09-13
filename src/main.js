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

document.querySelector("#glitch").addEventListener("click", billede);

function billede() {
  document.querySelector("#glitch").classList.add("opacity");
}

document.querySelector("#glitch2").addEventListener("click", billede2);

function billede2() {
  document.querySelector("#glitch2").classList.add("opacity");
}

document.querySelector("#glitch2").addEventListener("animationend", visBillede);
document.querySelector("#glitch").addEventListener("animationend", visBillede);

function visBillede() {
  document.querySelector("#glitch").classList.add("opacityfull");
  document.querySelector("#glitch2").classList.add("opacityfull");
}
