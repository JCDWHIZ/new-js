const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode", modeToggle.checked);
});

// Restore mode preference from local storage if available
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  modeToggle.checked = true;
  body.classList.add("dark-mode");
} else {
  modeToggle.checked = false;
  body.classList.remove("dark-mode");
}

// Store mode preference in local storage
modeToggle.addEventListener("change", () => {
  if (modeToggle.checked) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});
