// Progressive enhancement: navigation and abstracts also work without JavaScript.
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');
const navigationLinks = [...navigation.querySelectorAll('a')];
const mobileMenu = window.matchMedia('(max-width: 800px)');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  menuButton.querySelector('span').textContent = '+';
}

function updateMenu() {
  menuButton.hidden = !mobileMenu.matches;
  closeMenu();
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('is-open', !isOpen);
  menuButton.querySelector('span').textContent = isOpen ? '+' : '−';
});

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link) return;
  closeMenu();
  // Move keyboard focus out of the menu before it becomes hidden.
  const destination = document.querySelector(link.hash);
  destination.setAttribute('tabindex', '-1');
  destination.focus({ preventScroll: true });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
mobileMenu.addEventListener('change', updateMenu);
updateMenu();

if ('IntersectionObserver' in window) {
  const sectionPositions = new Map();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => sectionPositions.set(entry.target.id, entry.isIntersecting));
    const visible = navigationLinks.find((link) => sectionPositions.get(link.hash.slice(1)));
    if (!visible) return;
    navigationLinks.forEach((link) => {
      if (link === visible) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  navigationLinks.forEach((link) => observer.observe(document.querySelector(link.hash)));
}
