/* ===========================
   Config Renderer
   Populates every text slot and dynamic list from PORTFOLIO_CONFIG.
   Runs before any observer or interactive setup so all DOM nodes exist.
   =========================== */
function renderFromConfig() {
  const C = PORTFOLIO_CONFIG;

  const GH_SVG_SM = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;
  const GH_SVG_LG = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;
  const LI_SVG  = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;
  const TW_SVG  = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
  const EM_SVG  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

  // ── Meta / SEO ──────────────────────────────────────────────────────────────
  document.title = `${C.name} | ${C.title}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = C.meta.description;
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = C.meta.ogTitle;
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.content = C.meta.ogDescription;
  const favicon = document.getElementById('favicon');
  if (favicon) favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${C.meta.faviconEmoji}</text></svg>`;

  // ── Logos & resume links ────────────────────────────────────────────────────
  ['loader-logo', 'nav-logo', 'footer-logo'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = C.shortName;
  });
  ['nav-resume-btn', 'about-resume-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = C.resumeUrl;
  });

  // ── Hero ───────────────────────────────────────────────────────────────────
  const heroBadge = document.getElementById('hero-badge-text');
  if (heroBadge) heroBadge.textContent = C.hero.availableBadge;

  const heroTitle = document.getElementById('hero-title');
  if (heroTitle) heroTitle.innerHTML =
    `${C.hero.greeting} <span class="gradient-text">${C.name}</span><br />` +
    `<span class="typewriter-wrap"><span id="typewriter"></span><span class="cursor" aria-hidden="true"></span></span>`;

  const heroDesc = document.getElementById('hero-desc');
  if (heroDesc) heroDesc.textContent = C.hero.description;

  const heroActions = document.getElementById('hero-actions');
  if (heroActions) heroActions.innerHTML =
    `<a href="${C.hero.primaryBtn.href}" class="btn-primary">` +
      `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M13 2v7h7"/></svg>` +
      `${C.hero.primaryBtn.label}` +
    `</a>` +
    `<a href="${C.hero.secondaryBtn.href}" class="btn-secondary">${C.hero.secondaryBtn.label}</a>`;

  const heroStats = document.getElementById('hero-stats');
  if (heroStats) heroStats.innerHTML = C.stats.map(s =>
    `<div class="stat-item">` +
      `<span class="stat-number" data-counter data-target="${s.value}" data-suffix="${s.suffix}">${s.value}${s.suffix}</span>` +
      `<span class="stat-label">${s.label}</span>` +
    `</div>`
  ).join('');

  const heroAvatar = document.getElementById('hero-avatar');
  if (heroAvatar) {
    if (C.avatarImage) {
      const img = document.createElement('img');
      img.className = 'hero-avatar';
      img.src = C.avatarImage;
      img.alt = C.name;
      heroAvatar.replaceWith(img);
    } else {
      heroAvatar.textContent = C.avatarEmoji;
    }
  }

  const heroAvatarWrap = document.getElementById('hero-avatar-wrap');
  if (heroAvatarWrap && C.hero.floatingBadges) {
    C.hero.floatingBadges.forEach(b => {
      const div = document.createElement('div');
      div.className = `floating-badge ${b.position}`;
      div.innerHTML = `<span class="icon">${b.emoji}</span><span>${b.label}</span>`;
      heroAvatarWrap.appendChild(div);
    });
  }

  // ── About ──────────────────────────────────────────────────────────────────
  const aboutAvatar = document.getElementById('about-avatar');
  if (aboutAvatar) aboutAvatar.textContent = C.avatarEmoji;

  const aboutYears = document.getElementById('about-years');
  if (aboutYears) {
    aboutYears.setAttribute('data-target', C.about.yearsBuilding);
    aboutYears.textContent = C.about.yearsBuilding + '+';
  }

  const aboutLabel = document.getElementById('about-label');
  if (aboutLabel) aboutLabel.textContent = C.about.label;

  const aboutTitle = document.getElementById('about-title');
  if (aboutTitle) aboutTitle.innerHTML =
    `${C.about.titleLine1}<br /><span class="gradient-text">${C.about.titleHighlight}</span>`;

  const aboutParas = document.getElementById('about-paragraphs');
  if (aboutParas) aboutParas.innerHTML = C.about.paragraphs.map(p => `<p class="about-text">${p}</p>`).join('');

  const aboutCards = document.getElementById('about-cards');
  if (aboutCards) aboutCards.innerHTML = C.about.cards.map(c =>
    `<div class="about-card">` +
      `<div class="about-card-icon">${c.icon}</div>` +
      `<h4>${c.title}</h4>` +
      `<p>${c.desc}</p>` +
    `</div>`
  ).join('');

  // ── Skills ─────────────────────────────────────────────────────────────────
  const skillsLabel = document.getElementById('skills-label');
  if (skillsLabel) skillsLabel.textContent = C.skills.label;
  const skillsTitle = document.getElementById('skills-title');
  if (skillsTitle) skillsTitle.innerHTML = `${C.skills.title}<span class="gradient-text">${C.skills.titleHighlight}</span>`;
  const skillsDesc = document.getElementById('skills-desc');
  if (skillsDesc) skillsDesc.textContent = C.skills.desc;

  const skillsGrid = document.getElementById('skills-grid');
  if (skillsGrid) skillsGrid.innerHTML = C.skills.categories.map(cat =>
    `<div class="skill-category reveal">` +
      `<div class="skill-category-header">` +
        `<span class="skill-category-icon">${cat.icon}</span>` +
        `<h3>${cat.title}</h3>` +
      `</div>` +
      cat.items.map(item =>
        `<div class="skill-item">` +
          `<div class="skill-info">` +
            `<span class="skill-name">${item.name}</span>` +
            `<span class="skill-percent">${item.level}%</span>` +
          `</div>` +
          `<div class="skill-bar"><div class="skill-fill" data-width="${item.level}"></div></div>` +
        `</div>`
      ).join('') +
    `</div>`
  ).join('');

  const techBadges = document.getElementById('tech-badges');
  if (techBadges) techBadges.innerHTML = C.skills.badges.map(b => `<span class="tech-badge">${b}</span>`).join('');

  // ── Projects ───────────────────────────────────────────────────────────────
  const projectsLabel = document.getElementById('projects-label');
  if (projectsLabel) projectsLabel.textContent = C.projects.label;
  const projectsTitle = document.getElementById('projects-title');
  if (projectsTitle) projectsTitle.innerHTML = `${C.projects.title}<span class="gradient-text">${C.projects.titleHighlight}</span>`;

  const projectsGrid = document.getElementById('projects-grid');
  if (projectsGrid) projectsGrid.innerHTML = C.projects.items.map(p => {
    const statsHtml = p.stats?.stars !== undefined
      ? `<span class="project-stat">⭐ ${p.stats.stars}</span><span class="project-stat">🍴 ${p.stats.forks}</span>`
      : (p.stats ? `<span class="project-stat">👁 ${p.stats.views}</span><span class="project-stat">❤️ ${p.stats.likes}</span>` : '');
    const linksHtml = [
      p.github ? `<a href="${p.github}" class="project-link" title="GitHub">${GH_SVG_SM}</a>` : '',
      p.demo   ? `<a href="${p.demo}" class="project-link" title="Live Demo">🔗</a>` : '',
    ].join('');
    const previewHtml = p.featured
      ? `<div class="project-preview"><div class="gallery-placeholder ${p.previewGradient}" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;">${p.previewEmoji}</div></div>`
      : '';
    const innerWrap = p.featured ? ` style="display:flex;flex-direction:column;"` : ``;
    return (
      `<div class="project-card${p.featured ? ' featured' : ''} reveal" data-category="${p.category}">` +
        (p.featured ? `<span class="featured-label">Featured</span>` : '') +
        previewHtml +
        `<div${innerWrap}>` +
          `<div class="project-card-header">` +
            `<span class="project-icon">${p.icon}</span>` +
            `<div class="project-links">${linksHtml}</div>` +
          `</div>` +
          `<div class="project-card-body">` +
            `<h3 class="project-title">${p.title}</h3>` +
            `<p class="project-desc">${p.desc}</p>` +
            `<div class="project-topics">${p.tags.map(t => `<span class="topic-tag">${t}</span>`).join('')}</div>` +
          `</div>` +
          `<div class="project-card-footer">` +
            `<div class="project-stats">${statsHtml}</div>` +
            `<span class="project-lang"><span class="lang-dot" style="background:${p.language.color}"></span>${p.language.name}</span>` +
          `</div>` +
        `</div>` +
      `</div>`
    );
  }).join('');

  const viewAllGithub = document.getElementById('view-all-github');
  if (viewAllGithub) {
    viewAllGithub.href = C.github && C.github.startsWith('http') ? C.github : `https://github.com/${C.github}`;
  }
  const viewAllLabel = document.getElementById('view-all-label');
  if (viewAllLabel) viewAllLabel.textContent = C.projects.viewAllLabel;

  // ── Creative Gallery ───────────────────────────────────────────────────────
  const creativeLabel = document.getElementById('creative-label');
  if (creativeLabel) creativeLabel.textContent = C.creative.label;
  const creativeTitle = document.getElementById('creative-title');
  if (creativeTitle) creativeTitle.innerHTML = `${C.creative.title}<span class="gradient-text">${C.creative.titleHighlight}</span>`;
  const creativeDesc = document.getElementById('creative-desc');
  if (creativeDesc) creativeDesc.textContent = C.creative.desc;

  const gallery = document.getElementById('creative-gallery');
  if (gallery) gallery.innerHTML = C.creative.items.map(item => {
    const innerContent = item.videoSrc
      ? `<video class="gallery-video" src="${item.videoSrc}" autoplay muted loop playsinline></video>`
      : item.imageSrc
        ? `<img class="gallery-thumb" src="${item.imageSrc}" alt="${item.title}" loading="lazy" />`
        : `<div class="gallery-placeholder">` +
            `<span>${item.emoji}</span>` +
            `<span style="font-size:0.8rem;color:var(--text-muted);">${item.subtitle}</span>` +
          `</div>`;
    const actionBtn = item.reportUrl
      ? `<a href="${item.reportUrl}" target="_blank" rel="noopener" class="gallery-action-btn" onclick="event.stopPropagation()">📄 View Report</a>`
      : '';
    return (
      `<div class="gallery-item reveal" data-type="${item.type}"${item.videoSrc ? ` data-video-src="${item.videoSrc}"` : ''}>` +
        `<div class="gallery-item-inner ${item.size} ${item.gradient}">` +
          innerContent +
        `</div>` +
        `<div class="gallery-overlay">` +
          `<div class="gallery-info"><h4>${item.title}</h4><p>${item.info}</p>${actionBtn}</div>` +
        `</div>` +
      `</div>`
    );
  }).join('');

  // ── Video Modal ───────────────────────────────────────────────────────────
  const videoModal = document.createElement('div');
  videoModal.id = 'video-modal';
  videoModal.className = 'video-modal';
  videoModal.innerHTML =
    `<button class="video-modal-close" aria-label="Close">✕</button>` +
    `<video controls playsinline></video>`;
  document.body.appendChild(videoModal);

  function openVideoModal(src) {
    const video = videoModal.querySelector('video');
    video.src = src;
    videoModal.classList.add('active');
    video.play().catch(() => {});
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    const video = videoModal.querySelector('video');
    video.pause();
    video.src = '';
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (gallery) {
    gallery.addEventListener('click', (e) => {
      if (e.target.closest('.gallery-action-btn')) return;
      const item = e.target.closest('[data-video-src]');
      if (item) openVideoModal(item.dataset.videoSrc);
    });
  }

  videoModal.querySelector('.video-modal-close').addEventListener('click', closeVideoModal);
  videoModal.addEventListener('click', (e) => { if (e.target === videoModal) closeVideoModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideoModal(); });

  // ── Career ─────────────────────────────────────────────────────────────────
  const careerLabel = document.getElementById('career-label');
  if (careerLabel) careerLabel.textContent = C.career.label;
  const careerTitle = document.getElementById('career-title');
  if (careerTitle) careerTitle.innerHTML = `${C.career.title}<span class="gradient-text">${C.career.titleHighlight}</span>`;
  const careerDesc = document.getElementById('career-desc');
  if (careerDesc) careerDesc.textContent = C.career.desc;

  const timeline = document.getElementById('timeline');
  if (timeline) timeline.innerHTML = C.career.timeline.map(t =>
    `<div class="timeline-item">` +
      `<div class="timeline-dot"></div>` +
      `<div class="timeline-date">${t.date}</div>` +
      `<div class="timeline-title">${t.role}</div>` +
      `<div class="timeline-company">${t.company}</div>` +
      `<div class="timeline-desc">${t.desc}</div>` +
    `</div>`
  ).join('');

  const ambitionCards = document.getElementById('ambition-cards');
  if (ambitionCards) ambitionCards.innerHTML = C.career.ambitions.map(a =>
    `<div class="ambition-card reveal">` +
      `<div class="ambition-icon">${a.icon}</div>` +
      `<div class="ambition-content"><h4>${a.title}</h4><p>${a.desc}</p></div>` +
    `</div>`
  ).join('');

  // ── Contact ────────────────────────────────────────────────────────────────
  const contactLabel = document.getElementById('contact-label');
  if (contactLabel) contactLabel.textContent = C.contact.label;
  const contactTitle = document.getElementById('contact-title');
  if (contactTitle) contactTitle.innerHTML = `${C.contact.title}<span class="gradient-text">${C.contact.titleHighlight}</span>`;
  const contactDesc = document.getElementById('contact-desc');
  if (contactDesc) contactDesc.textContent = C.contact.desc;

  const contactSocials = document.getElementById('contact-socials');
  if (contactSocials) {
    const githubHref = C.github ? (C.github.startsWith('http') ? C.github : `https://github.com/${C.github}`) : null;
    const linkedinHref = C.linkedin ? (C.linkedin.startsWith('http') || C.linkedin.includes('linkedin.com') ? C.linkedin : `https://linkedin.com/in/${C.linkedin}`) : null;
    const socials = [
      githubHref  && { href: githubHref, icon: GH_SVG_LG, label: 'GitHub' },
      linkedinHref&& { href: linkedinHref, icon: LI_SVG,    label: 'LinkedIn' },
      C.email     && { href: `mailto:${C.email}`, icon: EM_SVG, label: 'Email', isEmail: true },
    ].filter(Boolean);
    contactSocials.innerHTML = socials.map(s =>
      `<a href="${s.href}" ${s.isEmail ? '' : 'target="_blank" rel="noopener"'} class="social-link">${s.icon} ${s.label}</a>`
    ).join('');
  }

  // ── Footer ─────────────────────────────────────────────────────────────────
  const footerText = document.getElementById('footer-text');
  if (footerText) footerText.innerHTML = C.footer.text;
  const footerLinks = document.getElementById('footer-links');
  if (footerLinks) footerLinks.innerHTML = C.footer.links.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
}

