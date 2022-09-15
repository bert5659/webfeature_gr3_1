import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

scroll(animate(".progress-bar", { scaleX: [0, 1] }));

inView(".staggeranimation", ({target}) => {
  animate(
    target.querySelectorAll("li"),
    { opacity: [0, 1] },
    {
      duration:0.7,
      delay: stagger(1, { start: 0.5 }),
    });
    return () => {
      animate (target, {opacity: [0,1]}, {duration: 2});
    }
});

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

// sticky til sektion 1
document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("p");
  scroll(animate(elementderskalparallaxes, { y: [50, 500] }), {
    target: elementderskalparallaxes,
  });
});
