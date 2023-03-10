import "./style.scss";
require("./modules/profile.js");

const top = document.querySelector(".top");
const wrapper = document.querySelector(".imageWrapper");

top.addEventListener("click", () => {
  wrapper.style.opacity === "1"
    ? (wrapper.style.opacity = "0")
    : (wrapper.style.opacity = "1");
});