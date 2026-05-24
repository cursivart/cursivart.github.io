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
// process:     prose for the "Process" section in the right column
//              of both lightboxes. Empty → section hides.
// tools:       prose for the "Tools & Medium" section. Empty → hides.
// year:        prose for the "Year" section. Empty → hides. For case
//              studies, this also appears right-justified in the
//              subheading row at the top of the description column.
//
// ── CASE-STUDY EXTRAS ─────────────────────────────────────
// To turn a project into a case study, add a `caseStudy` object:
//
//   caseStudy: {
//     type: 'Branding',        // subheading, left-justified
//                              // (year comes from the project's top-level
//                              //  `year` field — used by both lightboxes.)
//
//     // The viewer-height hero showcase. ONE of:
//     //   { type: 'image',   src: 'thumb.jpg', fullSrc: 'hi-res.jpg' }
//     //   { type: 'iframe',  src: 'https://sketchfab.com/.../embed', title: '...' }
//     //   { type: 'booklet', pages: [{ src: 'page1.jpg' }, { src: 'page2.jpg' }, ...] }
//     hero: { type: 'image', src: '...', fullSrc: '...' },
//
//     // Sections array — flexible number of supporting work blocks.
//     // Each section can be any of the three content types and has
//     // an optional caption beneath. Sections fill the grid in
//     // reading order: sections[0] is row 2 left, sections[1] is
//     // row 2 right, sections[2] is row 3 left, etc. If you have an
//     // odd number of sections, the last one sits alone on the left.
//     sections: [
//       { type: 'booklet', pages: [...], caption: 'Sketches / Process' },
//       { type: 'image', src: '...', fullSrc: '...', caption: '...' },
//       { type: 'iframe', src: '...', title: '...', caption: '...' },
//     ],
//   },
//
// CONTENT TYPES (used in both `hero` and each `sections[i]`):
//   image:   { type: 'image', src, fullSrc, caption? }
//            (type is optional — any block with `src` but no `type`
//             defaults to image.)
//   iframe:  { type: 'iframe', src, title, caption? }
//            Use for Sketchfab 3D models, Vimeo embeds, etc.
//   booklet: { type: 'booklet', pages: [{ src, fullSrc? }, ...], caption? }
//            A click-through page sequence. Click anywhere on the
//            page to advance forward; hover-revealed arrows for back;
//            page counter in the corner; fullscreen icon to view a
//            single page at full resolution.
//
// ⚠ PLACEHOLDER NOTE ──────────────────────────────────────
// The `process` and `tools` fields below are PLACEHOLDER content,
// generated as plausible-but-generic defaults since the source pages
// didn't expose this info. Replace each one with your real process
// notes and the actual tools you used. The `year` field is empty for
// most projects (only Silver Diner's year was on the source page);
// fill in the rest as you remember them.
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
    description: 'American Trench is a small apparel brand focused on domestically manufactured clothing and accessories. While the products emphasize quality and origin, there was an opportunity to better communicate this story through thoughtful print materials. This project sought to design a print system for American Trench that highlighted product craftsmanship and reinforced the brand\u2019s commitment to American-made goods.',
    image:     '',  // gallery thumbnail (add when ready)
    fullImage: '',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Research into American Trench\u2019s existing brand voice and product line guided the development of a print system that could carry the brand\u2019s craftsmanship story into the customer\u2019s hands. The hang tag, foldout product card, and celebratory 15-year mark were designed as a cohesive set, each touchpoint reinforcing the made-in-America identity.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop \u2022 Adobe InDesign',
    year: '',
    caseStudy: {
      type: 'Branding',
      hero: {
        type: 'iframe',
        src: 'https://sketchfab.com/models/17d2e379a8bf4196be6a188aafbf8d17/embed',
        title: 'American Trench | Student Rebrand',
      },
      sections: [
        // Section 1 (row 2 left): foldout product card
        {
          src: '', fullSrc: '',
          caption: 'Foldout Product Card \u2014 outer face, communicating origin and craftsmanship at a glance.',
        },
        // Section 2 (row 2 right): hang tag
        {
          src: '', fullSrc: '',
          caption: 'Horizontal Hang Tag \u2014 front and back, designed to live on the garment.',
        },
        // Section 3 (row 3 left, with row 3 right empty)
        {
          src: '', fullSrc: '',
          caption: 'Logo system, including the 15-year celebration mark.',
        },
      ],
    },
  },

  {
    starIndex: 4,   // 12 Vulpeculae
    category: 'Packaging',
    title: 'Glade Creek Cider Co.',
    description: 'Glade Creek is an entirely fictional cider brand that produces craft ciders from their smalltown cidery in Danese, WV, homesite of the Glade Creek Mill: a historic grist mill overlooking a beautiful, flowing set of waterfalls. The brand utilizes themes surrounding Appalachian folklore for its flavors, owing to a youthful yet spooky overall feel.',
    image:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Appalachian folklore drove the visual direction \u2014 Mothman, foxfire, the Brown Mountain Lights. Each flavor was given its own illustrated identity that could live both on the can and as a standalone mark, while a shared typographic system held the family together as one cohesive brand.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop \u2022 Procreate',
    year: '',
    caseStudy: {
      type: 'Packaging',
      hero: {
        type: 'image',
        src:     'https://cursivart.github.io/Thumbs/Glade-Creek-Cider_Mothman-Mockup.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider_Mothman-Mockup.webp',
      },
      sections: [
        {
          src: '', fullSrc: '',
          caption: 'Foxfire \u2014 flagship flavor named for the bioluminescent fungi of Appalachian forests.',
        },
        {
          src: '', fullSrc: '',
          caption: 'The Lights \u2014 third flavor in the lineup, named for the unexplained Brown Mountain Lights.',
        },
        {
          src: '', fullSrc: '',
          caption: 'Logo system and stacked wordmark, drawing on woodcut and folk-art traditions.',
        },
      ],
    },
  },

  {
    starIndex: 9,   // 9 Vulpeculae
    category: 'Social Media',
    title: 'Bark & Sole',
    description: 'Bark & Sole is a fictional company specializing in custom-fit dog booties sold from a boutique in Shockoe Bottom, RVA. At Bark & Sole, they treat their dogs like a member of the family, and family means no beans get left behind.',
    image:     'https://cursivart.github.io/Thumbs/Web-Banner_Instagram.webp',
    fullImage: 'https://cursivart.github.io/projects/Full-Q/Web-Banner_Instagram.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'The brand voice for Bark & Sole leans warm and family-oriented, so the social campaign needed to feel inviting rather than aspirational. 3D scenes were built to showcase the booties in playful, seasonal contexts, while the supporting web banner system carried the same identity across Instagram, half-ad, and pop-under formats.',
    tools: 'Blender \u2022 Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
    caseStudy: {
      type: 'Social Media',
      // Hero: Sketchfab 3D embed of the dog-booties model.
      hero: {
        type: 'iframe',
        src: 'https://sketchfab.com/models/1e789002a6104908a882d70242fdbf1a/embed',
        title: 'Bark & Sole | Dog Booties',
      },
      sections: [
        // Section 1: second Sketchfab scene from the original page \u2014 the
        // Valentine's promo. Sections can be any of the three content types
        // (image/iframe/booklet), just like the hero.
        {
          type: 'iframe',
          src: 'https://sketchfab.com/models/331b1724100c4f8a945e9fff310053d1/embed',
          title: 'Bark & Sole | Valentine\u2019s Day Promo Scene',
          caption: 'Valentine\u2019s Day promo scene \u2014 second 3D environment for seasonal campaigns.',
        },
        {
          src: '', fullSrc: '',
          caption: 'Web banner system across formats \u2014 Instagram square, half-ad, and pop-under.',
        },
        {
          src: '', fullSrc: '',
          caption: 'Logo in two-color treatment, with and without background.',
        },
      ],
    },
  },

  // ═══ REGULAR PROJECTS ════════════════════════════════════
  // No caseStudy field — these open the simple lightbox
  // (image left, prose right).

  {
    starIndex: 1,   // Anser
    category: 'Branding',
    title: 'Ethereal Streetwear',
    description: '\u201CLong live the rose that grew from concrete when no one else even cared.\u201D \u2014 Tupac Shakur\n\nThis collaborative project between myself, Stacy Wells, and Stephanie Austin was the brainchild of Stephanie Austin. She had a vision for an urban street-wear clothing brand whose target audience included people experiencing life\u2019s trials, possibly for the first time. Its mission was to bring light and love into their darkest moments, bringing a warm, welcoming tone to its fashion. Each piece is meant to impact wearers and onlookers by forcing them to step back and recognize positivity in a harsh world.',
    image:     '',
    fullImage: '',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'A collaborative undertaking with Stephanie Austin (whose vision led the brand) and Stacy Wells. The design language balanced the harshness implied by streetwear conventions against the brand\u2019s mission of bringing positivity to people in difficult moments \u2014 typography and patches that read tough on first glance but warm on closer reading.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
  },
  {
    starIndex: 2,   // 15 Vulpeculae
    category: 'Print',
    title: 'Fredericksburg Postage Stamps',
    description: 'This project was created with the individuality and cultural beauty that can be found in my hometown of Fredericksburg, Virginia. The focus of each stamp was to emphasize the architecture of the chosen landmark, paying special attention to lighting in order to facilitate a more personal experience of the scene. Readability was prioritized in the title and location information sections for the stamps, potentially making them more eye-catching for stamp buyers.',
    image:     '',
    fullImage: '',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Reference photos of Goolrick\u2019s Pharmacy and Carl\u2019s Ice Cream were used to study how each building catches light at different times of day. Stamp composition concentrated on architectural silhouette and lighting; the typography was tuned to stay legible at the small print sizes a real postage stamp would actually run at.',
    tools: 'Adobe Illustrator \u2022 Procreate',
    year: '',
  },
  {
    starIndex: 3,   // 13 Vulpeculae
    category: 'Print',
    title: 'SEY Coffee',
    description: 'Sey Coffee is a Brooklyn-based specialty coffee roaster known for its minimalist identity and focus on high-quality, single-origin coffees. The brand emphasizes clarity, precision, and the sensory experience of coffee, presenting each offering as distinct and nuanced.\n\nDespite this clarity, tasting information can feel overwhelming or overly technical for newer audiences. This focused rebrand captured the welcoming demeanor that Sey\u2019s presence was lacking, and cemented itself into a more vivid world meant to stimulate the adventurous minds of the coffeenauts that frequent their NYC tasting room.',
    image:     '',
    fullImage: '',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'The logo refresh aimed to keep Sey\u2019s minimalist character while loosening its formality \u2014 a wordmark that still felt precise but inviting. The Pocket Coffee Guide grew out of that same impulse: distilling technical tasting language into a friendly, illustrated reference that newcomers could actually use.',
    tools: 'Adobe Illustrator \u2022 Adobe InDesign \u2022 Adobe Photoshop',
    year: '',
    caseStudy: {
      type: 'Print Design',
      // Hero: a click-through booklet of the Pocket Coffee Guide.
      // 16 pages total (1\u201315 plus the 20th, matching the original
      // source page on christianstacy.com). Each page is a Squarespace
      // CDN URL; if you re-host these later, just swap the URLs.
      hero: {
        type: 'booklet',
        pages: [
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/b8a31805-5261-456d-8fc0-deb741f996d9/Sey-Coffee_Pocket-Coffee-Guide-1.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/8e410ecb-f4b8-493e-beff-1c704de5ced2/Sey-Coffee_Pocket-Coffee-Guide-2.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/4aff190a-f21e-4e9f-b87d-6a2cf487ddd8/Sey-Coffee_Pocket-Coffee-Guide-3.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/420ff9a2-eaba-4ad0-aadd-0b663195bdbc/Sey-Coffee_Pocket-Coffee-Guide4.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/b08cb432-ccfc-42e9-8fcc-6a7442a43e9b/Sey-Coffee_Pocket-Coffee-Guide-5.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/22f0812f-c22b-4028-9ae6-84f5faa9f51b/Sey-Coffee_Pocket-Coffee-Guide-6.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/f752cbdc-71fd-4760-9a5b-0c72b6c27bcf/Sey-Coffee_Pocket-Coffee-Guide-7.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/83132c95-2402-4f0f-b726-793c915fe837/Sey-Coffee_Pocket-Coffee-Guide-8.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/5273c38a-d22d-4d91-83af-c3d2bbedba2f/Sey-Coffee_Pocket-Coffee-Guide-9.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/bc14299e-f829-4306-892f-82448cbbd6ee/Sey-Coffee_Pocket-Coffee-Guide-10.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/09ae9d35-3116-4706-bc53-4f401277e961/Sey-Coffee_Pocket-Coffee-Guide-11.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/d1890f61-e36a-475b-820f-074ce088a5d3/Sey-Coffee_Pocket-Coffee-Guide-12.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/0761acca-bc01-437c-b241-a075d4ca5a2e/Sey-Coffee_Pocket-Coffee-Guide-13.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/cf90bf18-6131-490c-988c-4f7b989a255f/Sey-Coffee_Pocket-Coffee-Guide-14.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/6cfdac84-2c95-405a-8dc1-e02ff602d88e/Sey-Coffee_Pocket-Coffee-Guide-15.webp' },
          { src: 'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/6dd3b70d-037f-47cc-921e-c088f009895d/Sey-Coffee_Pocket-Coffee-Guide-20.webp' },
        ],
      },
      sections: [
        {
          src:     'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/e2fe2873-51b9-4618-abe3-dbb4eed81931/OLD-LOGO.webp',
          caption: 'Original Logo \u2014 the starting point of the rebrand.',
        },
        {
          src:     'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/b1925e72-6cb5-4de0-a857-b7d9b092b434/Sey+Wordmark+Lively+IMG%40100x.png',
          caption: 'Redesigned Logo \u2014 a livelier wordmark that opens up the brand to newer coffee drinkers.',
        },
        {
          src:     'https://images.squarespace-cdn.com/content/v1/66ae8fb2f38b4049fcb0a053/43e90fbb-c14c-4527-b6ac-b402dc4d74f1/Logo-Spacing-Guidelines.png',
          caption: 'Logo Spacing Guidelines \u2014 the rules that keep the wordmark breathing across every context.',
        },
      ],
    },
  },
  {
    starIndex: 5,   // 24 Vulpeculae
    category: 'Branding',
    title: 'Infinity Renewable Energy',
    description: 'Sustainable energy means Power to the People.\n\nInfinity Renewable Energy (IRE) is a (fictional) cutting-edge high-tech company that produces energy conducts research on developing renewable energy solutions such as solar cells, wind turbines, hydrogen-based technology, and many other technologies. This is a fortune 500 company who conducts business nationally and internationally. To expand their market-share, the company has decided to sell energy-saving products to consumers within the public sector.\n\nThis rebrand is multi-faceted, moving between branding, print, packaging, and web design. The feel of the brand is a blend of corporate flat and bold, yet elegant swashes, utilizing natural leaf greens, sunshine yellow, and a soft sky blue in its color palette to help market its environmental goals.',
    image:     'https://cursivart.github.io/Thumbs/IRE-Brand-Poster.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/IRE-Brand-Poster.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'The brief asked for a Fortune 500 feel that could also live comfortably on a consumer shelf, which meant balancing corporate authority with approachability. The visual identity system was built around a palette of leaf greens, sunshine yellow, and sky blue, then stress-tested across print, packaging, and web touchpoints to make sure the brand held together at every scale.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop \u2022 Adobe InDesign',
    year: '',
  },
  {
    starIndex: 6,   // 4 Vulpeculae
    category: 'Print',
    title: 'ISOtunes SPORT',
    description: 'IsoTunes is a brand that specializes in produces hearing protection with both passive and active features, depending on the needs of the customer, as well as their price point. This infographic explores a pair of earmuffs with active hearing protection, helping consumers better understand what they\u2019re buying before making an expensive decision.',
    image:     'https://cursivart.github.io/Thumbs/ISOtunes-poster@100x.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/ISOtunes-poster@100x.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Active hearing protection is the kind of technology that\u2019s easy to misunderstand on a spec sheet, so the infographic was structured to walk a curious customer through what they\u2019re actually buying. A cutaway-style illustration anchors the layout; supporting callouts demystify each component without leaning on industry jargon.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
  },
  {
    starIndex: 7,   // 8 Vulpeculae
    category: 'Packaging',
    title: 'Domik Foods',
    description: 'Domik is a fictional direct-to-consumer food brand specializing in handcrafted Russian pastries designed as a shared experience for two.\n\nRather than positioning itself as traditional takeout, Domik focuses on intentional, intimate moments, delivering small, ready-to-enjoy foods that encourage connection and slowing down.\n\nThe brand draws inspiration from the concept of a \u201Cdomik\u201D\u2014a small, cozy home\u2014emphasizing warmth, care, and togetherness.',
    image:     '',
    fullImage: '',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'The packaging needed to feel handcrafted rather than mass-produced \u2014 a sliding box that opens like a small home, with warm color and quiet typography that frames the food as a shared moment rather than takeout. Two logo treatments were developed so the brand could speak softly on the box itself while still anchoring marketing material with confidence.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
  },
  {
    starIndex: 8,   // 23 Vulpeculae
    category: 'Print',
    title: 'Boston Terrier Rescue of East Tennessee',
    description: 'About BTRET: The Boston Terrier Rescue of East Tennessee is an established 501 (c)(3) non-profit organization dedicated to rescuing. rehabilitating and rehoming Boston Terriers. They rely solely on the kindness of our donors, and the income of fundraisers, partnerships and grants to sustain our establishment. For more than a decade, they have pulled Boston Terriers from deadly and desperate situations. They feel it\u2019s their obligation to give these dogs the care they need - temporarily until they find a home, or for life.\n\nThis project sought to create a tri-fold brochure to assist newcomers to the organization who are interested in adopting a dog from either one of their long-term fosters or from their local Boston Terrier shelter. I found a dog on the Adoptables site who really spoke to me, as he seemed to have a little extra sass than the rest, and I decided to give him a full two-page feature.\n\nBTRET\u2019s presence is clean and airy, with comfortable serifs mixed into a functional sans body type, allowing for an easy and practical online experience as potential adopters explore their currently adoptable dogs. The direction of my pamphlet took that breath of fresh air and turned it into a full-on adventure, busting out grassy greens with textured lawn imagery and a fresh tennis ball for good measure. Bright, exciting color mixes in with a front-page call-to-action, finally folding out to reveal a full profile for our pal Odie Roger, along with lots of advice on care for a newly-adopted dog, and a recipe for some sweet treats for those tough nights while they get used to their new home.',
    image:     '',
    fullImage: '',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'BTRET\u2019s online presence is intentionally calm and adopter-friendly, so the brochure stretched that voice toward something more energetic for a new-adopter context \u2014 grassy greens, textured imagery, a literal tennis ball. The unfold was structured so the call-to-action lands on the cover, the full Odie Roger feature lives in the middle spread, and the back panel carries practical care information for the first nights at home.',
    tools: 'Adobe InDesign \u2022 Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
  },
  {
    starIndex: 10,  // 1 Vulpeculae
    category: 'Social Media',
    title: 'Silver Diner',
    description: 'Grand Opening Celebration!\n\nIn my hometown of Fredericksburg, Virginia, November 2024 was an absolute whirlwind of excitement for diner lovers all over town. We were getting a Silver Diner right in the heart of Central Park! I wanted to commemorate this very special occasion with a mock social media campaign and accompanying banner, poised to be placed into their Facebook page.',
    image:     '',
    fullImage: '',
    // Year is real (sourced from the project description \u2014 Nov 2024).
    // ⚠ Process/tools below are placeholder \u2014 replace with real notes.
    process: 'A mock social campaign celebrating the actual November 2024 Silver Diner opening at Central Park in Fredericksburg. The advertisement, profile assets, and Facebook banner were designed as a coordinated set, leaning into the diner\u2019s retro chrome-and-neon identity while making the local-celebration angle the loudest message.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop',
    year: '2024',
  },
  {
    starIndex: 11,  // 19 Vulpeculae
    category: 'Social Media',
    title: 'San Diego Zoo',
    // Source page (christianstacy.com/portfolio/social-san-diego-banner)
    // had no description text — only the title "Advertisement | San
    // Diego Bus Tours Banner" and the image. Add your own description
    // here when ready; the lightbox just leaves the prose area blank
    // for now.
    description: '',
    image:     'https://cursivart.github.io/Thumbs/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'An illustrated web banner for a San Diego bus-tour ad slot. The composition leans on hand-drawn line work over a flat color base, balancing the noisy banner real estate it would compete with against the calmer, more atmospheric feel of a guided tour.',
    tools: 'Procreate \u2022 Adobe Illustrator',
    year: '',
  },
  {
    starIndex: 12,  // Brocchi
    category: 'Print',
    title: 'Ghost in the Shell',
    description: '\u201CAll things change in a dynamic environment. Your effort to remain what you are is what limits you.\u201D \u2014Puppet Master, Ghost in the Shell (1995)\n\nMy purpose behind this project was to recreate the unmistakably elegant yet grungy style of the 1995 film Ghost In The Shell (based on the manga of the same name by Masamune Shirow), while attempting to successfully allow for the beauty of Production I.G.\u2019s anime artistry to seamless flow into the scene.\n\nThe inspiration for this poster was a blend between the first scene of the movie, when Matoko leaps from the penthouse of a corporate skyscraper without concern for her android body, and the scene roughly midway through the film when she speaks to Batou after diving into the nearby river, sharing a brief glimpse of vulnerability and\u2026 perhaps, soul? I briefly entertained redrawing the entire scene, but ended up realizing that Production I. G.\u2019s original cells were above my ability to replicate, and deserved to shine on their own merit, besides.',
    image:     'https://cursivart.github.io/Thumbs/Movie%20Poster_Stacy_Final.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Movie%20Poster_Stacy_Final.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Two scenes from the 1995 film served as the conceptual anchors \u2014 the opening rooftop leap and the midway diving scene. After early thumbnail explorations, the decision was made to incorporate Production I.G.\u2019s original cels directly rather than redraw them, leaning the design work into typography, atmospheric composition, and the grungy texture that defines the film\u2019s look.',
    tools: 'Adobe Photoshop \u2022 Procreate \u2022 Adobe Illustrator',
    year: '',
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
