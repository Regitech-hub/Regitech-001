window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});

// Set initial hidden state
document.querySelectorAll('.section').forEach(section => {
  section.style.transition0;
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 0.1s ease-out';
});
