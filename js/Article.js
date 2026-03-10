// ======= HAMBURGER MENU =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    hamburger.classList.add("hide");
  }
});

// Close menu when a link is clicked
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("hide");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("hide");
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