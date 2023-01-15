const featuresBtn = document.getElementById("features-btn");
const companyBtn = document.getElementById("company-btn");
const hamburger = document.querySelector(".nav__hamburger");
const navList = document.querySelector(".nav__list");

function toggleDropdown() {
  this.classList.toggle("nav__btn--open");
  const dropdown = this.parentElement.querySelector(".dropdown");
  dropdown.classList.toggle("dropdown--open");
}

featuresBtn.addEventListener("click", toggleDropdown);

companyBtn.addEventListener("click", toggleDropdown);

hamburger.addEventListener("click", function () {
  this.classList.toggle("nav__hamburger--open");
  navList.classList.toggle("open");
});
