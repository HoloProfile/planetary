// scripts/main.js

// === 1) Mobil-menu ===
function toggleMenu() {
  const nav     = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");
  nav.classList.toggle("open");
  overlay.style.display = nav.classList.contains("open") ? "block" : "none";
}
function closeMenu() {
  document.getElementById("navLinks").classList.remove("open");
  document.getElementById("navOverlay").style.display = "none";
}

// === 2) Highlight aktivt link ===
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-links a');
  const path  = window.location.pathname.split('/').pop();
  links.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
}

// === 3) Accordion ===
function setupAccordion() {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.setAttribute("aria-expanded", "false");
    header.addEventListener("click", () => {
      const open = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", String(!open));
      header.classList.toggle("open");
      header.nextElementSibling?.classList.toggle("open");
    });
  });
}

// === 4) Lightbox (polaroid-zoom) ===
function setupLightbox() {
  const lb    = document.getElementById("lightbox");
  const imgEl = document.getElementById("lightbox-img");
  if (!lb || !imgEl) return;

  document.querySelectorAll(".polaroid img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      imgEl.src = img.src;
      lb.classList.add("show");
    });
  });

  lb.addEventListener("click", () => {
    lb.classList.remove("show");
    setTimeout(() => lb.style.display = "none", 300);
  });
 lb.addEventListener("transitionend", () => {
  // do nothing her – eller brug evt. kun console.log
});
}

// === 5) Opskrift-søgning ===
function setupRecipeSearch() {
  const input = document.getElementById('recipeSearch');
  if (!input) return;
  let timeout;
  input.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const q = input.value.toLowerCase().trim();
      let any = false;
      document.querySelectorAll('#recipeList .accordion').forEach(card => {
        const text = (card.innerText || '').toLowerCase();
        const show = text.includes(q);
        card.style.display = show ? 'block' : 'none';
        any = any || show;
      });
      document.getElementById('noResults').style.display = any ? 'none' : 'block';
    }, 150);
  });
}

// === 6) Gaia-audio ===
function playAudio(id) {
  document.querySelectorAll('audio[id^="audio-"]').forEach(a => { a.pause(); a.currentTime = 0; });
  const el = document.getElementById(id);
  if (!el) return;
  el.play();
  const disp = document.getElementById(`${id}-time`);
  if (disp) el.ontimeupdate = () => {
    const rem = Math.max(0, el.duration - el.currentTime);
    const m = Math.floor(rem/60), s = String(Math.floor(rem%60)).padStart(2,'0');
    disp.textContent = `-${m}:${s}`;
  };
}
function toggleAudio(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.paused ? playAudio(id) : el.pause();
}
function rewindAudio(id, sec=10) {
  const el = document.getElementById(id);
  if (el) el.currentTime = Math.max(0, el.currentTime - sec);
}

// === INIT alle ting ===
console.log("📦 main.js er indlæst");
// Eksporter menu-funktioner til onclick i HTML:
window.toggleMenu = toggleMenu;
window.closeMenu  = closeMenu;

