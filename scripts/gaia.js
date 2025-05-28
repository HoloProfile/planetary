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
