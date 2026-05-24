/* ═══════════════════════════════════════════════════════════
   shared.js — Vulpecula constellation portfolio

   TO EDIT PROJECTS: update the `projects` array below.
   TO CHANGE A CATEGORY: update the `category` field on any project.
   The category labels in the top nav are generated automatically
   from whatever unique category values exist here — no other
   file needs to be touched.

   TWO LIGHTBOX TYPES:
   - Simple (default): just image + title + description.
   - Case-study: bento layout with a main slot (image or iframe),
     title + description block, plus 3 supporting image slots
     with captions. Any project gets the case-study lightbox
     simply by adding a `caseStudy` object to it (see below).
═══════════════════════════════════════════════════════════ */

// ── POLAROIDS (About page lightboxes) ─────────────────────
// Two small collections shown via the polaroid-style lightbox
// triggered from the PRESS / AWARDS links on the about page.
// Each entry is one polaroid: { image, caption }
//   - image:   URL to the photo that sits inside the polaroid frame
//   - caption: short handwritten-style note shown beneath the photo
//
// The polaroids render in a deterministic scatter — same array
// order = same arrangement every time the lightbox opens. Click
// a polaroid to bring it to the top of the stack.
//
// Add/remove entries freely; the lightbox lays them out
// automatically. A practical max is 6-8 polaroids — beyond that
// the stack gets crowded.

const polaroids_press = [
  // Example entry (replace with real press clippings):
  // {
  //   image: 'https://example.com/press-clipping-1.jpg',
  //   caption: 'Featured in PRINT Magazine, 2024',
  // },
];

const polaroids_awards = [
  // Example entry (replace with real award photos):
  // {
  //   image: 'https://example.com/award-photo-1.jpg',
  //   caption: 'AIGA Student Design Award, 2023',
  // },
];

// ── PROJECT DATA ─────────────────────────────────────────
// Each entry maps to one interactive star in the Vulpecula
// constellation. starIndex: 0-13 matches the constellation order
// declared in starData (see index.html).
// category:    controls which top nav label lights up on hover.
//              Must exactly match one of the categories you want displayed.
// image:       thumbnail shown in lightbox (swap paths freely)
// fullImage:   hi-res version loaded after thumbnail
// title:       shown in lightbox caption header
// description: shown in lightbox caption body
//
// ── CASE-STUDY EXTRAS ─────────────────────────────────────
// To turn a project into a case study, add a `caseStudy` object:
//
//   caseStudy: {
//     // The big slot in the upper-left. ONE of:
//     //   { type: 'image', src: 'thumb.jpg', fullSrc: 'hi-res.jpg' }
//     //   { type: 'iframe', src: 'https://sketchfab.com/models/.../embed', title: '3D model' }
//     main: { type: 'image', src: '...', fullSrc: '...' },
//     // 3 supporting image slots. Each can have any subset of
//     // { src, fullSrc, caption } — if src is missing/empty, that
//     // slot collapses to zero height (no empty box, no blank caption).
//     slotA: { src: '...', fullSrc: '...', caption: '...' },  // left col, top
//     slotB: { src: '...', fullSrc: '...', caption: '...' },  // left col, bottom
//     slotC: { src: '...', fullSrc: '...', caption: '...' },  // right col, full height
//   },
//
// Case studies are grouped together at the top of the array for
// easy editing. They still appear in the constellation/grid the
// same way as regular projects — only the lightbox changes.

