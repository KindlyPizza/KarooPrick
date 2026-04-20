// pages/home.js — Home page for Karoo Prick Co.

function renderHomeHero() {
  const { COPY } = window.KP_DATA;
  return `
<section class="hero">
  <div class="hero-img"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-wrap">
      <div class="eyebrow light">— Est. 2019 · Prince Albert, ZA —</div>
      <h1 class="kp-banner">
        Karoo<br>Prick
        <span class="ampline">— prickly pear gin, small batch —</span>
      </h1>
      <div class="latin">${COPY.hero_lede}</div>
      <div class="hero-ctas">
        <a href="#/shop" class="btn primary">The Spirits →</a>
        <a href="#/story" class="btn ghost-on-dark">Our Story</a>
      </div>
    </div>
  </div>
  <div class="hero-meta">
    <div class="vline">Distilled slowly in copper at the foot of the Swartberg. Botanicals foraged within 40km of the still.</div>
    <div class="scroll-cue">
      <span>Scroll</span>
      <div class="line"></div>
    </div>
  </div>
</section>`;
}

function renderHomeStory() {
  const { COPY } = window.KP_DATA;
  const h2 = COPY.story_h2.split('\n').join('<br>');
  return `
<section class="section" style="padding-top:160px">
  <div class="story">
    <div class="fadeup">
      <div class="story-img"></div>
    </div>
    <div class="fadeup">
      <div class="eyebrow">${COPY.story_eyebrow}</div>
      <h2>${h2}</h2>
      <p>${COPY.story_p1}</p>
      <div class="pull">${COPY.story_pull}</div>
      <p>${COPY.story_p2}</p>
      <a href="#/story" class="btn" style="margin-top:12px">Read the full story →</a>
    </div>
  </div>
</section>`;
}

function renderHomeBotanicals() {
  const { BOTANICALS } = window.KP_DATA;
  const botanicalCards = BOTANICALS.map(b => `
    <div class="botanical">
      <div class="num">${b.num}</div>
      <div class="glyph">${b.glyph}</div>
      <div class="name">${b.name}</div>
      <div class="latin">${b.latin}</div>
      <div class="desc">${b.desc}</div>
    </div>`).join('');

  return `
<section class="section section-paper-aged" style="padding-top:120px;padding-bottom:120px">
  <div class="section-head">
    <div class="fadeup"><div class="eyebrow">— Seven botanicals, one fruit —</div></div>
    <div class="fadeup" style="margin-top:14px"><div class="ribbon-title">Botanicals</div></div>
    <div class="fadeup"><div class="subtitle">Six Cape botanicals and one wild cactus fruit. Juniper leads. The rest follow.</div></div>
  </div>
  <div class="botanicals">
    ${botanicalCards}
  </div>
</section>`;
}

function renderHomeProducts() {
  const { PRODUCTS } = window.KP_DATA;
  const productCards = PRODUCTS.map(p => `
    <div class="fadeup">
      <div class="product">
        ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
        <div class="product-img">
          <img src="assets/img/karoo-prick-bottle-sm.jpg" alt="${p.title}" loading="lazy">
        </div>
        <div class="vol">${p.volume} · ${p.abv}</div>
        <div class="title">${p.title}</div>
        <div class="desc">${p.desc}</div>
        <div class="meta">
          <div class="price">${p.price}</div>
          <a href="#/contact" class="stockist-link">Find stockists →</a>
        </div>
      </div>
    </div>`).join('');

  return `
<section class="section" style="padding-bottom:140px">
  <div class="section-head">
    <div class="fadeup"><div class="eyebrow">— From the storeroom —</div></div>
    <div class="fadeup" style="margin-top:14px"><div class="ribbon-title">The Spirits</div></div>
  </div>
  <div class="products">
    ${productCards}
  </div>
  <div style="text-align:center;margin-top:56px">
    <a href="#/contact" class="btn primary">Where to buy →</a>
  </div>
</section>`;
}

function renderHomeServe() {
  const recipe = window.KP_DATA.RECIPES[0];
  const ingredients = recipe.ingredients.map(i => `
          <li><span>${i.item}</span><span class="qty">${i.qty}</span></li>`).join('');

  return `
<section class="serve">
  <div class="serve-inner">
    <div class="serve-card">
      <div class="eyebrow">— The serve —</div>
      <h2>Cold tonic.<br>Fresh mint.<br>A lemon twist.</h2>
      <p style="font-family:var(--font-serif);font-style:italic;font-size:18px;color:var(--kp-ink-soft);line-height:1.6;max-width:460px">${recipe.note}</p>
      <div class="serve-recipe">
        <h4>— ${recipe.name} —</h4>
        <ul>
          ${ingredients}
          <li><span>Heavy ice</span><span class="qty">plenty</span></li>
        </ul>
      </div>
      <a href="#/story" class="btn" style="margin-top:28px">More recipes →</a>
    </div>
  </div>
</section>`;
}

window.renderHome = function renderHome() {
  return (
    renderHomeHero() +
    renderHomeStory() +
    renderHomeBotanicals() +
    renderHomeProducts() +
    renderHomeServe()
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
    }, { threshold: 0.15 });
    document.querySelectorAll('.fadeup').forEach(function(el) { obs.observe(el); });
  }

  initFadeUps();
};