renderFromConfig();

/* ===========================
   Loader
   =========================== */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 500);
    }
  }, 1500);
});

/* ===========================
   Theme Toggle
   =========================== */
const themeToggle = document.getElementById('themeToggle');
const mobileThemeToggle = document.getElementById('mobileThemeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
root.setAttribute('data-theme', savedTheme);
updateThemeIcon();

function toggleTheme() {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon();
}

function updateThemeIcon() {
  const theme = root.getAttribute('data-theme');
  const icon = theme === 'dark' ? '☀️' : '🌙';
  if (themeToggle) themeToggle.textContent = icon;
  if (mobileThemeToggle) mobileThemeToggle.textContent = icon;
}

if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);

/* ===========================
   Navbar Scroll
   =========================== */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

/* ===========================
   Mobile Menu
   =========================== */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');

function openMobileMenu() {
  mobileMenu.classList.add('open');
  mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', openMobileMenu);
if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

/* ===========================
   Hero Canvas Particles
   =========================== */
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: null, y: null };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '#7c3aed' : '#06b6d4',
    };
  }

  function initParticles() {
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 120);
    particles = Array.from({ length: count }, createParticle);
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      if (mouse.x !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120 * 0.015;
          p.vx -= dx * force;
          p.vy -= dy * force;
        }
      }

      p.vx *= 0.995;
      p.vy *= 0.995;
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.15 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  initParticles();
  drawParticles();
}

