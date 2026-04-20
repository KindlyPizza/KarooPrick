// =============================================================
// Karoo Prick Co. — Site Data
// Edit this file to update product info, stockists, and copy.
// Narrative copy marked TODO: should be filled in by Dom Logan.
// =============================================================

const PRODUCTS = [
  { id: "gin-750",  title: "Prickly Pear Gin",     volume: "750 ml", abv: "43% vol", price: "R 690", badge: null,      desc: "The flagship. Juniper-forward, cactus-sweet, quietly South African." },
  { id: "gin-500",  title: "Prickly Pear Gin",     volume: "500 ml", abv: "43% vol", price: "R 480", badge: "Crated",  desc: "Same spirit, smaller bottle. Hand-built timber crate with rope binding." },
  { id: "liqueur",  title: "Prickly Pear Liqueur", volume: "500 ml", abv: "24% vol", price: "R 520", badge: "New",     desc: "Slower, sweeter, later in the evening. Serve chilled, serve small." },
];

const BOTANICALS = [
  { num: "01", name: "Prickly Pear",  latin: "Opuntia ficus-indica",  glyph: "❈", desc: "Hand-picked from the Swartberg. Sweet, faintly floral, quietly strange." },
  { num: "02", name: "Juniper",       latin: "Juniperus communis",     glyph: "✦", desc: "The backbone. Resinous, piney, uncompromising." },
  { num: "03", name: "Buchu",         latin: "Agathosma betulina",     glyph: "❋", desc: "A Cape fynbos leaf. Blackcurrant-minty, unmistakably South African." },
  { num: "04", name: "Coriander",     latin: "Coriandrum sativum",     glyph: "❦", desc: "Seeds, never leaf. Warm citrus, dry spice, a second wind." },
  { num: "05", name: "Angelica Root", latin: "Angelica archangelica",  glyph: "❖", desc: "Earthy, musky, the anchor. Lets the other four speak." },
];

const RECIPES = [
  {
    num: "01", name: "The Prick & Tonic", sub: "the house serve",
    glass: "Copa, chilled.", ice: "Heavy. Lots of it.",
    ingredients: [
      { item: "Karoo Prick Gin", qty: "50 ml" },
      { item: "Indian tonic",    qty: "150 ml" },
      { item: "Fresh mint",      qty: "5 leaves" },
      { item: "Lemon twist",     qty: "1 wide" },
    ],
    note: "Serve cold. Serve with tonic. Serve it to someone you like.",
  },
  {
    num: "02", name: "Swartberg Sour", sub: "for the late afternoon",
    glass: "Rocks.", ice: "Crushed.",
    ingredients: [
      { item: "Karoo Prick Gin",    qty: "60 ml" },
      { item: "Prickly pear syrup", qty: "20 ml" },
      { item: "Lemon juice",        qty: "25 ml" },
      { item: "Egg white",          qty: "½" },
    ],
    note: "Dry shake. Shake again with ice. Strain long and hard.",
  },
  {
    num: "03", name: "Karoo Negroni", sub: "for the bitter hours",
    glass: "Tumbler.", ice: "One large cube.",
    ingredients: [
      { item: "Karoo Prick Gin", qty: "30 ml" },
      { item: "Sweet vermouth",  qty: "30 ml" },
      { item: "Campari",         qty: "30 ml" },
      { item: "Orange peel",     qty: "1" },
    ],
    note: "Stir over ice for twenty seconds. Do not shake a negroni.",
  },
];

