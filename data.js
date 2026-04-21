// =============================================================
// Karoo Prick Co. — Site Data
// Edit this file to update product info, stockists, and copy.
// =============================================================

const PRODUCTS = [
  { id: "gin-700-special", title: "Prickly Pear Gin \u2014 Special Edition", volume: "700 ml", abv: "43% vol", price: "R 690", badge: "Special", img: "assets/img/karoo-prick-bottle-gin.jpg", desc: "A commemorative release in honour of Dom Logan \u2014 the imagineer, maker, and spirit behind every bottle of Karoo Prick. The same gin he built, bottled in his memory. Bold, layered, and deeply Karoo." },
  { id: "gin-750",         title: "Prickly Pear Gin",                        volume: "750 ml", abv: "43% vol", price: "R 690", badge: null,      img: "assets/img/karoo-prick-bottle-gin.jpg", desc: "Built on a classic gin base of juniper, coriander, cappia bark, angelica root, and cardamom, this gin stays true to tradition. The addition of prickly pear attracts immediate attention with inspiration coming from the sweet kitsch feel of small-town Karoo shops." },
  { id: "gin-500",         title: "Prickly Pear Gin \u2014 500ml",            volume: "500 ml", abv: "43% vol", price: "R 480", badge: null,      img: "assets/img/karoo-prick-bottle-gin.jpg", desc: "The same spirit, a smaller bottle. A perfect introduction to the Karoo, or a companion for a single weekend." },
  { id: "liqueur",         title: "Candy Liqueur",                            volume: "500 ml", abv: "24% vol", price: "R 520", badge: "New",     img: "assets/img/karoo-prick-cocktail.jpg",    desc: "The sweeter side of the cactus. Made from ripe prickly pear fruit, this liqueur is rich, playful, and dangerously easy to enjoy. Sip it neat, mix it boldly, or save it for when rules feel optional." },
];

const BOTANICALS = [
  { num: "01", name: "Prickly Pear",  latin: "Opuntia ficus-indica",  glyph: "\u2748", desc: "Hand-picked from the Swartberg. Sweet, faintly floral, quietly strange." },
  { num: "02", name: "Juniper",       latin: "Juniperus communis",     glyph: "\u2726", desc: "The backbone. Resinous, piney, uncompromising." },
  { num: "03", name: "Buchu",         latin: "Agathosma betulina",     glyph: "\u274b", desc: "A Cape fynbos leaf. Blackcurrant-minty, unmistakably South African." },
  { num: "04", name: "Coriander",     latin: "Coriandrum sativum",     glyph: "\u2766", desc: "Seeds, never leaf. Warm citrus, dry spice, a second wind." },
  { num: "05", name: "Angelica Root", latin: "Angelica archangelica",  glyph: "\u2756", desc: "Earthy, musky, the anchor. Lets the other four speak." },
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
  { town: "Cape Town",         name: "Alphen Tops",              addr: "Constantia",        tags: ["Retail"] },
  { town: "Cape Town",         name: "City Cellar",              addr: "Joostenbergvlakte", tags: ["Retail"] },
  { town: "Cape Town",         name: "Liquor City Claremont",    addr: "Claremont",         tags: ["Retail"] },
  { town: "Cape Town",         name: "Woodstock Liquors",        addr: "Woodstock",         tags: ["Retail"] },
  { town: "Cape Town",         name: "Wine Concepts on Kloof",   addr: "Kloof Street",      tags: ["Retail", "Gifting"] },

  // Garden Route
  { town: "Plettenberg Bay",   name: "Bramon Wine Estate",       addr: "Plettenberg Bay",   tags: ["Retail", "Tastings"] },
  { town: "Sedgefield",        name: "Sedgefield Brewery",       addr: "Sedgefield",        tags: ["Bar", "Retail"] },
  { town: "St Francis Bay",    name: "Blue Bottle",              addr: "St Francis Bay",    tags: ["Retail"] },

  // Karoo
  { town: "Barrydale",         name: "Karoo Daisy Restaurant",   addr: "Barrydale",         tags: ["Bar", "Local"] },
  { town: "Oudtshoorn",        name: "Pick n Pay Liquor",        addr: "Oudtshoorn",        tags: ["Retail"] },
  { town: "De Rust",           name: "De Rust General Dealer",   addr: "De Rust",           tags: ["Retail", "Local"] },

  // Other provinces
  { town: "Pretoria",          name: "Cork & Brew",              addr: "Pretoria",          tags: ["Retail", "Bar"] },
  { town: "Dullstroom",        name: "Dullstroom Gin Bar",       addr: "Dullstroom",        tags: ["Bar", "Tastings"] },
  { town: "Hillcrest KZN",     name: "Hillcrest Tops",           addr: "Hillcrest",         tags: ["Retail"] },
];

