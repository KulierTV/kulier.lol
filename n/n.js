const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = window.localStorage.getItem("theme");

const setPointerGlow = (event) => {
  root.style.setProperty("--mx", `${event.clientX}px`);
  root.style.setProperty("--my", `${event.clientY}px`);
};

const setTheme = (theme) => {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-mode", isDark);
  themeToggle?.setAttribute("aria-pressed", String(isDark));
  themeToggle?.setAttribute("aria-label", isDark ? "Dark Mode ausschalten" : "Dark Mode einschalten");
  themeToggle?.querySelector(".toggle-text")?.replaceChildren(isDark ? "Light" : "Dark");
};

setTheme(savedTheme === "dark" ? "dark" : "light");

window.addEventListener("pointermove", setPointerGlow, { passive: true });

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";

  window.localStorage.setItem("theme", nextTheme);
  setTheme(nextTheme);
});
