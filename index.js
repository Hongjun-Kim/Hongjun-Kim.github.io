// import nav from "./js/nav.js";
import "./scss/index.scss";

const run = () => {
  console.log("Yo i am runnin");
};

//run();

// Selectors

// Event Listeners
// Launch app
document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    initApp();
  }
});

// Functions
const initApp = () => {
  nav();
};

const nav = () => {
  const burger = document.querySelector(".burger");
  const navlinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");

  if (!burger.style.display) {
    navlinks.classList.remove("open");
    burger.classList.remove("toggle");
    links.forEach((link) => {
      link.classList.remove("fade");
    });
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navlinks.classList.remove("open");
      burger.classList.remove("toggle");
      links.forEach((link) => {
        link.classList.remove("fade");
      });
    }
  });
  burger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    links.forEach((link) => {
      link.classList.toggle("fade");
    });
    burger.classList.toggle("toggle");
  });
};
