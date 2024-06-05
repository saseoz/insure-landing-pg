const menuToggleBtn = document.querySelector(".nav__hamburger-btn");
const menu = document.querySelector(".nav-menu");


menuToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("hide");
    menu.classList.toggle("menu-hidden");
    menuToggleBtn.firstElementChild.classList.toggle("hidden");
    menuToggleBtn.lastElementChild.classList.toggle("hidden");
    menu.focus();           
    menu.addEventListener("keydown", (e) => trapFocus(menu, e));
})
window.addEventListener("resize", () => {
    if (window.innerWidth > 750 && !menu.classList.contains("menu-hidden")) {
        menu.classList.add("menu-hidden")
        menuToggleBtn.firstElementChild.classList.remove("hidden");
        menuToggleBtn.lastElementChild.classList.add("hidden");
        document.body.classList.remove("hide");
    }
});

// focus trap inside menu
// by https://hidde.blog/using-javascript-to-trap-focus-in-an-element/
function trapFocus(menu, e) {
    const focusableEls = menu.querySelectorAll('a[href]:not([disabled]), button:not([disabled])');
    const firstFocusableEl = focusableEls[0];  
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;
  
    if (e.key !== 'Tab' && e.keyCode !== KEYCODE_TAB) {
      return;
    }
  
    if (e.shiftKey) { // shift + tab
      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        e.preventDefault();
      }
    } else { // tab
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    }
  }