// --- 1) Funktion til at vise Gaia-menuen (knappen i HTML bruger onclick="showGaiaMenu()") ---
function showGaiaMenu() {
  document.getElementById('gaiaIntro').style.display      = 'none';
  document.getElementById('gaiaMenuStart').style.display = 'block';
}

// --- 2) Toggle-funktion til Gaia-ikonet ---
let _gaiaOpen = false;
function toggleGaia() {
  const box = document.getElementById('guideBox');
  if (!box) return;

  if (_gaiaOpen) {
    // Luk Gaia
    box.style.opacity   = 0;
    box.style.transform = 'translateY(10px)';
    setTimeout(() => box.style.display = 'none', 300);
  } else {
    // Åbn Gaia
    box.style.display   = 'block';
    setTimeout(() => {
      box.style.opacity   = 1;
      box.style.transform = 'translateY(0)';
    }, 10);
  }
  _gaiaOpen = !_gaiaOpen;
}

// --- 3) Init-funktion, binder alle event listeners ---
function initGaia() {
  const box  = document.getElementById('guideBox');
  const icon = document.querySelector('.floating-icon');
  if (!box || !icon) return;

  // Skjul Gaia initialt
  box.style.display   = 'none';
  box.style.opacity   = 0;
  box.style.transform = 'translateY(10px)';

  // Klik på Gaia-ikonet
  icon.addEventListener('click', toggleGaia);

  // “Vis menu”-knap
  const showMenuBtn = document.querySelector("button[onclick='showGaiaMenu()']");
  if (showMenuBtn) {
    showMenuBtn.addEventListener('click', showGaiaMenu);
  }

  // Dynamisk hilsen baseret på side
  const greeting = document.getElementById('gaiaGreeting');
  if (greeting) {
    const path = location.pathname;
    let text = 'Din spireven 🌱 her på siden 🌍';
    if (path.includes('viden.html'))        text = 'Vil du lære mere om grænserne?';
    else if (path.includes('100ideer.html')) text = 'Skal vi finde en idé?';
    else if (path.includes('kontakt.html')) text = 'Skriv endelig.';
    else if (path.includes('historie.html')) text = 'Håber historien inspirerede!';
    greeting.innerHTML = text;
  }
}

// --- 4) Kør initGaia automatisk når scriptet er indlæst ---
if (typeof initGaia === 'function') initGaia();

