const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
const navLinks = document.querySelectorAll('.primary-nav a');
const form = document.querySelector('#contact-form');
const message = document.querySelector('#form-message');

function setHeaderState() {
  header.classList.toggle('scrolled', window.scrollY > 8);
}

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!isOpen));
  nav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-is-open', !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-is-open');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();

  message.classList.remove('error');

  if (!name || !email || !form.elements.email.validity.valid) {
    message.textContent = 'Please enter a name and a valid email address.';
    message.classList.add('error');
    return;
  }

  message.textContent = `Thanks, ${name}. Your note stays right here in this local demo.`;
  form.reset();
});
