const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

const featureCards = document.querySelectorAll('.feature-card');
const performanceBoxes = document.querySelectorAll('.performance-box');
const testimonialBoxes = document.querySelectorAll('.testimonial');

[...featureCards, ...performanceBoxes, ...testimonialBoxes].forEach(card => observer.observe(card));

const ctaButton = document.querySelector('.cta');

ctaButton.addEventListener('click', () => {
  const contactSection = document.querySelector('#how-to');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
});
