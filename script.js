/* ═══════════════ PARTICLES ═══════════════ */
(function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w, h, particles = [];
  const COUNT = 80;
  const DISTANCE = 120;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 1.5 + 0.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 210, 255, 0.5)';
      ctx.fill();
    }
  }

  for (let i = 0; i < COUNT; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DISTANCE) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 210, 255, ${0.12 * (1 - dist / DISTANCE)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ═══════════════ TRANSLATIONS ═══════════════ */
const translations = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.skills': 'Skills',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.desc': 'QA Automation Engineer & Full Stack Developer — construyo herramientas que hacen que el software falle menos y las personas trabajen mejor.',
    'hero.cta1': 'Ver proyectos',
    'hero.cta2': 'Contactar',
    'about.title': 'Sobre mí',
    'about.p1': '<strong>Tecnólogo en Análisis y Desarrollo de Software (ADSO)</strong> con experiencia en desarrollo web full stack y QA aplicada. Construyo aplicaciones completas con PHP, Laravel, Python y JavaScript, y garantizo su calidad con testing automatizado.',
    'about.p2': 'Mi enfoque combina <strong>desarrollo full stack</strong> — APIs REST, bases de datos, dashboards interactivos — con <strong>QA profesional</strong>: automatización de pruebas E2E, validación de APIs y aseguramiento de calidad en cada etapa del ciclo.',
    'about.p3': 'He desarrollado y desplegado aplicaciones en producción como directorios empresariales, plataformas de aprendizaje con IA y herramientas de finanzas personales, aplicando las mejores prácticas de arquitectura, seguridad y experiencia de usuario.',
    'about.stat1': 'Proyectos<br/>completados',
    'about.stat2': '',
    'about.stat3': 'Plataformas<br/>en producción',
    'skills.title': 'Skills',
    'projects.title': 'Proyectos',
    'projects.featured': 'Proyecto destacado',
    'projects.pymerchant.sub': 'Framework QA E2E para e-commerce',
    'projects.pymerchant.desc': 'Framework de testing E2E diseñado para validar cualquier tienda e-commerce. Con un solo cambio de variables de entorno o configuración JSON, el mismo framework puede testear Shopify, WooCommerce, MercadoLibre o cualquier otra plataforma. Incluye dashboard Streamlit en vivo, reportes Allure y ejecución paralela.',
    'projects.pymerchant.code': 'Código',
    'projects.pymerchant.f1': 'Multi-tienda configurable por JSON',
    'projects.pymerchant.f2': 'Dashboard Streamlit con métricas en vivo',
    'projects.pymerchant.f3': 'Ejecución paralela con pytest-xdist',
    'projects.pymerchant.f4': 'JWT auto-renovado + storage state',
    'projects.pymerchant.f5': 'Reportes Allure con gráficas detalladas',
    'projects.pymerchant.f6': 'Page Object Model modular',
    'projects.pymerchant.f7': 'Análisis HTTP + stack detection sin API',
    'projects.pymerchant.f8': 'Onboarding wizard interactivo',
    'projects.cat.fullstack': 'Aplicaciones Web Full Stack',
    'projects.gremionexo.sub': 'Directorio Nacional de Empresas en Colombia',
    'projects.gremionexo.desc': 'Directorio digital que conecta empresas, proveedores y emprendedores en toda Colombia. Con más de 1.100 municipios y 12 categorías sectoriales, permite a los negocios registrarse gratis, publicar catálogos y recibir contactos directos por WhatsApp.',
    'projects.gremionexo.live': 'Ver sitio',
    'projects.gremionexo.f1': '33 departamentos, 1.122 municipios, 12 categorías',
    'projects.gremionexo.f2': 'Búsqueda avanzada por categoría, departamento y ciudad',
    'projects.gremionexo.f3': 'Perfiles con catálogo PDF, logo y documentos legales',
    'projects.gremionexo.f4': 'Cotizaciones directas por WhatsApp integrado',
    'projects.gremionexo.f5': 'Dashboard de estadísticas de visitas y contactos',
    'projects.namtrik.sub': 'Plataforma de Aprendizaje de Idiomas con IA',
    'projects.namtrik.desc': 'Plataforma de libre acceso para aprender idiomas paso a paso. Incluye 12 lecciones estructuradas en 3 niveles, talleres generados con Inteligencia Artificial, videos de creadores reales y práctica de conversación con IA.',
    'projects.namtrik.live': 'Ver sitio',
    'projects.namtrik.f1': '12 lecciones en 3 niveles con progreso desbloqueable',
    'projects.namtrik.f2': 'Talleres generados con IA + fallback sin conexión',
    'projects.namtrik.f3': '4 pilares: escucha, habla, lectura y escritura',
    'projects.namtrik.f4': 'Práctica de conversación con IA en tiempo real',
    'projects.namtrik.f5': '100% gratuito con recursos de libre acceso',
    'contact.title': 'Contacto',
    'contact.desc': '¿Tienes un proyecto en mente o quieres hablar de QA, automatización o desarrollo? ¡Conectemos!',
    'footer': '© 2026 Daniel Felipe Ramos Salazar — Hecho con ☕ y código',
    'typed.roles': ['QA Automation Engineer', 'Full Stack Developer', 'Python Enthusiast', 'Framework Creator', 'Bug Hunter 🐛'],
  },
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': "Hi, I'm",
    'hero.desc': 'QA Automation Engineer & Full Stack Developer — I build tools that make software fail less and people work better.',
    'hero.cta1': 'View projects',
    'hero.cta2': 'Contact me',
    'about.title': 'About me',
    'about.p1': '<strong>Software Analysis & Development Technologist (ADSO)</strong> with experience in full stack web development and applied QA. I build complete applications with PHP, Laravel, Python, and JavaScript, ensuring quality through automated testing.',
    'about.p2': 'My approach combines <strong>full stack development</strong> — REST APIs, databases, interactive dashboards — with <strong>professional QA</strong>: E2E test automation, API validation, and quality assurance at every stage of the cycle.',
    'about.p3': 'I have developed and deployed production applications including business directories, AI-powered learning platforms, and personal finance tools, applying best practices in architecture, security, and user experience.',
    'about.stat1': 'Completed<br/>projects',
    'about.stat2': '',
    'about.stat3': 'Production<br/>platforms',
    'skills.title': 'Skills',
    'projects.title': 'Projects',
    'projects.featured': 'Featured project',
    'projects.pymerchant.sub': 'E2E QA Framework for e-commerce',
    'projects.pymerchant.desc': 'E2E testing framework designed to validate any e-commerce store. With a single environment variable or JSON config change, the same framework can test Shopify, WooCommerce, MercadoLibre or any other platform. Includes live Streamlit dashboard, Allure reports, and parallel execution.',
    'projects.pymerchant.code': 'Code',
    'projects.pymerchant.f1': 'Multi-store configurable via JSON',
    'projects.pymerchant.f2': 'Streamlit dashboard with live metrics',
    'projects.pymerchant.f3': 'Parallel execution with pytest-xdist',
    'projects.pymerchant.f4': 'Auto-renewed JWT + storage state',
    'projects.pymerchant.f5': 'Allure reports with detailed charts',
    'projects.pymerchant.f6': 'Modular Page Object Model',
    'projects.pymerchant.f7': 'HTTP analysis + stack detection without API',
    'projects.pymerchant.f8': 'Interactive onboarding wizard',
    'projects.cat.fullstack': 'Full Stack Web Applications',
    'projects.gremionexo.sub': 'National Business Directory in Colombia',
    'projects.gremionexo.desc': 'Digital directory connecting businesses, suppliers, and entrepreneurs across Colombia. With over 1,100 municipalities and 12 sectoral categories, it allows businesses to register for free, publish catalogs, and receive direct contacts via WhatsApp.',
    'projects.gremionexo.live': 'View site',
    'projects.gremionexo.f1': '33 departments, 1,122 municipalities, 12 categories',
    'projects.gremionexo.f2': 'Advanced search by category, department, and city',
    'projects.gremionexo.f3': 'Profiles with PDF catalogs, logos, and legal documents',
    'projects.gremionexo.f4': 'Direct quotes via integrated WhatsApp',
    'projects.gremionexo.f5': 'Visit and contact statistics dashboard',
    'projects.namtrik.sub': 'AI-Powered Language Learning Platform',
    'projects.namtrik.desc': 'Free-access platform for learning languages step by step. Features 12 lessons structured in 3 levels, AI-generated workshops, real creator videos, and AI conversation practice.',
    'projects.namtrik.live': 'View site',
    'projects.namtrik.f1': '12 lessons in 3 levels with unlockable progress',
    'projects.namtrik.f2': 'AI-generated workshops + offline fallback',
    'projects.namtrik.f3': '4 pillars: listening, speaking, reading, and writing',
    'projects.namtrik.f4': 'Real-time AI conversation practice',
    'projects.namtrik.f5': '100% free with open-access resources',
    'contact.title': 'Contact',
    'contact.desc': "Have a project in mind or want to talk about QA, automation, or development? Let's connect!",
    'footer': '© 2026 Daniel Felipe Ramos Salazar — Made with ☕ and code',
    'typed.roles': ['QA Automation Engineer', 'Full Stack Developer', 'Python Enthusiast', 'Framework Creator', 'Bug Hunter 🐛'],
  }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Update toggle button
  const indicator = document.getElementById('langIndicator');
  const options = document.querySelectorAll('.lang-toggle__option');
  if (indicator) {
    indicator.classList.toggle('lang-toggle__indicator--en', lang === 'en');
  }
  options.forEach(opt => {
    const isActive = opt.getAttribute('data-lang') === lang;
    opt.classList.toggle('lang-toggle__option--active', isActive);
  });

  // Update typed roles
  currentRoles = t['typed.roles'];
  ri = 0;
  ci = 0;
  deleting = false;

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
}

