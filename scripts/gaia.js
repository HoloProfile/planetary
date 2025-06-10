// gaia.js

// --- 1) Planetære tips ---
const tips = [
  'Reducer dit plastikforbrug ved at genbruge dine indkøbsposer.',
  'Sluk for standby på tv og computere for at spare strøm.',
  'Plant en hjemmeavlet urt på din altan eller vindueskarm.',
  'Brug cyklen eller gå ture fremfor kortere bilture.',
  'Tør dit tøj på tørrestativ indendørs i stedet for tørretumbler.',
  'Spis mindst én vegansk ret om ugen.',
  'Samle regnvand til dine potteplanter.',
  'Vask altid tøj ved 30 °C fremfor højere temperaturer.',
  'Skift til LED-pærer – de bruger langt mindre strøm.',
  'Kog kun den mængde vand, du rent faktisk bruger.',
  'Støt lokale fødevareproducenter og markeder.',
  'Sluk lyset i tomme rum i stedet for at lade det stå tændt.',
  'Donér tøj og elektronik, du ikke bruger, i stedet for at smide ud.',
  'Brug genanvendeligt filter i kaffemaskinen eller en stålfilter.',
  'Gå efter second-hand møbler og tøj for at mindske nyt-produktion.',
  'Installér sparebruser-hoved for at reducere vandforbrug.',
  'Afkalk dine husholdningsapparater – det sparer energi.',
  'Planlæg indkøb for at undgå madspild.',
  'Tag kortere brusere – hver minut tæller.',
  'Tjek dæktryk på din bil for at mindske brændstofforbrug.',
  'Indfør en ugentlig “el-fri” dag i dit hjem.',
  'Brug timers på stikkontakter til opladning – undgå overopladning.',
  'Udskift engangsprodukter med genbrugelige alternativer.',
  'Tøm fryseren for frost – det sparer energi.',
  'Vælg genbrugspapir og FSC-mærkede træprodukter.',
  'Installer en spareventil på dine vandhaner.',
  'Brug tilberedning i én gryde fremfor flere for mindre opvask.',
  'Læg låg på gryder – det koger hurtigere og bruger mindre energi.',
  'Skift batterier i dine røgalarm hvert år – genopladelige er bedst.',
  'Gå sammen med naboer om fælles genbrugsstation i opgangen.'
];

let _gaiaOpen = window._gaiaOpen || false;
let _gaiaTipInterval = window._gaiaTipInterval || null;

// Utility: toggle Gaia-boksen
function toggleGaia() {
  const box = document.getElementById('guideBox');
  if (!box) return;

  if (_gaiaOpen) {
    box.style.opacity   = 0;
    box.style.transform = 'translateY(10px)';
    setTimeout(() => box.style.display = 'none', 300);
  } else {
    box.style.display   = 'block';
    setTimeout(() => {
      box.style.opacity   = 1;
      box.style.transform = 'translateY(0)';
    }, 10);
  }

  _gaiaOpen = !_gaiaOpen;
}

// Opdater indholdet af tip-elementet
function updateTip() {
  const tipEl = document.getElementById('gaiaTip');
  if (tipEl) {
    tipEl.textContent = `🌿 Hey – et planetært tip: ${tips[Math.floor(Math.random() * tips.length)]}`;
  }
}

// Vis Gaia-menu og første tip
function showGaiaMenu() {
  // Skjul alle intros og "Vis menu"-knapper
  document.querySelectorAll('[id^="gaiaIntro-"]').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.guide-audio').forEach(btn => btn.style.display = 'none');

  // Vis og opdater tip-elementet
  const tipEl = document.getElementById('gaiaTip');
  if (tipEl) {
    tipEl.style.display = 'block';
    updateTip();
    if (!_gaiaTipInterval) {
      _gaiaTipInterval = setInterval(updateTip, 300000);
      window._gaiaTipInterval = _gaiaTipInterval;
    }
  }

  // Vis menu-accordionerne
  const menu = document.getElementById('gaiaMenuStart');
  if (menu) menu.style.display = 'block';
}

// Init-funktion: skjul Gaia ved start
function initGaia() {
  const box = document.getElementById('guideBox');
  const icon = document.querySelector('.floating-icon');
  if (!box || !icon) return;

  box.style.display   = 'none';
  box.style.opacity   = 0;
  box.style.transform = 'translateY(10px)';
}

// Eksporter til globalt scope
window.toggleGaia    = toggleGaia;
window.showGaiaMenu  = showGaiaMenu;
window.initGaia      = initGaia;
