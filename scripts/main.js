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
