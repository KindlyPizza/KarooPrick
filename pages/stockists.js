// pages/stockists.js — Stockists page for Karoo Prick Co.
(function () {

// Internal helper — not exposed on window
function renderStockistResults(filtered) {
  if (filtered.length === 0) {
    return '<div style="padding:80px 40px;text-align:center;border:1px solid var(--kp-ink);background:var(--kp-paper);font-family:var(--font-serif);font-style:italic;font-size:20px;color:var(--kp-rust-2)">No stockists match. Try a different town.</div>';
  }

  // Group by province, preserving first-seen order
  var provinceOrder = [];
  var grouped = {};
  filtered.forEach(function(s) {
    var key = s.province || s.town;
    if (!grouped[key]) { grouped[key] = []; provinceOrder.push(key); }
    grouped[key].push(s);
  });

  var serial = 1;
  return provinceOrder.map(function(province) {
    var list = grouped[province];
    var items = list.map(function(s) {
      var num = String(serial++).padStart(2, '0');
      var townLabel = s.province !== s.town
        ? '<div class="town">' + s.town + '</div>'
        : '';
      return '<div class="stockist">' +
        '<div style="font-family:var(--font-mono);font-size:9px;letter-spacing:0.25em;color:var(--kp-rust-2);text-transform:uppercase;margin-bottom:4px">\u2116 ' + num + '</div>' +
        '<div class="name">' + s.name + '</div>' +
        townLabel +
        '<div class="addr">' + s.addr + '</div>' +
        '<div class="tags">' + s.tags.map(function(t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
      '</div>';
    }).join('');

    return '<div style="margin-bottom:40px">' +
      '<div style="display:flex;align-items:baseline;gap:14px;margin-bottom:14px">' +
        '<div style="font-family:var(--font-display);font-size:28px;text-transform:uppercase;letter-spacing:0.02em;color:var(--kp-ink)">' + province + '</div>' +
        '<div style="flex:1;height:1px;background:var(--kp-ink)"></div>' +
        '<div style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.25em;color:var(--kp-rust-2);text-transform:uppercase">' + list.length + '</div>' +
      '</div>' +
      '<div class="stockist-list">' + items + '</div>' +
    '</div>';
  }).join('');
}

window.renderStockists = function() {
  var data = window.KP_DATA;
  var STOCKISTS = data.STOCKISTS;
  var COPY = data.COPY;

  var tagSet = {};
  STOCKISTS.forEach(function(s) {
    s.tags.forEach(function(t) { tagSet[t] = true; });
  });
  var allTags = ['All'].concat(Object.keys(tagSet).sort());

  var tagChips = allTags.map(function(t) {
    return '<div class="chip' + (t === 'All' ? ' active' : '') + '" data-tag="' + t + '">' + t + '</div>';
  }).join('');

  return '' +

    // Section 1: Page hero
    '<section class="page-hero paper" style="background:var(--kp-paper-aged)">' +
      '<div class="eyebrow">' + COPY.stockists_eyebrow + '</div>' +
      '<h1>' + COPY.stockists_headline.split('\n').join('<br>') + '</h1>' +
      '<div class="lede">' + COPY.stockists_lede + '</div>' +
    '</section>' +

    // Section 2: Stockist finder
    '<section class="section">' +
      '<div class="section-head">' +
        '<div class="eyebrow">\u2014 ' + STOCKISTS.length + ' stockists across South Africa \u2014</div>' +
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
          '<!-- populated by initStockists -->' +
        '</div>' +
      '</div>' +
    '</section>' +

    // Section 3: Bottom CTA
    '<section class="section section-dark" style="padding-top:100px;padding-bottom:100px;text-align:center">' +
      '<div style="max-width:600px;margin:0 auto;padding:0 40px">' +
        '<div class="eyebrow light">\u2014 Can\u2019t find your area? \u2014</div>' +
        '<h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);text-transform:uppercase;color:var(--kp-paper);letter-spacing:0.04em;margin:16px 0 20px">' + COPY.stockists_empty_cta_headline + '</h2>' +
        '<p style="font-family:var(--font-serif);font-size:18px;color:rgba(244,235,214,0.75);line-height:1.7;margin-bottom:32px">' + COPY.stockists_empty_cta_body + '</p>' +
        '<a href="#/contact" class="btn ghost-on-dark">' + COPY.stockists_empty_cta_btn + '</a>' +
      '</div>' +
    '</section>';
};

window.initStockists = function() {
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
    document.getElementById('stockist-count').textContent =
      'Showing ' + filtered.length + ' of ' + all.length;
    document.getElementById('stockist-results').innerHTML = renderStockistResults(filtered);
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
  var chipRow = document.getElementById('tag-chips');
  if (chipRow) {
    chipRow.addEventListener('click', function(e) {
      var chip = e.target.closest('.chip');
      if (!chip) return;
      currentTag = chip.dataset.tag;
      update();
    });
  }
};

}());
