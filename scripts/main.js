// scripts/main.js

// === 1) Mobilmenu ===
// Åbner/lukker navigation på mobil med overlay
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

// === 2) Når siden er loadet ===
document.addEventListener('DOMContentLoaded', () => {
  // a) Highlight aktivt link i menuen
  const links = document.querySelectorAll('.nav-links a');
  const path = window.location.pathname.split('/').pop(); // fx 'faq.html'
  links.forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('active');
    }
  });

  // b) Karussel (vis ét slide ad gangen)
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length) {
    let current = 0;
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
    }
    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }
    showSlide(current);
    setInterval(nextSlide, 6000); // Skift slide hver 6. sekund
  }
});

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

// === 4) Klik-på-billede (polaroid zoom) ===
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

// === 5) Global lydafspiller til Gaia ===
function playAudio(id) {
  const audioEls = document.querySelectorAll('audio[id^="audio-"]');
  audioEls.forEach(el => {
    el.pause();
    el.currentTime = 0;
  });

  const el = document.getElementById(id);
  if (el) {
    el.play();

 const timeDisplay = document.getElementById(`${id}-time`);
    if (timeDisplay) {
      el.ontimeupdate = () => {
        if (el.duration) {
          const remaining = Math.max(0, el.duration - el.currentTime);
          const min = Math.floor(remaining / 60);
          const sec = Math.floor(remaining % 60).toString().padStart(2, '0');
          timeDisplay.textContent = `-${min}:${sec}`;
        }
      };
    }
  }
}

function toggleAudio(id) {
  const el = document.getElementById(id);
  if (el) {
    if (el.paused) {
      playAudio(id);
    } else {
      el.pause();
    }
  }
}

function rewindAudio(id, seconds = 10) {
  const el = document.getElementById(id);
  if (el) {
    el.currentTime = Math.max(0, el.currentTime - seconds);
  }
}

// === 6) Søgefunktion til opskrifter ===
const recipeInput = document.getElementById('recipeSearch');
if (recipeInput) {
  let timeout = null;

  recipeInput.addEventListener('input', function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const query = this.value.toLowerCase().trim();
      const cards = document.querySelectorAll('#recipeList .accordion');
      const noResults = document.getElementById('noResults');
      let anyVisible = false;

      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        const match = text.includes(query);

        card.style.transition = 'opacity 0.2s ease';

        if (match) {
          card.style.display = 'block';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
          });
          anyVisible = true;
        } else {
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });

      if (noResults) noResults.style.display = anyVisible ? 'none' : 'block';
    }, 150); // debounce-tid
  });
}
