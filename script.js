const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const img = card.querySelector('img');

    if (rect.top < window.innerHeight * 0.4 && rect.bottom > window.innerHeight * 0.6) {
      img.style.transform = 'scale(1)';
    } else {
      img.style.transform = 'scale(0.85)';
    }
  });
});