const CONTACT = {
  email:    'info@karooprick.co.za',
  trade:    'trade@karooprick.co.za',
  phone:    '082 8555345',
  address:  ['The Karoo Prick Co.', 'TODO: confirm postal address', 'South Africa'],
  tasting:  'Fridays & Saturdays \u00b7 10h\u201316h \u00b7 By appointment',
  facebook: 'https://www.facebook.com/karooprick',   // TODO: confirm correct URL with Dom
  instagram: 'https://www.instagram.com/karooprick', // TODO: confirm correct URL with Dom
};

const COPY = {
  // ---------------------------------------------------------------
  // HOME — Hero
  // ---------------------------------------------------------------
  hero_eyebrow:    '\u2014 Prickly Pear Spirits \u00b7 Karoo, South Africa \u2014',
  hero_headline:   'Bottled\nResilience',
  hero_lede:       '\u201cAt first encounter the Karoo may seem arid, desolate and unforgiving, but to those who know it, it is a land of secret beauty and infinite variety.\u201d \u2014 Eve Palmer, The Plains of Camdeboo',
  hero_cta_primary: 'Explore the Range \u2192',

  // ---------------------------------------------------------------
  // HOME — Story snippet
  // ---------------------------------------------------------------
  story_eyebrow:   '\u2014 Our Story \u2014',
  story_h2:        'The Karoo\nteaches patience.',
  story_p1:        'The Karoo teaches patience. Things grow slowly here. Flavours deepen. And if you rush, you usually get pricked. The business was founded by Dom Logan, an imagineer and maker with a curiosity for wild things and a soft spot for plants that don\u2019t behave. His focus turned to the prickly pear \u2014 tough, generous, sharp-edged, and unexpectedly sweet. A fruit perfectly suited to the Karoo, and to craft spirits made with care.',
  story_p2:        'Sweet, sharp, made with intention \u2014 just like the man and land that inspired it.',
  story_pull:      '\u2018All good things are wild and free\u2019 \u2014 Henry David Thoreau',

  // ---------------------------------------------------------------
  // HOME — The Prickly Pear section
  // ---------------------------------------------------------------
  pear_eyebrow:    '\u2014 The Origins \u2014',
  pear_h2:         'The Prickly\nPear',
  pear_p1:         'The prickly pear cactus \u2014 Opuntia ficus-indica \u2014 was introduced to the Karoo and thrived where most plants barely survive, spreading across the landscape over generations.',
  pear_p2:         'Its fruit \u2014 vibrant, sweet, guarded by thorns \u2014 is the heart of everything we make. Carefully harvested and distilled to capture a wild sweetness that carries the land it came from.',

  // ---------------------------------------------------------------
  // HOME — Small Batch, Big Character section
  // ---------------------------------------------------------------
  craft_eyebrow:   '\u2014 The Craft \u2014',
  craft_h2:        'Small Batch,\nBig Character',
  craft_p1:        'Every bottle of Karoo Prick is crafted in small batches, requiring close attention at every step. The botanicals \u2014 juniper, coriander, Karoo buchu and more \u2014 are carefully selected to complement and elevate the delicate prickly pear character.',
  craft_p2:        'A distinct spirit that is quintessentially Karoo: bold, layered, and deeply rooted in South Africa.',

  // ---------------------------------------------------------------
  // HOME — Products section
  // ---------------------------------------------------------------
  products_eyebrow:  '\u2014 The Collection \u2014',
  products_headline: 'Craft Gin\n& Liqueur',

  // ---------------------------------------------------------------
  // HOME — Tasting Profile section
  // ---------------------------------------------------------------
  tasting_eyebrow:   '\u2014 Tasting Profile \u2014',
  tasting_headline:  'A Symphony of\nWild Sweetness',

  // ---------------------------------------------------------------
  // HOME — How to Serve (3 named serves)
  // ---------------------------------------------------------------
  serve_title_1:   'Classic G&T',
  serve_body_1:    'A lovely fruit forward gin. Goes well with sparkling water, a pink tonic or a light tonic, and a slice of watermelon and/or blueberries. Finish with a pinch of crushed basil.',
  serve_title_2:   'Candy Liqueur',
  serve_body_2:    'The flavour of the liqueur is the star. Enjoy it on the rocks with a pinch of crushed basil or add a mixer of your choice.',
  serve_title_3:   'The Sundowner',
  serve_body_3:    'Karoo Prick Gin, fresh orange juice, a dash of bitters. Garnish with an orange peel.',

  // ---------------------------------------------------------------
  // HOME — Let\u2019s Connect CTA
  // ---------------------------------------------------------------
  connect_headline: 'Let\u2019s Connect',
  connect_body:     'Whether you\u2019re looking for stockist information, wholesale enquiries, or simply want to learn more about our Karoo spirits \u2014 we\u2019d love to hear from you.',
  connect_cta:      'Get in Touch \u2192',

  // ---------------------------------------------------------------
  // SHOP page
  // ---------------------------------------------------------------
  shop_eyebrow:    '\u2014 The Collection \u2014',
  shop_headline:   'Our Spirits',
  shop_lede:       'We make three. The flagship gin, its smaller crated sibling, and \u2014 new this season \u2014 a prickly pear candy liqueur for the late hours.',
  shop_product_cta: 'Enquire to Order',
  tasting_section_headline: 'A Symphony of Wild Sweetness',
  small_batch_body: 'Our still holds 400 litres. We run it twice a week. When we run out, we run out. The next batch is ready when it\u2019s ready.',

  // ---------------------------------------------------------------
  // STOCKISTS page
  // ---------------------------------------------------------------
  stockists_eyebrow:           '\u2014 Where to Find Us \u2014',
  stockists_headline:          'Get Some\nHere',
  stockists_lede:              'Find Karoo Prick in stores nearby, order online or at a retailer near you, across South Africa.',
  stockists_empty_cta_headline: 'Didn\u2019t see your area?',
  stockists_empty_cta_body:    'We\u2019re always expanding. Get in touch and we\u2019ll help you find the closest bottle.',
  stockists_empty_cta_btn:     'Enquire Now \u2192',

  // ---------------------------------------------------------------
  // FOOTER
  // ---------------------------------------------------------------
  footer_tagline:   'Quintessential Karoo \u2014 crafting prickly pear spirits that capture the wild beauty of the South African desert.',

  // ---------------------------------------------------------------
  // CONTACT page
  // ---------------------------------------------------------------
  contact_eyebrow:  '\u2014 Get in Touch \u2014',
  contact_headline: 'Let\u2019s Talk',
  contact_form_btn: 'Send Message \u2192',

  // ---------------------------------------------------------------
  // STORY page (TODO placeholders — to be filled in)
  // ---------------------------------------------------------------
  story_page_lede: 'TODO: [1-sentence brand lede for the story page]',
  origin_h2:       'A fruit\nnobody wanted.',
  origin_eyebrow:  '\u2014 How it started \u2014',
  origin_p1:       'TODO: [Origin story paragraph 1 \u2014 ~80 words about the Opuntia cactus and the farm]',
  origin_p2:       'TODO: [Origin story paragraph 2 \u2014 ~60 words about the first batches and how the gin came to be]',
  origin_pull:     'TODO: [Pull-quote from Dom \u2014 memorable line about persistence or craft]',
  closing_h2:      'TODO: [Closing italic quote for the Story page \u2014 poetic, brand-voice]',
};

const TASTING_NOTES = {
  nose:    'Intensely fruity, watermelon candy liqueur. Dry fynbos underneath with a faint honey note.',
  palate:  'Not as sweet as expected \u2014 juicy, fresh, fruity, floral intensity. Buchu blackcurrant, coriander warmth.',
  finish:  'Crisp and clean. A quiet spice lingers. The pear returns softly.',
  expert:  'Quintessential Karoo \u2014 a not-so-dry, fruit forward juicy sweet Gin reminiscent of bubblegum and hard boiled watermelon candy.',
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
