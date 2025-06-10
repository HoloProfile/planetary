// scripts/main.js


// === Mobilmenu ===
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");
  nav.classList.toggle("open");
  overlay.style.display = nav.classList.contains("open") ? "block" : "none";
}

function closeMenu() {
  document.getElementById("navLinks").classList.remove("open");
  document.getElementById("navOverlay").style.display = "none";
}
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-links a');
  const path = window.location.pathname.split('/').pop(); // fx 'faq.html'

  links.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });
});
// === Foldbarmenu (også Gaia)===
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
document.querySelectorAll(".polaroid img").forEach(img => {
  img.style.cursor = "zoom-in";
  img.addEventListener("click", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
  });
});

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// --- 4) Global lydafspiller ---
function playGaiaAudio(id) {
  const audioEls = document.querySelectorAll('audio[id^="gaiaAudio-"]');
  audioEls.forEach(el => {
    el.pause();
    el.currentTime = 0;
  });

  const el = document.getElementById(id);
  if (el) el.play();
}
