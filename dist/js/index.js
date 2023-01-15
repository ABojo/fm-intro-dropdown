const featuresBtn = document.getElementById("features-btn");
const companyBtn = document.getElementById("company-btn");

function toggleDropdown() {
  this.classList.toggle("nav__btn--open");
  const dropdown = this.parentElement.querySelector(".dropdown");
  dropdown.classList.toggle("dropdown--open");
}

featuresBtn.addEventListener("click", toggleDropdown);
companyBtn.addEventListener("click", toggleDropdown);
