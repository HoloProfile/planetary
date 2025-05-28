function includeHTML(callback) {
  const elements = document.querySelectorAll('[w3-include-html]');
  let pending = elements.length;

  if (pending === 0 && typeof callback === 'function') {
    callback();
    return;
  }

  elements.forEach(el => {
    const file = el.getAttribute("w3-include-html");
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Include fejlede: ${file}`);
        }
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute("w3-include-html");
        pending--;
        if (pending === 0 && typeof callback === 'function') {
          callback();
        }
      })
      .catch(error => {
        console.error('Fejl ved include af:', file, error);
        pending--;
        if (pending === 0 && typeof callback === 'function') {
          callback();
        }
      });
  });
}

function initPage() {
  const mainScript = document.createElement('script');
  mainScript.src = 'scripts/main.js';
  document.body.appendChild(mainScript);

  const gaiaScript = document.createElement('script');
  gaiaScript.src = 'scripts/gaia.js';
  gaiaScript.onload = function () {
    if (typeof initGaia === 'function') initGaia();
  };
  document.body.appendChild(gaiaScript);
}

includeHTML(initPage);
