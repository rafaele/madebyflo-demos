/* ============================================
   VERSO — Main JavaScript
   Theme toggle, mobile menu, scroll animations
   ============================================ */

(function () {
  'use strict';

  // ---------- Theme Toggle ----------
  const THEME_KEY = 'verso-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  // Apply theme immediately (no flash)
  setTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
      });
    });

    // ---------- Mobile Menu ----------
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navToggle.classList.remove('active');
          navLinks.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    // ---------- Auto-hide Nav on Scroll ----------
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    const scrollThreshold = 80;

    window.addEventListener('scroll', function () {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= scrollThreshold) {
        nav.classList.remove('nav-hidden');
        return;
      }
      if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }
      lastScroll = currentScroll;
    }, { passive: true });

    // ---------- Scroll Reveal ----------
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    if (revealElements.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
      });

      revealElements.forEach(function (el) {
        observer.observe(el);
      });

      setTimeout(function () {
        revealElements.forEach(function (el) {
          if (!el.classList.contains('visible')) {
            el.classList.add('visible');
          }
        });
      }, 1500);
    }

    // ---------- Work Page Filters ----------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    if (filterBtns.length > 0) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const filter = this.getAttribute('data-filter');
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          this.classList.add('active');

          workCards.forEach(function (card) {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          });
        });
      });
    }

    // ---------- Contact Form ----------
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = 'Message Sent';
        btn.style.pointerEvents = 'none';
        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.pointerEvents = '';
          form.reset();
        }, 3000);
      });
    }

    // ---------- Active Nav Link ----------
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  });
})();
