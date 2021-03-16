// const test = () => {
//   console.log("this is from the Test File");
// };

// selectors
const burger = document.querySelector(".burger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
console.log(burger);

// Event Listeners
export const nav = () => {
  burger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    if (burger.display - none) {
      console.log("aaa");
      navlinks.classList.remove("open");
    }

    links.forEach((link) => {
      link.classList.toggle("fade");
    });
  });
};
// funcions

// export default nav;
