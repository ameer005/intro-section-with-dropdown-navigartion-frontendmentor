const menuBtn = document.querySelector(".btn-mobile-nav");

const header = document.querySelector(".header");

// dropdown fuctionality
// document.addEventListener("click", function (e) {
//   const isDropdownButton = e.target.matches(".nav__link");

//   if (!isDropdownButton && e.target.closest(".nav__item") !== null) return;

//   let currentDropdown;
//   if (isDropdownButton) {
//     currentDropdown = e.target.closest(".nav__item");
//     currentDropdown.classList.toggle("active");
//   }

//   document.querySelectorAll(".nav__item.active").forEach((dropdown) => {
//     if (dropdown === currentDropdown) return;
//     dropdown.classList.remove("active");
//   });
// });

document.addEventListener("click", function (e) {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");

  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;

  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

// drop down menu
menuBtn.addEventListener("click", function () {
  header.classList.toggle("active-menu");
});
