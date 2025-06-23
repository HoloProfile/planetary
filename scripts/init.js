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

function loadScript(src, onload) {
  const script = document.createElement('script');
  script.src = src;
  script.onload = onload;
  script.onerror = () => console.error(`⚠️ Kunne ikke loade script: ${src}`);
  document.body.appendChild(script);
}

function initPage() {
  // Først load main.js
  loadScript('scripts/main.js', () => {
 if (typeof setupAccordion === 'function') setupAccordion();
  if (typeof setupLightbox === "function") setupLightbox();
  if (typeof highlightActiveLink === "function") highlightActiveLink();
  if (typeof setupRecipeSearch === "function") setupRecipeSearch();
});


  // Så load gaia.js, og vent på den er klar før du kalder initGaia
  loadScript('scripts/gaia.js', () => {
    if (typeof initGaia === 'function') {
      console.log("✅ initGaia kaldes nu");
      initGaia();
    } else {
      console.warn("⚠️ initGaia blev ikke fundet – er gaia.js korrekt?");
    }
  });
}

// Først: vent på includeHTML er færdig → så loader vi scripts
includeHTML(() => {
  console.log("✅ HTML includes færdig – loader scripts");
  initPage();
});
