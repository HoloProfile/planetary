// 1) Sørg for at showGaiaMenu altid er globalt tilgængelig
function showGaiaMenu() {
  document.getElementById('gaiaIntro').style.display      = 'none';
  document.getElementById('gaiaMenuStart').style.display = 'block';
}
// 1) State‐variabel til om Gaia er åben eller ej
let _gaiaOpen = false;

// 2) Funktionen der åbner/lukker Gaia-boksen
function toggleGaia() {
  const box = document.getElementById('guideBox');
  if (!box) return;

  if (_gaiaOpen) {
    // Luk
    box.style.opacity   = 0;
    box.style.transform = 'translateY(10px)';
    setTimeout(() => box.style.display = 'none', 300);
  } else {
    // Åbn
    box.style.display   = 'block';
    setTimeout(() => {
      box.style.opacity   = 1;
      box.style.transform = 'translateY(0)';
    }, 10);
  }
  _gaiaOpen = !_gaiaOpen;
}
// 3) initGaia med resten af din logik
function initGaia() {
  const box         = document.getElementById('guideBox');
  const icon        = document.querySelector('.floating-icon');
  const greeting    = document.getElementById('gaiaGreeting');
  const showMenuBtn = document.querySelector("button[onclick='showGaiaMenu()']");

  if (!box || !icon) return;

  // Skjul boksen initialt
  box.style.display   = 'none';
  box.style.opacity   = 0;
  box.style.transform = 'translateY(10px)';

  // Klik på Gaia-ikon
  icon.addEventListener('click', toggleGaia);

  // Hover kun på desktop
  icon.addEventListener('mouseenter', () => {
    if (window.innerWidth < 768) return;
    if (getComputedStyle(box).display !== 'block') {
      toggleGaia();
    }
  });

  // “Vis menu”-knap
  if (showMenuBtn) {
    showMenuBtn.addEventListener('click', showGaiaMenu);
  }

  // Accordion i Gaia-menuen
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.setAttribute('aria-expanded', 'false');
    header.addEventListener('click', () => {
      const expanded = header.getAttribute('aria-expanded') === 'true';
      header.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('open');
      const content = header.nextElementSibling;
      if (content) content.classList.toggle('open');
    });
  });

  // Din dynamiske hilsen …
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

// 4) Kør initGaia så snart filen er indlæst
if (typeof initGaia === 'function') initGaia();

