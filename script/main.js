let toggle = document.getElementById("theme-toggle");

let storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

toggle.onclick = function () {
  let currentTheme = document.documentElement.getAttribute("data-theme");
  let targetTheme = "light";

  if (currentTheme === "light") {
    targetTheme = "dark";
  }

  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
};


/** Navbar change color after scroll */
const navbar = document.querySelector(".navbar");
const scrollWatcher = document.createElement("div");

scrollWatcher.setAttribute("data-scroll-watcher","");
navbar.before(scrollWatcher);

const navObserver = new IntersectionObserver(
  (entries)=>{
    navbar.classList.toggle("sticking")
  }
);

navObserver.observe(scrollWatcher);