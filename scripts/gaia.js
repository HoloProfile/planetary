function initGaia() {
  const interval = setInterval(() => {
    const box = document.getElementById('guideBox');
    const icon = document.querySelector('.floating-icon');
    const greeting = document.getElementById('gaiaGreeting');
    const showMenuBtn = document.querySelector("button[onclick='showGaiaMenu()']");

    if (!box || !icon) return;

    clearInterval(interval);

    icon.addEventListener("click", () => {
      const isOpen = box.style.display === "block";
      if (isOpen) {
        box.style.opacity = 0;
        box.style.transform = "translateY(10px)";
        setTimeout(() => box.style.display = "none", 300);
      } else {
        box.style.display = "block";
        setTimeout(() => {
          box.style.opacity = 1;
          box.style.transform = "translateY(0)";
        }, 10);
      }
    });

    icon.addEventListener("mouseenter", () => {
      if (window.innerWidth >= 768) {
        box.style.display = "block";
        setTimeout(() => {
          box.style.opacity = 1;
          box.style.transform = "translateY(0)";
        }, 10);
      }
    });

    if (showMenuBtn) {
      showMenuBtn.addEventListener("click", () => {
        document.getElementById('gaiaIntro').style.display = 'none';
        document.getElementById('gaiaMenuStart').style.display = 'block';
      });
    }

    document.querySelectorAll('.gaia-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const target = document.getElementById(toggle.dataset.target);
        if (target) {
          target.style.display = target.style.display === 'block' ? 'none' : 'block';
        }
      });
    });

    if (greeting) {
      const path = window.location.pathname;
      if (path.includes('viden.html')) {
        greeting.innerHTML = "Vil du lære mere om planetens grænser?";
      } else if (path.includes('100ideer.html')) {
        greeting.innerHTML = "Skal vi finde en idé sammen?";
      } else if (path.includes('kontakt.html')) {
        greeting.innerHTML = "Du kan altid skrive, hvis du vil spørge eller dele noget.";
      } else if (path.includes('historie.html')) {
        greeting.innerHTML = "Har du læst eller lyttet til historien?<br>Håber du fandt det lærerigt.";
      }
    }

    // 💡 HER kalder vi nu accordion-setup
    setupAccordion();
  }, 200);
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

