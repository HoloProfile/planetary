// scripts/gaia.js
// Gør showGaiaMenu globalt tilgængelig, så HTML-knappen kan kalde den
function showGaiaMenu() {
  document.getElementById('gaiaIntro').style.display      = 'none';
  document.getElementById('gaiaMenuStart').style.display = 'block';
}
function initGaia() {
  const box = document.getElementById('guideBox');
  const icon = document.querySelector('.floating-icon');
  const greeting = document.getElementById('gaiaGreeting');
  const showMenuBtn = document.querySelector("button[onclick='showGaiaMenu()']");

  if (!box || !icon) return;

  // 1) Skjul boksen
  box.style.display = 'none';
  box.style.opacity   = 0;
  box.style.transform = 'translateY(10px)';

  // 2) Klik på Gaia-ikon
  icon.addEventListener('click', () => {
    const isOpen = getComputedStyle(box).display === 'block';
    if (isOpen) {
      box.style.opacity = 0;
      box.style.transform = 'translateY(10px)';
      setTimeout(() => box.style.display = 'none', 300);
    } else {
      box.style.display = 'block';
      setTimeout(() => {
        box.style.opacity = 1;
        box.style.transform = 'translateY(0)';
      }, 10);
    }
  });

  // 3) Hover (kun desktop)
  icon.addEventListener('mouseenter', () => {
    if (window.innerWidth >= 768) {
      box.style.display = 'block';
      setTimeout(() => {
        box.style.opacity = 1;
        box.style.transform = 'translateY(0)';
      }, 10);
    }
  });

  // 4) Vis Gaia-menu
  if (showMenuBtn) {
    showMenuBtn.addEventListener('click', () => {
      document.getElementById('gaiaIntro').style.display      = 'none';
      document.getElementById('gaiaMenuStart').style.display = 'block';
    });
  }

  // 5) Accordion med ARIA
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.setAttribute('aria-expanded', 'false');
    header.addEventListener('click', () => {
      const open = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!open));
      header.classList.toggle('open');
      const content = header.nextElementSibling;
      if (content) content.classList.toggle('open');
    });
  });

  // 6) Dynamisk hilsen
  if (greeting) {
    const path = location.pathname;
    let text = 'Din helt egen spireven 🌱 her på siden 🌍';
    if (path.includes('viden.html'))       text = 'Vil du lære mere om planetens grænser?';
    else if (path.includes('100ideer.html')) text = 'Skal vi finde en idé sammen?';
    else if (path.includes('kontakt.html')) text = 'Du kan altid skrive, hvis du vil spørge eller dele noget.';
    else if (path.includes('historie.html')) text = 'Har du læst eller lyttet til historien? Håber du fandt det lærerigt.';
    greeting.innerHTML = text;
  }
}

// Kør init
if (typeof initGaia === 'function') initGaia();
