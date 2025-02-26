// Common HTML components
const components = {
  // Header component
  header: function(activePage) {
    return `
    <header class="header">
      <div class="container">
        <div class="nav-container">
          <a href="index.html" class="logo-container">
            <img src="img/logo.png" alt="Durafloor Logo">
          </a>
          <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Toggle mobile menu">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul id="nav-links" class="nav-links">
            <li><a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
            <li class="dropdown-container">
              <a href="#" class="nav-link ${activePage === 'products' ? 'active' : ''} flex items-center">
                Products
                <svg class="w-4 h-4 ml-1 dropdown-arrow" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              <ul class="dropdown-menu">
                <li><a href="duratile-xl.html" class="dropdown-link">Duratile XL</a></li>
                <li><a href="deluxe-tile.html" class="dropdown-link">Deluxe Tile</a></li>
                <li><a href="vinyl-wood-tile.html" class="dropdown-link">Vinyl Wood Tile</a></li>
                <li><a href="homogenous-vinyl-roll.html" class="dropdown-link">Homogenous Vinyl Roll</a></li>
                <li><a href="r10-series.html" class="dropdown-link">R10 Series</a></li>
              </ul>
            </li>
            <li><a href="portfolio.html" class="nav-link ${activePage === 'portfolio' ? 'active' : ''}">Portfolio</a></li>
            <li><a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </header>
    `;
  },

  // Footer component
  footer: function() {
    return `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <img src="img/logo.png" alt="Durafloor Logo" class="footer-logo">
            <p class="footer-about">
              DURAFLOOR, a distinguished Malaysian enterprise recognized as The House of Vinyl Flooring, specializing in high-quality vinyl flooring solutions.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 class="footer-heading">Products</h3>
            <ul class="footer-links">
              <li><a href="duratile-xl.html" class="footer-link">Duratile XL</a></li>
              <li><a href="deluxe-tile.html" class="footer-link">Deluxe Tile</a></li>
              <li><a href="vinyl-wood-tile.html" class="footer-link">Vinyl Wood Tile</a></li>
              <li><a href="homogenous-vinyl-roll.html" class="footer-link">Homogenous Vinyl Roll</a></li>
              <li><a href="r10-series.html" class="footer-link">R10 Series</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Quick Links</h3>
            <ul class="footer-links">
              <li><a href="index.html" class="footer-link">Home</a></li>
              <li><a href="portfolio.html" class="footer-link">Portfolio</a></li>
              <li><a href="contact.html" class="footer-link">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-heading">Contact</h3>
            <ul class="footer-links">
              <li class="footer-link">Durafloor (M) Sdn Bhd</li>
              <li class="footer-link">Kuala Lumpur, Malaysia</li>
              <li class="footer-link">+60 3-1234 5678</li>
              <li class="footer-link">info@durafloor.com.my</li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} Durafloor. All rights reserved.</p>
        </div>
      </div>
    </footer>
    `;
  },

  // Page header with background image
  pageHeader: function(title, imagePath) {
    return `
    <div class="header-image mt-16">
      <img src="${imagePath}" alt="${title}">
      <div class="header-overlay">
        <h1 class="text-5xl font-bold text-white text-center">${title}</h1>
      </div>
    </div>
    `;
  }
};

// Inject components into page
document.addEventListener('DOMContentLoaded', function() {
  // Get page identifier from body data attribute
  const activePage = document.body.getAttribute('data-page');
  
  // Inject header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = components.header(activePage);
  }
  
  // Inject footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    footerContainer.innerHTML = components.footer();
  }
});