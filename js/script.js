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

/* Función para filtrar productos por categoría */

function filterProducts(categoria, botonClickeado) {
  // Quitar active de todos los botones
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  botonClickeado.classList.add('active');

  // Mostrar u ocultar cada tarjeta completamente
  document.querySelectorAll('.product-card').forEach(card => {
    const mostrar = categoria === 'all' || card.dataset.cat === categoria;
    card.style.display = mostrar ? 'block' : 'none';
  });
}

//BANNER DE COOKIES usando localStorage

// Al cargar la página, se revisa si ya decidió antes
window.addEventListener('DOMContentLoaded', () => {
  const decision = localStorage.getItem('cookies');

  // Si ya aceptó o rechazó, no mostramos el banner
  if (decision === 'accepted' || decision === 'rejected') {
    document.getElementById('cookie-banner').classList.add('hidden');
  }
});

function acceptCookies() {
  // Guardamos la decisión en localStorage (persiste entre sesiones)
  localStorage.setItem('cookies', 'accepted');
  closeCookieBanner();
  console.log('Cookies aceptadas — activar tracking');
}

function rejectCookies() {
  localStorage.setItem('cookies', 'rejected');
  closeCookieBanner();
  console.log('Cookies rechazadas — no tracking');
}

function closeCookieBanner() {
  const banner = document.getElementById('cookie-banner');

  banner.style.transition = 'transform .3s ease, opacity .3s ease';
  banner.style.transform = 'translateY(100%)';
  banner.style.opacity = '0';
  // Ocultar del DOM después de que termina la animación
  setTimeout(() => banner.classList.add('hidden'), 300);
}
