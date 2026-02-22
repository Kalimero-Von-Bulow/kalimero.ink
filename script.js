// Mobile nav toggle
const burger = document.querySelector('.nav__burger');
const links  = document.querySelector('.nav__links');

if (burger && links) {
  burger.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'absolute';
    links.style.top = '60px';
    links.style.left = '0';
    links.style.right = '0';
    links.style.background = '#0a0a0a';
    links.style.padding = '1rem 2rem';
    links.style.borderBottom = '2px solid #c8001a';
  });
}

// Scroll reveal (simple IntersectionObserver)
const revealEls = document.querySelectorAll('.section');
const observer  = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(40px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observer.observe(el);
});