const projects = [
  // ═══ CASE STUDIES ════════════════════════════════════════
  // Projects with a `caseStudy: { ... }` field open the bento
  // lightbox. They live at the top of the array for easy editing.

  {
    starIndex: 0,   // 31 Vulpeculae
    category: 'Branding',
    title: 'American Trench',
    description: 'A small apparel brand focused on domestically manufactured clothing and accessories. While the products emphasize quality and origin, there was an opportunity to better communicate this story through thoughtful print materials. This project sought to design a print system for American Trench that highlighted product craftsmanship and reinforced the brand\u2019s commitment to American-made goods.',
    image:     '',  // gallery thumbnail (add when ready)
    fullImage: '',
    caseStudy: {
      // Main slot: Sketchfab 3D embed of the rebrand package.
      // To swap to an image instead, replace this block with:
      //   main: { type: 'image', src: '...', fullSrc: '...' },
      main: {
        type: 'iframe',
        src: 'https://sketchfab.com/models/17d2e379a8bf4196be6a188aafbf8d17/embed',
        title: 'American Trench | Student Rebrand',
      },
      slotA: {
        src: '', fullSrc: '',
        caption: 'Foldout Product Card — outer face, communicating origin and craftsmanship at a glance.',
      },
      slotB: {
        src: '', fullSrc: '',
        caption: 'Horizontal Hang Tag — front and back, designed to live on the garment.',
      },
      slotC: {
        src: '', fullSrc: '',
        caption: 'Logo system, including the 15-year celebration mark.',
      },
    },
  },

  {
    starIndex: 4,   // 12 Vulpeculae
    category: 'Packaging',
    title: 'Glade Creek Cider Co.',
    description: 'Glade Creek is an entirely fictional cider brand that produces craft ciders from their smalltown cidery in Danese, WV, homesite of the Glade Creek Mill: a historic grist mill overlooking a beautiful, flowing set of waterfalls. The brand utilizes themes surrounding Appalachian folklore for its flavors, owing to a youthful yet spooky overall feel.',
    image:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
    caseStudy: {
      main: {
        type: 'image',
        src:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
      },
      slotA: {
        src: '', fullSrc: '',
        caption: 'Foxfire — flagship flavor named for the bioluminescent fungi of Appalachian forests.',
      },
      slotB: {
        src: '', fullSrc: '',
        caption: 'The Lights — third flavor in the lineup, named for the unexplained Brown Mountain Lights.',
      },
      slotC: {
        src: '', fullSrc: '',
        caption: 'Logo system and stacked wordmark, drawing on woodcut and folk-art traditions.',
      },
    },
  },

  {
    starIndex: 9,   // 9 Vulpeculae
    category: 'Social Media',
    title: 'Bark & Sole',
    description: 'Bark & Sole is a fictional company specializing in custom-fit dog booties sold from a boutique in Shockoe Bottom, RVA. At Bark & Sole, they treat their dogs like a member of the family, and family means no beans get left behind.',
    image:     'https://cursivart.github.io/Thumbs/Web-Banner_Instagram.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Web-Banner_Instagram.webp',
    caseStudy: {
      // Main slot: Sketchfab 3D embed of the dog-booties model.
      main: {
        type: 'iframe',
        src: 'https://sketchfab.com/models/1e789002a6104908a882d70242fdbf1a/embed',
        title: 'Bark & Sole | Dog Booties',
      },
      slotA: {
        // Second Sketchfab scene from the original page — the Valentine's
        // promo. Iframes are also valid in slot positions; the lightbox
        // will render any slot that has a `type: 'iframe'` as an embed.
        // (If you'd rather show a still image here instead, swap to
        //  { src: '...', fullSrc: '...', caption: '...' } shape.)
        type: 'iframe',
        src: 'https://sketchfab.com/models/331b1724100c4f8a945e9fff310053d1/embed',
        title: 'Bark & Sole | Valentine\u2019s Day Promo Scene',
        caption: 'Valentine\u2019s Day promo scene — second 3D environment for seasonal campaigns.',
      },
      slotB: {
        src: '', fullSrc: '',
        caption: 'Web banner system across formats — Instagram square, half-ad, and pop-under.',
      },
      slotC: {
        src: '', fullSrc: '',
        caption: 'Logo in two-color treatment, with and without background.',
      },
    },
  },

  // ═══ REGULAR PROJECTS ════════════════════════════════════
  // No caseStudy field — these open the simple lightbox
  // (image left, prose right).

  {
    starIndex: 1,   // Anser
    category: 'Branding',
    title: 'Ethereal Streetwear',
    description: '\u201CLong live the rose that grew from concrete when no one else even cared.\u201D \u2014 Tupac Shakur. A collaborative project with Stacy Wells and Stephanie Austin, this urban streetwear brand targets people experiencing life\u2019s trials, possibly for the first time. Its mission was to bring light and love into their darkest moments, with each piece meant to impact wearers and onlookers by forcing them to step back and recognize positivity in a harsh world.',
    image:     '',
    fullImage: '',
  },
  {
    starIndex: 2,   // 15 Vulpeculae
    category: 'Print',
    title: 'Fredericksburg Postage Stamps',
    description: 'Postage stamps celebrating the individuality and cultural beauty of Fredericksburg, VA \u2014 specifically Goolrick\u2019s Pharmacy and Carl\u2019s Ice Cream. Each stamp emphasizes the architecture of the chosen landmark, with special attention to lighting in order to facilitate a more personal experience of the scene.',
    image:     '',
    fullImage: '',
  },
  {
    starIndex: 3,   // 13 Vulpeculae
    category: 'Print',
    title: 'SEY Coffee',
    description: 'Sey Coffee is a Brooklyn-based specialty coffee roaster known for its minimalist identity and focus on high-quality, single-origin coffees. Despite this clarity, tasting information can feel overwhelming for newer audiences. This focused rebrand captured the welcoming demeanor that Sey\u2019s presence was lacking, and cemented itself into a more vivid world meant to stimulate the adventurous minds of the coffeenauts that frequent their NYC tasting room.',
    image:     '',
    fullImage: '',
  },
  {
    starIndex: 5,   // 24 Vulpeculae
    category: 'Branding',
    title: 'Infinity Renewable Energy',
    description: 'Sustainable energy means Power to the People. Infinity Renewable Energy (IRE) is a fictional cutting-edge high-tech company that produces and researches renewable energy solutions including solar cells, wind turbines, and hydrogen-based technology. This multi-faceted rebrand spans branding, print, packaging, and web design, blending corporate flat with bold, elegant swashes and a palette of natural leaf greens, sunshine yellow, and soft sky blue.',
    image:     'https://cursivart.github.io/Thumbs/IRE-Brand-Poster.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/IRE-Brand-Poster.webp',
  },
  {
    starIndex: 6,   // 4 Vulpeculae
    category: 'Print',
    title: 'ISOtunes SPORT',
    description: 'IsoTunes is a brand that specializes in producing hearing protection with both passive and active features, depending on the needs of the customer, as well as their price point. This illustrated infographic explores a pair of earmuffs with active hearing protection, helping consumers better understand what they\u2019re buying before making an expensive decision.',
    image:     'https://cursivart.github.io/Thumbs/ISOtunes-poster@100x.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/ISOtunes-poster@100x.webp',
  },
  {
    starIndex: 7,   // 8 Vulpeculae
    category: 'Packaging',
    title: 'Domik Foods',
    description: 'Domik is a fictional direct-to-consumer food brand specializing in handcrafted Russian pastries designed as a shared experience for two. Rather than positioning itself as traditional takeout, Domik focuses on intentional, intimate moments, delivering small, ready-to-enjoy foods that encourage connection and slowing down. The brand draws inspiration from the concept of a \u201Cdomik\u201D \u2014 a small, cozy home \u2014 emphasizing warmth, care, and togetherness.',
    image:     '',
    fullImage: '',
  },
  {
    starIndex: 8,   // 23 Vulpeculae
    category: 'Print',
    title: 'Boston Terrier Rescue of East Tennessee',
    description: 'A tri-fold brochure for BTRET, an established 501(c)(3) non-profit dedicated to rescuing, rehabilitating, and rehoming Boston Terriers. The brochure took BTRET\u2019s clean, airy presence and turned it into a full-on adventure \u2014 grassy greens, textured lawn imagery, a fresh tennis ball for good measure. A bright, exciting call-to-action on the front folds out to reveal a full profile for Odie Roger (a dog on the Adoptables site with a little extra sass), advice on caring for a newly-adopted dog, and a recipe for some sweet treats for those tough nights as they get used to a new home.',
    image:     '',
    fullImage: '',
  },
  {
    starIndex: 10,  // 1 Vulpeculae
    category: 'Social Media',
    title: 'Silver Diner',
    description: 'A mock social media campaign and accompanying banner celebrating the Grand Opening of Silver Diner in Central Park, Fredericksburg, VA \u2014 November 2024. The set is poised to be placed into their Facebook page, capturing the whirlwind of excitement for diner lovers all over town.',
    image:     '',
    fullImage: '',
  },
  {
    starIndex: 11,  // 19 Vulpeculae
    category: 'Social Media',
    title: 'San Diego Zoo',
    description: 'A hand-drawn illustrated banner design for San Diego Bus Tours, capturing the playful spirit of the San Diego Zoo experience in an advertisement-ready format.',
    image:     'https://cursivart.github.io/Thumbs/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
  },
  {
    starIndex: 12,  // Brocchi
    category: 'Print',
    title: 'Ghost in the Shell',
    description: '\u201CAll things change in a dynamic environment. Your effort to remain what you are is what limits you.\u201D \u2014 Puppet Master, Ghost in the Shell (1995). A movie poster recreating the unmistakably elegant yet grungy style of the 1995 film (based on the manga of the same name by Masamune Shirow), allowing Production I.G.\u2019s anime artistry to seamlessly flow into the scene. The inspiration was a blend between the opening leap from the corporate skyscraper and the midway diving scene, where Motoko shares a brief glimpse of vulnerability and \u2014 perhaps \u2014 soul.',
    image:     'https://cursivart.github.io/Thumbs/Movie%20Poster_Stacy_Final.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Movie%20Poster_Stacy_Final.webp',
  },

  // ═══ PLACEHOLDER ═════════════════════════════════════════
  // This entry has no data, so its star is non-clickable (still
  // grows and glows on hover, just doesn't open a lightbox).
  // Replace with a real project entry to activate it.
  {
    starIndex: 13,  // 2 Vulpeculae
    category: '',
    title: '',
    description: '',
    image:     '',
    fullImage: '',
    placeholder: true,
  },
];

// ── CATEGORY ORDER ────────────────────────────────────────
// Controls the display order of labels in the top nav.
// Add or remove entries here if you add new categories.
const categoryOrder = [
  'Packaging',
  'Print',
  'Social Media',
  'Branding',
];
