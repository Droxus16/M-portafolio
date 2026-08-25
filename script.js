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

/* ═══════════════ TYPED ROLE ═══════════════ */
(function initTyped() {
  const el = document.getElementById('typedRole');
  if (!el) return;
  const roles = [
    'QA Automation Engineer',
    'Full Stack Developer',
    'Python Enthusiast',
    'Framework Creator',
    'Bug Hunter 🐛',
  ];
  let ri = 0, ci = 0, deleting = false, pause = 0;

  function tick() {
    const role = roles[ri];
    if (!deleting) {
      el.textContent = role.slice(0, ++ci);
      if (ci === role.length) { deleting = true; pause = 60; }
    } else if (pause > 0) {
      pause--;
    } else {
      el.textContent = role.slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 35 : 70);
  }
  tick();
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
