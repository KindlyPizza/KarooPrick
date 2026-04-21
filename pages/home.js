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
'        <a href="#/story" class="btn ghost-on-dark">Our Story</a>' +
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
  var h2 = COPY.story_h2.split('\n').join('<br>');
  return '' +
'<section class="section" style="padding-top:160px">' +
'  <div class="story">' +
'    <div class="fadeup">' +
'      <div class="story-img"></div>' +
'    </div>' +
'    <div class="fadeup">' +
'      <div class="eyebrow">' + COPY.story_eyebrow + '</div>' +
'      <h2>' + h2 + '</h2>' +
'      <p>' + COPY.story_p1 + '</p>' +
'      <p>' + COPY.story_p2 + '</p>' +
'      <div class="pull">' + COPY.story_pull + '</div>' +
'      <a href="#/story" class="btn" style="margin-top:12px">Read the full story \u2192</a>' +
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
'      <div style="width:100%;height:460px;background:url(assets/img/cactus-fruit-pink.webp) center/cover no-repeat;border:1px solid var(--kp-ink)"></div>' +
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
'      <div style="width:100%;height:460px;background:url(assets/img/karoo-prick-group-sm.jpg) center/cover no-repeat;border:1px solid var(--kp-ink)"></div>' +
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
'          <img src="assets/img/karoo-prick-bottle-sm.jpg" alt="' + p.title + '" loading="lazy">' +
'        </div>' +
'        <div class="vol">' + p.volume + ' \u00b7 ' + p.abv + '</div>' +
'        <div class="title">' + p.title + '</div>' +
'        <div class="desc">' + p.desc + '</div>' +
'        <div class="meta">' +
'          <div class="price">' + p.price + '</div>' +
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
  return '' +
'<section class="section section-paper-aged" style="padding-top:120px;padding-bottom:120px">' +
'  <div class="section-head">' +
'    <div class="fadeup"><div class="eyebrow">' + COPY.tasting_eyebrow + '</div></div>' +
'    <div class="fadeup" style="margin-top:14px"><div class="ribbon-title">' + COPY.tasting_headline + '</div></div>' +
'  </div>' +
'  <div class="tasting-notes">' +
'    <div class="fadeup"><div class="tn-card"><div class="tn-label">Nose</div><div class="tn-body">' + TASTING.nose + '</div></div></div>' +
'    <div class="fadeup"><div class="tn-card"><div class="tn-label">Palate</div><div class="tn-body">' + TASTING.palate + '</div></div></div>' +
'    <div class="fadeup"><div class="tn-card"><div class="tn-label">Finish</div><div class="tn-body">' + TASTING.finish + '</div></div></div>' +
'  </div>' +
'</section>';
}

function renderHomeServe() {
  var COPY = window.KP_DATA.COPY;
  var serves = [
    { title: COPY.serve_title_1, body: COPY.serve_body_1 },
    { title: COPY.serve_title_2, body: COPY.serve_body_2 },
    { title: COPY.serve_title_3, body: COPY.serve_body_3 },
  ];
  var serveItems = serves.map(function(s, i) {
    return '' +
'    <div class="fadeup" style="padding:40px;border:1px solid rgba(244,235,214,0.15);background:rgba(244,235,214,0.04)">' +
'      <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.25em;text-transform:uppercase;color:var(--kp-rust-2);margin-bottom:12px">0' + (i+1) + '</div>' +
'      <div style="font-family:var(--font-display);font-size:26px;text-transform:uppercase;letter-spacing:0.04em;color:var(--kp-paper);margin-bottom:16px">' + s.title + '</div>' +
'      <p style="font-family:var(--font-serif);font-size:16px;color:rgba(244,235,214,0.75);line-height:1.7;margin:0">' + s.body + '</p>' +
'    </div>';
  }).join('');

  return '' +
'<section class="serve" style="padding:120px 0">' +
'  <div class="serve-inner" style="max-width:1100px;margin:0 auto;padding:0 40px">' +
'    <div class="fadeup" style="text-align:center;margin-bottom:64px">' +
'      <div class="eyebrow" style="color:var(--kp-rust-2)">— How to Serve —</div>' +
'      <h2 style="font-family:var(--font-display);font-size:clamp(32px,4vw,52px);text-transform:uppercase;color:var(--kp-paper);letter-spacing:0.04em;margin-top:14px">Three Ways to Enjoy</h2>' +
'    </div>' +
'    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px">' +
       serveItems +
'    </div>' +
'  </div>' +
'</section>';
}

function renderHomeConnect() {
  var COPY = window.KP_DATA.COPY;
  return '' +
'<section class="section" style="background:var(--kp-paper-aged);padding-top:120px;padding-bottom:120px;text-align:center">' +
'  <div class="fadeup" style="max-width:600px;margin:0 auto;padding:0 40px">' +
'    <div class="eyebrow">\u2014 Get in Touch \u2014</div>' +
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
    renderHomeServe() +
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
