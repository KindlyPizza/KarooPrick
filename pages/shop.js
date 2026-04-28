// pages/shop.js — Shop page for Karoo Prick Co.
(function () {

function renderShopHero() {
  var COPY = window.KP_DATA.COPY;
  return '' +
'<section class="shop-hero" style="background-image:linear-gradient(180deg,rgba(14,8,5,0.35),rgba(14,8,5,0.65)),url(assets/img/karoo-prick-group.jpg);background-size:cover;background-position:center;color:var(--kp-paper)">' +
'  <div class="eyebrow" style="color:rgba(244,235,214,0.7)">' + COPY.shop_eyebrow + '</div>' +
'  <h1 style="color:var(--kp-paper)">' + COPY.shop_headline + '</h1>' +
'</section>';
}

function renderShopIntro() {
  var COPY = window.KP_DATA.COPY;
  return '' +
'<section class="section" style="padding-top:80px;padding-bottom:0;text-align:center">' +
'  <p style="font-family:var(--font-serif);font-size:19px;line-height:1.7;max-width:760px;margin:0 auto;color:var(--kp-ink-soft)">' + COPY.shop_lede + '</p>' +
'</section>';
}

function renderShopProducts() {
  var COPY = window.KP_DATA.COPY;
  var PRODUCTS = window.KP_DATA.PRODUCTS;
  var ORDER = ['gin-750','gin-500','gin-50ml','gin-700-special','liqueur'];
  var sorted = ORDER.map(function(id) { return PRODUCTS.find(function(p) { return p.id === id; }); }).filter(Boolean);
  var productCards = sorted.map(function(p) {
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
           (p.price ? '<div class="price">' + p.price + '</div>' : '') +
'          <div class="vol">' + p.abv + ' · ' + p.volume + '</div>' +
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
'      <div class="eyebrow">' + n.h + '</div>' +
'      <h3 style="font-family:var(--font-display);font-size:42px;text-transform:uppercase;margin:12px 0 20px;letter-spacing:0.02em">' + n.h + '</h3>' +
'      <p style="font-family:var(--font-serif);font-style:italic;font-size:16px;line-height:1.6;color:var(--kp-ink-soft);margin:0">' + n.body + '</p>' +
'    </div>';
  }).join('');

  return '' +
'<section class="section section-paper-aged" style="padding-top:100px;padding-bottom:100px">' +
'  <div class="section-head">' +
'    <div class="eyebrow">From the label</div>' +
'    <div class="ribbon-title" style="margin-top:14px">' + COPY.tasting_section_headline + '</div>' +
'  </div>' +
'  <div class="tasting-notes">' +
     noteCards +
'  </div>' +
'</section>';
}

window.renderShop = function renderShop() {
  return (
    renderShopHero() +
    renderShopIntro() +
    renderShopProducts() +
    renderShopTastingNotes()
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
