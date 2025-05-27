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
document.querySelectorAll('.accordion-header').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
}

});
