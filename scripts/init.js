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
  gaiaScript.onload = () => {
    if (typeof initGaia === 'function') initGaia();
  };
  document.body.appendChild(gaiaScript);
}


// Kickstart: load includes → initPage (loader main.js + gaia.js + vores callbacks)
includeHTML(() => {
  initPage();
});
