const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("mobile-menu");
});
menuCloseButton.addEventListener("click", () => {
  document.body.classList.toggle("mobile-menu");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("mobile-menu");
  });
});

const images = [
  "images/coffee-hero-section.png",
  "images/cold-beverages.png",
  "images/hot-beverages.png",
  "images/burger-frenchfries.png",
  "images/special-combo.png",
];
let currentIndex = 0;
const heroImage = document.getElementById("heroImage");

function changeImage() {
  heroImage.style.transform = "scale(1.08)";
  heroImage.style.opacity = 0;
  heroImage.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease";

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    heroImage.src = images[currentIndex];
    heroImage.style.transform = "scale(1.05)";
    heroImage.style.opacity = 1;
  }, 500);
}

setInterval(changeImage, 3000);

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
