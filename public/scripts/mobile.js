const mobileMenuButtonElement = document.getElementById("mobile-menu-btn");
const mobileMenuElement = document.getElementById("mobile-menu");

function toggleMobileMenu() {
  mobileMenuElement.classList.toggle("open");
}

//Hamburger Button
mobileMenuButtonElement.addEventListener("click", toggleMobileMenu);
