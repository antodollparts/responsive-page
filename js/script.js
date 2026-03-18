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
 