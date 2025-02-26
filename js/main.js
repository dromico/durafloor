// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const dropdownContainers = document.querySelectorAll('.dropdown-container');
  const header = document.querySelector('.header');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });
  }

  // Mobile dropdown toggle
  dropdownContainers.forEach(container => {
    const link = container.querySelector('a');
    if (window.innerWidth <= 768 && link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        container.classList.toggle('active');
      });
    }
  });

  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Initialize AOS animation
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  // Add animation classes to elements with data-animate attribute
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach((element, index) => {
    element.classList.add('animate-fadeIn');
    if (index > 0) {
      element.classList.add(`delay-${index * 100}`);
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});