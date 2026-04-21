// ============================================================
// Karoo Prick Co. — App Router
// Hash-based SPA routing: #/home, #/shop, #/story, #/contact
// ============================================================

(function() {
  var ROUTES = ['home', 'shop', 'story', 'stockists', 'contact'];
  function getRoute() {
    var h = (window.location.hash || '#/home').replace(/^#\/?/, '');
    var r = h.split('/')[0] || 'home';
    return ROUTES.includes(r) ? r : 'home';
  }

  function render(route) {
    // 1. Render nav
    document.getElementById('nav-root').innerHTML = window.renderNav(route);
    window.initNav();

    // 2. Render page
    var renderers = {
      home:      window.renderHome,
      shop:      window.renderShop,
      story:     window.renderStory,
      stockists: window.renderStockists,
      contact:   window.renderContact
    };
    document.getElementById('main-root').innerHTML = renderers[route]();

    // 3. Render footer (same on all pages)
    document.getElementById('footer-root').innerHTML = window.renderFooter();

    // 4. Init page (attaches observers, event handlers)
    var inits = {
      home:      window.initHome,
      shop:      window.initShop,
      story:     window.initStory,
      stockists: window.initStockists,
      contact:   window.initContact
    };
    inits[route]();

    // 5. Scroll to top (instant, cross-browser safe form)
    window.scrollTo(0, 0);
  }

  function start() {
    render(getRoute());
  }

  // Listen for hash changes (user navigates)
  window.addEventListener('hashchange', function() {
    render(getRoute());
  });

  // Safe localStorage wrapper — Firefox throws SecurityError in private mode
  function storageGet(key) {
    try { return localStorage.getItem(key); } catch(e) { return null; }
  }
  function storageSet(key, val) {
    try { localStorage.setItem(key, val); } catch(e) { /* private mode — ignore */ }
  }

  // Boot on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // Check age gate
    if (storageGet('kp_age') !== 'ok') {
      window.showAgeGate(
        function() {               // onPass: age verified, persist and render the site
          storageSet('kp_age', 'ok');
          start();
        },
        function() {               // onFail: redirect away
          window.location.href = 'https://www.drinkaware.co.uk/';
        }
      );
      return;
    }
    start();
  });

})();
