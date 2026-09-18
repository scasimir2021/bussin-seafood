const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
navToggle.addEventListener('click', () => {
  navToggle.setAttribute('aria-expanded', String(nav.classList.toggle('open')));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}));
const dialog = document.querySelector('#lightbox');
const image = document.querySelector('#lightboxImg');
document.querySelectorAll('[data-img]').forEach(button => button.addEventListener('click', () => {
  image.src = button.dataset.img;
  image.alt = button.querySelector('img').alt;
  dialog.showModal();
}));
document.querySelector('#lightboxClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
