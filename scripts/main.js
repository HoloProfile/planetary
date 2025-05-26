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

// === Gaia guide ===
document.addEventListener("DOMContentLoaded", function () {
  const guideBox = document.getElementById("guideBox");
  const guideIcon = document.querySelector(".floating-icon");

  if (!guideBox || !guideIcon) return;

  guideIcon.addEventListener("click", () => {
    guideBox.style.display = (guideBox.style.display === "block") ? "none" : "block";
  });

  guideIcon.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 768) {
      guideBox.style.display = "block";
    }
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".floating-guide") && window.innerWidth >= 768) {
      guideBox.style.display = "none";
    }
  });
});

