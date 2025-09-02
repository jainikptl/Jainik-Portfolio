const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinksItems = document.querySelectorAll('#nav-links a');
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});

// Handle active state for navigation
navLinksItems.forEach(link => {
  link.addEventListener('click', (e) => {
    // Remove active class from all links
    navLinksItems.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    e.target.classList.add('active');
  });
});