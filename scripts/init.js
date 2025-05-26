
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('[w3-include-html]');
  let pending = elements.length;

  elements.forEach(el => {
    const file = el.getAttribute("w3-include-html");
    fetch(file)
      .then(response => response.text())
      .then(data => {
        el.innerHTML = data;
        el.removeAttribute("w3-include-html");
        pending--;

        if (pending === 0) {
          const mainScript = document.createElement('script');
          mainScript.src = 'scripts/main.js';
          document.body.appendChild(mainScript);

          const gaiaScript = document.createElement('script');
          gaiaScript.src = 'scripts/gaia.js';
          document.body.appendChild(gaiaScript);
        }
      })
      .catch(error => {
        console.error("Fejl ved include:", error);
      });
  });
});
