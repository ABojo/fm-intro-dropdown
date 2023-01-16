const featuresBtn = document.getElementById("features-btn");
const companyBtn = document.getElementById("company-btn");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navClose = document.querySelector(".nav__close");

function toggleDropdown() {
  this.classList.toggle("nav__btn--open");
  const dropdown = this.parentElement.querySelector(".dropdown");
  dropdown.classList.toggle("dropdown--open");
}

function toggleNav() {
  nav.classList.toggle("open");
}

featuresBtn.addEventListener("click", toggleDropdown);
companyBtn.addEventListener("click", toggleDropdown);

hamburger.addEventListener("click", toggleNav);
navClose.addEventListener("click", toggleNav);
