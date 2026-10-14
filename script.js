// Dark Mode Toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Smooth Scroll for Navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e) {
    // Check if link is internal (same page section)
    if (this.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Optional: Add button for Dark Mode
const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "🌙 Toggle Dark Mode";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "20px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "10px";
darkModeBtn.style.background = "orange";
darkModeBtn.style.border = "none";
darkModeBtn.style.cursor = "pointer";
document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", toggleDarkMode);