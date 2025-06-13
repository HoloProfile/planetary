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
  }
  if (introEl) introEl.style.display = 'block';

  // 3.3) Page-specific greeting texts
  const pageTexts = {
    'viden.html': `<h3>🧠 Vil du lære mere om grænserne?</h3><p>Dyk ned i de ni planetære grænser – helt nørdet og konkret.</p>`,
    '100ideer.html': `<h3>💡 100 idéer til grøn handling</h3><p>Små, store og skøre idéer, du kan bruge i din hverdag – én ad gangen.</p>`,
    '2minutter.html': `<h3>⏱️ På 2 minutter</h3><p>Få essensen af det planetære liv – hurtigt, skarpt og uden fnidder.</p>`,
    'enting.html': `<h3>✋ Én ting ad gangen</h3><p>Vælg én ting, du vil gøre i dag – og mærk, hvor meget det kan flytte.</p>`,
    'etlivunder.html': `<h3>🏞️ Livet under grænserne</h3><p>Kom med ind i vores hverdag: regnvand, restemad og børn i bare fødder.</p>`,
    'faq.html': `<h3>⁉️ Ofte stillede spørgsmål</h3><p>Få svar på alt fra “Hvad er planetære grænser?” til “Hvor tit skal jeg luge?”</p>`,
    'galleri.html': `<h3>🖼️ Galleri</h3><p>Bliv inspireret af billeder fra vores bæredygtige hverdag og fællesskab.</p>`,
    'gæstebog.html': `<h3>✍️ Gæstebog</h3><p>Skriv et aftryk – del dine tanker, idéer eller grønne sejre med os.</p>`,
    'historie.html': `<h3>🗺️ Vores rejse</h3><p>Fra nysgerrighed til livsstil: læs hele historien om Planetært Liv.</p>`,
    'kontakt.html': `<h3>✉️ Kontakt os</h3><p>Har du spørgsmål, idéer eller bare brug for en snak? Skriv endelig.</p>`,
    'manifest.html': `<h3>📜 Vores manifest</h3><p>Læs vores kerneværdier og bliv opmærksom på, hvad vi står for.</p>`,
    'om.html': `<h3>👨‍👩‍👦‍👦 Mød os!</h3><p>Rasmus, Heidi, Ea og Atlas – lær os at kende og se vores drømme.</p>`,
    'privatliv.html': `<h3>🔒 Privatlivspolitik</h3><p>Vi passer på dine data – læs, hvordan vi håndterer personlige oplysninger.</p>`,
    'projekter.html': `<h3>👷‍♀️ Projekter</h3><p>Se, hvordan vi omsætter idéer til handling: fra bibliotekssamarbejde til genbrugsstationer.</p>`,
    'ressourcer.html': `<h3>📚 Ressourcer</h3><p>Bøger, podcasts, hjemmesider og værktøjer til at dykke endnu dybere.</p>`,
    'samarbejde.html': `<h3>🤝 Samarbejde</h3><p>Skal vi i fællesskab gøre en større forskel? Læs om muligheder for partnerskab.</p>`,
    'vi-anbefaler.html': `<h3>💭 Vi anbefaler</h3><p>Vores yndlingsgenbrug, grønne virksomheder og inspirerende fællesskaber.</p>`,
    'blog.html': `<h3>📝 Blog</h3><p>Friske perspektiver, personlige refleksioner og konkrete erfaringer fra os.</p>`
  };

  const greeting = document.getElementById('gaiaGreeting');
  if (greeting) {
    if (!isIndex) {
      const file = path.split('/').pop();
      greeting.innerHTML = pageTexts[file] || `<h3>🌱 Din spireven her!</h3><p>Lad Gaia guide dig videre rundt på siden.</p>`;
      greeting.style.display = 'block';
    } else {
      greeting.style.display = 'none';
    }
  }

} // ← Dette ekstra krøllet øje

// Eksportér ikke moduler – kør bare på window-load eller via init.js

