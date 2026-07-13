// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-wrap')) {
      hamburgerBtn.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
}

// Character animation for heading (language-aware)
const heading = document.getElementById("heading");
if (heading) {
  window.heroLines = {
    en: ["Build Your", "Dreams"],
    bn: ["\u0986\u09aa\u09a8\u09be\u09b0 \u09b8\u09cd\u09ac\u09aa\u09cd\u09a8", "\u0997\u09a1\u09bc\u09c7 \u09a4\u09c1\u09b2\u09c1\u09a8"],
    ar: ["\u0627\u0628\u0646\u0650", "\u0623\u062d\u0644\u0627\u0645\u0643"]
  };

  window.setHeroHeading = function (lang) {
    const lines = window.heroLines[lang] || window.heroLines.en;
    const charDelay = 30;
    const initialDelay = 200;
    heading.innerHTML = "";

    // Latin script (English) can safely animate letter-by-letter since each
    // character is an independent glyph. Bengali and Arabic use connected/
    // shaped scripts (conjuncts, matras, ligatures) that must stay together
    // in the same box to render correctly, so those animate word-by-word.
    const isShapedScript = lang === "bn" || lang === "ar";

    lines.forEach((line, lineIndex) => {
      const lineSpan = document.createElement("span");
      lineSpan.style.display = "block";

      const units = isShapedScript ? line.split(" ") : [...line];

      units.forEach((unit, unitIndex) => {
        const span = document.createElement("span");
        span.className = "char";
        span.innerHTML = unit === "" ? "&nbsp;" : unit;
        const delay = initialDelay + lineIndex * units.length * charDelay + unitIndex * charDelay;
        span.style.transitionDelay = delay + "ms";
        lineSpan.appendChild(span);

        // Re-insert a real space between words so text wraps/reads normally
        if (isShapedScript && unitIndex < units.length - 1) {
          lineSpan.appendChild(document.createTextNode(" "));
        }
      });

      heading.appendChild(lineSpan);
    });

    setTimeout(() => {
      heading.querySelectorAll(".char").forEach((char) => {
        char.style.opacity = "1";
        char.style.transform = "translateX(0)";
      });
    }, 50);
  };

  window.setHeroHeading("en");

  setTimeout(() => {
    const subheading = document.getElementById("subheading");
    if (subheading) subheading.classList.add("show");
  }, 800);

  setTimeout(() => {
    const buttons = document.getElementById("buttons");
    if (buttons) buttons.classList.add("show");
  }, 1200);

  // Trigger tag-wrap visibility if element exists
  const tagWrap = document.querySelector(".tag-wrap");
  if (tagWrap) setTimeout(() => tagWrap.classList.add("show"), 1400);
}
