const menu = document.querySelector(".menu");
const navlinks = document.querySelector(".navlinks");
const links = document.querySelector(".navlinks a");
const toggleMenu = () => {
  menu.classList.contains("click")
    ? menu.classList.remove("click")
    : menu.classList.add("click");

  navlinks.classList.contains("showMenu")
    ? navlinks.classList.remove("showMenu")
    : navlinks.classList.add("showMenu");

};

menu.addEventListener("click", toggleMenu);
