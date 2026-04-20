# CSS Class Reference

## Layout
- `.section` — main content section wrapper (120px vertical padding)
- `.section-narrow` — max-width 1280px centred content container
- `.section-dark` — dark rust background variant with bone-coloured text
- `.section-paper-aged` — aged paper background variant (`--kp-paper-aged`)
- `.section-head` — centred section header block with bottom margin
- `.section-head .subtitle` — italic serif subtitle under a section heading
- `.corner-frame` — box with double border and decorative corner squares
- `.contact-wrap` — two-column grid for contact page (info + form)

## Navigation
- `.nav` — sticky fixed header, three-column grid (left links / wordmark / right links)
- `.nav.scrolled` — condensed nav state triggered on scroll (smaller padding, paper background)
- `.nav.on-dark` — nav variant for use over dark hero images (light text)
- `.nav-left` / `.nav-right` — flex containers for nav link groups
- `.nav-link` — nav anchor with animated underline on hover/active
- `.nav-link.active` — active route link (red colour + underline)
- `.nav-wordmark` — centre display-font brand name in the nav
- `.nav-sub` — small monospaced tagline under the wordmark

## Hero
- `.hero` — full-viewport-height hero section with Ken Burns image
- `.hero-img` — absolutely positioned background image element (animated)
- `.hero-overlay` — gradient overlay layered over the hero image
- `.hero-content` — centred flex column content over the hero
- `.hero-wrap` — max-width wrapper for hero text/CTAs
- `.hero .latin` — italic serif atmosphere line in the hero
- `.hero-ctas` — flex row of CTA buttons
- `.hero-meta` — absolute bottom bar with location text and scroll cue
- `.scroll-cue` — animated vertical line scroll indicator
- `.ampline` — display block sub-line inside hero h1 (italic serif)

## Components

### Age Gate
- `.age-gate` — full-screen fixed overlay (dark background)
- `.age-gate.hide` — faded-out/pointer-events-none state after passing
- `.age-gate-inner` — centred card with double border and corner accents
- `.age-gate .wordmark` — large display-font brand name inside gate
- `.age-gate .small` — small monospaced tagline inside gate
- `.age-gate .buttons` — flex row of Yes/No buttons
- `.age-gate .btn` — base button inside the gate
- `.age-gate .btn.primary` — dark-filled confirm button
- `.age-gate .disclaimer` — italic fine-print text at bottom of gate
- `.age-gate .motto` — italic serif brand motto inside gate

### Buttons
- `.btn` — base button (transparent background, ink border, slab font)
- `.btn:hover` — dark fill with ochre text and offset shadow
- `.btn.primary` — red-filled primary action button
- `.btn.light` — paper-background button (for use on dark sections)
- `.btn.ghost-on-dark` — ghost/outline button for dark backgrounds

### Ribbon Title
- `.ribbon-title` — red display banner with angled side cuts (section heading treatment)

### Eyebrow
- `.eyebrow` — small-caps monospaced label with flanking ruled lines
- `.eyebrow.light` — ochre-coloured variant for dark backgrounds

### Footer
- `.footer` — dark rust footer with patterned top border and gradient
- `.footer-grid` — four-column grid layout inside footer
- `.footer-col` — individual footer column
- `.footer-col h4` — ochre monospaced column heading
- `.footer .brand` — large display-font brand name in footer
- `.footer .motto` — italic serif motto in footer brand column
- `.footer .latin` — small monospaced Latin tagline in footer
- `.footer-bottom` — flex bottom bar (copyright / legal)

## Story / About
- `.story` — two-column grid (image left, text right)
- `.story-img` — styled background image with ochre inset border
- `.story .pull` — blockquote-style pull quote with red left border

## Botanicals
- `.botanicals` — five-column grid strip with ruled borders
- `.botanical` — individual botanical cell
- `.botanical .num` — small monospaced sequence number
- `.botanical .name` — display-font botanical common name
- `.botanical .latin` — italic serif Latin name
- `.botanical .glyph` — large emoji/icon glyph
- `.botanical .desc` — small italic description text

