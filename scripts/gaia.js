// gaia.js

// --- 1) Global state & toggler ---
var _gaiaOpen = window._gaiaOpen || false;

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

// --- 2) Vis-menu-funktion (globalt) ---
function showGaiaMenu() {
  // Skjul alle introer
  const intros = document.querySelectorAll('[id^="gaiaIntro-"]');
  intros.forEach(el => el.style.display = 'none');

  // Vis menu
  const menu = document.getElementById('gaiaMenuStart');
  if (menu) menu.style.display = 'block';
}

// --- 3) Init-funktion: skjul, hilsen og tips ---
function initGaia() {
  // Planetære tips (vis ét straks, skift hver 5. minut)
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
    const tipEl = document.getElementById('gaiaTip');
if (!tipEl) {
  console.warn("🌱 Kunne ikke finde #gaiaTip – måske er den ikke i DOM endnu?");
  return;
}
  
     function updateTip() {
    tipEl.textContent = `🌿 Hey – et planetært tip: ${tips[Math.floor(Math.random() * tips.length)]}`;
  }
  console.log("Vi forsøger at opdatere planetært tip...");
    updateTip();
    setInterval(updateTip, 300000);
  
// Skjul Gaia-boksen fra start
  const box = document.getElementById('guideBox');
  const icon = document.querySelector('.floating-icon');
  if (!box || !icon) return;

  box.style.display = 'none';
  box.style.opacity = 0;
  box.style.transform = 'translateY(10px)';
  
// Vælg intro baseret på sidens navn
const gaiaIntroMap = {
  'index.html': 'gaiaIntro-index',
  'viden.html': 'gaiaIntro-viden',
  '100ideer.html': 'gaiaIntro-100ideer',
  'kontakt.html': 'gaiaIntro-kontakt',
  'historie.html': 'gaiaIntro-historie',
  '2minutter.html': 'gaiaIntro-2minutter',
  'enting.html': 'gaiaIntro-enting',
  'etlivunder.html': 'gaiaIntro-etlivunder',
  'faq.html': 'gaiaIntro-faq',
  'galleri.html': 'gaiaIntro-galleri',
  'gæstebog.html': 'gaiaIntro-gæstebog',
  'om.html': 'gaiaIntro-om',
  'privatliv.html': 'gaiaIntro-privatliv',
  'projekter.html': 'gaiaIntro-projekter',
  'ressourcer.html': 'gaiaIntro-ressourcer',
  'samarbejde.html': 'gaiaIntro-samarbejde',
  'vi-anbefaler.html': 'gaiaIntro-vi-anbefaler'
};


const currentPath = location.pathname.split('/').pop() || 'index.html';
const introId = gaiaIntroMap[currentPath] || null;  
 const intro = document.getElementById(introId);

 if (intro && tipEl) {
    tipEl.innerHTML = intro.innerHTML;
  }
}

window.toggleGaia = toggleGaia;
window.initGaia   = initGaia;
window.showGaiaMenu = showGaiaMenu;
