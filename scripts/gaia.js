// gaia.js

// --- 1) Global state & toggler ---
var _gaiaOpen = window._gaiaOpen || false;

function toggleGaia() {
  const box = document.getElementById('guideBox');
  if (!box) return;

  if (_gaiaOpen) {
    box.style.opacity   = 0;
    box.style.transform = 'translateY(10px)';
    setTimeout(() => {
      box.style.display = 'none';

      // reset menu og intro
      const gaiaMenu  = document.getElementById('gaiaMenuStart');
      const gaiaIntro = document.getElementById('gaiaIntro-index');
      if (gaiaMenu) gaiaMenu.style.display = 'none';
      if (gaiaIntro) gaiaIntro.style.display = 'none';
    }, 300);
  } else {
    box.style.display = 'block';

    // vis menu direkte
    const gaiaMenu  = document.getElementById('gaiaMenuStart');
    const gaiaIntro = document.getElementById('gaiaIntro-index');
    if (gaiaMenu) gaiaMenu.style.display = 'block';
    if (gaiaIntro) gaiaIntro.style.display = 'none';

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

  // 0) DEFINER PATH & INDEX-FLAG
  const path    = window.location.pathname;
  const isIndex = path === '/' || path.endsWith('index.html');

  // Planetære tips (vis ét straks, skift hver 5. minut)
  const tips = [
'Brug en madkasse i stedet for engangsemballage.',
'Undgå kapselkaffe og bryg med stempelkande eller espressokande.',
'Genbrug glas og beholdere til opbevaring af mad.',
'Køb frugt og grønt uden plastikemballage.',
'Lav madplan for at undgå madspild og impulskøb.',
'Frys rester ned i små portioner til travle dage.',
'Lav din egen rengøringsspray af eddike og citron.',
'Skift fra flyrejser til togferier – oplev mere, flyv mindre.',
'Brug bomuldsklude i stedet for køkkenrulle.',
'Spis sæsonens råvarer og undgå drivhusdyrket mad.',
'Drop juice og sodavand – lav iste eller saftevand selv.',
'Hold “købefri” dage hver uge for at bryde forbrugsvaner.',
'Tag en termoflaske med i stedet for at købe kaffe to go.',
'Brug bivokspapir i stedet for plastfolie til madpakker.',
'Drop junkfood – lav hjemmelavet snacks og måltider.',
'Vask op i balje i stedet for under rindende vand.',
'Køb tøj lavet af naturfibre som hamp, uld og økologisk bomuld.',
'Pas og reparér sko i stedet for at købe nye.',
'Brug skoletaske og penalhus i flere år – design selv!',
'Skift til økologisk rengøringsmiddel og WC-rens.',
'Del ting med venner: f.eks. værktøj, telt og bageudstyr.',
'Udskyd køb: sov på det i 30 dage før du handler.',
'Saml skrald på gåturen – gør det til en leg med børn.',
'Giv oplevelser i gave i stedet for ting.',
'Lav gavepapir af gamle aviser og stofrester.',
'Køb kun det, du elsker – ikke det, du “måske får brug for”.',
'Drop engangsgrill og lav bålmad i naturen med venner.',
'Sluk helt for router og modem om natten.',
'Start kompostbunke eller brug grønt affald i hønsegården.',
'Brug lommetørklæder af stof frem for papirservietter.',
'Tag skraldepose med på strandture og i skoven.',
'Køb brugte bøger eller lån dem på biblioteket.',
'Brug vaskenødder eller sæbebær som vaskemiddel.',
'Lav din egen havremælk – billigere og uden emballage.',
'Køb lokal honning og støt små producenter.',
'Brug refill-penne og blyanter fremfor engangsudstyr.',
'Print ikke medmindre det er nødvendigt.',
'Lav din egen tandpasta af natron og kokosolie.',
'Vælg produkter uden palmeolie og mikroplast.',
'Opbevar madrester i gamle syltetøjsglas.',
'Del måltider og madpakker – især til store børn og unge.',
'Drop slikket – bag kager eller lav frugtsnacks i ovn.',
'Giv planterne regnvand i stedet for postevand.',
'Saml kastanjer og lav vaskemiddel eller sjove figurer.',
'Gå til byttebazar i stedet for shoppingcenter.',
'Brug gammelt tøj som rengøringsklude.',
'Bag dit eget brød og undgå plastikposer og bagerposer.',
'Lav “madskraldeuge” – tøm skabe og frysere kreativt.',
'Lav sæbe og shampoo selv med få, rene ingredienser.',
'Brug apps til at dele mad, værktøj og transport.',
'Lav selv chips af kartofler eller gulerødder i ovn.',
'Spis havregrød – billig, sund og lav CO₂.',
'Tag “brænder-vagten” – tjek hvem der slukker lys og varme.',
'Brug mobilen 2 år mere – skift kun hvis nødvendigt.',
'Vælg vaskemaskine med energimærke A+++. ',
'Send tøj videre via app eller genbrugsgruppe.',
'Tag på ferie med telt eller shelter i stedet for hotel.',
'Genbrug gamle stearinlys – lav dine egne.',
'Brug håndvarme i stedet for hårtørrer.',
'Vælg mælkefri alternativer i karton fremfor plastikflaske.',
'Start en frøbytteordning i nabolaget.',
'Lav egne snacks til skovtur – undgå engangsemballage.',
'Køb ikke mere, end du kan bære – både fysisk og planetært.',
'Vask bilen med regnvand – og kun ved behov.',
'Brug tøjdamp i stedet for strygejern.',
'Køb strøm i grønne andelsselskaber, ikke fossile giganter.',
'Print på begge sider og brug bagsiden af papir som kladde.',
'Drop julens overforbrug – giv hjemmelavede gaver.',
'Lav selv is og frys i genbrugelige forme.',
'Vælg trælegetøj i stedet for plast.',
'Køb lokalt producerede planter og undgå import.',
'Tag madpakke med i stedet for take-away.',
'Brug gryderetster til madpandekager eller tærte.',
'Lav te på krydderurter fra haven.',
'Vær offline hver søndag – naturen kalder!'
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
  if (gaiaIntro) gaiaIntro.style.display = 'none';

  // Greeting til undersider
  const greeting = document.getElementById('gaiaGreeting');
  if (!greeting) return;

  const greetings = {
    'index.html': `<h3>Din spireven 🌱 her på siden 🌍</h3><p>Dyk ned i de ni planetære grænser – helt nørdet og konkret.</p>`,
    'index-firsttime.html': `<h3>Hey første gang du bruger gaia?🌍</h3><p>Dyk ned i menuen, vores ideer og de ni planetære grænser – helt simpelt.</p>`,
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

  const current = Object.keys(greetings).find(key => path.includes(key));
  greeting.innerHTML = greetings[current] || `<h3>🌱 Din spireven her!</h3><p>Lad Gaia guide dig videre rundt på siden.</p>`;
  greeting.style.display = 'block';
}

