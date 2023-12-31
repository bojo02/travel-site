import "../styles/styles.css";

import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let mobileMenu = new MobileMenu();
new RevealOnScroll(
  document.querySelectorAll(".page-section--testimonials"),
  75
);
new RevealOnScroll(document.querySelectorAll(".feature-item"), 60);

let stickyHeader = new StickyHeader();

if (module.hot) {
  module.hot.accept();
}
