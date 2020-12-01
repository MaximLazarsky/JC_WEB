const menuToggle = document.querySelector("#menuToggle");
const headerNavigationMenu = document.querySelector(".headerNavigationMenu");

menuToggle.addEventListener("click", (event) => {
  if (event) {
    headerNavigationMenu.classList.toggle("headerNavigationMenuActive");
  }
});
