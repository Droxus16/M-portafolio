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
    'about.p1': 'Soy <strong>Tecnólogo en Análisis y Desarrollo de Software (ADSO)</strong> con enfoque en QA Automation y desarrollo full stack. Me gusta construir cosas que funcionen, que se puedan testear y que resuelvan problemas reales.',
    'about.p2': 'Creé <strong>PyMerchant</strong>, un framework de testing E2E para tiendas e-commerce que soporta múltiples plataformas (Shopify, WooCommerce, MercadoLibre) con dashboard en vivo, reportes Allure y ejecución paralela.',
    'about.p3': 'Con experiencia en QA Automation Engineer en <strong>flujos funcionales por API</strong>, donde automatizo procesos de testing y mejoro la calidad del software.',
    'about.stat1': 'Proyectos<br/>completados',
    'about.stat2': 'Tests unitarios<br/>en PyMerchant',
    'about.stat3': 'Plataformas<br/>e-commerce',
    'skills.title': 'Skills',
    'projects.title': 'Proyectos',
    'projects.featured': 'Proyecto destacado',
    'projects.pymerchant.sub': 'Framework QA E2E para e-commerce',
    'projects.pymerchant.desc': 'Framework de testing automatizado que valida cualquier tienda e-commerce con Playwright + Pytest. Incluye dashboard Streamlit en vivo, reportes Allure, ejecución paralela y soporte multi-plataforma (Shopify, WooCommerce, MercadoLibre).',
    'projects.pymerchant.code': 'Código',
    'projects.pymerchant.f1': 'Multi-tienda configurable por JSON',
    'projects.pymerchant.f2': 'Dashboard Streamlit con métricas en vivo',
    'projects.pymerchant.f3': 'Ejecución paralela con pytest-xdist',
    'projects.pymerchant.f4': 'JWT auto-renovado + storage state',
    'projects.gasto.sub': 'Herramienta de finanzas personales',
    'projects.gasto.desc': 'Aplicación web para registrar ingresos, gastos y optimizar el ahorro. Interfaz intuitiva con dashboard de visualización financiera y diseño responsive.',
    'projects.kera.sub': 'Directorio Nacional Digital',
    'projects.kera.desc': 'Plataforma que conecta talento con oportunidades en toda Colombia. Sistema de directorio con búsqueda por categoría, departamento y ciudad.',
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
    'about.p1': "I'm a <strong>Software Analysis & Development Technologist (ADSO)</strong> focused on QA Automation and full stack development. I like building things that work, that can be tested, and that solve real problems.",
    'about.p2': 'I created <strong>PyMerchant</strong>, an E2E testing framework for e-commerce stores that supports multiple platforms (Shopify, WooCommerce, MercadoLibre) with live dashboard, Allure reports, and parallel execution.',
    'about.p3': 'With experience as a QA Automation Engineer in <strong>functional API workflows</strong>, where I automate testing processes and improve software quality.',
    'about.stat1': 'Completed<br/>projects',
    'about.stat2': 'Unit tests<br/>in PyMerchant',
    'about.stat3': 'E-commerce<br/>platforms',
    'skills.title': 'Skills',
    'projects.title': 'Projects',
    'projects.featured': 'Featured project',
    'projects.pymerchant.sub': 'E2E QA Framework for e-commerce',
    'projects.pymerchant.desc': 'Automated testing framework that validates any e-commerce store with Playwright + Pytest. Includes live Streamlit dashboard, Allure reports, parallel execution, and multi-platform support (Shopify, WooCommerce, MercadoLibre).',
    'projects.pymerchant.code': 'Code',
    'projects.pymerchant.f1': 'Multi-store configurable via JSON',
    'projects.pymerchant.f2': 'Streamlit dashboard with live metrics',
    'projects.pymerchant.f3': 'Parallel execution with pytest-xdist',
    'projects.pymerchant.f4': 'Auto-renewed JWT + storage state',
    'projects.gasto.sub': 'Personal finance tool',
    'projects.gasto.desc': 'Web application to track income, expenses and optimize savings. Intuitive interface with financial visualization dashboard and responsive design.',
    'projects.kera.sub': 'National Digital Directory',
    'projects.kera.desc': 'Platform that connects talent with opportunities across Colombia. Directory system with search by category, department, and city.',
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
