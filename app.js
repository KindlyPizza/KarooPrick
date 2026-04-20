// ============================================================
// Karoo Prick Co. — App Router
// Hash-based SPA routing: #/home, #/shop, #/story, #/contact
// ============================================================

(function() {
  var ROUTES = ['home', 'shop', 'story', 'contact'];
  var DARK_ROUTES = ['home', 'story'];  // routes where nav starts transparent over dark hero

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
      home:    window.renderHome,
      shop:    window.renderShop,
      story:   window.renderStory,
      contact: window.renderContact
    };
    document.getElementById('main-root').innerHTML = renderers[route]();

    // 3. Render footer (same on all pages)
    document.getElementById('footer-root').innerHTML = window.renderFooter();

    // 4. Init page (attaches observers, event handlers)
    var inits = {
      home:    window.initHome,
      shop:    window.initShop,
      story:   window.initStory,
      contact: window.initContact
    };
    inits[route]();

    // 5. Scroll to top (instant, no animation)
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function start() {
    render(getRoute());
  }

  // Listen for hash changes (user navigates)
  window.addEventListener('hashchange', function() {
    render(getRoute());
  });

  // Boot on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // Check age gate
    if (localStorage.getItem('kp_age') !== 'ok') {
      window.showAgeGate(
        function() { start(); },   // onPass: age verified, render the site
        function() {               // onFail: redirect away or show message
          window.location.href = 'https://www.drinkaware.co.uk/';
        }
      );
      return;
    }
    start();
  });

})();
