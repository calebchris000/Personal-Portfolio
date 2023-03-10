import "./style.scss";
import "./modules/menu.scss";
import "./modules/email.scss";
import "./modules/project.scss"
require("./modules/profile.js");
require("./modules/menu.js");

const top = document.querySelector(".top");
const wrapper = document.querySelector(".imageWrapper");
const navlinks = document.querySelector(".navlinks");
const menu = document.querySelector(".menu");

top.addEventListener("click", () => {
  wrapper.style.opacity === "1"
    ? (wrapper.style.opacity = "0")
    : (wrapper.style.opacity = "1");
});

top.addEventListener('click', () => {
    navlinks.classList.contains('showMenu')? navlinks.classList.remove('showMenu'):0;
    menu.classList.contains("click")
    ? menu.classList.remove("click"):0
})
