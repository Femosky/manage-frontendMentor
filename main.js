const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
// const iconHamburger = document.querySelector(".icon-hamburger");
// const iconClose = document.querySelector(".icon-close");

navToggle.addEventListener("click", () => {
  primaryNav.classList.toggle("opened");
});
