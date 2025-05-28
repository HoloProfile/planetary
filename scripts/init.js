// scripts/init.js

// 1) Loader includes og kalder initPage, når de er alle indsat
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
        pending--;
        if (pending === 0) callback();
      });
  });
}

// 2) Når includes er færdige, loader vi main.js og gaia.js
function initPage() {
  const main = document.createElement('script');
  main.src = 'scripts/main.js';
  main.defer = true;
  document.body.appendChild(main);

  const gaia = document.createElement('script');
  gaia.src = 'scripts/gaia.js';
  gaia.defer = true;
  document.body.appendChild(gaia);
}

// 3) Start processen
includeHTML(initPage);
