const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");
/*=============== SHOW MENU ===============*/
/* validate if cnostant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu")
  })
}
/*============== MENU HIDDEN ===============*/

/* validate if cnostant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
  const navmenu = document.getElementById("nav-menu")
  //when we click on each nav link, we remove the show menu class
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(a => a.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
  const header = document.getElementById("header")
  // when the scroll is greater than 60 viewport heiight, add the class scroll header to the tag header
  if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")

}
window.addEventListener("scroll", scrollHeader)
/*=============== TESTIMONIAL SWIPER ===============*/

var swiper = new Swiper(".testimonial-wrapper", {
  spacebetween: 30, 
  loop: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== PORTFOLIO ITEM FILTER ===============*/

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("theme-button");
const themeModal = document.querySelector("customize-theme");
const fontSizes = document.querySelector

//open model
const openThemeModal = () =>{
  themeModal.style.display = 'grid';
}
//close model
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none';
  }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", openThemeModal);

/*===== FONTS =====*/

/*===== PRIMARY COLORS =====*/

/*===== THEME BACKGROUNDS =====*/
