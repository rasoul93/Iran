document.addEventListener("DOMContentLoaded", () => {
  // Language switcher functionality
  const languageSelect = document.getElementById("language-select");
  const i18nElements = document.querySelectorAll("[data-i18n]");
  const translations = {
    en: { "hero.title": "Explore the Beauty of Iran", /* Other translations */ },
    fa: { "hero.title": "زیبایی‌های ایران را کشف کنید", /* Other translations */ },
    // Add other languages...
  };

  languageSelect.addEventListener("change", () => {
    const lang = languageSelect.value;
    i18nElements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  });

  // Visitor counter (Placeholder functionality)
  document.getElementById("visitor-count").textContent = Math.floor(Math.random() * 100);
  document.getElementById("total-visits").textContent = Math.floor(Math.random() * 1000);

  // Real-time clock
  const timeElement = document.getElementById("current-time");
  setInterval(() => {
    const now = new Date();
    timeElement.textContent = now.toLocaleString("en-US", { timeZone: "Asia/Tehran" });
  }, 1000);
});
