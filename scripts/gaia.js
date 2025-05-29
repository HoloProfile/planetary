// --- 3) Init-funktion, binder alle event listeners + starter tips ---
function initGaia() {
  const box  = document.getElementById('guideBox');
  const icon = document.querySelector('.floating-icon');
  if (!box || !icon) return;

  // Skjul Gaia initialt
  box.style.display   = 'none';
  box.style.opacity   = 0;
  box.style.transform = 'translateY(10px)';


// Funktion til at toggle Gaia-boksen
function toggleGaia() {
  const box = document.getElementById('guideBox');
  if (!box) return;

  if (_gaiaOpen) {
    box.style.opacity = 0;
    box.style.transform = 'translateY(10px)';
    setTimeout(() => {
      box.style.display = 'none';
    }, 300);
  } else {
    box.style.display = 'block';
    setTimeout(() => {
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
    }, 10);
  }

  _gaiaOpen = !_gaiaOpen;
}

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
    else if (path.includes('kontakt.html'))  text = 'Skriv endelig.';
    else if (path.includes('historie.html')) text = 'Håber historien inspirerede!';
    greeting.innerHTML = text;
  }

  // --- Planetære tips: 30 stk. random hver 5 min. ---
  (function initTips() {
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
    if (!tipEl) return;

    function updateTip() {
      const idx = Math.floor(Math.random() * tips.length);
      tipEl.textContent = tips[idx];
    }

    // Vis ét tip med det samme
    updateTip();
    // Skift hvert 5. minut (300.000 ms)
    setInterval(updateTip, 300000);
  })();
}

// --- 4) Kør initGaia automatisk når scriptet er indlæst ---
if (typeof initGaia === 'function') initGaia();


