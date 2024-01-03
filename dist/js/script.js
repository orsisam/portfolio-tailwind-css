// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    // header.classList.remove('absolute');
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
    // header.classList.add('absolute');
  }
};
