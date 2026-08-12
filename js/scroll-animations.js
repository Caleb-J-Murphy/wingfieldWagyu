const landSection = document.querySelector(".section-land");

if (landSection) {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          // Only animate once.
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25,
    },
  );

  observer.observe(landSection);
}
