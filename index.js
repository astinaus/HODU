const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navbar = document.getElementById("navbar");
const btnModal = document.getElementById("btn-modal");
const closeModal = document.getElementById("modal-close");
const modal = document.getElementById("modal");

openMenu.addEventListener("click", () => {
    navbar.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
    navbar.style.display = "none";
});

btnModal.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("modal-wrapper")) {
        modal.style.display = "none";
    }
});
