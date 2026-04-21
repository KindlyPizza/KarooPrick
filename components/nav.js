// components/nav.js

var _navScrollHandler = null;

window.renderNav = function renderNav(route) {
  var darkRoutes = ['home', 'story'];
  var onDark = darkRoutes.indexOf(route) !== -1 ? ' on-dark' : '';

  function link(href, label, name) {
    var active = route === name ? ' active' : '';
    return '<a href="' + href + '" class="nav-link' + active + '">' + label + '</a>';
  }

  return [
    '<header class="nav' + onDark + '">',
    '  <div class="nav-left">',
    '    ' + link('#/story', 'Our Story', 'story'),
    '    ' + link('#/shop', 'Products', 'shop'),
    '  </div>',
    '  <a href="#/home" class="nav-center-link">',
    '    <div class="nav-wordmark">Karoo Prick</div>',
    '    <div class="nav-sub">\u00b7 Distilled in the Karoo \u00b7</div>',
    '  </a>',
    '  <div class="nav-right">',
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
};
