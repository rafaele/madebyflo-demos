/* ============================================
   ATELIER — Main JavaScript
   Theme toggle, mobile menu, scroll animations,
   custom cursor, work filters
   ============================================ */

(function () {
  'use strict';

  // ---------- Theme Toggle ----------
  const THEME_KEY = 'atelier-theme';

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
    const mobileNav = document.querySelector('.mobile-nav');

    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        if (mobileNav) mobileNav.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
      });

      var allNavLinks = [navLinks, mobileNav].filter(Boolean);
      allNavLinks.forEach(function (container) {
        container.querySelectorAll('a').forEach(function (link) {
          link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
            if (mobileNav) mobileNav.classList.remove('active');
            document.body.style.overflow = '';
          });
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
          nav.style.transform = 'translateY(0)';
          return;
        }
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
          nav.style.transform = 'translateY(-100%)';
        } else {
          nav.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
      }, { passive: true });
    }

    // ---------- Scroll Reveal ----------
    const revealElements = document.querySelectorAll('.reveal, .reveal-fade, .reveal-left, .reveal-scale, .reveal-stagger');

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

    // ---------- Active Nav Link ----------
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .mobile-nav a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });

    // ---------- Filter (Work page) ----------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    if (filterBtns.length > 0) {
      filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
          filterBtns.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          const filter = btn.dataset.filter;

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

    // ---------- Custom Cursor ----------
    const cursor = document.querySelector('.custom-cursor');
    if (cursor && window.matchMedia('(pointer: fine)').matches) {
      let mouseX = 0, mouseY = 0;
      let cursorX = 0, cursorY = 0;

      document.addEventListener('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });

      function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        cursor.style.transform = 'translate(' + (cursorX - 6) + 'px, ' + (cursorY - 6) + 'px)';
        requestAnimationFrame(animateCursor);
      }
      animateCursor();

      document.querySelectorAll('a, button, .work-card').forEach(function (el) {
        el.addEventListener('mouseenter', function () { cursor.classList.add('hovering'); });
        el.addEventListener('mouseleave', function () { cursor.classList.remove('hovering'); });
      });
    }

    // ---------- Contact Form ----------
    const form = document.querySelector('.contact-form');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
          const originalText = btn.textContent;
          btn.textContent = 'Message Sent ✓';
          btn.style.pointerEvents = 'none';
          setTimeout(function () {
            btn.textContent = originalText;
            btn.style.pointerEvents = '';
            form.reset();
          }, 3000);
        }
      });
    }

  });
})();
