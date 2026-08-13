
const mobileBtn = document.querySelector("#mobileMenuButton");
const closeMenu = document.querySelector("#closeMenu");
const mobileMenu = document.querySelector("#mobileMenu");
const overlay = document.querySelector("#overlay");
console.log(mobileBtn, closeMenu, mobileMenu, overlay);

mobileBtn.addEventListener("click", () => {
mobileMenu.classList.remove("translate-x-full");
overlay.classList.remove("hidden");
    
});
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-x-full");
  overlay.classList.add("hidden");
});