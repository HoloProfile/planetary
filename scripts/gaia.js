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

// --- 2) Vis-menu-funktion ---
function showGaiaMenu() {
  const gaiaIntro = document.getElementById('gaiaIntro-index');
  const gaiaMenu  = document.getElementById('gaiaMenuStart');
  if (!gaiaIntro || !gaiaMenu) return;
  gaiaIntro.style.display = 'none';
  gaiaMenu.style.display  = 'block';
}

// --- 3) Init-funktion: tip, intro & greeting ---
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
  } else {
    function updateTip() {
      tipEl.textContent = `🌿 Hey – et planetært tip: ${tips[Math.floor(Math.random() * tips.length)]}`;
    }
    updateTip();
    setInterval(updateTip, 300000);
  }

  // Hide guideBox initialt
  const box  = document.getElementById('guideBox');
  const icon = document.querySelector('.floating-icon');
  if (!box || !icon) return;
  box.style.display   = 'none';
  box.style.opacity   = 0;
  box.style.transform = 'translateY(10px)';

  // Path og index-check
  const gaiaIntro = document.getElementById('gaiaIntro-index');
if (gaiaIntro) gaiaIntro.style.display = 'block';
  
  // Greeting til undersider
  const greeting = document.getElementById('gaiaGreeting');
  if (greeting) {
    if (!isIndex) {
    let text = 'Din spireven 🌱 her på siden 🌍';
      if (path.includes('viden.html'))        text = 'Vil du lære mere om grænserne?';
      else if (path.includes('100ideer.html')) text = 'Skal vi finde en idé?';
      else if (path.includes('2minutter.html')) text = 'Få styr på essensen på 2 minutter!';
      else if (path.includes('enting.html'))    text = 'Vælg én ting, du vil gøre i dag.';
      else if (path.includes('etlivunder.html')) text = 'Livet under grænserne – udforsk her.';
      else if (path.includes('faq.html'))      text = '⁉️ Ofte stillede spørgsmål – svarene her.';
      else if (path.includes('galleri.html'))  text = '🖼️ Velkommen til galleriet – inspirer dig.';
      else if (path.includes('gæstebog.html')) text = '✍️ Skriv et aftryk i vores gæstebog.';
      else if (path.includes('historie.html')) text = 'Håber historien inspirerede!';
      else if (path.includes('kontakt.html')) text = '✉️ Har du spørgsmål? Skriv endelig.';
      else if (path.includes('manifest.html')) text = 'Læs vores manifest og bliv klogere.';
      else if (path.includes('om.html'))       text = '👨‍👩‍👦‍👦 Mød os og vores vision.';
      else if (path.includes('privatliv.html'))text = '🔒 Privatlivspolitik – vi passer på dig.';
      else if (path.includes('projekter.html'))text = '👷‍♀️ Se vores projekter i aktion.';
      else if (path.includes('ressourcer.html')) text = '📚 Tjek vores ressourcer.';
      else if (path.includes('samarbejde.html')) text = '🤝 Lad os samarbejde om grøn forandring.';
      else if (path.includes('vi-anbefaler.html')) text = '💭 Vores anbefalinger – se dem her.';
      else if (path.includes('blog.html'))    text = '📝 Læs blog-indlæg med friske perspektiver.';
      greeting.innerHTML      = text;
      greeting.style.display  = 'block';
    } else {
      greeting.style.display = 'none';
    }
  }
}

// Eksportér ikke moduler – kør bare på window-load eller via init.js

