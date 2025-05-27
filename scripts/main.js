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

// === dagens tip===
document.addEventListener("DOMContentLoaded", function () {
  const tips = [
    "Gem dit kogevand – dine planter vil elske det!",
    "Drop bilen - Tag cyklen – også selvom det regner 🚲",
    "Brug den samme pose flere gange, evt. stof – plastik er last year's problem ♻️",
    "Gå offline en time – og se hvad du finder ☀️",
    "Lav aftensmad af resterne 🥦",
    "Del din viden med en ven i dag 💬",
    "Reparer noget, bare én ting 🔧",
    "Genbrug et glas som opbevaring 🫙",
    "Lad op med solens energi – også mentalt ☀️",
    "Spis kødfrit 3 dage denne uge"
  ];

  const tipEl = document.getElementById("planetTip");
  if (tipEl) {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipEl.textContent = `🌾 Dagens planetære tip: ${randomTip}`;
  }
});
