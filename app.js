const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("nav--open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});


mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("nav--open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});