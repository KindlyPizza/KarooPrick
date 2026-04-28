// pages/home.js — Home page for Karoo Prick Co.
(function () {

function renderHomeHero() {
  var COPY = window.KP_DATA.COPY;
  var headline = COPY.hero_headline.split('\n').map(function(line) { return line; }).join('<br>');
  return '' +
'<section class="hero">' +
'  <div class="hero-img"></div>' +
'  <div class="hero-overlay"></div>' +
'  <div class="hero-content">' +
'    <div class="hero-wrap">' +
'      <div class="eyebrow light">' + COPY.hero_eyebrow + '</div>' +
'      <h1 class="kp-banner">' + headline + '</h1>' +
'      <div class="latin" style="font-style:italic;max-width:560px;margin:0 auto 32px">' + COPY.hero_lede + '</div>' +
'      <div class="hero-ctas">' +
'        <a href="#/shop" class="btn primary">' + COPY.hero_cta_primary + '</a>' +
'      </div>' +
'    </div>' +
'  </div>' +
'  <div class="hero-meta">' +
'    <div class="vline">Distilled slowly in copper at the foot of the Swartberg. Botanicals foraged within 40km of the still.</div>' +
'    <div class="scroll-cue">' +
'      <span>Scroll</span>' +
'      <div class="line"></div>' +
'    </div>' +
'  </div>' +
'</section>';
}

function renderHomeStory() {
  var COPY = window.KP_DATA.COPY;
  var h2 = COPY.origin_h2.split('\n').join('<br>');
  return '' +
'<section class="section" style="padding-top:160px">' +
'  <div class="story">' +
'    <div class="fadeup">' +
'      <div class="eyebrow">' + COPY.origin_eyebrow + '</div>' +
'      <h2>' + h2 + '</h2>' +
'      <p>' + COPY.origin_p1 + '</p>' +
'      <p>' + COPY.origin_p2 + '</p>' +
'      <div class="pull">' + COPY.origin_pull + '</div>' +
'    </div>' +
'    <div class="fadeup">' +
'      <img src="assets/img/dom-logan-portrait.jpeg" alt="Dom Logan \u2014 founder of Karoo Prick Co." style="width:100%;display:block;border:1px solid var(--kp-ink);filter:sepia(0.15)">' +
'    </div>' +
'  </div>' +
'</section>';
}

function renderHomePear() {
  var COPY = window.KP_DATA.COPY;
  var h2 = COPY.pear_h2.split('\n').join('<br>');
  return '' +
'<section class="section section-paper-aged" style="padding-top:140px;padding-bottom:140px">' +
'  <div class="story">' +
'    <div class="fadeup">' +
'      <div style="width:100%;height:460px;background:url(assets/img/prickly-pear-cactus.jpeg) center/cover no-repeat;border:1px solid var(--kp-ink)"></div>' +
'    </div>' +
'    <div class="fadeup">' +
'      <div class="eyebrow">' + COPY.pear_eyebrow + '</div>' +
'      <h2>' + h2 + '</h2>' +
'      <p>' + COPY.pear_p1 + '</p>' +
'      <p>' + COPY.pear_p2 + '</p>' +
'    </div>' +
'  </div>' +
'</section>';
}

function renderHomeCraft() {
  var COPY = window.KP_DATA.COPY;
  var h2 = COPY.craft_h2.split('\n').join('<br>');
  return '' +
'<section class="section" style="padding-top:140px;padding-bottom:140px">' +
'  <div class="story">' +
'    <div class="fadeup">' +
'      <div class="eyebrow">' + COPY.craft_eyebrow + '</div>' +
'      <h2>' + h2 + '</h2>' +
'      <p>' + COPY.craft_p1 + '</p>' +
'      <p>' + COPY.craft_p2 + '</p>' +
'    </div>' +
'    <div class="fadeup">' +
'      <div style="width:100%;height:460px;background:url(assets/img/karoo-prick-classic-hero.jpeg) center/cover no-repeat;border:1px solid var(--kp-ink)"></div>' +
'    </div>' +
'  </div>' +
'</section>';
}

function renderHomeProducts() {
  var COPY = window.KP_DATA.COPY;
  var PRODUCTS = window.KP_DATA.PRODUCTS;
  var headline = COPY.products_headline.split('\n').join('<br>');
  var productCards = PRODUCTS.map(function(p) {
    return '' +
'    <div class="fadeup">' +
'      <div class="product">' +
        (p.badge ? '<div class="badge">' + p.badge + '</div>' : '') +
'        <div class="product-img">' +
'          <img src="' + (p.img || 'assets/img/karoo-prick-bottle-sm.jpg') + '" alt="' + p.title + '" loading="lazy">' +
'        </div>' +
'        <div class="vol">' + p.volume + ' \u00b7 ' + p.abv + '</div>' +
'        <div class="title">' + p.title + '</div>' +
'        <div class="desc">' + p.desc + '</div>' +
'        <div class="meta">' +
           (p.price ? '<div class="price">' + p.price + '</div>' : '') +
'          <a href="#/contact" class="stockist-link">' + COPY.shop_product_cta + '</a>' +
'        </div>' +
'      </div>' +
'    </div>';
  }).join('');

  return '' +
'<section class="section" style="padding-bottom:140px">' +
'  <div class="section-head">' +
'    <div class="fadeup"><div class="eyebrow">' + COPY.products_eyebrow + '</div></div>' +
'    <div class="fadeup" style="margin-top:14px"><div class="ribbon-title">' + headline + '</div></div>' +
'  </div>' +
'  <div class="products">' +
     productCards +
'  </div>' +
'  <div style="text-align:center;margin-top:56px">' +
'    <a href="#/stockists" class="btn primary">Where to buy \u2192</a>' +
'  </div>' +
'</section>';
}

function renderHomeTasting() {
  var COPY = window.KP_DATA.COPY;
  var TASTING = window.KP_DATA.TASTING_NOTES;
  var notes = [
    { h: 'Nose',   body: TASTING.nose },
    { h: 'Palate', body: TASTING.palate },
    { h: 'Finish', body: TASTING.finish },
  ];
  var noteCards = notes.map(function(n) {
    return '' +
'    <div class="fadeup"><div class="note-card">' +
'      <div class="eyebrow">' + n.h + '</div>' +
'      <h3 style="font-family:var(--font-display);font-size:42px;text-transform:uppercase;margin:12px 0 20px;letter-spacing:0.02em">' + n.h + '</h3>' +
'      <p style="font-family:var(--font-serif);font-style:italic;font-size:16px;line-height:1.6;color:var(--kp-ink-soft);margin:0">' + n.body + '</p>' +
'    </div></div>';
  }).join('');
  return '' +
'<section class="section section-paper-aged" style="padding-top:120px;padding-bottom:120px">' +
'  <div class="section-head">' +
'    <div class="fadeup"><div class="eyebrow">' + COPY.tasting_eyebrow + '</div></div>' +
'    <div class="fadeup" style="margin-top:14px"><div class="ribbon-title">' + COPY.tasting_headline + '</div></div>' +
'  </div>' +
'  <div class="tasting-notes">' +
     noteCards +
'  </div>' +
'</section>';
}

function renderHomeServe() {
  var RECIPES = window.KP_DATA.RECIPES;
  var serves = [RECIPES[0], RECIPES[3]];
  var cards = serves.map(function(r) {
    var ingredients = r.ingredients.map(function(i) {
      return '<li><span>' + i.item + '</span><span class="qty">' + i.qty + '</span></li>';
    }).join('');
    return '' +
'    <div class="fadeup">' +
'      <div class="recipe">' +
'        <div class="recipe-top">' +
'          <div class="num">' + r.num + '</div>' +
'          <h3>' + r.name + '</h3>' +
'          <div class="sub">' + r.sub + '</div>' +
'        </div>' +
'        <div class="recipe-body">' +
'          <h5>' + r.glass + ' · ' + r.ice + '</h5>' +
'          <ul>' + ingredients + '</ul>' +
'          <p>' + r.note + '</p>' +
'        </div>' +
'      </div>' +
'    </div>';
  }).join('');

  return '' +
'<section class="section section-dark" style="padding-top:100px;padding-bottom:100px">' +
'  <div class="section-head">' +
'    <div class="eyebrow light">How to enjoy it</div>' +
'    <div class="ribbon-title" style="margin-top:14px">Serving Suggestions</div>' +
'  </div>' +
'  <div class="recipes">' +
     cards +
'  </div>' +
'</section>';
}

function renderHomeBotanicals() {
  var BOTANICALS = window.KP_DATA.BOTANICALS;
  var botanicalCards = BOTANICALS.map(function(b) {
    return '' +
'    <div class="botanical">' +
'      <div class="num">' + b.num + '</div>' +
'      <div class="glyph">' + b.glyph + '</div>' +
'      <div class="name">' + b.name + '</div>' +
'      <div class="latin">' + b.latin + '</div>' +
'      <div class="desc">' + b.desc + '</div>' +
'    </div>';
  }).join('');

  return '' +
'<section class="section section-paper-aged" style="padding-top:120px;padding-bottom:120px">' +
'  <div class="section-head">' +
'    <div class="fadeup"><div class="eyebrow">What’s inside</div></div>' +
'    <div class="fadeup" style="margin-top:14px"><div class="ribbon-title">The Botanicals</div></div>' +
'    <div class="fadeup"><div class="subtitle">Four botanicals. One wild cactus fruit. Distilled in the Karoo.</div></div>' +
'  </div>' +
'  <div class="fadeup" style="margin:48px 0;width:100%;border:1px solid var(--kp-ink)">' +
'    <img src="assets/img/botanicals-plate.jpeg" alt="Karoo Prick botanicals" style="width:100%;display:block">' +
'  </div>' +
'  <div class="botanicals">' +
     botanicalCards +
'  </div>' +
'</section>';
}

function renderHomeClosing() {
  var COPY = window.KP_DATA.COPY;
  return '' +
'<section class="section" style="padding-top:100px;padding-bottom:120px">' +
'  <div style="max-width:780px;margin:0 auto;text-align:center">' +
'    <div class="eyebrow">A closing thought</div>' +
'    <h2 style="font-family:var(--font-serif);font-style:italic;font-size:clamp(28px,3vw,40px);font-weight:400;color:var(--kp-ink);line-height:1.4;margin:24px 0 32px">' + COPY.closing_h2 + '</h2>' +
'    <div class="divider-ornate">❖ ❦ ❖</div>' +
'    <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:var(--kp-rust-2)">Sit Bonum Tempora Volvunt</div>' +
'  </div>' +
'</section>';
}

function renderHomeConnect() {
  var COPY = window.KP_DATA.COPY;
  return '' +
'<section class="section" style="background:var(--kp-paper-aged);padding-top:120px;padding-bottom:120px;text-align:center">' +
'  <div class="fadeup" style="max-width:600px;margin:0 auto;padding:0 40px">' +
'    <div class="eyebrow">Get in Touch</div>' +
'    <h2 style="font-family:var(--font-display);font-size:clamp(36px,5vw,64px);text-transform:uppercase;letter-spacing:0.03em;color:var(--kp-ink);margin:16px 0 24px">' + COPY.connect_headline + '</h2>' +
'    <p style="font-family:var(--font-serif);font-size:18px;color:var(--kp-ink-soft);line-height:1.7;margin-bottom:36px">' + COPY.connect_body + '</p>' +
'    <a href="#/contact" class="btn primary">' + COPY.connect_cta + '</a>' +
'  </div>' +
'</section>';
}

window.renderHome = function renderHome() {
  return (
    renderHomeHero() +
    renderHomeStory() +
    renderHomePear() +
    renderHomeCraft() +
    renderHomeProducts() +
    renderHomeTasting() +
    renderHomeBotanicals() +
    renderHomeServe() +
    renderHomeClosing() +
    renderHomeConnect()
  );
};

window.initHome = function initHome() {
  function initFadeUps() {
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fadeup').forEach(function(el) { obs.observe(el); });
  }

  initFadeUps();
};

}());
