// Sticky navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobile = document.getElementById('closeMobile');

hamburger.addEventListener('click', () => {
  mobileMenu.style.right = '0';
});

closeMobile.addEventListener('click', () => {
  mobileMenu.style.right = '-100%';
});




function setupClickToggle(targetId, contentId) {
  const target = document.getElementById(targetId);
  const content = document.getElementById(contentId);

  if (!target || !content) return;

  target.addEventListener('click', () => {
    const isVisible = content.style.display === 'block';
    content.style.display = isVisible ? 'none' : 'block';
  });
}

setupClickToggle('target', 'maks');









