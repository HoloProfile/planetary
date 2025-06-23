// scripts/main.js

// === 1) Mobilmenu ===
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

// === 2) Highlight aktivt link i menuen ===
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-links a');
  const path  = window.location.pathname.split('/').pop();
  links.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
}

// === 3) Fold-ud-accordion ===
function setupAccordion() {
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.setAttribute("aria-expanded", "false");
    header.addEventListener("click", () => {
      const isOpen = header.getAttribute("aria-expanded") === "true";
      header.setAttribute("aria-expanded", String(!isOpen));
      header.classList.toggle("open");
      const content = header.nextElementSibling;
      if (content) content.classList.toggle("open");
    });
  });
}

// === 4) Lightbox (polaroid-zoom) ===
function setupLightbox() {
  const lightbox    = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  if (!lightbox || !lightboxImg) return;

  document.querySelectorAll(".polaroid img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightbox.classList.add("show");
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
    setTimeout(() => lightbox.style.display = "none", 300);
  });

  lightbox.addEventListener("transitionend", () => {
    lightbox.style.display = lightbox.classList.contains("show") ? "flex" : "none";
  });
}

// === 5) Global lydafspiller til Gaia ===
function playAudio(id) {
  document.querySelectorAll('audio[id^="audio-"]').forEach(el => {
    el.pause();
    el.currentTime = 0;
  });
  const el = document.getElementById(id);
  if (!el) return;
  el.play();
  const timeDisplay = document.getElementById(`${id}-time`);
  if (timeDisplay) {
    el.ontimeupdate = () => {
      if (!el.duration) return;
      const remaining = Math.max(0, el.duration - el.currentTime);
      const min = Math.floor(remaining / 60);
      const sec = String(Math.floor(remaining % 60)).padStart(2, '0');
      timeDisplay.textContent = `-${min}:${sec}`;
    };
  }
}

function toggleAudio(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.paused ? playAudio(id) : el.pause();
}

function rewindAudio(id, seconds = 10) {
  const el = document.getElementById(id);
  if (!el) return;
  el.currentTime = Math.max(0, el.currentTime - seconds);
}

// === 6) Søgefunktion til opskrifter ===
function setupRecipeSearch() {
  const recipeInput = document.getElementById('recipeSearch');
  if (!recipeInput) return;

  let timeout = null;
  recipeInput.addEventListener('input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const query   = this.value.toLowerCase().trim();
      const cards   = document.querySelectorAll('#recipeList .accordion:not(.nested-accordion)');
      const noResult= document.getElementById('noResults');
      let anyVisible= false;

      cards.forEach(card => {
        const btn     = card.querySelector('.accordion-header');
        const content = card.querySelector('.accordion-content');
        const text    = (btn?.innerText || '') + ' ' + (content?.innerText || '');
        const match   = text.toLowerCase().includes(query);
        card.style.transition = 'opacity 0.2s ease';
        if (match) {
          card.style.display = 'block';
          requestAnimationFrame(() => card.style.opacity = '1');
          anyVisible = true;
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 200);
        }
      });
      if (noResult) noResult.style.display = anyVisible ? 'none' : 'block';
    }, 150);
  });
}

// === INIT ===
console.log("📦 main.js er indlæst");
setupAccordion();
setupLightbox();
highlightActiveLink();
setupRecipeSearch();
// (evt. init af audio-player her, hvis du har en global play-knap)

// Eksporter toggleMenu/closeMenu til global scope, hvis du bruger onclick i HTML:
window.toggleMenu = toggleMenu;
window.closeMenu  = closeMenu;
  });
} 

