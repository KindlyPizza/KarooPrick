// pages/story.js — Story page for Karoo Prick Co.
(function () {

function renderStoryHero() {
  const { COPY } = window.KP_DATA;
  return `
<section class="page-hero dark">
  <div class="eyebrow light">— The Karoo Prick Co. · Est. 2019 —</div>
  <h1>Our Story</h1>
  <div class="lede">${COPY.story_page_lede}</div>
</section>`;
}

function renderStoryOrigin() {
  const { COPY } = window.KP_DATA;
  const h2 = COPY.origin_h2.split('\n').join('<br>');
  return `
<section class="section">
  <div class="story">
    <div class="fadeup"><div class="story-img"></div></div>
    <div class="fadeup">
      <div class="eyebrow">${COPY.origin_eyebrow}</div>
      <h2>${h2}</h2>
      <p>${COPY.origin_p1}</p>
      <p>${COPY.origin_p2}</p>
      <div class="pull">${COPY.origin_pull}</div>
    </div>
  </div>
</section>`;
}


function renderStoryBotanicals() {
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
    <div class="fadeup"><div class="eyebrow">— What's inside —</div></div>
    <div class="fadeup" style="margin-top:14px"><div class="ribbon-title">The Botanicals</div></div>
    <div class="fadeup"><div class="subtitle">Seven botanicals. One fruit. Forty kilometres from still to bottle.</div></div>
  </div>
  <div class="botanicals">
    ${botanicalCards}
  </div>
</section>`;
}

function renderStoryRecipes() {
  const { RECIPES } = window.KP_DATA;
  const recipeCards = RECIPES.map(r => {
    const ingredients = r.ingredients.map(i => `
              <li><span>${i.item}</span><span class="qty">${i.qty}</span></li>`).join('');
    return `
    <div class="fadeup">
      <div class="recipe">
        <div class="recipe-top">
          <div class="num">№ ${r.num}</div>
          <h3>${r.name}</h3>
          <div class="sub">— ${r.sub} —</div>
        </div>
        <div class="recipe-body">
          <h5>— Build —</h5>
          <ul>
            ${ingredients}
          </ul>
          <h5>— Glass · Ice —</h5>
          <p style="margin-bottom:14px">${r.glass} ${r.ice}</p>
          <h5>— Method —</h5>
          <p>${r.note}</p>
        </div>
      </div>
    </div>`;
  }).join('');

  return `
<section class="section section-dark" style="padding-top:100px;padding-bottom:100px">
  <div class="section-head">
    <div class="eyebrow light">— How to drink it —</div>
    <div class="ribbon-title" style="margin-top:14px">The Recipes</div>
  </div>
  <div class="recipes">
    ${recipeCards}
  </div>
</section>`;
}

function renderStoryClosing() {
  const { COPY } = window.KP_DATA;
  return `
<section class="section" style="padding-top:100px;padding-bottom:120px">
  <div style="max-width:780px;margin:0 auto;text-align:center">
    <div class="eyebrow">— A closing thought —</div>
    <h2 style="font-family:var(--font-serif);font-style:italic;font-size:clamp(28px,3vw,40px);font-weight:400;color:var(--kp-ink);line-height:1.4;margin:24px 0 32px">${COPY.closing_h2}</h2>
    <div class="divider-ornate">❖ ❦ ❖</div>
    <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:var(--kp-rust-2)">Sit Bonum Tempora Volvunt</div>
  </div>
</section>`;
}

window.renderStory = function renderStory() {
  return (
    renderStoryHero() +
    renderStoryOrigin() +
    renderStoryBotanicals() +
    renderStoryRecipes() +
    renderStoryClosing()
  );
};

window.initStory = function initStory() {
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
