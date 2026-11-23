// Script utama untuk website Warisan Budaya Melayu

// script.js : menu hamburger (dipakai semua halaman)

const tombolMenu = document.getElementById("tombol-menu");
const menu = document.getElementById("menu");

tombolMenu.addEventListener("click", function () {
  menu.classList.toggle("terbuka");
});
