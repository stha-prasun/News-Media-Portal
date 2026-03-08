// ======= PARALLAX SCROLL EFFECT =======
const text = document.getElementById("text");
const leaf = document.getElementById("leaf");
const hill1 = document.getElementById("hill1");
const hill4 = document.getElementById("hill4");
const hill5 = document.getElementById("hill5");

const isWideScreen = window.innerWidth >= 600;

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  leaf.style.top = value * -1.5 + "px";
  leaf.style.left = value * 0.5 + "px";
  hill1.style.top = value * 1 + "px";

  if (isWideScreen) {
    hill4.style.left = value * -0.25 + "px";
    hill5.style.left = value * 1.5 + "px";
  } else {
    hill5.style.left = value * 1.5 + "px";
  }
});

// ======= HAMBURGER MENU =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.style.display = navMenu.classList.contains("active")
    ? "none"
    : "flex";
});

// Close menu when a link is clicked
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.style.display = "flex";
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      hamburger.style.display = "flex";
    }
  }
});

// ======= STICKY HEADER =======
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
