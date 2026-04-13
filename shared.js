/* ═══════════════════════════════════════════════════════════
   shared.js — Draco constellation portfolio
   Edit the `projects` array to swap images, titles, descriptions.
═══════════════════════════════════════════════════════════ */

// ── PROJECT DATA ─────────────────────────────────────────
// Each entry maps to one interactive star in the Draco constellation.
// starIndex: 0-13 matches the constellation order below.
// image: thumbnail shown in lightbox (swap paths freely)
// fullImage: hi-res version loaded after thumbnail
// title: shown in lightbox caption header
// description: shown in lightbox caption body
const projects = [
  {
    starIndex: 0,   // Giausar
    title: 'Beam Me Up',
    description: 'A poster design inspired by dog owners, for dog owners. Going to the vet is never a fun process, as we all know. This process tries to make light of that stress. "Beam me up, Scotty!"',
    image:     'https://cursivart.github.io/projects/Thumbs/Beam%20Me%20Up_nologo.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Beam%20Me%20Up_nologo.webp',
  },
  {
    starIndex: 1,   // Thuban
    title: 'Burn',
    description: 'An illustration exploring themes of destruction and renewal through expressive mark-making.',
    image:     'https://cursivart.github.io/projects/Thumbs/Burn_nosig.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Burn_nosig.webp',
  },
  {
    starIndex: 2,   // Aldhibah
    title: 'Crater Lake',
    description: 'A national park poster celebrating the stunning beauty of Crater Lake, Oregon.',
    image:     'https://cursivart.github.io/projects/Thumbs/Crater-Lake-National-Park_Stacy.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Crater-Lake-National-Park_Stacy.webp',
  },
  {
    starIndex: 3,   // Edasich
    title: 'Flight Geo',
    description: 'A geometric poster design exploring the visual language of aviation and flight paths.',
    image:     'https://cursivart.github.io/projects/Thumbs/FlightGeov5-Poster-design.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/FlightGeov5-Poster-design.webp',
  },
  {
    starIndex: 4,   // Altais
    title: 'Glade Creek Cider',
    description: 'A label and branding concept for Glade Creek Cider featuring West Virginia folklore.',
    image:     'https://cursivart.github.io/projects/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
  },
  {
    starIndex: 5,   // Tyl
    title: 'I.R.E.',
    description: 'A full brand identity rebrand for IRE, with a focus on bold, modern typography.',
    image:     'https://cursivart.github.io/projects/Thumbs/IRE-Brand-Poster.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/IRE-Brand-Poster.webp',
  },
  {
    starIndex: 6,   // Alsafi
    title: 'ISOtunes',
    description: 'An infographic poster illustrating the features and benefits of ISOtunes audio products.',
    image:     'https://cursivart.github.io/projects/Thumbs/ISOtunes-poster@100x.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/ISOtunes-poster@100x.webp',
  },
  {
    starIndex: 7,   // Athebyne
    title: 'G.i.t.S.',
    description: 'A fan-made alternative movie poster for Ghost in the Shell, blending cyberpunk and illustration.',
    image:     'https://cursivart.github.io/projects/Thumbs/Movie%20Poster_Stacy_Final.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Movie%20Poster_Stacy_Final.webp',
  },
  {
    starIndex: 8,   // Grumium
    title: 'San Diego Zoo',
    description: "A hand-drawn illustrated banner design for San Diego Zoo's bus tour experience.",
    image:     'https://cursivart.github.io/projects/Thumbs/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
  },
  {
    starIndex: 9,   // Alrakis
    title: 'Bark & Sole',
    description: 'An Instagram advertisement for Bark & Sole, a pet-friendly footwear brand.',
    image:     'https://cursivart.github.io/projects/Thumbs/Web-Banner_Instagram.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Web-Banner_Instagram.webp',
  },
  {
    starIndex: 10,  // Kuma
    title: 'Library',
    description: 'Linear (1-Point) Perspective drawing showcasing detailed view of a quiet moment in a library.',
    image:     'https://cursivart.github.io/projects/Thumbs/Library-18x24.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Library-18x24.webp',
  },
  {
    starIndex: 11,  // Eltanin
    title: 'Color Portrait',
    description: 'Oil pastel portrait in a local coffee house.',
    image:     'https://cursivart.github.io/projects/Thumbs/Color-Portrait-18x24.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Color-Portrait-18x24.webp',
  },
  {
    starIndex: 12,  // Rastaban
    title: 'Bowl of Fruit',
    description: 'Oil painting of a bowl of fruit, capturing the play of light and reflections from the glass.',
    image:     'https://cursivart.github.io/projects/Thumbs/Color-Still-Life-8x10.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Color-Still-Life-8x10.webp',
  },
  {
    starIndex: 13,  // Nodus I
    title: 'Farmhouse',
    description: '2-Point linear perspective piece of a farmhouse scene, showcasing the power of negative space.',
    image:     'https://cursivart.github.io/projects/Thumbs/Farmhouse-18x24.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Farmhouse-18x24.webp',
  },
];
