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
// image:       gallery thumbnail (mobile fallback grid + gallery-toggle view).
//              The lightbox itself reads its hero from caseStudy.hero (below).
// fullImage:   hi-res version of the gallery thumbnail (optional).
// title:       lightbox title (upper-left of the bento).
// description: long-form prose shown beneath the type/year subheading.
// process:     "Process" prose section (right column). Empty → section hides.
// tools:       "Tools & Medium" prose section. Empty → section hides.
// year:        "Year" prose section AND upper-right subheading. Empty → hides.
//
// ── LIGHTBOX SHAPE (every project) ────────────────────────
// Every project uses the bento (case-study) lightbox now. The
// `caseStudy` block describes what gets rendered:
//
//   caseStudy: {
//     type: 'Branding',        // upper-right subheading, left-justified.
//                              // Defaults to the project's `category` if omitted.
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
//     // Empty array = no sections (single-image projects render as
//     // just the hero + title/description).
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
// SHORTHAND: if a project omits the `caseStudy` field entirely, the
// router synthesizes a minimal one from `image`/`fullImage` (just a
// hero, no sections). This is a fallback for projects that haven't
// been migrated yet; the explicit shape above is preferred.
//
// ⚠ PLACEHOLDER NOTE ──────────────────────────────────────
// The `process` and `tools` fields below are PLACEHOLDER content,
// generated as plausible-but-generic defaults since the source pages
// didn't expose this info. Replace each one with your real process
// notes and the actual tools you used. The `year` field is empty for
// most projects (only Silver Diner's year was on the source page);
// fill in the rest as you remember them.

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
        // Foldout product card — outer + inner as a 2-page flipbook.
        {
          type: 'booklet',
          pages: [
            { src: 'https://cursivart.github.io/Full-Q/American-Trench/Foldout-outer%40100x.webp' },
            { src: 'https://cursivart.github.io/Full-Q/American-Trench/Foldout-inner%40100x.webp' },
          ],
          caption: 'Foldout product card \u2014 outer and inner faces communicating origin and craftsmanship.',
        },
        // Hang tag — Side A + Side B as a 2-page flipbook.
        {
          type: 'booklet',
          pages: [
            { src: 'https://cursivart.github.io/Full-Q/American-Trench/tag-sidea%40100x.webp' },
            { src: 'https://cursivart.github.io/Full-Q/American-Trench/tag-sideb%40100x.webp' },
          ],
          caption: 'Horizontal hang tag \u2014 front and back, designed to live on the garment.',
        },
        // Hang tag in real-world context — single mockup shot.
        {
          src: 'https://cursivart.github.io/Full-Q/American-Trench/Hang-tag_Mocked-up.webp',
          caption: 'Hang tag mockup \u2014 the tag in context on the product.',
        },
      ],
    },
  },

  {
    starIndex: 4,   // 12 Vulpeculae
    category: 'Packaging',
    title: 'Glade Creek Cider Co.',
    description: 'Glade Creek is an entirely fictional cider brand that produces craft ciders from their smalltown cidery in Danese, WV, homesite of the Glade Creek Mill: a historic grist mill overlooking a beautiful, flowing set of waterfalls. The brand utilizes themes surrounding Appalachian folklore for its flavors, owing to a youthful yet spooky overall feel.',
    image:     'https://cursivart.github.io/Full-Q/Glade-Creek-Cider/Glade-Creek-Cider_Mothman-Mockup.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider/Glade-Creek-Cider_Mothman-Mockup.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Appalachian folklore drove the visual direction \u2014 Mothman, foxfire, the Brown Mountain Lights. Each flavor was given its own illustrated identity that could live both on the can and as a standalone mark, while a shared typographic system held the family together as one cohesive brand.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop \u2022 Procreate',
    year: '',
    caseStudy: {
      type: 'Packaging',
      // Hero is a flipbook showcasing the full flavor lineup as a
      // single browsable set, rather than promoting one flavor over
      // the others. Order matches the brand's launch sequence.
      hero: {
        type: 'booklet',
        pages: [
          { src: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider/Glade-Creek-Cider_Mothman-Mockup.webp' },
          { src: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider/Glade-Creek-Cider_Foxfire-Mockup.webp' },
          { src: 'https://cursivart.github.io/Full-Q/Glade-Creek-Cider/Glade-Creek-Cider_The-Lights-Mockup.webp' },
        ],
      },
      sections: [],
    },
  },

  {
    starIndex: 9,   // 9 Vulpeculae
    category: 'Social Media',
    title: 'Bark & Sole',
    description: 'Bark & Sole is a fictional company specializing in custom-fit dog booties sold from a boutique in Shockoe Bottom, RVA. At Bark & Sole, they treat their dogs like a member of the family, and family means no beans get left behind.',
    image:     'https://cursivart.github.io/Full-Q/Bark%2BSole/Web-Banner_Instagram.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Bark%2BSole/Web-Banner_Instagram.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'The brand voice for Bark & Sole leans warm and family-oriented, so the social campaign needed to feel inviting rather than aspirational. 3D scenes were built to showcase the booties in playful, seasonal contexts, while the supporting web banner system carried the same identity across Instagram, half-ad, and pop-under formats.',
    tools: 'Blender \u2022 Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
    caseStudy: {
      type: 'Social Media',
      hero: {
        type: 'iframe',
        src: 'https://sketchfab.com/models/1e789002a6104908a882d70242fdbf1a/embed',
        title: 'Bark & Sole | Dog Booties',
      },
      sections: [
        // Valentine's Day promo scene — second Sketchfab 3D environment.
        {
          type: 'iframe',
          src: 'https://sketchfab.com/models/331b1724100c4f8a945e9fff310053d1/embed',
          title: 'Bark & Sole | Valentine\u2019s Day Promo Scene',
          caption: 'Valentine\u2019s Day promo scene \u2014 a second 3D environment for seasonal campaigns.',
        },
        // Logo flipbook: two background treatments of the same two-color mark.
        {
          type: 'booklet',
          pages: [
            { src: 'https://cursivart.github.io/Full-Q/Bark%2BSole/Barknsole_Logo_Two-color_NEG-wBG-fordiscussionboard%40300x.webp' },
            { src: 'https://cursivart.github.io/Full-Q/Bark%2BSole/Barknsole_Logo_Two-color_NEG-noBG-fordiscussionboard%40300x.webp' },
          ],
          caption: 'Two-color logo \u2014 with and without background, for use across light and dark contexts.',
        },
        // Web banner system: three ad formats designed as a coherent set.
        {
          type: 'booklet',
          pages: [
            { src: 'https://cursivart.github.io/Full-Q/Bark%2BSole/Web-Banner_Instagram.webp' },
            { src: 'https://cursivart.github.io/Full-Q/Bark%2BSole/Web-Banner_Half-Ad.webp' },
            { src: 'https://cursivart.github.io/Full-Q/Bark%2BSole/Web-Banner_Pop-Under.webp' },
          ],
          caption: 'Web banner system \u2014 Instagram square, half-ad, and pop-under formats.',
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
    image:     'https://cursivart.github.io/Full-Q/Ethereal-Streetwear/webp/Ethereal%20Streetwear_logopage.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Ethereal-Streetwear/webp/Ethereal%20Streetwear_logopage.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'A collaborative undertaking with Stephanie Austin (whose vision led the brand) and Stacy Wells. The design language balanced the harshness implied by streetwear conventions against the brand\u2019s mission of bringing positivity to people in difficult moments \u2014 typography and patches that read tough on first glance but warm on closer reading.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
    caseStudy: {
      type: 'Branding',
      // The full branding system as a single browsable flipbook —
      // covers logo page, branding guide, business cards, the
      // Cinco de Mayo flyer, Instagram ad, and promo patches.
      hero: {
        type: 'booklet',
        pages: [
          { src: 'https://cursivart.github.io/Full-Q/Ethereal-Streetwear/webp/Ethereal%20Streetwear_logopage.webp' },
          { src: 'https://cursivart.github.io/Full-Q/Ethereal-Streetwear/webp/Ethereal%20Streetwear_Branding%20Guide.webp' },
          { src: 'https://cursivart.github.io/Full-Q/Ethereal-Streetwear/webp/Ethereal%20Streetwear_Business%20Cards.webp' },
          { src: 'https://cursivart.github.io/Full-Q/Ethereal-Streetwear/webp/Ethereal%20Streetwear_CincoDeMayo_Flyer.webp' },
          { src: 'https://cursivart.github.io/Full-Q/Ethereal-Streetwear/webp/Ethereal%20Streetwear_Instagram%20Advertisement.webp' },
          { src: 'https://cursivart.github.io/Full-Q/Ethereal-Streetwear/webp/Promotional%20Patches_Mockup.webp' },
        ],
      },
      sections: [],
    },
  },
  {
    starIndex: 2,   // 15 Vulpeculae
    category: 'Print',
    title: 'Fredericksburg Postage Stamps',
    description: 'This project was created with the individuality and cultural beauty that can be found in my hometown of Fredericksburg, Virginia. The focus of each stamp was to emphasize the architecture of the chosen landmark, paying special attention to lighting in order to facilitate a more personal experience of the scene. Readability was prioritized in the title and location information sections for the stamps, potentially making them more eye-catching for stamp buyers.',
    image:     '',  // ⚠ TODO: add the gallery thumbnail when uploaded
    fullImage: '',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Reference photos of Goolrick\u2019s Pharmacy and Carl\u2019s Ice Cream were used to study how each building catches light at different times of day. Stamp composition concentrated on architectural silhouette and lighting; the typography was tuned to stay legible at the small print sizes a real postage stamp would actually run at.',
    tools: 'Adobe Illustrator \u2022 Procreate',
    year: '',
    // ⚠ TODO: still working on the image set for this project.
    // Replace `hero` and add `sections` once the images are ready.
    caseStudy: {
      type: 'Print',
      hero: {},        // ⚠ no hero yet \u2014 will render empty until populated
      sections: [],
    },
  },
  {
    starIndex: 3,   // 13 Vulpeculae
    category: 'Print',
    title: 'SEY Coffee',
    description: 'Sey Coffee is a Brooklyn-based specialty coffee roaster known for its minimalist identity and focus on high-quality, single-origin coffees. The brand emphasizes clarity, precision, and the sensory experience of coffee, presenting each offering as distinct and nuanced.\n\nDespite this clarity, tasting information can feel overwhelming or overly technical for newer audiences. This focused rebrand captured the welcoming demeanor that Sey\u2019s presence was lacking, and cemented itself into a more vivid world meant to stimulate the adventurous minds of the coffeenauts that frequent their NYC tasting room.',
    image:     'https://cursivart.github.io/Full-Q/SEY-Coffee/Logo/SEY-Wordmarks_SEY%20Logo%20-%20BW%20-%20Lively.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Logo/SEY-Wordmarks_SEY%20Logo%20-%20BW%20-%20Lively.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'The logo refresh aimed to keep Sey\u2019s minimalist character while loosening its formality \u2014 a wordmark that still felt precise but inviting. The Pocket Coffee Guide grew out of that same impulse: distilling technical tasting language into a friendly, illustrated reference that newcomers could actually use.',
    tools: 'Adobe Illustrator \u2022 Adobe InDesign \u2022 Adobe Photoshop',
    year: '',
    caseStudy: {
      type: 'Print Design',
      // Hero: the 20-page Pocket Coffee Guide, now hosted on the
      // cursivart.github.io GitHub Pages assets folder.
      hero: {
        type: 'booklet',
        pages: [
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide2.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide3.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide4.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide5.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide6.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide7.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide8.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide9.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide10.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide11.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide12.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide13.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide14.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide15.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide16.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide17.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide18.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide19.webp' },
          { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Booklet/Sey-Coffee_Pocket-Coffee-Guide20.webp' },
        ],
      },
      sections: [
        // The original logo — the starting point of the rebrand.
        {
          src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Logo/OLD-LOGO.webp',
          caption: 'Original logo \u2014 the starting point of the rebrand.',
        },
        // Early wordmark sketch — raw exploration of form.
        {
          src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Logo/Wordmark-sketch%40100x.webp',
          caption: 'Wordmark sketch \u2014 early formal exploration before the digital refinement.',
        },
        // Three BW wordmark variants: Beans, Lively, No Beans.
        {
          type: 'booklet',
          pages: [
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Logo/SEY-Wordmarks_SEY%20Logo%20-%20BW%20-%20Beans.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Logo/SEY-Wordmarks_SEY%20Logo%20-%20BW%20-%20Lively.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Logo/SEY-Wordmarks_SEY%20Logo%20-%20BW%20-%20No%20Beans.webp' },
          ],
          caption: 'Refined wordmark variants \u2014 Beans, Lively, and No Beans treatments of the same mark.',
        },
        // Logo spacing rules — the system that keeps the mark breathing.
        {
          src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Logo/Logo-Spacing-Guidelines.webp',
          caption: 'Logo spacing guidelines \u2014 the rules that keep the wordmark breathing across every context.',
        },
        // Flavor descriptor icons — 8 illustrated tasting categories.
        {
          type: 'booklet',
          pages: [
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Flavor-icons/Sey-descriptor-Icons_Berry.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Flavor-icons/Sey-descriptor-Icons_Chocolate.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Flavor-icons/Sey-descriptor-Icons_Citrus.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Flavor-icons/Sey-descriptor-Icons_Floral.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Flavor-icons/Sey-descriptor-Icons_Fruity.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Flavor-icons/Sey-descriptor-Icons_Herbal.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Flavor-icons/Sey-descriptor-Icons_Honey.webp' },
            { src: 'https://cursivart.github.io/Full-Q/SEY-Coffee/Flavor-icons/Sey-descriptor-Icons_Tropical.webp' },
          ],
          caption: 'Flavor descriptor icons \u2014 a tasting-vocabulary toolkit built to make the guide approachable for newer drinkers.',
        },
      ],
    },
  },
  {
    starIndex: 5,   // 24 Vulpeculae
    category: 'Branding',
    title: 'Infinity Renewable Energy',
    description: 'Sustainable energy means Power to the People.\n\nInfinity Renewable Energy (IRE) is a (fictional) cutting-edge high-tech company that produces energy conducts research on developing renewable energy solutions such as solar cells, wind turbines, hydrogen-based technology, and many other technologies. This is a fortune 500 company who conducts business nationally and internationally. To expand their market-share, the company has decided to sell energy-saving products to consumers within the public sector.\n\nThis rebrand is multi-faceted, moving between branding, print, packaging, and web design. The feel of the brand is a blend of corporate flat and bold, yet elegant swashes, utilizing natural leaf greens, sunshine yellow, and a soft sky blue in its color palette to help market its environmental goals.',
    image:     'https://cursivart.github.io/Full-Q/IRE/IRE-Brand-Poster.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/IRE/IRE-Brand-Poster.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'The brief asked for a Fortune 500 feel that could also live comfortably on a consumer shelf, which meant balancing corporate authority with approachability. The visual identity system was built around a palette of leaf greens, sunshine yellow, and sky blue, then stress-tested across print, packaging, and web touchpoints to make sure the brand held together at every scale.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop \u2022 Adobe InDesign',
    year: '',
    caseStudy: {
      type: 'Branding',
      // Hero: the brand poster — the single strongest visual summary.
      hero: {
        type: 'image',
        src:     'https://cursivart.github.io/Full-Q/IRE/IRE-Brand-Poster.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/IRE/IRE-Brand-Poster.webp',
      },
      sections: [
        // Visual Identity System manual — a 28-page flipbook covering
        // the full rebrand. Click through to see logo construction,
        // color palette, type system, touchpoint applications, etc.
        {
          type: 'booklet',
          pages: [
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System2.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System3.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System4.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System5.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System6.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System7.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System8.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System9.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System10.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System11.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System12.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System13.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System14.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System15.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System16.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System17.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System18.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System19.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System20.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System21.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System22.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System23.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System24.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System25.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System26.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System27.webp' },
          { src: 'https://cursivart.github.io/Full-Q/IRE/VIS-Manual/IRE_Visual-Identity-System28.webp' },
          ],
          caption: 'Visual Identity System Manual \u2014 28 pages covering logo construction, palette, typography, and touchpoint applications.',
        },
      ],
    },
  },
  {
    starIndex: 6,   // 4 Vulpeculae
    category: 'Print',
    title: 'ISOtunes SPORT',
    description: 'IsoTunes is a brand that specializes in produces hearing protection with both passive and active features, depending on the needs of the customer, as well as their price point. This infographic explores a pair of earmuffs with active hearing protection, helping consumers better understand what they\u2019re buying before making an expensive decision.',
    image:     'https://cursivart.github.io/Full-Q/ISOTunes/ISOtunes-poster%40100x.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/ISOTunes/ISOtunes-poster%40100x.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Active hearing protection is the kind of technology that\u2019s easy to misunderstand on a spec sheet, so the infographic was structured to walk a curious customer through what they\u2019re actually buying. A cutaway-style illustration anchors the layout; supporting callouts demystify each component without leaning on industry jargon.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
    caseStudy: {
      type: 'Print',
      // Single-image project: the infographic poster is the entire work.
      hero: {
        type: 'image',
        src:     'https://cursivart.github.io/Full-Q/ISOTunes/ISOtunes-poster%40100x.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/ISOTunes/ISOtunes-poster%40100x.webp',
      },
      sections: [],
    },
  },
  {
    starIndex: 7,   // 8 Vulpeculae
    category: 'Packaging',
    title: 'Domik Foods',
    description: 'Domik is a fictional direct-to-consumer food brand specializing in handcrafted Russian pastries designed as a shared experience for two.\n\nRather than positioning itself as traditional takeout, Domik focuses on intentional, intimate moments, delivering small, ready-to-enjoy foods that encourage connection and slowing down.\n\nThe brand draws inspiration from the concept of a \u201Cdomik\u201D\u2014a small, cozy home\u2014emphasizing warmth, care, and togetherness.',
    image:     'https://cursivart.github.io/Full-Q/Domik/Domik_Sliding-Box-Mockup%20copy.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Domik/Domik_Sliding-Box-Mockup%20copy.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'The packaging needed to feel handcrafted rather than mass-produced \u2014 a sliding box that opens like a small home, with warm color and quiet typography that frames the food as a shared moment rather than takeout. Two logo treatments were developed so the brand could speak softly on the box itself while still anchoring marketing material with confidence.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
    caseStudy: {
      type: 'Packaging',
      // Hero: the sliding-box mockup \u2014 the most product-forward shot.
      hero: {
        type: 'image',
        src:     'https://cursivart.github.io/Full-Q/Domik/Domik_Sliding-Box-Mockup%20copy.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/Domik/Domik_Sliding-Box-Mockup%20copy.webp',
      },
      sections: [
        // Logo flipbook: two variants of the brand mark.
        {
          type: 'booklet',
          pages: [
            { src: 'https://cursivart.github.io/Full-Q/Domik/Domik_Logo-1.webp' },
            { src: 'https://cursivart.github.io/Full-Q/Domik/Domik_Logo-2.webp' },
          ],
          caption: 'Brand mark \u2014 two treatments developed for different contexts.',
        },
        // Pirozhki dieline \u2014 the technical drawing for the packaging.
        {
          src: 'https://cursivart.github.io/Full-Q/Domik/Domik-Pirozhki_Dieline.webp',
          caption: 'Pirozhki dieline \u2014 the structural drawing that turns the brand into a physical object.',
        },
      ],
    },
  },
  {
    starIndex: 8,   // 23 Vulpeculae
    category: 'Print',
    title: 'Boston Terrier Rescue of East Tennessee',
    description: 'About BTRET: The Boston Terrier Rescue of East Tennessee is an established 501 (c)(3) non-profit organization dedicated to rescuing. rehabilitating and rehoming Boston Terriers. They rely solely on the kindness of our donors, and the income of fundraisers, partnerships and grants to sustain our establishment. For more than a decade, they have pulled Boston Terriers from deadly and desperate situations. They feel it\u2019s their obligation to give these dogs the care they need - temporarily until they find a home, or for life.\n\nThis project sought to create a tri-fold brochure to assist newcomers to the organization who are interested in adopting a dog from either one of their long-term fosters or from their local Boston Terrier shelter. I found a dog on the Adoptables site who really spoke to me, as he seemed to have a little extra sass than the rest, and I decided to give him a full two-page feature.\n\nBTRET\u2019s presence is clean and airy, with comfortable serifs mixed into a functional sans body type, allowing for an easy and practical online experience as potential adopters explore their currently adoptable dogs. The direction of my pamphlet took that breath of fresh air and turned it into a full-on adventure, busting out grassy greens with textured lawn imagery and a fresh tennis ball for good measure. Bright, exciting color mixes in with a front-page call-to-action, finally folding out to reveal a full profile for our pal Odie Roger, along with lots of advice on care for a newly-adopted dog, and a recipe for some sweet treats for those tough nights while they get used to their new home.',
    image:     'https://cursivart.github.io/Full-Q/BTRET/Tri-Fold-Brochure_BTRET_Stacy.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/BTRET/Tri-Fold-Brochure_BTRET_Stacy.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'BTRET\u2019s online presence is intentionally calm and adopter-friendly, so the brochure stretched that voice toward something more energetic for a new-adopter context \u2014 grassy greens, textured imagery, a literal tennis ball. The unfold was structured so the call-to-action lands on the cover, the full Odie Roger feature lives in the middle spread, and the back panel carries practical care information for the first nights at home.',
    tools: 'Adobe InDesign \u2022 Adobe Illustrator \u2022 Adobe Photoshop',
    year: '',
    caseStudy: {
      type: 'Print',
      // Hero: the tri-fold brochure flat art \u2014 outer + inner spreads
      // as a 2-page flipbook so visitors can see both sides without
      // hunting for the unfold.
      hero: {
        type: 'booklet',
        pages: [
          { src: 'https://cursivart.github.io/Full-Q/BTRET/Tri-Fold-Brochure_BTRET_Stacy.webp' },
          { src: 'https://cursivart.github.io/Full-Q/BTRET/Tri-Fold-Brochure_BTRET_Stacy2.webp' },
        ],
      },
      sections: [
        // In-context mockups: standing and table presentations of the
        // same brochure, paired as a flipbook so the section reads as
        // one "in the world" view rather than two separate pieces.
        {
          type: 'booklet',
          pages: [
            { src: 'https://cursivart.github.io/Full-Q/BTRET/Standing-Mockup.webp' },
            { src: 'https://cursivart.github.io/Full-Q/BTRET/Table-Mockup.webp' },
          ],
          caption: 'Brochure in context \u2014 standing and table mockups showing how the piece reads in the wild.',
        },
      ],
    },
  },
  {
    starIndex: 10,  // 1 Vulpeculae
    category: 'Social Media',
    title: 'Silver Diner',
    description: 'Grand Opening Celebration!\n\nIn my hometown of Fredericksburg, Virginia, November 2024 was an absolute whirlwind of excitement for diner lovers all over town. We were getting a Silver Diner right in the heart of Central Park! I wanted to commemorate this very special occasion with a mock social media campaign and accompanying banner, poised to be placed into their Facebook page.',
    image:     '',  // ⚠ TODO: add the gallery thumbnail when uploaded
    fullImage: '',
    // Year is real (sourced from the project description \u2014 Nov 2024).
    // ⚠ Process/tools below are placeholder \u2014 replace with real notes.
    process: 'A mock social campaign celebrating the actual November 2024 Silver Diner opening at Central Park in Fredericksburg. The advertisement, profile assets, and Facebook banner were designed as a coordinated set, leaning into the diner\u2019s retro chrome-and-neon identity while making the local-celebration angle the loudest message.',
    tools: 'Adobe Illustrator \u2022 Adobe Photoshop',
    year: '2024',
    // ⚠ TODO: still working on the image set for this project.
    // Replace `hero` and add `sections` once the images are ready.
    caseStudy: {
      type: 'Social Media',
      hero: {},        // ⚠ no hero yet \u2014 will render empty until populated
      sections: [],
    },
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
    image:     'https://cursivart.github.io/Full-Q/San-Diego-Zoo/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/San-Diego-Zoo/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'An illustrated web banner for a San Diego bus-tour ad slot. The composition leans on hand-drawn line work over a flat color base, balancing the noisy banner real estate it would compete with against the calmer, more atmospheric feel of a guided tour.',
    tools: 'Procreate \u2022 Adobe Illustrator',
    year: '',
    caseStudy: {
      type: 'Social Media',
      // Hero: the refined final banner art.
      hero: {
        type: 'image',
        src:     'https://cursivart.github.io/Full-Q/San-Diego-Zoo/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/San-Diego-Zoo/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
      },
      sections: [
        // Early sketches \u2014 the visual thinking behind the final piece.
        {
          src: 'https://cursivart.github.io/Full-Q/San-Diego-Zoo/Zoo-Banner-Sketches.webp',
          caption: 'Sketch explorations \u2014 early compositional thinking before the refined banner came together.',
        },
      ],
    },
  },
  {
    starIndex: 12,  // Brocchi
    category: 'Print',
    title: 'Ghost in the Shell',
    description: '\u201CAll things change in a dynamic environment. Your effort to remain what you are is what limits you.\u201D \u2014Puppet Master, Ghost in the Shell (1995)\n\nMy purpose behind this project was to recreate the unmistakably elegant yet grungy style of the 1995 film Ghost In The Shell (based on the manga of the same name by Masamune Shirow), while attempting to successfully allow for the beauty of Production I.G.\u2019s anime artistry to seamless flow into the scene.\n\nThe inspiration for this poster was a blend between the first scene of the movie, when Matoko leaps from the penthouse of a corporate skyscraper without concern for her android body, and the scene roughly midway through the film when she speaks to Batou after diving into the nearby river, sharing a brief glimpse of vulnerability and\u2026 perhaps, soul? I briefly entertained redrawing the entire scene, but ended up realizing that Production I. G.\u2019s original cells were above my ability to replicate, and deserved to shine on their own merit, besides.',
    image:     'https://cursivart.github.io/Full-Q/Movie%20Poster_Stacy_Final.webp',
    fullImage: 'https://cursivart.github.io/Full-Q/Movie%20Poster_Stacy_Final.webp',
    // ⚠ Placeholder process/tools — replace with real notes.
    process: 'Two scenes from the 1995 film served as the conceptual anchors \u2014 the opening rooftop leap and the midway diving scene. After early thumbnail explorations, the decision was made to incorporate Production I.G.\u2019s original cels directly rather than redraw them, leaning the design work into typography, atmospheric composition, and the grungy texture that defines the film\u2019s look.',
    tools: 'Adobe Photoshop \u2022 Procreate \u2022 Adobe Illustrator',
    year: '',
    // ⚠ TODO: still working on additional images for this project.
    // For now the case study is just the single finished poster.
    caseStudy: {
      type: 'Print',
      hero: {
        type: 'image',
        src:     'https://cursivart.github.io/Full-Q/Movie%20Poster_Stacy_Final.webp',
        fullSrc: 'https://cursivart.github.io/Full-Q/Movie%20Poster_Stacy_Final.webp',
      },
      sections: [],
    },
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
