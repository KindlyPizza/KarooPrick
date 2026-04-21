// pages/shop.js — Shop page for Karoo Prick Co.
(function () {

function renderShopHero() {
  var COPY = window.KP_DATA.COPY;
  return '' +
'<section class="shop-hero">' +
'  <div class="eyebrow">' + COPY.shop_eyebrow + '</div>' +
'  <h1>' + COPY.shop_headline + '</h1>' +
'  <div class="lede">' + COPY.shop_lede + '</div>' +
'</section>';
}

function renderShopProducts() {
  var COPY = window.KP_DATA.COPY;
  var PRODUCTS = window.KP_DATA.PRODUCTS;
  var productCards = PRODUCTS.map(function(p) {
    return '' +
'    <div class="fadeup">' +
'      <div class="product">' +
        (p.badge ? '<div class="badge">' + p.badge + '</div>' : '') +
'        <div class="product-img">' +
'          <img src="' + (p.img || 'assets/img/karoo-prick-bottle-sm.jpg') + '" alt="' + p.title + '" loading="lazy">' +
'        </div>' +
'        <div class="title">' + p.title + '</div>' +
'        <div class="desc">' + p.desc + '</div>' +
'        <div class="meta">' +
'          <div class="price">' + p.price + '</div>' +
'          <div class="vol">' + p.volume + '</div>' +
'        </div>' +
'        <a href="#/contact" class="btn primary" style="width:100%;justify-content:center;margin-top:20px;display:flex">' + COPY.shop_product_cta + '</a>' +
'      </div>' +
'    </div>';
  }).join('');

  return '' +
'<section class="section">' +
'  <div class="products">' +
     productCards +
'  </div>' +
'</section>';
}

function renderShopTastingNotes() {
  var COPY = window.KP_DATA.COPY;
  var TASTING_NOTES = window.KP_DATA.TASTING_NOTES;
  var notes = [
    { h: 'Nose',   body: TASTING_NOTES.nose },
    { h: 'Palate', body: TASTING_NOTES.palate },
    { h: 'Finish', body: TASTING_NOTES.finish },
  ];
  var noteCards = notes.map(function(n) {
    return '' +
'    <div class="note-card">' +
'      <div class="eyebrow">\u2014 ' + n.h + ' \u2014</div>' +
'      <h3 style="font-family:var(--font-display);font-size:42px;text-transform:uppercase;margin:12px 0 20px;letter-spacing:0.02em">' + n.h + '</h3>' +
'      <p style="font-family:var(--font-serif);font-style:italic;font-size:16px;line-height:1.6;color:var(--kp-ink-soft);margin:0">' + n.body + '</p>' +
'    </div>';
  }).join('');

  return '' +
'<section class="section section-paper-aged" style="padding-top:100px;padding-bottom:100px">' +
'  <div class="section-head">' +
'    <div class="eyebrow">\u2014 From the label \u2014</div>' +
'    <div class="ribbon-title" style="margin-top:14px">' + COPY.tasting_section_headline + '</div>' +
'  </div>' +
'  <div class="tasting-notes">' +
     noteCards +
'  </div>' +
'</section>';
}

function renderShopSmallBatch() {
  var COPY = window.KP_DATA.COPY;
  return '' +
'<section class="section section-dark" style="padding-top:100px;padding-bottom:100px">' +
'  <div style="max-width:900px;margin:0 auto;text-align:center">' +
'    <div class="eyebrow light">\u2014 A note on availability \u2014</div>' +
'    <h2 style="font-family:var(--font-display);font-size:clamp(40px,5vw,68px);text-transform:uppercase;color:var(--kp-paper);margin:20px 0 24px;letter-spacing:0.02em;line-height:1">Small batch. Literally.</h2>' +
'    <p style="font-family:var(--font-serif);font-style:italic;font-size:20px;color:var(--kp-karoo-sand);max-width:560px;margin:0 auto 32px;line-height:1.6">' + COPY.small_batch_body + '</p>' +
'    <a href="#/stockists" class="btn ghost-on-dark">Find a stockist \u2192</a>' +
'  </div>' +
'</section>';
}

window.renderShop = function renderShop() {
  return (
    renderShopHero() +
    renderShopProducts() +
    renderShopTastingNotes() +
    renderShopSmallBatch()
  );
};

window.initShop = function initShop() {
  function initFadeUps() {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.fadeup').forEach(function(el) { obs.observe(el); });
  }

  initFadeUps();
};

}());
