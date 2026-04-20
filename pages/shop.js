// pages/shop.js — Shop page for Karoo Prick Co.

function renderShopHero() {
  const { COPY } = window.KP_DATA;
  return `
<section class="shop-hero">
  <div class="eyebrow">— The storeroom · Three spirits —</div>
  <h1>The Spirits</h1>
  <div class="lede">${COPY.shop_lede}</div>
</section>`;
}

function renderShopProducts() {
  const { PRODUCTS } = window.KP_DATA;
  const productCards = PRODUCTS.map(p => `
    <div class="fadeup">
      <div class="product">
        ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
        <div class="product-img">
          <img src="assets/img/karoo-prick-bottle-sm.jpg" alt="${p.title}" loading="lazy">
        </div>
        <div class="title">${p.title}</div>
        <div class="desc">${p.desc}</div>
        <div class="meta">
          <div class="price">${p.price}</div>
          <div class="vol">${p.volume}</div>
        </div>
        <a href="#/contact" class="btn primary" style="width:100%;justify-content:center;margin-top:20px;display:flex">Find a stockist →</a>
      </div>
    </div>`).join('');

  return `
<section class="section">
  <div class="products">
    ${productCards}
  </div>
</section>`;
}

function renderShopTastingNotes() {
  const { TASTING_NOTES } = window.KP_DATA;
  const notes = [
    { h: 'Nose',   body: TASTING_NOTES.nose },
    { h: 'Palate', body: TASTING_NOTES.palate },
    { h: 'Finish', body: TASTING_NOTES.finish },
  ];
  const noteCards = notes.map(n => `
    <div class="note-card" style="background:var(--kp-paper);border:3px double var(--kp-ink);padding:36px 32px;text-align:center">
      <div style="font-family:var(--font-mono);font-size:10px;letter-spacing:0.3em;color:var(--kp-rust-2);text-transform:uppercase">— ${n.h} —</div>
      <h3 style="font-family:var(--font-display);font-size:42px;text-transform:uppercase;margin:12px 0 20px;letter-spacing:0.02em">${n.h}</h3>
      <p style="font-family:var(--font-serif);font-style:italic;font-size:16px;line-height:1.6;color:var(--kp-ink-soft);margin:0;text-align:center">${n.body}</p>
    </div>`).join('');

  return `
<section class="section section-paper-aged" style="padding-top:100px;padding-bottom:100px">
  <div class="section-head">
    <div class="eyebrow">— From the label —</div>
    <div class="ribbon-title" style="margin-top:14px">Tasting Notes</div>
  </div>
  <div class="tasting-notes" style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:32px">
    ${noteCards}
  </div>
</section>`;
}

function renderShopSmallBatch() {
  const { COPY } = window.KP_DATA;
  return `
<section class="section section-dark" style="padding-top:100px;padding-bottom:100px">
  <div style="max-width:900px;margin:0 auto;text-align:center">
    <div class="eyebrow light">— A note on availability —</div>
    <h2 style="font-family:var(--font-display);font-size:clamp(40px,5vw,68px);text-transform:uppercase;color:var(--kp-paper);margin:20px 0 24px;letter-spacing:0.02em;line-height:1">Small batch. Literally.</h2>
    <p style="font-family:var(--font-serif);font-style:italic;font-size:20px;color:var(--kp-karoo-sand);max-width:560px;margin:0 auto 32px;line-height:1.6">${COPY.small_batch_body}</p>
    <a href="#/contact" class="btn ghost-on-dark">Find a stockist →</a>
  </div>
</section>`;
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
