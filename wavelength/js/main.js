/* ============================================
   WAVELENGTH — Main JavaScript
   Theme toggle, mobile menu, scroll animations
   ============================================ */

(function () {
  'use strict';

  const THEME_KEY = 'wavelength-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    // Default dark for music template
    return 'dark';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  // Apply immediately (no flash)
  setTheme(getPreferredTheme());

  document.addEventListener('DOMContentLoaded', function () {
    // Theme toggle
    document.querySelectorAll('.theme-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
      });
    });

    // Mobile Nav
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
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

    // Nav hide on scroll
    let lastScrollY = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      if (scrollY > 200 && scrollY > lastScrollY) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
      lastScrollY = scrollY;
    }, { passive: true });

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length > 0 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      reveals.forEach(function (el) { observer.observe(el); });

      setTimeout(function () {
        reveals.forEach(function (el) {
          if (!el.classList.contains('visible')) el.classList.add('visible');
        });
      }, 1500);
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
})();
