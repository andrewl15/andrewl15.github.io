//Menu Javascript Handling
let menu = document.getElementById('class-links-btn');
let navbar = document.querySelector('.class-dropdown');
let menuOpen = false;

menu.onclick = () => {
  menuOpen = !menuOpen;
  navbar.classList.toggle('open', menuOpen);
};

function closeDropdownOnResize() {
  const screenWidth = window.innerWidth;
  const threshold = 768;
  if (screenWidth > threshold && menuOpen) {
    menuOpen = false;
    navbar.classList.remove('open');
  }
}

window.addEventListener('resize', closeDropdownOnResize);
//Menu Javascript Handling
