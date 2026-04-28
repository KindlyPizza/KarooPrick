# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site locally

There is no build step. Serve the repo root over HTTP — never open `index.html` directly as a `file://` URL (browser CORS blocks script loading).

```bash
python -m http.server 3002
# then open http://localhost:3002/
```

A `.claude/launch.json` is configured so `preview_start` with name `karoo-prick` also starts this server.

## Development gotcha — browser cache

Python's `http.server` sends no cache-control headers. The browser caches JS aggressively. All `<script>` tags in `index.html` carry a `?v=bN` suffix. **Bump this version (b4 → b5, etc.) after every batch of JS/CSS edits**, then reload, or the browser will silently serve stale code.

## Architecture

Zero-dependency static SPA. No framework, no bundler, no package.json.

**Boot sequence** (defined by script order in `index.html`):
1. `data.js` — exports `window.KP_DATA` (all content)
2. `components/splash.js`, `nav.js`, `footer.js` — shared UI
3. `pages/home.js`, `shop.js`, `stockists.js`, `contact.js` — page modules
   (`story.js` still loads but is dead code — see Routing notes below)
4. `app.js` — hash router, boots last

**Routing:** Hash-based (`#/home`, `#/shop`, `#/stockists`, `#/contact`). `#/story` redirects to `#/home` — the Our Story content lives on the home page. `app.js` calls `window.renderXxx()` to get an HTML string, injects it into `#main-root`, then calls `window.initXxx()` for event listeners and `IntersectionObserver` fade-ups. Nav and footer re-render on every route change.

**Content:** All copy, product data, stockists, contact details, and tasting notes live in `data.js` as plain JS constants on `window.KP_DATA`. Page files never hardcode copy — they read from `window.KP_DATA.COPY`. To update any text on the site, edit `data.js` only.

**Page modules** follow a strict two-function pattern:
```js
window.renderXxx = function() { return '<html string>'; };
window.initXxx   = function() { /* attach listeners, observers */ };
```

All page files are wrapped in an IIFE `(function(){ ... }())` to avoid polluting global scope. Internal helpers are not exposed on `window`.

## Design system

`css/colors_and_type.css` — design tokens only (CSS variables, `@font-face`). Never add layout here.  
`css/site.css` — all layout, components, animations. Background images are set here via CSS class (`.hero-img`, `.serve`, `.page-hero.dark`, `.story-img`).

**Four-voice type system:**
- `--font-display` → Clasica Striped (local TTF) — hero banners, section titles, uppercase
- `--font-slab` → Alfa Slab One (Google) — subheadings, price, CTAs
- `--font-serif` → EB Garamond (Google) — body copy, italic for atmosphere
- `--font-mono` → Special Elite (Google) — eyebrow labels, captions

`CSS_CLASSES.md` in the repo root is a full reference of every component class. Consult it before adding inline styles.

## Key conventions

- **Images:** All assets in `assets/img/`. Product cards use `p.img` from the `PRODUCTS` array — to change a product image, update the `img` field in `data.js`, not the page JS.
- **No `innerHTML` with `[object Object]`:** Array renders always use `.map(...).join('')`.
- **`scrollTo(0, 0)`** not `scrollTo({behavior:'instant'})` — Firefox compatibility.
- **localStorage** is always wrapped in try/catch (`storageGet`/`storageSet` in `app.js`) — Firefox private mode throws instead of returning null.
- `components/splash.js` is the age gate. It was renamed from `age-gate.js` because uBlock Origin blocks any filename containing "age-gate".
- The `TIMELINE` const in `data.js` is kept for reference but is not exported in `window.KP_DATA` and is not rendered anywhere.
