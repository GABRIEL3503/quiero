// Toggle menú mobile
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

function setExpanded(expanded){
  toggle.setAttribute('aria-expanded', String(expanded));
  document.body.classList.toggle('nav-open', expanded);
}

toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  setExpanded(!expanded);
});

// Cerrar el menú al hacer click en un link
menu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => setExpanded(false));
});

// Init AOS
AOS.init({
  duration: 700,
  easing: 'ease-out',
  once: true,
  offset: 60,
});
