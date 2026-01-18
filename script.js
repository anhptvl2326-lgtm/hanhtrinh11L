const scenes = document.querySelectorAll('.scene');

window.addEventListener('scroll', () => {
  scenes.forEach(scene => {
    const card = scene.querySelector('.card');
    const rect = scene.getBoundingClientRect();
    const center = window.innerHeight / 2;

    if (rect.top < center && rect.bottom > center) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
});
