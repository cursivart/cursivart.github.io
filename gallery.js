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
      subhead: "Branding · Rebrand",
      info: "A rebrand for American Trench. (Replace this paragraph with a sentence or two about the project — what the brief was, what you were going for, anything you're particularly proud of.)",
      alt: "American Trench rebrand preview"
    },
    {
      image: "",
      title: "Glade Creek Cider",
      subhead: "Packaging Design",
      info: "Packaging design for Glade Creek Cider. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Glade Creek Cider packaging preview"
    },
    {
      image: "",
      title: "Domik Foods",
      subhead: "Packaging Design",
      info: "Packaging for Domik Foods. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Domik Foods packaging preview"
    },
    {
      image: "",
      title: "Sey Coffee Pocket Guide",
      subhead: "Print Design",
      info: "A pocket guide print piece for Sey Coffee. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Sey Coffee pocket guide preview"
    },
    {
      image: "",
      title: "ISOTunes SPORT",
      subhead: "Illustrated Infographic",
      info: "An illustrated infographic for ISOTunes SPORT. (Replace this paragraph with a sentence or two about the project.)",
      alt: "ISOTunes SPORT illustrated infographic preview"
    },
    {
      image: "",
      title: "I. R. E.",
      subhead: "Branding · Rebrand",
      info: "A rebrand for Infinity Renewable Energy. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Infinity Renewable Energy rebrand preview"
    },
    {
      image: "",
      title: "Ethereal Streetwear",
      subhead: "Branding · Collaboration",
      info: "A branding collaboration with Ethereal Streetwear. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Ethereal Streetwear branding preview"
    },
    {
      image: "",
      title: "Bark & Sole",
      subhead: "Social Banners",
      info: "Social banner designs for Bark & Sole. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Bark and Sole social banner preview"
    },
    {
      image: "",
      title: "BTRET",
      subhead: "Print · Tri-Fold Brochure",
      info: "A tri-fold brochure for BTRET. (Replace this paragraph with a sentence or two about the project.)",
      alt: "BTRET tri-fold brochure preview"
    },
    {
      image: "",
      title: "Fredericksburg, VA",
      subhead: "Print · Postage Stamp Series",
      info: "A postage stamp series celebrating Fredericksburg, Virginia. (Replace this paragraph with a sentence or two about the project — bonus points for the FXBG-native angle.)",
      alt: "Fredericksburg, VA postage stamp series preview"
    },
    {
      image: "",
      title: "V.E.T: Beam Me Up",
      subhead: "Illustration",
      info: "Illustration work for V.E.T: Beam Me Up. (Replace this paragraph with a sentence or two about the project.)",
      alt: "V.E.T Beam Me Up illustration preview"
    },
    {
      image: "",
      title: "Notes From Newarre",
      subhead: "Print · Fan Magazine",
      info: "A fan magazine, Notes From Newarre. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Notes From Newarre fan magazine preview"
    },
    {
      image: "",
      title: "Ghost In The Shell",
      subhead: "Print · Movie Poster",
      info: "A movie poster for Ghost in the Shell. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Ghost in the Shell movie poster preview"
    },
    {
      image: "",
      title: "Silver Diner",
      subhead: "Social Branding",
      info: "Social branding for Silver Diner. (Replace this paragraph with a sentence or two about the project.)",
      alt: "Silver Diner social branding preview"
    },
    {
      image: "",
      title: "Color Portrait",
      subhead: "Fine Art",
      info: "A color portrait from the fine art portfolio. (Replace this paragraph with a sentence or two about the piece.)",
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
