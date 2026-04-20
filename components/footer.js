// components/footer.js

window.renderFooter = function renderFooter() {
  var contact = window.KP_DATA.CONTACT;

  var addressLines = contact.address.map(function (line) {
    return '<div>' + line + '</div>';
  }).join('');

  return [
    '<footer class="footer">',
    '  <div class="footer-grid">',

    '    <div class="footer-col">',
    '      <div class="brand">Karoo Prick</div>',
    '      <div class="motto">All good things are wild and free. Small batch distilled in the Karoo, South Africa.</div>',
    '      <div class="latin">\u2014 Sit Bonum Tempora Volvunt \u2014</div>',
    '    </div>',

    '    <div class="footer-col">',
    '      <h4>The Spirits</h4>',
    '      <a href="#/shop">Prickly Pear Gin \u00b7 750ml</a>',
    '      <a href="#/shop">Prickly Pear Gin \u00b7 500ml</a>',
    '      <a href="#/shop">Prickly Pear Liqueur</a>',
    '      <a href="#/story">Botanicals</a>',
    '    </div>',

    '    <div class="footer-col">',
    '      <h4>The House</h4>',
    '      <a href="#/story">Our Story</a>',
    '      <a href="#/story">The Distillery</a>',
    '      <a href="#/contact">Stockists</a>',
    '      <a href="#/contact">Contact</a>',
    '    </div>',

    '    <div class="footer-col">',
    '      <h4>Post</h4>',
    '      ' + addressLines,
    '      <div class="footer-phone">' + contact.phone + '</div>',
    '      <div class="footer-email">' + contact.email + '</div>',
    '    </div>',

    '  </div>',
    '  <div class="footer-bottom">',
    '    <div>\u00a9 2026 The Karoo Prick Co. \u00b7 Not for persons under 18</div>',
    '    <div>Drink responsibly \u00b7 43% vol</div>',
    '  </div>',
    '</footer>',
  ].join('');
};
