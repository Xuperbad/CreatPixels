const keys = document.querySelectorAll('.key');
const sections = [...document.querySelectorAll('main section[id], main[id]')];

function activateKeyByHash(hash) {
  const target = hash || '#home';
  keys.forEach((key) => {
    key.classList.toggle('active', key.getAttribute('href') === target);
  });
}

keys.forEach((key) => {
  key.addEventListener('click', () => {
    key.classList.add('pressed');
    setTimeout(() => key.classList.remove('pressed'), 150);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible?.target?.id) {
      activateKeyByHash(`#${visible.target.id}`);
    }
  },
  { threshold: [0.35, 0.6, 0.85] }
);

sections.forEach((section) => observer.observe(section));
activateKeyByHash(window.location.hash);
