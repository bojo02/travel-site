import "../styles/styles.css";

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

let mobileMenu = new MobileMenu();
new RevealOnScroll(
  document.querySelectorAll(".page-section--testimonials"),
  75
);
new RevealOnScroll(document.querySelectorAll(".feature-item"), 60);

if (module.hot) {
  module.hot.accept();
}