## Shop / Products
- `.shop-hero` — padded centred page-hero for the shop page
- `.shop-hero h1` — very large display heading with red shadow
- `.products` — three-column product card grid
- `.product` — individual product card with double border and hover lift
- `.product .badge` — absolute "featured" ribbon label
- `.product-img` — aspect-ratio image container with gradient background
- `.product .vol` — small monospaced volume/size label
- `.product .title` — display-font product name
- `.product .desc` — italic serif short description
- `.product .meta` — flex row with price and ABV
- `.product .price` — slab-font price display
- `.product .abv` — small monospaced ABV label

## Serve / Cocktails
- `.serve` — full-bleed section with product image background and gradient overlay
- `.serve-inner` — centred content wrapper inside serve section
- `.serve-card` — constrained-width card for serve content
- `.serve-recipe` — paper card with ingredient list (double border)
- `.serve-recipe li` — ingredient row with name and quantity
- `.serve-recipe li .qty` — monospaced quantity text

## Recipes
- `.recipes` — three-column recipe card grid
- `.recipe` — individual recipe card (flex column, border)
- `.recipe-top` — aged-paper header area of recipe card
- `.recipe-top .num` — monospaced card number
- `.recipe-top .sub` — italic serif subtitle
- `.recipe-body` — ingredient list + method area of recipe card
- `.recipe-body h5` — monospaced section label inside recipe
- `.recipe-body li` — ingredient row with quantity
- `.recipe-body li .qty` — monospaced quantity

## Stockists
- `.stockist-wrap` — two-column grid: search sidebar + results list
- `.stockist-search` — sticky sidebar panel with search inputs
- `.stockist-list` — two-column grid of stockist cards
- `.stockist` — individual stockist card
- `.stockist .town` — small monospaced town/region label
- `.stockist .name` — display-font venue name
- `.stockist .addr` — serif address text
- `.stockist .tags` — flex row of category chips
- `.stockist-empty` — empty state message spanning full grid width
- `.field` — form field wrapper (label + input)
- `.chip-row` — flex row of filter chips
- `.chip` — individual filter chip
- `.chip.active` — selected chip state (inverted colours)

## Contact
- `.contact-info` — left column of contact page
- `.contact-block` — labelled contact detail block (address, phone, etc.)
- `.contact-block .v` — serif value text inside a contact block
- `.contact-form` — aged-paper bordered contact form panel

## Utility Classes (from colors_and_type.css)
- `.kp-banner` — applies the primary banner red (`--kp-banner-red`) as background colour
- `.kp-ribbon` — applies the ochre/gold ribbon colour (`--kp-ochre`) as background colour
- `.kp-rule` — thin horizontal rule styled with the ink colour
- `.kp-paper` — sets background to the aged-paper tone (`--kp-paper`)
- `.kp-eyebrow` — small-caps, tracked monospaced label treatment (inline use)
- `.kp-smcaps` — forces small-caps (`font-variant: small-caps`) on any text element

## Utilities
- `.center` — `text-align: center`
- `.divider-ornate` — centred ornamental divider with flanking rules
- `.fadeup` — scroll-reveal element (starts invisible and translated down)
- `.fadeup.in` — revealed state of a `.fadeup` element

## Page Heroes
- `.page-hero` — generic inner-page hero header (padded, centred)
- `.page-hero.dark` — dark variant with background image overlay
- `.page-hero.paper` — light paper-toned variant
- `.page-hero .lede` — large italic serif intro sentence

## Timeline
- `.timeline` — vertical centred timeline container
- `.tl-item` — single timeline event (alternating left/right)
- `.tl-year` — display-font year label
- `.tl-title` — slab-font event title
- `.tl-body` — serif body text for timeline event

## Debug / Dev
- `.tweaks` — fixed bottom-right developer tweaks panel (hidden by default)
- `.tweaks.open` — visible tweaks panel
- `.tweaks .swatches` — row of colour swatch buttons
- `.tweaks .sw` — individual swatch button
- `.tweaks .sw.active` — currently selected swatch
