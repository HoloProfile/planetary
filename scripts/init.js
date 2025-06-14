// scripts/init.js

function includeHTML(callback) {
  const els = document.querySelectorAll('[w3-include-html]');
  let pending = els.length;
  if (pending === 0) return callback();

  els.forEach(el => {
    const file = el.getAttribute('w3-include-html');
    fetch(file)
      .then(r => r.ok ? r.text() : Promise.reject(r.status))
      .then(html => {
        el.innerHTML = html;
        el.removeAttribute('w3-include-html');
      })
      .catch(err => console.error('Include fejl:', file, err))
      .finally(() => {
        if (--pending === 0) callback();
      });
  });
}

function initPage() {
  // 1) Indsæt main.js
  const mainScript = document.createElement('script');
  mainScript.src   = 'scripts/main.js';
  mainScript.defer = true;
  mainScript.onload = () => {
    if (typeof setupAccordion === 'function') setupAccordion();
  };
  document.body.appendChild(mainScript);

 // 2) Indsæt gaia.js
  const gaiaScript = document.createElement('script');
  gaiaScript.src   = 'scripts/gaia.js';
  gaiaScript.defer = true;
  document.body.appendChild(gaiaScript);

  // 3) Kør initGaia, når begge scripts er færdigindlæst
  // Brug et lille delay, så DOM og scripts er helt klar
  setTimeout(() => {
    if (typeof initGaia === 'function') initGaia();
  }, 100); // evt. lav 300ms hvis det driller
}


// Kickstart: load includes → initPage (loader main.js + gaia.js + vores callbacks)
includeHTML(() => {
  initPage();
});
