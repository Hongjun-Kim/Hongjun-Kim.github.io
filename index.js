// import nav from "./js/nav.js";
import "./scss/index.scss";

// -----------------------------Selectors------------------------
const navLink = document.querySelectorAll(".nav__link");

// -------------------------Event Listeners----------------------

// Launch app
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});
//linkActive
navLink.forEach((n) => n.addEventListener("click", linkAction));
console.log(navLink);

// ------------------------------Functions-----------------------
const initApp = () => {
  showMenu("nav-toggle", "nav-menu");
};

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
function linkAction() {
  //active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  //remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
