// components/nav.js

var _navScrollHandler = null;

window.renderNav = function renderNav(route) {
  var darkRoutes = ['home'];
  var onDark = darkRoutes.indexOf(route) !== -1 ? ' on-dark' : '';

  function link(href, label, name) {
    var active = route === name ? ' active' : '';
    return '<a href="' + href + '" class="nav-link' + active + '">' + label + '</a>';
  }

  return [
    '<header class="nav' + onDark + '">',
    '  <a href="#/home" class="nav-logo-link">',
    '    <img src="assets/img/karoo-prick-logo.png" alt="Karoo Prick" class="nav-logo">',
    '  </a>',
    '  <div class="nav-right">',
    '    ' + link('#/home', 'Our Story', 'home'),
    '    ' + link('#/shop', 'Shop', 'shop'),
    '    ' + link('#/stockists', 'Stockists', 'stockists'),
    '    ' + link('#/contact', 'Contact', 'contact'),
    '  </div>',
    '</header>',
  ].join('');
};

window.initNav = function initNav() {
  if (_navScrollHandler) window.removeEventListener('scroll', _navScrollHandler);

  _navScrollHandler = function () {
    var nav = document.querySelector('.nav');
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', _navScrollHandler, { passive: true });

  // Set initial state
  _navScrollHandler();

  // Clicking logo or "Our Story" while already on home doesn't fire hashchange,
  // so force scroll-to-top on every click of those elements.
  document.querySelectorAll('.nav-logo-link, .nav-link[href="#/home"]').forEach(function(el) {
    el.addEventListener('click', function() { window.scrollTo(0, 0); });
  });
};