/* ===========================
   Typewriter Effect
   =========================== */
const typewriterEl = document.getElementById('typewriter');
if (typewriterEl) {
  const roles = PORTFOLIO_CONFIG.roles;
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let delay = 120;

  function type() {
    const current = roles[roleIdx];
    if (isDeleting) {
      typewriterEl.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      delay = 60;
    } else {
      typewriterEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      delay = 120;
    }

    if (!isDeleting && charIdx === current.length) {
      isDeleting = true;
      delay = 2000;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  setTimeout(type, 1000);
}

/* ===========================
   Scroll Reveal
   =========================== */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .timeline-item').forEach(el => {
  revealObserver.observe(el);
});

/* ===========================
   Skill Bars
   =========================== */
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          const target = bar.getAttribute('data-width');
          setTimeout(() => { bar.style.width = target + '%'; }, 200);
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.skill-category').forEach(el => {
  skillObserver.observe(el);
});

/* ===========================
   Counter Animation
   =========================== */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'), 10);
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-counter]').forEach(el => {
  counterObserver.observe(el);
});

/* ===========================
   Projects Filter
   =========================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-category]');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.4s ease both';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ===========================
   Creative Tabs
   =========================== */
const tabBtns = document.querySelectorAll('.tab-btn');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.getAttribute('data-tab');
    document.querySelectorAll('.gallery-item[data-type]').forEach(item => {
      if (tab === 'all' || item.getAttribute('data-type') === tab) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

/* ===========================
   Contact Form
   =========================== */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;

    await new Promise(r => setTimeout(r, 1500));

    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
    contactForm.reset();

    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
    }, 3000);
  });
}

