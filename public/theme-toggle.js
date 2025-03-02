// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

// // Whenever the user explicitly chooses light mode
// localStorage.setItem('theme', 'light')
// // Whenever the user explicitly chooses dark mode
// localStorage.setItem('theme', 'dark')
// // Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')
