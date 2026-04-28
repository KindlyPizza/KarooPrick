// =============================================================
// Karoo Prick Co. — Site Data
// Edit this file to update product info, stockists, and copy.
// =============================================================

const PRODUCTS = [
  { id: "gin-700-special", title: "Prickly Pear Gin Special Edition", volume: "700 ml", abv: "43% vol", price: "R 420", badge: "LIMITED EDITION", img: "assets/img/karoo-prick-special-edition.jpeg", desc: "A commemorative release in honour of Dom Logan, the imagineer, maker, and spirit behind every bottle of Karoo Prick. The same gin he built, bottled in his memory. Bold, layered, and deeply Karoo." },
  { id: "gin-750",         title: "Prickly Pear Gin",                        volume: "750 ml", abv: "40% vol", price: "R 320", badge: null,      img: "assets/img/karoo-prick-rocks.jpg", desc: "Built on a classic gin base of juniper, coriander, cappia bark, angelica root, and cardamom, this gin stays true to tradition. The addition of prickly pear attracts immediate attention with inspiration coming from the sweet kitsch feel of small-town Karoo shops." },
  { id: "gin-500",         title: "Prickly Pear Gin 500ml",            volume: "500 ml", abv: "40% vol", price: "R 280", badge: null,      img: "assets/img/karoo-prick-rocks.jpg", desc: "The same spirit, a smaller bottle. A perfect introduction to the Karoo, or a companion for a single weekend." },
  { id: "gin-50ml",        title: "Prickly Pear Gin 50ml",             volume: "50 ml",  abv: "40% vol", price: "",      badge: null,      img: "assets/img/karoo-prick-bottle-white-bg.jpeg", desc: "The full Karoo Prick experience in miniature. Perfect for gifting or trying before you commit. Minimum order: 6 bottles." },
  { id: "liqueur",         title: "Candy Crush Liqueur",                      volume: "500 ml", abv: "27,5% vol", price: "R 380", badge: "New",     img: "assets/img/karoo-prick-candy-liqueur.jpeg",   desc: "The sweeter side of the cactus. Made from ripe prickly pear fruit, this liqueur is rich, playful, and dangerously easy to enjoy. Sip it neat, mix it boldly, or save it for when rules feel optional." },
];

const BOTANICALS = [
  { num: "01", name: "Cardamom",      latin: "Elettaria cardamomum",   glyph: "\u2748", desc: "Warm, aromatic, faintly sweet. Rounds the juniper and lifts the prickly pear." },
  { num: "02", name: "Juniper",       latin: "Juniperus communis",     glyph: "\u2726", desc: "The backbone. Resinous, piney, uncompromising." },
  { num: "03", name: "Coriander",     latin: "Coriandrum sativum",     glyph: "\u2766", desc: "Seeds, never leaf. Warm citrus, dry spice, a second wind." },
  { num: "04", name: "Angelica Root", latin: "Angelica archangelica",  glyph: "\u2756", desc: "Earthy, musky, the anchor. Lets the other three speak." },
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
      { item: "Egg white",          qty: "\u00bd" },
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
  {
    num: "04", name: "Candy Crush Liqueur", sub: "on the rocks",
    glass: "Rocks, chilled.", ice: "Cubed.",
    ingredients: [
      { item: "Candy Crush Liqueur", qty: "50 ml" },
      { item: "Crushed basil",       qty: "pinch" },
    ],
    note: "The flavour of the liqueur is the star. Sip neat, mix it boldly, or save it for when rules feel optional.",
  },
];

