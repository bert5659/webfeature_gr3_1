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
