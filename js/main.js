/* All American Appliance Repair — main.js */

// ===== MOBILE NAV =====
const toggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ===== STICKY HEADER SHADOW =====
const header = document.getElementById('site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

// ===== SMOOTH ANCHOR SCROLL (offset for fixed header) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const id = this.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = parseInt(getComputedStyle(document.documentElement)
      .getPropertyValue('--header-height')) || 80;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});

// ===== CONTACT FORM (Formspree fallback feedback) =====
const forms = document.querySelectorAll('.contact-form');
forms.forEach(form => {
  form.addEventListener('submit', async function(e) {
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    // If using Formspree, let it handle naturally
    // This just gives user feedback while submitting
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
    }, 4000);
  });
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll(
  '.service-card, .testimonial-card, .why-card, .reason-item, .faq-item, .areas-grid li'
);

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease both';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}
