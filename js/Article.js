// ======= HAMBURGER MENU =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
    navMenu.classList.remove("active");
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