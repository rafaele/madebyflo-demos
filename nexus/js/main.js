/* ============================================
   Nexus — Main JavaScript
   Theme toggle, mobile nav, FAQ, spotlight hover
   ============================================ */

(function () {
  'use strict';

  /* ---------- Theme Toggle ---------- */
  const THEME_KEY = 'nexus-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return 'dark'; // Nexus defaults to dark
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  // Apply immediately
  setTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
      });
    });

    /* ---------- Mobile Nav ---------- */
    const navToggle = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.nav-mobile');

    if (navToggle && mobileMenu) {
      navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      });

      mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navToggle.classList.remove('active');
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }

    /* ---------- Scroll Reveals ---------- */
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

      revealEls.forEach(function (el) { observer.observe(el); });
    }

    /* ---------- FAQ Accordion ---------- */
    document.querySelectorAll('.faq-question').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.parentElement;
        var answer = item.querySelector('.faq-answer');
        var isOpen = item.classList.contains('open');

        document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = '0';
        });

        if (!isOpen) {
          item.classList.add('open');
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      });
    });

    /* ---------- Bento Card Spotlight ---------- */
    document.querySelectorAll('.bento-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', (e.clientX - rect.left - 150) + 'px');
        card.style.setProperty('--mouse-y', (e.clientY - rect.top - 150) + 'px');
      });
    });

    /* ---------- Smooth Scroll ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = anchor.getAttribute('href');
        if (href === '#') return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
})();
