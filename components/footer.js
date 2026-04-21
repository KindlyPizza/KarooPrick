// components/footer.js

window.renderFooter = function renderFooter() {
  var contact = window.KP_DATA.CONTACT;
  var copy = window.KP_DATA.COPY;

  var addressLines = contact.address.map(function (line) {
    return '<div>' + line + '</div>';
  }).join('');

  var socialLinks = '';
  if (contact.facebook || contact.instagram) {
    socialLinks = '<div class="footer-social" style="margin-top:16px;display:flex;gap:16px">' +
      (contact.facebook ? '<a href="' + contact.facebook + '" target="_blank" rel="noopener" style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--kp-ink-soft);text-decoration:none">Facebook</a>' : '') +
      (contact.instagram ? '<a href="' + contact.instagram + '" target="_blank" rel="noopener" style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:var(--kp-ink-soft);text-decoration:none">Instagram</a>' : '') +
    '</div>';
  }

  return [
    '<footer class="footer">',
    '  <div class="footer-grid">',

    '    <div class="footer-col">',
    '      <div class="brand">Karoo Prick</div>',
    '      <div class="motto">' + copy.footer_tagline + '</div>',
    '      ' + socialLinks,
    '    </div>',

    '    <div class="footer-col">',
    '      <h4>The Spirits</h4>',
    '      <a href="#/shop">Prickly Pear Gin \u00b7 750ml</a>',
    '      <a href="#/shop">Prickly Pear Gin \u00b7 500ml (Crated)</a>',
    '      <a href="#/shop">Candy Liqueur</a>',
    '    </div>',

    '    <div class="footer-col">',
    '      <h4>The House</h4>',
    '      <a href="#/story">Our Story</a>',
    '      <a href="#/shop">Products</a>',
    '      <a href="#/stockists">Stockists</a>',
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
    '    <div>\u00a9 ' + new Date().getFullYear() + ' The Karoo Prick Co. \u00b7 Not for persons under 18</div>',
    '    <div>Drink responsibly \u00b7 43% vol</div>',
    '  </div>',
    '</footer>',
  ].join('');
};
