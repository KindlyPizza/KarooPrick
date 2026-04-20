// pages/contact.js — Contact & Stockists page for Karoo Prick Co.

// Internal helper — not exposed on window
function renderStockistResults(filtered, all) {
  // Update count div
  document.getElementById('stockist-count').textContent =
    'Showing ' + filtered.length + ' of ' + all.length;

  if (filtered.length === 0) {
    return '<div style="padding:80px 40px;text-align:center;border:1px solid var(--kp-ink);background:var(--kp-paper);font-family:var(--font-serif);font-style:italic;font-size:20px;color:var(--kp-rust-2)">No stockists match. Try a different town.</div>';
  }

  // Group by town
  var grouped = {};
  filtered.forEach(function(s) {
    if (!grouped[s.town]) grouped[s.town] = [];
    grouped[s.town].push(s);
  });

  return Object.keys(grouped).map(function(town) {
    var list = grouped[town];
    var items = list.map(function(s) {
      return '<div class="stockist">' +
        '<div class="town">№ ' + String(all.indexOf(s) + 1).padStart(2, '0') + '</div>' +
        '<div class="name">' + s.name + '</div>' +
        '<div class="addr">' + s.addr + '</div>' +
        '<div class="tags">' + s.tags.map(function(t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
      '</div>';
    }).join('');

    return '<div style="margin-bottom:40px">' +
      '<div style="display:flex;align-items:baseline;gap:14px;margin-bottom:14px">' +
        '<div style="font-family:var(--font-display);font-size:28px;text-transform:uppercase;letter-spacing:0.02em;color:var(--kp-ink)">' + town + '</div>' +
        '<div style="flex:1;height:1px;background:var(--kp-ink)"></div>' +
        '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.25em;color:var(--kp-rust-2);text-transform:uppercase">' + list.length + '</div>' +
      '</div>' +
      '<div class="stockist-list">' + items + '</div>' +
    '</div>';
  }).join('');
}

window.renderContact = function() {
  var data = window.KP_DATA;
  var STOCKISTS = data.STOCKISTS;
  var CONTACT = data.CONTACT;

  var allTags = ['All', 'Retail', 'Bar', 'Tastings', 'Online', 'Local', 'Gifting'];

  var tagChips = allTags.map(function(t) {
    return '<div class="chip' + (t === 'All' ? ' active' : '') + '" data-tag="' + t + '">' + t + '</div>';
  }).join('');

  var addressLines = CONTACT.address.join('<br>');

  return '' +

    // Section 1: Page hero
    '<section class="page-hero paper" style="background:var(--kp-paper-aged)">' +
      '<div class="eyebrow">— Find the bottle · Send a letter —</div>' +
      '<h1>Contact<br>&amp; Stockists</h1>' +
      '<div class="lede">Where to buy, where to visit, and how to reach us.</div>' +
    '</section>' +

    // Section 2: Stockists finder
    '<section class="section">' +
      '<div class="section-head">' +
        '<div class="eyebrow">— ' + STOCKISTS.length + ' stockists across South Africa —</div>' +
        '<div class="ribbon-title" style="margin-top:14px">Where to Buy</div>' +
      '</div>' +
      '<div class="stockist-wrap">' +
        '<aside class="stockist-search">' +
          '<h3>Find a bottle</h3>' +
          '<p>Search by town, bar, or shop name.</p>' +
          '<div class="field">' +
            '<label for="stockist-query">Town or name</label>' +
            '<input type="text" id="stockist-query" placeholder="e.g. Cape Town" autocomplete="off">' +
          '</div>' +
          '<div class="field">' +
            '<label>Type</label>' +
            '<div class="chip-row" id="tag-chips">' +
              tagChips +
            '</div>' +
          '</div>' +
          '<div id="stockist-count" style="margin-top:24px;padding-top:20px;border-top:1px solid var(--kp-ink);font-family:var(--font-mono);font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:var(--kp-rust-2)">' +
            'Showing ' + STOCKISTS.length + ' of ' + STOCKISTS.length +
          '</div>' +
        '</aside>' +
        '<div id="stockist-results">' +
          '<!-- populated by initContact -->' +
        '</div>' +
      '</div>' +
    '</section>' +

    // Section 3: Contact form + info
    '<section class="section section-paper-aged" style="padding-top:100px;padding-bottom:120px">' +
      '<div class="contact-wrap">' +
        '<div class="contact-info">' +
          '<div class="eyebrow">— Get in touch —</div>' +
          '<h2>Write to us.</h2>' +
          '<p>For wholesale, press, tastings, distillery tour, or anything else. We answer in the order they arrive.</p>' +
          '<div class="contact-block">' +
            '<h4>— By post —</h4>' +
            '<div class="v">' + addressLines + '</div>' +
          '</div>' +
          '<div class="contact-block">' +
            '<h4>— By telephone —</h4>' +
            '<div class="v">' + CONTACT.phone + '</div>' +
          '</div>' +
          '<div class="contact-block">' +
            '<h4>— By email —</h4>' +
            '<div class="v">' + CONTACT.email + '<br>' + CONTACT.trade + '</div>' +
          '</div>' +
          '<div class="contact-block">' +
            '<h4>— Tasting room —</h4>' +
            '<div class="v">' + CONTACT.tasting + '</div>' +
          '</div>' +
        '</div>' +
        '<div class="contact-form" id="contact-form-section">' +
          '<div class="eyebrow">— The letter —</div>' +
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
              '<label for="cf-subject">Subject</label>' +
              '<select id="cf-subject">' +
                '<option value="general">General enquiry</option>' +
                '<option value="trade">Wholesale / Trade</option>' +
                '<option value="press">Press</option>' +
                '<option value="tasting">Tasting room booking</option>' +
                '<option value="tour">Distillery tour</option>' +
              '</select>' +
            '</div>' +
            '<div class="field">' +
              '<label for="cf-message">Your message</label>' +
              '<textarea id="cf-message" rows="5" required placeholder="Write plainly. We do the same."></textarea>' +
            '</div>' +
            '<button type="submit" class="btn primary" style="width:100%;justify-content:center;margin-top:8px;display:flex">' +
              'Post the letter →' +
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
  var all = window.KP_DATA.STOCKISTS;
  var currentQuery = '';
  var currentTag = 'All';

  function getFiltered() {
    var q = currentQuery.trim().toLowerCase();
    return all.filter(function(s) {
      var matchQ = !q || s.town.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.addr.toLowerCase().includes(q);
      var matchT = currentTag === 'All' || s.tags.includes(currentTag);
      return matchQ && matchT;
    });
  }

  function update() {
    var filtered = getFiltered();
    document.getElementById('stockist-results').innerHTML = renderStockistResults(filtered, all);
    // Update chip active states
    document.querySelectorAll('#tag-chips .chip').forEach(function(chip) {
      chip.classList.toggle('active', chip.dataset.tag === currentTag);
    });
  }

  // Initial render
  update();

  // Search input
  var input = document.getElementById('stockist-query');
  if (input) {
    input.addEventListener('input', function() {
      currentQuery = this.value;
      update();
    });
  }

  // Tag chips
  document.getElementById('tag-chips').addEventListener('click', function(e) {
    var chip = e.target.closest('.chip');
    if (!chip) return;
    currentTag = chip.dataset.tag;
    update();
  });

  // Contact form
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('contact-form-section').innerHTML =
        '<div style="text-align:center;padding:40px 20px">' +
          '<div style="font-size:56px;color:var(--kp-banner-red);margin-bottom:16px">❦</div>' +
          '<h3 style="font-family:var(--font-display);font-size:32px;text-transform:uppercase;color:var(--kp-ink);margin:0 0 16px;letter-spacing:0.02em">Letter received.</h3>' +
          '<p style="font-family:var(--font-serif);font-style:italic;font-size:17px;color:var(--kp-ink-soft);line-height:1.6;max-width:360px;margin:0 auto 24px">Thank you. We\'ll reply within the week, usually within two days. In the meantime — pour yourself something.</p>' +
          '<button class="btn" onclick="location.reload()">Write another</button>' +
        '</div>';
    });
  }
};