const STOCKISTS = [
  // Online
  { province: "Online",        town: "Online",          name: "Gincident",             addr: "gincident.co.za",            tags: ["Online"] },
  { province: "Online",        town: "Online",          name: "Liquor.co.za",           addr: "liquor.co.za",               tags: ["Online"] },
  { province: "Online",        town: "Online",          name: "Makro",                  addr: "makro.co.za",                tags: ["Online"] },
  { province: "Online",        town: "Online",          name: "Mother City Liquor",     addr: "mothercityliquor.co.za",     tags: ["Online"] },
  { province: "Online",        town: "Online",          name: "Muddler",                addr: "muddler.co.za",              tags: ["Online"] },
  { province: "Online",        town: "Online",          name: "Smous",                  addr: "smous.online",               tags: ["Online"] },
  { province: "Online",        town: "Online",          name: "Olive & Grape",          addr: "oliveandgrape.co.za",        tags: ["Online"] },

  // Western Cape
  { province: "Western Cape",  town: "Cape Town",       name: "Alphen Tops",              addr: "Constantia",        tags: ["Retail"] },
  { province: "Western Cape",  town: "Cape Town",       name: "City Cellar",              addr: "Joostenbergvlakte", tags: ["Retail"] },
  { province: "Western Cape",  town: "Cape Town",       name: "Liquor City Claremont",    addr: "Claremont",         tags: ["Retail"] },
  { province: "Western Cape",  town: "Cape Town",       name: "Woodstock Liquors",        addr: "Woodstock",         tags: ["Retail"] },
  { province: "Western Cape",  town: "Cape Town",       name: "Wine Concepts on Kloof",   addr: "Kloof Street",      tags: ["Retail", "Gifting"] },
  { province: "Western Cape",  town: "Plettenberg Bay", name: "Bramon Wine Estate",       addr: "Plettenberg Bay",   tags: ["Retail", "Tastings"] },
  { province: "Western Cape",  town: "Sedgefield",      name: "Sedgefield Brewery",       addr: "Sedgefield",        tags: ["Bar", "Retail"] },
  { province: "Western Cape",  town: "St Francis Bay",  name: "Blue Bottle",              addr: "St Francis Bay",    tags: ["Retail"] },
  { province: "Western Cape",  town: "Barrydale",       name: "Karoo Daisy Restaurant",   addr: "Barrydale",         tags: ["Bar", "Local"] },
  { province: "Western Cape",  town: "Oudtshoorn",      name: "Pick n Pay Liquor",        addr: "Oudtshoorn",        tags: ["Retail"] },
  { province: "Western Cape",  town: "De Rust",         name: "De Rust General Dealer",   addr: "De Rust",           tags: ["Retail", "Local"] },

  // Gauteng
  { province: "Gauteng",       town: "Pretoria",        name: "Cork & Brew",              addr: "Pretoria",          tags: ["Retail", "Bar"] },

  // Mpumalanga
  { province: "Mpumalanga",    town: "Dullstroom",      name: "Dullstroom Gin Bar",       addr: "Dullstroom",        tags: ["Bar", "Tastings"] },

  // KwaZulu-Natal
  { province: "KwaZulu-Natal", town: "Hillcrest",       name: "Hillcrest Tops",           addr: "Hillcrest",         tags: ["Retail"] },
];

const CONTACT = {
  email:    'info@karooprick.co.za',
  trade:    'trade@karooprick.co.za',
  phone:    '064 118 3058',
  tasting:  'Fridays & Saturdays \u00b7 10h\u201316h \u00b7 By appointment',
  facebook: 'https://www.facebook.com/karooprickco',
  instagram: 'https://www.instagram.com/karooprick_gin/',
};

