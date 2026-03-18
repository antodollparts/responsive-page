window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 30);
});

function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}
 
function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.remove('open');
}
 