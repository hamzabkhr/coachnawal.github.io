// Get references to the navbar toggle button and the navbar menu
const navbarToggle = document.getElementById('navbarToggle');
const navbarMenu = document.getElementById('navbarMenu');
const dropdowns = document.querySelectorAll('.dropdown');
const dropdownsMenu = document.getElementById('dropdown-menu');
const mainDrop = document.getElementById('mainDrop')

// Toggle the main navbar
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
mainDrop.addEventListener('click', function () {
    dropdownsMenu.classList.toggle('active');
});
