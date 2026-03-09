// ======= HAMBURGER MENU =======
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

if (hamburger && navMenu) {
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
}

// ======= STICKY HEADER =======
const header = document.querySelector("header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });
}