/* ═══════════════ TYPED ROLE ═══════════════ */
let ri = 0, ci = 0, deleting = false, pause = 0;
let currentRoles = translations[currentLang]['typed.roles'];

(function initTyped() {
  const el = document.getElementById('typedRole');
  if (!el) return;

  function tick() {
    const role = currentRoles[ri];
    if (!deleting) {
      el.textContent = role.slice(0, ++ci);
      if (ci === role.length) { deleting = true; pause = 60; }
    } else if (pause > 0) {
      pause--;
    } else {
      el.textContent = role.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % currentRoles.length; }
    }
    setTimeout(tick, deleting ? 35 : 70);
  }
  tick();
})();

/* ═══════════════ LANGUAGE TOGGLE ═══════════════ */
(function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const next = currentLang === 'es' ? 'en' : 'es';
    applyLang(next);
  });

  // Apply saved language on load
  applyLang(currentLang);
})();

/* ═══════════════ SCROLL REVEAL ═══════════════ */
(function initReveal() {
  const els = document.querySelectorAll(
    '.skill-card, .project-card, .stat, .about__text, .about__stats, .contact'
  );
  els.forEach(el => el.classList.add('reveal'));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el => obs.observe(el));
})();

/* ═══════════════ COUNTER ANIMATION ═══════════════ */
(function initCounters() {
  const nums = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const target = +e.target.dataset.count;
      const duration = 1500;
      const start = performance.now();
      function step(now) {
        const progress = Math.min((now - start) / duration, 1);
        e.target.textContent = Math.floor(progress * target);
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.5 });
  nums.forEach(el => obs.observe(el));
})();

/* ═══════════════ NAV SCROLL ═══════════════ */
(function initNav() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.querySelector('.nav__links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  toggle.addEventListener('click', () => {
    links.classList.toggle('active');
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('active'));
  });
})();
