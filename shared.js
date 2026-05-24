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
  {
    image: 'https://bloximages.chicago2.vip.townnews.com/fredericksburg.com/content/tncms/assets/v3/editorial/9/22/9221b44b-50ce-5fb9-923c-860b719096b9/596e66e077119.image.jpg?resize=1200%2C794',
    caption: 'Featured on the front page of The Free-Lance Star, July 2017',
  },
];

const polaroids_awards = [
  {
    image: 'https://blocks.astratic.com/img/general-img-portrait.png',
    caption: 'AIGA Student Design Award, 2023',
  },
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
  // Add `caseStudy: { ... }` to any project below to make it a
  // case study. Move case studies here for easier editing.

  // (no case studies defined yet — see the schema above)

  // ═══ REGULAR PROJECTS ════════════════════════════════════
  {
    starIndex: 0,   // 31 Vulpeculae
    category: 'Illustration',
    title: 'Beam Me Up',
    description: 'A poster design inspired by dog owners, for dog owners. Going to the vet is never a fun process, as we all know. This process tries to make light of that stress. "Beam me up, Scotty!"',
    image:     'https://cursivart.github.io/Thumbs/Beam%20Me%20Up_nologo.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Beam%20Me%20Up_nologo.webp',
  },
  {
    starIndex: 1,   // Anser
    category: 'Illustration',
    title: 'Burn',
    description: 'An illustration exploring themes of destruction and renewal through expressive mark-making.',
    image:     'https://cursivart.github.io/Thumbs/Burn_nosig.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Burn_nosig.webp',
  },
  {
    starIndex: 2,   // 15 Vulpeculae
    category: 'Advertising',
    title: 'Crater Lake',
    description: 'A national park poster celebrating the stunning beauty of Crater Lake, Oregon.',
    image:     'https://cursivart.github.io/Thumbs/Crater-Lake-National-Park_Stacy.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Crater-Lake-National-Park_Stacy.webp',
  },
  {
    starIndex: 3,   // 13 Vulpeculae
    category: 'Typography',
    title: 'Flight Geo',
    description: 'A geometric poster design exploring the visual language of aviation and flight paths.',
    image:     'https://cursivart.github.io/Thumbs/FlightGeov5-Poster-design.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/FlightGeov5-Poster-design.webp',
  },
  {
    starIndex: 4,   // 12 Vulpeculae
    category: 'Packaging',
    title: 'Glade Creek Cider',
    description: 'A label and branding concept for Glade Creek Cider featuring West Virginia folklore.',
    image:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
    // ── CASE STUDY ──────────────────────────────────────
    // Replace these placeholder URLs/captions with your real
    // assets. Any slot can be omitted entirely (the row will
    // collapse) and any caption can be left as '' to hide.
    caseStudy: {
      main: {
        type: 'image',
        src:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
      },
      // Alternative for the main slot — comment the `main:` block
      // above out and use this instead to embed a 3D model, video,
      // or any other iframe URL:
      //
      // main: {
      //   type: 'iframe',
      //   src: 'https://sketchfab.com/models/<MODEL_ID>/embed',
      //   title: 'Glade Creek Cider — bottle 3D model',
      // },
      slotA: {
        src:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
        caption: 'Early label exploration — Mothman silhouette over the New River Gorge.',
      },
      slotB: {
        src:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
        caption: 'Refined typography pairing — hand-lettered display face with a clean serif body.',
      },
      slotC: {
        src:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
        caption: 'Final bottle mockup in context, with the full label wrapping around.',
      },
    },
  },
  {
    starIndex: 5,   // 24 Vulpeculae
    category: 'Branding',
    title: 'I.R.E.',
    description: 'A full brand identity rebrand for IRE, with a focus on bold, modern typography.',
    image:     'https://cursivart.github.io/Thumbs/IRE-Brand-Poster.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/IRE-Brand-Poster.webp',
  },
  {
    starIndex: 6,   // 4 Vulpeculae
    category: 'Advertising',
    title: 'ISOtunes',
    description: 'An infographic poster illustrating the features and benefits of ISOtunes audio products.',
    image:     'https://cursivart.github.io/Thumbs/ISOtunes-poster@100x.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/ISOtunes-poster@100x.webp',
  },
  {
    starIndex: 7,   // 8 Vulpeculae
    category: 'Advertising',
    title: 'G.i.t.S.',
    description: 'A fan-made alternative movie poster for Ghost in the Shell, blending cyberpunk and illustration.',
    image:     'https://cursivart.github.io/Thumbs/Movie%20Poster_Stacy_Final.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Movie%20Poster_Stacy_Final.webp',
  },
  {
    starIndex: 8,   // 23 Vulpeculae
    category: 'Social Media',
    title: 'San Diego Zoo',
    description: "A hand-drawn illustrated banner design for San Diego Zoo's bus tour experience.",
    image:     'https://cursivart.github.io/Thumbs/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
  },
  {
    starIndex: 9,   // 9 Vulpeculae
    category: 'Social Media',
    title: 'Bark & Sole',
    description: 'An Instagram advertisement for Bark & Sole, a pet-friendly footwear brand.',
    image:     'https://cursivart.github.io/Thumbs/Web-Banner_Instagram.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Web-Banner_Instagram.webp',
  },
  {
    starIndex: 10,  // 1 Vulpeculae
    category: 'Traditional',
    title: 'Library',
    description: 'Linear (1-Point) Perspective drawing showcasing detailed view of a quiet moment in a library.',
    image:     'https://cursivart.github.io/Thumbs/Library-18x24.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Library-18x24.webp',
  },
  {
    starIndex: 11,  // 19 Vulpeculae
    category: 'Traditional',
    title: 'Color Portrait',
    description: 'Oil pastel portrait in a local coffee house.',
    image:     'https://cursivart.github.io/Thumbs/Color-Portrait-18x24.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Color-Portrait-18x24.webp',
  },
  {
    starIndex: 12,  // Brocchi
    category: 'Traditional',
    title: 'Bowl of Fruit',
    description: 'Oil painting of a bowl of fruit, capturing the play of light and reflections from the glass.',
    image:     'https://cursivart.github.io/Thumbs/Color-Still-Life-8x10.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Color-Still-Life-8x10.webp',
  },
  {
    starIndex: 13,  // 2 Vulpeculae
    category: 'Traditional',
    title: 'Farmhouse',
    description: '2-Point linear perspective piece of a farmhouse scene, showcasing the power of negative space.',
    image:     'https://cursivart.github.io/Thumbs/Farmhouse-18x24.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Farmhouse-18x24.webp',
  },
];

// ── CATEGORY ORDER ────────────────────────────────────────
// Controls the display order of labels in the top nav.
// Add or remove entries here if you add new categories.
const categoryOrder = [
  'Packaging',
  'Advertising',
  'Social Media',
  'Illustration',
  'Typography',
  'Branding',
  'Traditional',
];
