/* ============================================================
   FORWARDEN — script.js
   Theme toggle · Language toggle · Scroll reveal · Nav state
   ============================================================ */

(function () {
  "use strict";

  /* ---------------- Translations ---------------- */
  const i18n = {
    en: {
      nav_philosophy: "Philosophy",
      nav_projects: "Projects",
      nav_devlog: "Devlog",
      nav_contact: "Contact",

      hero_title: "FORWARDEN",

      hero_subtitle: "Where art and software can coexist.",
      hero_choose: "We develop games and software with passion.",

      path_studio_tag: "Forwarden Studio",
      path_studio_desc: "We create video games focused on experience, challenge, and immersion.",

      path_solutions_tag: "Forwarden Solutions",
      path_solutions_desc: "We build efficient, intuitive digital software and platforms designed to scale.",

      phil_eyebrow: "Our Philosophy",
      phil_title: "If you can imagine it, we can build it.",
      phil_lead: "Forwarden is the result of creating software using game development as its core foundation. This approach produces highly interactive and intuitive software, designed entirely with the end user in mind.",

      phil_p1_t: "Intuition",
      phil_p1_d: "Every element is designed to guide you along the right path.",

      phil_p2_t: "Efficiency",
      phil_p2_d: "We prioritize clean, maintainable, and well-executed solutions.",

      phil_p3_t: "Progress",
      phil_p3_d: "We move forward constantly, improving every detail along the way.",

      proj_eyebrow: "Projects",

      proj_title: "What we're building.",

      card_studio: "Studio · Video Game",

      card_solutions: "Solutions · Software",

      card_soon: "In Development",

      proj1_desc: "A precise and challenging platformer where Elizabeth journeys through Hell in search of her deceased fiancé.",

      proj2_title: "Software Platform",

      proj2_desc: "Digital tools designed to solve real-world problems with simplicity and efficiency.",

      proj3_title: "Next Project",

      proj3_desc: "New ideas are taking shape. We'll share more when the time is right.",

      dev_eyebrow: "Devlog",

      dev_title: "Open Development.",

      log1_t: "Ascenture — Playable Android Demo",

      log1_d: "Working on the interface and polishing the final details for release.",

      log2_t: "Counta POS — Accounting and Point of Sale Application",

      log2_d: "Currently integrating it with the point-of-sale system.",

      log3_t: "Forwarden Visual Identity",

      log3_d: "Defining a consistent visual identity across every area of the brand.",

      soc_eyebrow: "Socials",

      soc_title: "Follow our progress.",

      contact_title: "Let's Talk.",

      contact_desc: "If you have an idea, a project, or an interesting challenge, we'd be delighted to hear about it.",

      contact_btn: "Contact Us",

      footer_note: "Forwarden — Software and video games built with passion."
    },
    es: {
      nav_philosophy: "Filosofía",
      nav_projects: "Proyectos",
      nav_devlog: "Bitácora",
      nav_contact: "Contacto",

      hero_title: "FORWARDEN",

      hero_subtitle: "Donde el arte y el software pueden coexistir.",
      hero_choose: "Desarrollamos videojuegos y software con pasión.",

      path_studio_tag: "Forwarden Studio",
      path_studio_desc: "Creamos videojuegos centrados en la experiencia, el desafío y la inmersión.",
      path_solutions_tag: "Forwarden Solutions",
      path_solutions_desc: "Desarrollamos software y plataformas digitales eficientes, intuitivas y preparadas para crecer.",

      phil_eyebrow: "Nuestra Filosofía",
      phil_title: "Si lo puedes imaginar lo podemos desarrollar.",
      phil_lead: "Forwarden es el resultado de la creación de software usando el enfoque de desarrollo de videojuegos como base principal, esto crea un software muy interactivo e intuitivo, pensado completamente en el usuario final.",

      phil_p1_t: "Intuición",
      phil_p1_d: "Cada elemento está diseñado para guíarte por el camino correcto.",

      phil_p2_t: "Eficiencia",
      phil_p2_d: "Priorizamos soluciones limpias, mantenibles y bien ejecutadas.",

      phil_p3_t: "Progreso",
      phil_p3_d: "Avanzamos constantemente, mejorando cada detalle en el proceso.",

      proj_eyebrow: "Proyectos",

      proj_title: "Lo que estamos construyendo.",

      card_studio: "Studio · Videojuego",

      card_solutions: "Solutions · Software",

      card_soon: "En desarrollo",

      proj1_desc: "Un plataformas preciso y desafiante, donde Elizabeth recorrerá el infierno en busca de su difunto prometido.",

      proj2_title: "Plataforma de Software",

      proj2_desc: "Herramientas digitales diseñadas para resolver problemas reales con simplicidad y eficiencia.",

      proj3_title: "Próximo Proyecto",

      proj3_desc: "Nuevas ideas están tomando forma. Compartiremos más cuando sea el momento.",

      dev_eyebrow: "Bitácora",

      dev_title: "Desarrollo abierto.",

      log1_t: "Ascenture — Demo jugable para Android",

      log1_d: "Trabajando en la interfaz y puliendo últimos detalles para su lanzamiento.",

      log2_t: "Counta POS — Aplicación de contabilidad y punto de venta",

      log2_d: "En proceso de integración al punto de venta.",

      log3_t: "Identidad visual Forwarden",

      log3_d: "Definición de una imagen coherente para todas las áreas de la marca.",

      soc_eyebrow: "Redes",

      soc_title: "Sigue nuestro progreso.",

      contact_title: "Hablemos.",

      contact_desc: "Si tienes una idea, un proyecto o un desafío interesante, estaremos encantados de conocerlo.",

      contact_btn: "Contactar",

      footer_note: "Forwarden — Software y videojuegos construidos con pasión."

    },
  };

  /* ---------------- Theme ---------------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const metaTheme = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (metaTheme) metaTheme.setAttribute("content", theme === "dark" ? "#0a0a0b" : "#f6f6f4");
    if (persist) { try { localStorage.setItem("fw-theme", theme); } catch (e) {} }
  }

  function initTheme() {
    let saved = null;
    try { saved = localStorage.getItem("fw-theme"); } catch (e) {}
    // Dark mode is the brand default; only honor an explicit prior choice.
    applyTheme(saved === "light" ? "light" : "dark", false);
  }

  themeToggle.addEventListener("click", function () {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next, true);
  });

  /* ---------------- Language ---------------- */
  const langToggle = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.en;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    root.setAttribute("lang", lang);
    langLabel.textContent = lang === "en" ? "EN" : "ES";
    try { localStorage.setItem("fw-lang", lang); } catch (e) {}
  }

  function initLang() {
    let saved = null;
    try { saved = localStorage.getItem("fw-lang"); } catch (e) {}
    if (!saved) {
      saved = (navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en";
    }
    applyLang(saved);
  }

  langToggle.addEventListener("click", function () {
    const next = root.getAttribute("lang") === "en" ? "es" : "en";
    applyLang(next);
  });

  /* ---------------- Scroll reveal ---------------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    const io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            const el = entry.target;
            // small stagger for grouped siblings
            const delay = Math.min(i * 60, 240);
            setTimeout(function () { el.classList.add("is-visible"); }, delay);
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    items.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Nav scrolled state ---------------- */
  const nav = document.getElementById("nav");
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- Year ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Init ---------------- */
  initTheme();
  initLang();
  initReveal();
  onScroll();
})();
