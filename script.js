gsap.registerPlugin(ScrollTrigger);

/* SMOOTH SCROLL */
const lenis = new Lenis({
  smooth: true,
  lerp: 0.08
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* CARD ANIMATION */
document.querySelectorAll(".panel").forEach(panel => {
  const card = panel.querySelector(".card");
  const text = panel.querySelector(".content");

  gsap.fromTo(card,
    { scale: 0.85, opacity: 0.5 },
    {
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: panel,
        start: "top center",
        end: "bottom center",
        scrub: true
      }
    }
  );

  gsap.fromTo(text,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: panel,
        start: "top center+=100",
        scrub: true
      }
    }
  );
});