const COPY = {
  // ---------------------------------------------------------------
  // HOME — Hero
  // ---------------------------------------------------------------
  hero_eyebrow:    'Prickly Pear Spirits \u00b7 Karoo, South Africa',
  hero_headline:   'Bottled\nResilience',
  hero_lede:       '\u201cAt first encounter the Karoo may seem arid, desolate and unforgiving, but to those who know it, it is a land of secret beauty and infinite variety.\u201d Eve Palmer, The Plains of Camdeboo',
  hero_cta_primary: 'Explore the Range \u2192',

  // ---------------------------------------------------------------
  // HOME — Story snippet
  // ---------------------------------------------------------------
  story_eyebrow:   'Our Story',
  story_h2:        'The Karoo\nteaches patience.',
  story_p1:        'The Karoo teaches patience. Things grow slowly here. Flavours deepen. And if you rush, you usually get pricked. The business was founded by Dom Logan, an imagineer and maker with a curiosity for wild things and a soft spot for plants that don\u2019t behave.',
  story_p2:        'His focus turned to the prickly pear, tough, generous, sharp-edged, and unexpectedly sweet. A fruit perfectly suited to the Karoo, and to craft spirits made with care.',
  story_pull:      '\u2018All good things are wild and free\u2019 Henry David Thoreau',

  // ---------------------------------------------------------------
  // HOME — The Prickly Pear section
  // ---------------------------------------------------------------
  pear_eyebrow:    'The Origins',
  pear_h2:         'The Prickly\nPear',
  pear_p1:         'The prickly pear cactus, Opuntia ficus-indica, was introduced to the Karoo and thrived where most plants barely survive, spreading across the landscape over generations.',
  pear_p2:         'Its fruit, vibrant, sweet, guarded by thorns, is the heart of everything we make. Carefully harvested and distilled to capture a wild sweetness that carries the land it came from.',

  // ---------------------------------------------------------------
  // HOME — Small Batch, Big Character section
  // ---------------------------------------------------------------
  craft_eyebrow:   'The Craft',
  craft_h2:        'Small Batch,\nBig Character',
  craft_p1:        'Every bottle of Karoo Prick is crafted in small batches, requiring close attention at every step. The botanicals, juniper, coriander, angelica root, and cardamom, are carefully selected to complement and elevate the delicate prickly pear character.',
  craft_p2:        'A distinct spirit that is quintessentially Karoo: bold, layered, and deeply rooted in South Africa.',

  // ---------------------------------------------------------------
  // HOME — Products section
  // ---------------------------------------------------------------
  products_eyebrow:  'The Collection',
  products_headline: 'Craft Gin\n& Liqueur',

  // ---------------------------------------------------------------
  // HOME — Tasting Profile section
  // ---------------------------------------------------------------
  tasting_eyebrow:   'Tasting Profile',
  tasting_headline:  'A Symphony of\nWild Sweetness',

  // ---------------------------------------------------------------
  // HOME — How to Serve (3 named serves)
  // ---------------------------------------------------------------
  serve_title_1:   'The Prick & Tonic',
  serve_body_1:    'A lovely fruit forward gin. It goes well with sparkling water, a pink tonic or a light tonic, and a slice of watermelon and/or blueberries. Add a pinch of crushed basil to pop the flavour.',
  serve_title_2:   'Candy Crush Liqueur',
  serve_body_2:    'The flavour of the liqueur is the star. Enjoy it on the rocks with a pinch of crushed basil, or add a mixer of your choice.',

  // ---------------------------------------------------------------
  // HOME — Let\u2019s Connect CTA
  // ---------------------------------------------------------------
  connect_headline: 'Let\u2019s Connect',
  connect_body:     'Whether you\u2019re looking for stockist information, wholesale enquiries, or simply want to learn more about our Karoo spirits, we\u2019d love to hear from you.',
  connect_cta:      'Get in Touch \u2192',

  // ---------------------------------------------------------------
  // SHOP page
  // ---------------------------------------------------------------
  shop_eyebrow:    'The Collection',
  shop_headline:   'Our Collection',
  shop_lede:       'We make four. The 750ml flagship, a 500ml, a 50ml and, new this season, a 750ml Prickly Pear Candy Liqueur. A Limited Special Edition Label 700ml bottle commemorating our Founder is also available. Only one pallet made. Never to be repeated again.',
  shop_product_cta: 'ORDER NOW',
  tasting_section_headline: 'A Symphony of Wild Sweetness',
  small_batch_body: 'Our still holds 400 litres. We run it twice a week. When we run out, we run out. The next batch is ready when it\u2019s ready.',

  // ---------------------------------------------------------------
  // STOCKISTS page
  // ---------------------------------------------------------------
  stockists_eyebrow:           'Where to Find Us',
  stockists_headline:          'Get Some\nHere',
  stockists_lede:              'Find Karoo Prick in stores nearby, order online or at a retailer near you, across South Africa.',
  stockists_empty_cta_headline: 'Didn\u2019t see your area?',
  stockists_empty_cta_body:    'We\u2019re always expanding. Get in touch and we\u2019ll help you find the closest bottle.',
  stockists_empty_cta_btn:     'Enquire Now \u2192',

  // ---------------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------------
  footer_tagline:   'Quintessential Karoo, crafting prickly pear spirits that capture the wild beauty of the South African desert.',

  // ---------------------------------------------------------------
  // CONTACT page
  // ---------------------------------------------------------------
  contact_eyebrow:  'Get in Touch',
  contact_headline: 'Let\u2019s Talk',
  contact_form_btn: 'Send Message \u2192',

  // ---------------------------------------------------------------
  // STORY page
  // ---------------------------------------------------------------
  story_page_lede: 'Sweet, sharp, made with intention, just like the man and land that inspired it.',
  origin_h2:       'A fruit\nnobody wanted.',
  origin_eyebrow:  'How it started',
  origin_p1:       'The Karoo teaches patience. Things grow slowly here. Flavours deepen. And if you rush, you usually get pricked. Dom Logan was an imagineer and maker with a curiosity for wild things and a soft spot for plants that don\u2019t behave.',
  origin_p2:       'His focus turned to the prickly pear, tough, generous, sharp-edged, and unexpectedly sweet. A fruit perfectly suited to the Karoo, and to craft spirits made with care. Built on a classic gin base, the prickly pear attracts immediate attention, inspired by the sweet kitsch feel of small-town Karoo shops.',
  origin_pull:     '\u2018All good things are wild and free\u2019 Henry David Thoreau',
  closing_h2:      'Sweet, sharp, made with intention, just like the man and land that inspired it.',
};

const TASTING_NOTES = {
  nose:    'Intensely fruity: watermelon candy and fresh cactus fruit.',
  palate:  'Not as sweet as expected. Juicy, fruity intensity that fills the palate. The prickly pear leads; the botanicals follow.',
  finish:  'Crisp and clean.',
  expert:  'Quintessentially Karoo, a not-so-dry, fruit-forward juicy sweet gin reminiscent of bubblegum and hard-boiled watermelon candy.',
};

// TIMELINE removed from site per design update (Dom Logan, 2026-04).
// Data preserved here for reference.
const TIMELINE = [
  { y: "2017", t: "The first cut",       b: "TODO: [What happened in 2017]" },
  { y: "2018", t: "Batch 1",             b: "TODO: [What happened in 2018]" },
  { y: "2019", t: "Batch 14 \u2014 bottled",  b: "TODO: [What happened in 2019]" },
  { y: "2021", t: "The 750ml flagship",  b: "TODO: [What happened in 2021]" },
  { y: "2024", t: "The crated 500ml",    b: "TODO: [What happened in 2024]" },
  { y: "2026", t: "The liqueur",         b: "TODO: [What happened in 2026]" },
];

window.KP_DATA = { PRODUCTS, BOTANICALS, RECIPES, STOCKISTS, CONTACT, COPY, TASTING_NOTES };
