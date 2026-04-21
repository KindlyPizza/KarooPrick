// pages/contact.js — Contact page for Karoo Prick Co.
(function () {

window.renderContact = function() {
  var data = window.KP_DATA;
  var CONTACT = data.CONTACT;
  var COPY = data.COPY;

  var socialBlock = '';
  if (CONTACT.facebook || CONTACT.instagram) {
    var links = [];
    if (CONTACT.facebook) links.push('<a href="' + CONTACT.facebook + '" target="_blank" rel="noopener" style="font-family:var(--font-serif);color:var(--kp-ink);text-decoration:underline">Facebook</a>');
    if (CONTACT.instagram) links.push('<a href="' + CONTACT.instagram + '" target="_blank" rel="noopener" style="font-family:var(--font-serif);color:var(--kp-ink);text-decoration:underline">Instagram</a>');
    socialBlock = '<div class="contact-block">' +
      '<h4>\u2014 Social \u2014</h4>' +
      '<div class="v">' + links.join('<br>') + '</div>' +
    '</div>';
  }

  return '' +

    // Section 1: Page hero
    '<section class="page-hero paper" style="background:var(--kp-paper-aged)">' +
      '<div class="eyebrow">' + COPY.contact_eyebrow + '</div>' +
      '<h1>' + COPY.contact_headline + '</h1>' +
      '<div class="lede">Write to us. We answer in the order they arrive.</div>' +
    '</section>' +

    // Section 2: Contact form + info
    '<section class="section section-paper-aged" style="padding-top:100px;padding-bottom:120px">' +
      '<div class="contact-wrap">' +
        '<div class="contact-info">' +
          '<div class="eyebrow">\u2014 Get in touch \u2014</div>' +
          '<h2>Write to us.</h2>' +
          '<p>For wholesale, press, tastings, distillery tour, or anything else. We answer in the order they arrive.</p>' +
          '<div class="contact-block">' +
            '<h4>\u2014 By telephone \u2014</h4>' +
            '<div class="v">' + CONTACT.phone + '</div>' +
          '</div>' +
          '<div class="contact-block">' +
            '<h4>\u2014 By email \u2014</h4>' +
            '<div class="v">' + CONTACT.email + '<br>' + CONTACT.trade + '</div>' +
          '</div>' +
          '<div class="contact-block">' +
            '<h4>\u2014 Tasting room \u2014</h4>' +
            '<div class="v">' + CONTACT.tasting + '</div>' +
          '</div>' +
          socialBlock +
        '</div>' +
        '<div class="contact-form" id="contact-form-section">' +
          '<div class="eyebrow">\u2014 The letter \u2014</div>' +
          '<h3 style="font-family:var(--font-display);font-size:40px;text-transform:uppercase;color:var(--kp-ink);margin:12px 0 24px;letter-spacing:0.02em">Send a message</h3>' +
          '<form id="contact-form">' +
            '<div class="field">' +
              '<label for="cf-name">Your name</label>' +
              '<input type="text" id="cf-name" required placeholder="Your name">' +
            '</div>' +
            '<div class="field">' +
              '<label for="cf-email">Your email</label>' +
              '<input type="email" id="cf-email" required placeholder="you@example.co.za">' +
            '</div>' +
            '<div class="field">' +
              '<label for="cf-message">Your message</label>' +
              '<textarea id="cf-message" rows="6" required placeholder="Write plainly. We do the same."></textarea>' +
            '</div>' +
            '<button type="submit" class="btn primary" style="width:100%;justify-content:center;margin-top:8px;display:flex">' +
              COPY.contact_form_btn +
            '</button>' +
            '<div style="margin-top:16px;font-family:var(--font-serif);font-style:italic;font-size:13px;color:var(--kp-rust-2);text-align:center">' +
              'We reply within a week. Usually two days.' +
            '</div>' +
          '</form>' +
        '</div>' +
      '</div>' +
    '</section>';
};

window.initContact = function() {
  // Contact form
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('contact-form-section').innerHTML =
        '<div style="text-align:center;padding:40px 20px">' +
          '<div style="font-size:56px;color:var(--kp-banner-red);margin-bottom:16px">\u2766</div>' +
          '<h3 style="font-family:var(--font-display);font-size:32px;text-transform:uppercase;color:var(--kp-ink);margin:0 0 16px;letter-spacing:0.02em">Letter received.</h3>' +
          '<p style="font-family:var(--font-serif);font-style:italic;font-size:17px;color:var(--kp-ink-soft);line-height:1.6;max-width:360px;margin:0 auto 24px">Thank you. We\'ll reply within the week, usually within two days. In the meantime \u2014 pour yourself something.</p>' +
          '<button class="btn" id="write-another-btn">Write another</button>' +
        '</div>';
      var writeAnotherBtn = document.getElementById('write-another-btn');
      if (writeAnotherBtn) {
        writeAnotherBtn.addEventListener('click', function() {
          if (window.location.hash === '#/contact' || window.location.hash === '') {
            window.dispatchEvent(new HashChangeEvent('hashchange'));
          } else {
            window.location.hash = '#/contact';
          }
        });
      }
    });
  }
};

}());