const STOCKISTS = [
  // Online
  { town: "Online", name: "Gincident",             addr: "gincident.co.za",            tags: ["Online"] },
  { town: "Online", name: "Liquor.co.za",           addr: "liquor.co.za",               tags: ["Online"] },
  { town: "Online", name: "Makro",                  addr: "makro.co.za",                tags: ["Online"] },
  { town: "Online", name: "Mother City Liquor",     addr: "mothercityliquor.co.za",     tags: ["Online"] },
  { town: "Online", name: "Muddler",                addr: "muddler.co.za",              tags: ["Online"] },
  { town: "Online", name: "Smous",                  addr: "smous.online",               tags: ["Online"] },
  { town: "Online", name: "Olive & Grape",          addr: "oliveandgrape.co.za",        tags: ["Online"] },

  // Cape Town area
  { town: "Cape Town",         name: "Alphen Tops",              addr: "Constantia",      tags: ["Retail"] },
  { town: "Cape Town",         name: "City Cellar",              addr: "Joostenbergvlakte", tags: ["Retail"] },
  { town: "Cape Town",         name: "Liquor City Claremont",    addr: "Claremont",       tags: ["Retail"] },
  { town: "Cape Town",         name: "Woodstock Liquors",        addr: "Woodstock",       tags: ["Retail"] },
  { town: "Cape Town",         name: "Wine Concepts on Kloof",   addr: "Kloof Street",    tags: ["Retail", "Gifting"] },

  // Garden Route
  { town: "Plettenberg Bay",   name: "Bramon Wine Estate",       addr: "Plettenberg Bay", tags: ["Retail", "Tastings"] },
  { town: "Sedgefield",        name: "Sedgefield Brewery",       addr: "Sedgefield",      tags: ["Bar", "Retail"] },
  { town: "St Francis Bay",    name: "Blue Bottle",              addr: "St Francis Bay",  tags: ["Retail"] },

  // Karoo
  { town: "Barrydale",         name: "Karoo Daisy Restaurant",   addr: "Barrydale",       tags: ["Bar", "Local"] },
  { town: "Oudtshoorn",        name: "Pick n Pay Liquor",        addr: "Oudtshoorn",      tags: ["Retail"] },
  { town: "De Rust",           name: "De Rust General Dealer",   addr: "De Rust",         tags: ["Retail", "Local"] },

  // Other provinces
  { town: "Pretoria",          name: "Cork & Brew",              addr: "Pretoria",        tags: ["Retail", "Bar"] },
  { town: "Dullstroom",        name: "Dullstroom Gin Bar",       addr: "Dullstroom",      tags: ["Bar", "Tastings"] },
  { town: "Hillcrest KZN",     name: "Hillcrest Tops",           addr: "Hillcrest",       tags: ["Retail"] },
];

const CONTACT = {
  email:   'info@karooprick.co.za',
  trade:   'trade@karooprick.co.za',
  phone:   '082 8555345',
  address: ['The Karoo Prick Co.', 'TODO: confirm postal address', 'South Africa'],
  tasting: 'Fridays & Saturdays · 10h–16h · By appointment',
};

const COPY = {
  // Home page hero
  hero_lede: "TODO: [Short hero lede — 1–2 sentences about the gin and the Karoo, written in Dom Logan's voice]",

  // Home story snippet section
  story_h2:       'Made where\nthe fruit grows.',
  story_eyebrow:  '— A small house, in a hard country —',
  story_p1:       'TODO: [Opening paragraph about the Karoo and the prickly pear — ~60 words]',
  story_p2:       'TODO: [Second paragraph about why small batch — ~40 words]',
  story_pull:     'TODO: [Pull-quote from Dom Logan — a memorable line about the gin or the place]',

  // Story page
  story_page_lede: 'TODO: [1-sentence brand lede for the story page]',
  origin_h2:       'A fruit\nnobody wanted.',
  origin_eyebrow:  '— How it started —',
  origin_p1:       'TODO: [Origin story paragraph 1 — ~80 words about the Opuntia cactus and the farm]',
  origin_p2:       'TODO: [Origin story paragraph 2 — ~60 words about the first batches and how the gin came to be]',
  origin_pull:     'TODO: [Pull-quote from Dom — memorable line about persistence or craft]',
  closing_h2:      'TODO: [Closing italic quote for the Story page — poetic, brand-voice]',

  // Shop page
  shop_lede: 'We make three. The flagship gin, its smaller crated sibling, and — new this season — a prickly pear liqueur for the late hours.',
  small_batch_body: "Our still holds 400 litres. We run it twice a week. When we run out, we run out. The next batch is ready when it's ready.",
};

const TIMELINE = [
  { y: "2017", t: "The first cut",       b: "TODO: [What happened in 2017 — the idea/first experiment]" },
  { y: "2018", t: "Batch 1",             b: "TODO: [What happened in 2018 — first distillation attempt]" },
  { y: "2019", t: "Batch 14 — bottled",  b: "TODO: [What happened in 2019 — first real bottling, first sales]" },
  { y: "2021", t: "The 750ml flagship",  b: "TODO: [What happened in 2021 — label, distribution expansion]" },
  { y: "2024", t: "The crated 500ml",    b: "TODO: [What happened in 2024 — the timber crate product]" },
  { y: "2026", t: "The liqueur",         b: "TODO: [What happened in 2026 — the prickly pear liqueur launch]" },
];

const TASTING_NOTES = {
  nose:    'Intensely fruity, watermelon candy liqueur. Dry fynbos underneath with a faint honey note.',
  palate:  'Not as sweet as expected — juicy, fresh, fruity, floral intensity. Buchu blackcurrant, coriander warmth.',
  finish:  'Crisp and clean. A quiet spice lingers. The pear returns softly.',
  expert:  'Quintessential Karoo — a not-so-dry, fruit forward juicy sweet Gin reminiscent of bubblegum and hard boiled watermelon candy.',
};

window.KP_DATA = { PRODUCTS, BOTANICALS, RECIPES, STOCKISTS, CONTACT, COPY, TIMELINE, TASTING_NOTES };
