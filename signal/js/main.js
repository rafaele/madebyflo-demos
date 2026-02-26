/* ============================================
   SIGNAL — Main JavaScript
   Theme toggle, mobile nav, scroll animations,
   archive filtering, subscribe form
   ============================================ */

(function () {
  'use strict';

  // ---------- Theme Toggle ----------
  const THEME_KEY = 'signal-theme';

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
        const isOpen = navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });

      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navToggle.classList.remove('active');
          navLinks.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        });
      });
    }

    // ---------- Auto-hide Nav on Scroll ----------
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    const scrollThreshold = 80;

    if (nav) {
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
    }

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

      revealElements.forEach(function (el) { observer.observe(el); });

      setTimeout(function () {
        revealElements.forEach(function (el) {
          if (!el.classList.contains('visible')) el.classList.add('visible');
        });
      }, 1500);
    }

    // ---------- Archive Filters ----------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const postItems = document.querySelectorAll('.post-list-item, .post-card');

    if (filterBtns.length > 0) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          const filter = this.getAttribute('data-filter');
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          this.classList.add('active');

          postItems.forEach(function (item) {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
              item.style.display = '';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });
    }

    // ---------- Archive Search ----------
    const searchInput = document.querySelector('.search-input');

    if (searchInput && postItems.length > 0) {
      searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();
        postItems.forEach(function (item) {
          const text = item.textContent.toLowerCase();
          item.style.display = text.includes(query) ? '' : 'none';
        });
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        var allBtn = document.querySelector('.filter-btn[data-filter="all"]');
        if (allBtn) allBtn.classList.add('active');
      });
    }

    // ---------- Subscribe Form ----------
    document.querySelectorAll('.subscribe-form').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = form.querySelector('.btn');
        var input = form.querySelector('input[type="email"]');
        if (!btn || !input) return;

        var originalText = btn.textContent;
        btn.textContent = 'Subscribed ✓';
        btn.style.background = 'var(--color-success)';
        btn.style.pointerEvents = 'none';
        input.value = '';

        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.style.pointerEvents = '';
        }, 3000);
      });
    });

    // ---------- Contact Form ----------
    var contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var btn = contactForm.querySelector('.btn');
        var originalText = btn.textContent;
        btn.textContent = 'Message Sent ✓';
        btn.style.pointerEvents = 'none';
        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.pointerEvents = '';
          contactForm.reset();
        }, 3000);
      });
    }

    // ---------- Active Nav Link ----------
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });

  });
})();
