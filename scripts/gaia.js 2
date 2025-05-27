function initGaia() {
  const guideBox = document.getElementById("guideBox");
  const menu = document.getElementById("gaiaMenuStart");

  if (guideBox) {
    guideBox.style.display = "none";
    guideBox.style.opacity = 0;
    guideBox.style.transform = "translateY(10px)";
  }

  if (menu) {
    menu.style.display = "none";
  }

  setupAccordion();
}

function toggleGaia() {
  const guideBox = document.getElementById("guideBox");
  if (!guideBox) return;

  const isVisible = guideBox.style.display === "block";
  guideBox.style.display = isVisible ? "none" : "block";
  guideBox.style.opacity = isVisible ? 0 : 1;
  guideBox.style.transform = isVisible ? "translateY(10px)" : "translateY(0)";
}

function showGaiaMenu() {
  const menu = document.getElementById("gaiaMenuStart");
  if (menu) {
    menu.style.display = "block";
  }
}

function setupAccordion() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      header.classList.toggle("open");
      const content = header.nextElementSibling;
      if (content) {
        content.classList.toggle("open");
      }
    });
  });
}