/* ===========================
   Back to Top
   =========================== */
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ===========================
   Active Nav Link on Scroll
   =========================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--accent-purple)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(section => sectionObserver.observe(section));

/* ===========================
   GitHub Projects Fetch
   =========================== */
async function fetchGitHubProjects() {
  const container = document.getElementById('github-projects');
  const rawUser = PORTFOLIO_CONFIG.github || '';
  let user = rawUser;
  if (user && user.startsWith('http')) {
    user = user.replace(/^https?:\/\/(www\.)?github\.com\//, '').replace(/\/$/, '');
  }
  if (!container || !PORTFOLIO_CONFIG.showGithubProjects || !user || user === 'your-github-username') return;

  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`);
    if (!res.ok) throw new Error('GitHub API error');
    const repos = await res.json();

    const langColors = {
      JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5',
      Rust: '#dea584', Go: '#00ADD8', CSS: '#563d7c', HTML: '#e34c26',
      Java: '#b07219', 'C++': '#f34b7d', Swift: '#F05138',
    };

    const GH_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;

    container.innerHTML = repos
      .filter(r => !r.fork)
      .slice(0, 6)
      .map(repo => `
        <div class="project-card reveal" data-category="github" style="animation-delay:${Math.random()*0.3}s">
          <div class="project-card-header">
            <span class="project-icon">📦</span>
            <div class="project-links">
              <a href="${repo.html_url}" target="_blank" rel="noopener" class="project-link" title="GitHub">${GH_SVG}</a>
              ${repo.homepage ? `<a href="${repo.homepage}" target="_blank" rel="noopener" class="project-link" title="Live">🔗</a>` : ''}
            </div>
          </div>
          <div class="project-card-body">
            <h3 class="project-title">${repo.name}</h3>
            <p class="project-desc">${repo.description || 'No description provided.'}</p>
            ${repo.topics?.length ? `<div class="project-topics">${repo.topics.slice(0, 3).map(t => `<span class="topic-tag">${t}</span>`).join('')}</div>` : ''}
          </div>
          <div class="project-card-footer">
            <div class="project-stats">
              <span class="project-stat">⭐ ${repo.stargazers_count}</span>
              <span class="project-stat">🍴 ${repo.forks_count}</span>
            </div>
            ${repo.language ? `<span class="project-lang"><span class="lang-dot" style="background:${langColors[repo.language] || '#8b949e'}"></span>${repo.language}</span>` : ''}
          </div>
        </div>
      `).join('');

    document.querySelectorAll('#github-projects .reveal').forEach(el => revealObserver.observe(el));
  } catch (err) {
    console.log('GitHub API unavailable, showing demo projects.');
  }
}

fetchGitHubProjects();
