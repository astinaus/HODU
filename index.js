const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navbar = document.getElementById("navbar");

openMenu.addEventListener("click", () => {
    navbar.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    navbar.style.display = "none";
});
