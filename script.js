const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const form = document.getElementById('export-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // IMPORTANT: Replace this with your real business email before publishing.
  const businessEmail = 'mikiepreston@gmail.com';

  const data = new FormData(form);
  const subject = encodeURIComponent('MPMP EXPORTS enquiry from ' + data.get('name'));
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Company: ${data.get('company') || 'Not provided'}
Email: ${data.get('email')}
Destination country: ${data.get('country')}
Product required: ${data.get('product')}
Estimated quantity: ${data.get('quantity') || 'Not provided'}

Requirements:
${data.get('message')}`
  );

  window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
});
