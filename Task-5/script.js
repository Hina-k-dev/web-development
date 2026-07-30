let Navbar = document.querySelector(".navbar");
let Menu = document.getElementById("nav_menu");

Menu.addEventListener("click", () => {
    Navbar.classList.toggle("active");
});