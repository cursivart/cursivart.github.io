/* ============================================================
   GALLERY SCRIPT — only used on gallery.html.
   Builds the bento grid from `galleryItems` and wires up
   the lightbox interactions. Loaded with `defer`.
   ============================================================ */

  // ============================================================
  // ✏️  EDIT: GALLERY ITEMS
  //
  //   This array is the SINGLE SOURCE OF TRUTH for the gallery.
  //   Add, remove, or reorder items — both the cards on the page
  //   AND the lightbox content will update automatically.
  //
  //   Each item is an object with these keys:
  //     image     — path to the image file (e.g. "images/project-1.jpg")
  //                 Use an empty string "" to keep the colored placeholder.
  //     title     — short project name (shown on hover + in lightbox)
  //     subhead   — small uppercase label (e.g. "Brand identity · 2025")
  //     info      — paragraph of description shown in the lightbox
  //     alt       — short image description for screen readers
  //
  //   To add a new piece: copy one of the {...} blocks below, paste it
  //   in, and edit the values. The grid expands automatically.
  //   To remove: delete its {...} block.
  //   To reorder: cut and paste the {...} blocks in the order you want.
  // ============================================================
  const galleryItems = [
    {
      image: "",
      title: "American Trench",
      subhead: "Branding · Logo, Hang Tag, & 15-YR Celebration Card",
      info: "American Trench is a small apparel brand focused on domestically manufactured clothing and accessories. While the products emphasize quality and origin, there was an opportunity to better communicate this story through thoughtful print materials. This project sought to design a print system for American Trench that highlighted product craftsmanship and reinforced the brand's commitment to American-made goods.",
      alt: "American Trench rebrand preview"
    },
    {
      image: "",
      title: "Glade Creek Cider Co.",
      subhead: "Packaging · Logo & Can Designs",
      info: "Glade Creek is an entirely fictional cider brand that produces craft ciders from their smalltown cidery in Danese, WV, homesite of the Glade Creek Mill: a historic grist mill overlooking a beautiful, flowing set of waterfalls. The brand utilizes themes surrounding Appalachian folklore for its flavors, owing to a youthful yet spooky overall feel.",
      alt: "Glade Creek Cider packaging preview"
    },
    {
      image: "",
      title: "Domik Foods",
      subhead: "Packaging Design",
      info: "Domik is a fictional direct-to-consumer food brand specializing in handcrafted Russian pastries designed as a shared experience for two. Rather than positioning itself as traditional takeout, Domik focuses on intentional, intimate moments, delivering small, ready-to-enjoy foods that encourage connection and slowing down. The brand draws inspiration from the concept of a \"domik\" — a small, cozy home — emphasizing warmth, care, and togetherness.",
      alt: "Domik Foods packaging preview"
    },
    {
      image: "",
      title: "Sey Coffee",
      subhead: "Print · Logo & Pocket Coffee Guide",
      info: "Sey Coffee is a Brooklyn-based specialty coffee roaster known for its minimalist identity and focus on high-quality, single-origin coffees. The brand emphasizes clarity, precision, and the sensory experience of coffee, presenting each offering as distinct and nuanced. Despite this clarity, tasting information can feel overwhelming or overly technical for newer audiences. This focused rebrand captured the welcoming demeanor that Sey's presence was lacking, and cemented itself into a more vivid world meant to stimulate the adventurous minds of the coffeenauts that frequent their NYC tasting room.",
      alt: "Sey Coffee pocket guide preview"
    },
    {
      image: "",
      title: "IsoTunes SPORT",
      subhead: "Illustrated Infographic",
      info: "IsoTunes is a brand that specializes in hearing protection with both passive and active features, depending on the needs of the customer, as well as their price point. This infographic explores a pair of earmuffs with active hearing protection, helping consumers better understand what they're buying before making an expensive decision.",
      alt: "ISOTunes SPORT illustrated infographic preview"
    },
    {
      image: "",
      title: "I. R. E.",
      subhead: "Branding · Rebrand",
      info: "Sustainable energy means Power to the People. Infinity Renewable Energy (IRE) is a fictional cutting-edge high-tech company that produces energy and conducts research on developing renewable energy solutions such as solar cells, wind turbines, hydrogen-based technology, and many other technologies. This rebrand is multi-faceted, moving between branding, print, packaging, and web design. The feel of the brand is a blend of corporate flat and bold, yet elegant swashes, utilizing natural leaf greens, sunshine yellow, and a soft sky blue to help market its environmental goals.",
      alt: "Infinity Renewable Energy rebrand preview"
    },
    {
      image: "",
      title: "Ethereal Streetwear",
      subhead: "Branding · Collaboration",
      info: "\"Long live the rose that grew from concrete when no one else even cared.\" — Tupac Shakur. This collaborative project between myself, Stacy Wells, and Stephanie Austin was the brainchild of Stephanie Austin. She had a vision for an urban street-wear clothing brand whose target audience included people experiencing life's trials, possibly for the first time. Its mission was to bring light and love into their darkest moments, bringing a warm, welcoming tone to its fashion. Each piece is meant to impact wearers and onlookers by forcing them to step back and recognize positivity in a harsh world.",
      alt: "Ethereal Streetwear branding preview"
    },
    {
      image: "",
      title: "Bark & Sole",
      subhead: "Social Banners",
      info: "Bark & Sole is a fictional company specializing in custom-fit dog booties sold from a boutique in Shockoe Bottom, RVA. At Bark & Sole, they treat their dogs like a member of the family, and family means no beans get left behind.",
      alt: "Bark and Sole social banner preview"
    },
    {
      image: "",
      title: "BTRET",
      subhead: "Print · Tri-Fold Brochure",
      info: "Boston Terrier Rescue of Eastern Tennessee — a 501(c)(3) non-profit dedicated to rescuing, rehabilitating, and rehoming Boston Terriers. This project sought to create a tri-fold brochure to assist newcomers to the organization who are interested in adopting a dog from either one of their long-term fosters or from their local Boston Terrier shelter. I found a dog on the Adoptables site who really spoke to me, as he seemed to have a little extra sass than the rest, and I decided to give him a full two-page feature. BTRET's presence is clean and airy, with comfortable serifs mixed into a functional sans body type. The direction of my pamphlet took that breath of fresh air and turned it into a full-on adventure — busting out grassy greens with textured lawn imagery and a fresh tennis ball for good measure. Bright, exciting color mixes in with a front-page call-to-action, finally folding out to reveal a full profile for our pal Odie Roger, along with lots of advice on care for a newly-adopted dog, and a recipe for some sweet treats for those tough nights while they get used to their new home.",
      alt: "BTRET tri-fold brochure preview"
    },
    {
      image: "",
      title: "FXBG, VA",
      subhead: "Print · Postage Stamp Series",
      info: "Goolrick's Pharmacy & Carl's Ice Cream. This project was created with the individuality and cultural beauty that can be found in my hometown of Fredericksburg, Virginia. The focus of each stamp was to emphasize the architecture of the chosen landmark, paying special attention to lighting in order to facilitate a more personal experience of the scene. Readability was prioritized in the title and location information sections for the stamps, potentially making them more eye-catching for stamp buyers.",
      alt: "Fredericksburg, VA postage stamp series preview"
    },
    {
      image: "",
      title: "V.E.T.: Beam Me Up!",
      subhead: "Illustration",
      info: "An illustration piece — V.E.T.: Beam Me Up!",
      alt: "V.E.T Beam Me Up illustration preview"
    },
    {
      image: "",
      title: "Notes From Newarre",
      subhead: "Print · Fan Magazine",
      info: "\"You have to be a bit of a liar to tell a story the right way.\" — Patrick Rothfuss, The Name of the Wind. A love letter to my favorite author and his fabulous illustrator, Dan dos Santos. This idea stemmed from my interest in creating a fan magazine. I wanted to design it as if it were printed within the world itself, much like the book is written. So, there are dedications to certain characters, articles and advertisements to highlight some of the more exciting scenes and events in the story. Lastly, because Dan dos Santos' illustrations for the book are entirely in black and white, I decided to keep with the same theme and play with contrast, brightness and shape instead. The result is a whimsical, graphic-dominated piece with lots of character.",
      alt: "Notes From Newarre fan magazine preview"
    },
    {
      image: "",
      title: "Ghost In The Shell",
      subhead: "Print · Movie Poster",
      info: "\"All things change in a dynamic environment. Your effort to remain what you are is what limits you.\" — Puppet Master, Ghost in the Shell (1995). My purpose behind this project was to recreate the unmistakably elegant yet grungy style of the 1995 film Ghost In The Shell (based on the manga of the same name by Masamune Shirow), while attempting to successfully allow for the beauty of Production I.G.'s anime artistry to seamlessly flow into the scene. The inspiration was a blend between the first scene of the movie, when Motoko leaps from the penthouse of a corporate skyscraper without concern for her android body, and the scene roughly midway through the film when she speaks to Batou after diving into the nearby river, sharing a brief glimpse of vulnerability and… perhaps, soul?",
      alt: "Ghost in the Shell movie poster preview"
    },
    {
      image: "",
      title: "Silver Diner",
      subhead: "Social Branding · Grand Opening",
      info: "In my hometown of Fredericksburg, Virginia, November 2024 was an absolute whirlwind of excitement for diner lovers all over town. We were getting a Silver Diner right in the heart of Central Park! I wanted to commemorate this very special occasion with a mock social media campaign and accompanying banner, poised to be placed into their Facebook page.",
      alt: "Silver Diner social branding preview"
    },
    {
      image: "",
      title: "Color Portrait",
      subhead: "Fine Art · Oil Pastel, 18″ × 24″",
      info: "Oil pastel color portrait, 18″ × 24″.",
      alt: "Color portrait fine art preview"
    }
  ];
  // ============================================================
  // END: GALLERY ITEMS — don't edit anything below this line
  // unless you know what you're doing.
  // ============================================================

  // Render the gallery grid from the data above.
  (function renderGallery() {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;
    grid.innerHTML = galleryItems.map((item, i) => `
      <button class="gallery-card" data-index="${i}" aria-label="Open ${item.title.replace(/"/g, '&quot;')}">
        ${item.image ? `<img class="gallery-card-img" src="${item.image}" alt="${(item.alt || item.title).replace(/"/g, '&quot;')}">` : ''}
        <span class="gallery-card-title"><span>${item.title}</span></span>
      </button>
    `).join('');

    grid.querySelectorAll('.gallery-card').forEach(card => {
      card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index, 10)));
    });
  })();

  // ---- Lightbox controller ----
  const lightbox       = document.getElementById('lightbox');
  const lightboxImg    = document.getElementById('lightboxImage');
  const lightboxTitle  = document.getElementById('lightboxTitle');
  const lightboxSub    = document.getElementById('lightboxSubhead');
  const lightboxInfo   = document.getElementById('lightboxInfo');
  const lightboxClose  = document.getElementById('lightboxClose');

  function openLightbox(index) {
    const item = galleryItems[index];
    if (!item) return;
    if (item.image) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.alt || item.title;
      lightboxImg.style.display = '';
    } else {
      lightboxImg.removeAttribute('src');
      lightboxImg.style.display = 'none';
    }
    lightboxTitle.textContent = item.title;
    lightboxSub.textContent   = item.subhead || '';
    lightboxInfo.textContent  = item.info || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) closeLightbox();
  });
