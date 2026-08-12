const hero = document.querySelector(".hero");
const heroBg = document.querySelector(".hero-bg");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (hero && heroBg && !prefersReducedMotion) {
  let ticking = false;

  const updateHeroParallax = () => {
    const rect = hero.getBoundingClientRect();
    const progress = -rect.top;

    if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
      heroBg.style.transform = `
        scale(1.08)
        translateY(${progress * 0.18}px)
      `;
    }

    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeroParallax);
        ticking = true;
      }
    },
    { passive: true },
  );

  updateHeroParallax();
}
