/* ═══════════════════════════════════════════════════════════
   shared.js — compiled from index.html
   Link this file from every page:
   <script src="/shared.js"></script>
═══════════════════════════════════════════════════════════ */

// ── CLOUD SHAPES + DATA ──────────────────────────────────
// ─────────────────────────────────────────────
// YOUR CLOUD SHAPES
// Each entry: viewBox dimensions + the SVG path d attribute
// ─────────────────────────────────────────────
const cloudShapes = {
  cloud1: {
    vbW: 953.51, vbH: 311.19,
    d: "M953.46,218.14c-1.11-8.24-2.21-16.48-3.32-24.72-4.42-15.75-12.39-29.43-23.92-41.04-18.2-16.7-40.56-27.24-65.76-27.24h-139.69c4.55-10.02,6.61-20.71,6.18-32.08-1.11-8.24-2.21-16.48-3.32-24.72-4.42-15.75-12.39-29.43-23.92-41.04C681.52,10.59,659.16.06,633.96.06H93.06c-12.8-.48-24.75,2.19-35.83,8.01-11.53,3.75-21.51,10.16-29.93,19.23-9.07,8.42-15.48,18.4-19.23,29.93C2.24,68.31-.43,80.25.06,93.06l3.32,24.72c4.42,15.75,12.39,29.43,23.92,41.04,18.2,16.7,40.56,27.24,65.76,27.24h149.79c-2.27,4.65-3.48,9.8-3.24,15.18.87,19.5,15.82,36,36,36h41.41c.25,1.88.5,3.75.76,5.63,4.42,15.75,12.39,29.43,23.92,41.04,18.2,16.7,40.56,27.24,65.76,27.24h453c12.8.48,24.75-2.19,35.83-8.01,11.53-3.75,21.51-10.16,29.93-19.23,9.07-8.42,15.48-18.4,19.23-29.93,5.82-11.08,8.49-23.03,8.01-35.83Z"
  },
  cloud2: {
    vbW: 798.06, vbH: 395.39,
    d: "M797.99,288.33c-1.27-9.48-2.55-18.96-3.82-28.44-5.08-18.13-14.26-33.86-27.52-47.22l-21.66-16.73c-16.69-9.68-34.69-14.55-54-14.61h-149.73c-5.02-9.79-11.53-18.72-19.53-26.78-7.22-5.58-14.44-11.15-21.66-16.73-16.69-9.68-34.69-14.55-54-14.61-3.99-.15-7.9-.03-11.74.36-.9-6.68-1.8-13.36-2.69-20.04-5.08-18.13-14.26-33.86-27.52-47.22-7.22-5.58-14.44-11.15-21.66-16.73-16.69-9.68-34.69-14.55-54-14.61-14.73-.56-28.47,2.52-41.22,9.22-8.77,2.85-16.76,7.06-23.97,12.59-3.72-5.43-7.96-10.56-12.74-15.37-7.22-5.58-14.44-11.15-21.66-16.73C212.18,4.99,194.18.12,174.87.06c-14.73-.56-28.47,2.52-41.22,9.22-13.27,4.32-24.74,11.69-34.44,22.12-10.43,9.69-17.81,21.17-22.12,34.44-6.7,12.75-9.77,26.49-9.22,41.22,1.17,8.74,2.35,17.48,3.52,26.21-10.7.3-21.78,5.02-29.32,12.57-7.46,7.46-13.07,19.69-12.59,30.41.48,10.61,4.44,20.47,10.89,28.06-3.14,2.53-6.13,5.31-8.96,8.36-10.43,9.69-17.81,21.17-22.12,34.44C2.58,259.86-.49,273.6.06,288.33c1.27,9.48,2.55,18.96,3.82,28.44,5.08,18.13,14.26,33.86,27.52,47.22,7.22,5.58,14.44,11.15,21.66,16.73,16.69,9.68,34.69,14.55,54.01,14.61h583.93c14.73.56,28.47-2.52,41.22-9.22,13.27-4.32,24.74-11.69,34.44-22.12,10.43-9.69,17.81-21.17,22.12-34.44,6.7-12.75,9.77-26.49,9.22-41.22Z"
  },
  cloud3: {
    vbW: 782.48, vbH: 488.29,
    d: "M.05,318.48l3.29-24.46c4.37-15.59,12.26-29.12,23.66-40.6,3.01-2.76,6.14-5.35,9.37-7.75-1.95-6.98-2.8-14.26-2.51-21.85,1.1-8.15,2.19-16.3,3.29-24.46,4.37-15.59,12.26-29.12,23.66-40.6,18-16.52,40.13-26.95,65.05-26.95,5.66-.21,11.15.2,16.48,1.23.71-5.29,1.42-10.58,2.13-15.87,7.58-27.02,21.25-50.48,41.02-70.38,10.76-8.31,21.52-16.63,32.28-24.94C242.65,7.44,269.48.18,298.27.1c21.96-.83,42.44,3.75,61.45,13.74,19.77,6.43,36.88,17.43,51.33,32.98,15.55,14.45,26.55,31.56,32.98,51.33,9.99,19.01,14.57,39.49,13.74,61.45l-2.83,21.07c17.63-15.49,39.05-25.17,63.07-25.17,12.67-.48,24.48,2.16,35.45,7.92,11.41,3.71,21.28,10.05,29.61,19.02,8.97,8.33,15.31,18.2,19.02,29.61,5.76,10.96,8.4,22.78,7.92,35.45-1.1,8.15-2.19,16.3-3.29,24.46-.34,1.21-.72,2.4-1.1,3.59,13.64,2.91,25.46,14.64,26.89,28.7h57.91c12.67-.48,24.48,2.16,35.45,7.92,11.41,3.71,21.28,10.05,29.61,19.02,8.97,8.33,15.31,18.2,19.02,29.61,5.76,10.96,8.4,22.78,7.92,35.45-1.1,8.15-2.19,16.3-3.29,24.46-4.37,15.59-12.26,29.12-23.66,40.6-18,16.52-40.13,26.95-65.05,26.95H176.57c-12.67.48-24.48-2.16-35.45-7.92-11.41-3.71-21.28-10.05-29.61-19.02-8.97-8.33-15.31-18.2-19.02-29.61-3.55-6.76-5.91-13.84-7.09-21.25-10.17-.52-19.77-3.14-28.79-7.88-11.41-3.71-21.28-10.05-29.61-19.02-8.97-8.33-15.31-18.2-19.02-29.61C2.22,342.97-.42,331.15.05,318.48Z"
  },
  cloud4: {
    vbW: 961.52, vbH: 434.06,
    d: "M961.49,392.56c-1.01-22.48-18.23-41.5-41.5-41.5h-50.69c4.81-8.41,7.8-18.28,7.4-27.3-.64-14.22-5.31-28.98-16.11-38.89-10.76-9.88-23.99-16.11-38.89-16.11h-49.85c1.98-7.57,2.81-15.44,2.5-23.63l-3.75-27.91c-4.99-17.79-13.99-33.23-27-46.33-7.08-5.47-14.17-10.95-21.25-16.42-16.38-9.5-34.04-14.28-53-14.34h-61.19c4.77-10.97,6.93-22.66,6.47-35.06-1.25-9.3-2.5-18.61-3.75-27.91-4.99-17.79-13.99-33.23-27-46.33l-21.25-16.42C546.25,4.9,528.58.12,509.63.06c-14.46-.55-27.94,2.47-40.45,9.04-13.02,4.23-24.28,11.47-33.79,21.71-10.24,9.51-17.48,20.77-21.71,33.79-4.14,7.88-6.87,16.15-8.18,24.81-.51-.01-1.01-.04-1.52-.04-14.1,0-28.92,6.14-38.89,16.11-8.57,8.57-15.21,22.05-16.04,34.64h-60.56c-14.46-.55-27.94,2.47-40.45,9.04-13.02,4.23-24.28,11.47-33.79,21.71-10.24,9.51-17.48,20.77-21.71,33.79-.5.95-.97,1.91-1.43,2.87-.44-.44-.87-.88-1.33-1.3-10.76-9.88-23.99-16.11-38.89-16.11-14.1,0-28.92,6.14-38.89,16.11-9.54,9.54-16.72,25.19-16.11,38.89.04.89.1,1.79.17,2.68-2.79-1.06-5.83-1.65-9.06-1.65-12.49,0-24.48,10.08-25.88,22.6h-6.07c-14.1,0-28.92,6.14-38.89,16.11C6.61,294.41-.58,310.06.04,323.76c.64,14.22,5.31,28.98,16.11,38.89,10.76,9.88,23.99,16.11,38.89,16.11h91.13c-1.68,4.55-2.59,9.31-2.39,13.8,1.01,22.48,18.23,41.5,41.5,41.5h734.72c10.64,0,21.82-4.63,29.34-12.16s12.62-19.01,12.16-29.34Z"
  },
};

// ─────────────────────────────────────────────
// CLOUD DATA — edit images / labels / links freely
// shape refers to a key in cloudShapes above
// ─────────────────────────────────────────────
// ── EDIT YOUR IMAGES & LABELS HERE ──────────────────────────────────────────
// Each cloud has:
//   shape    — which of your 4 cloud SVGs to use (cloud1 / cloud2 / cloud3 / cloud4)
//   displayW — rendered width in px (height auto-scales to match the SVG aspect ratio)
//   image    — URL or local path to the photo shown inside the cloud on hover
//   label    — clickable text that appears on hover
//   href     — where that label links to
//   top      — vertical position in the sky (% from top of stage)
//   duration — seconds to cross the full screen (higher = slower)
//   delay    — negative values place the cloud mid-journey on page load
// ─────────────────────────────────────────────────────────────────────────────
const clouds = [
  {
    shape: 'cloud1',
    displayW: 374,
    image: '/projects/Beam%20Me%20Up_nologo.webp',
    label: 'Beam Me Up',
    href: '#project-1',
    top: '3%',
    duration: 75,
  },
  {
    shape: 'cloud2',
    displayW: 440,
    image: '/projects/Burn_nosig.webp',
    label: 'Burn',
    href: '#project-2',
    top: '25%',
    duration: 90,
  },
  {
    shape: 'cloud3',
    displayW: 323,
    image: '/projects/Crater-Lake-National-Park_Stacy.webp',
    label: 'Crater Lake',
    href: '#project-3',
    top: '30%',
    duration: 80,
  },
  {
    shape: 'cloud4',
    displayW: 425,
    image: '/projects/FlightGeov5-Poster-design.webp',
    label: 'Flight Geo',
    href: '#project-4',
    top: '5%',
    duration: 100,
  },
  {
    shape: 'cloud1',
    displayW: 357,
    image: '/projects/Glade-Creek-Cider_Mothman-Mockup.png',
    label: 'Glade Creek Cider',
    href: '#project-5',
    top: '40%',
    duration: 70,
  },
  {
    shape: 'cloud3',
    displayW: 391,
    image: '/projects/IRE-Brand-Poster.webp',
    label: 'IRE Rebrand',
    href: '#project-6',
    top: '10%',
    duration: 85,
  },
  {
    shape: 'cloud4',
    displayW: 340,
    image: '/projects/ISOtunes-poster@100x.png',
    label: 'ISOtunes Infographic',
    href: '#project-7',
    top: '38%',
    duration: 95,
  },
  {
    shape: 'cloud1',
    displayW: 408,
    image: '/projects/Movie%20Poster_Stacy_Final.webp',
    label: 'G.i.t.S. Movie Poster',
    href: '#project-8',
    top: '18%',
    duration: 78,
  },
  {
    shape: 'cloud2',
    displayW: 306,
    image: '/projects/Refined%20Sketch_San%20Diego%20Zoo_Bus%20Tours_forDribbble.webp',
    label: 'San Diego Zoo Banner',
    href: '#project-9',
    top: '38%',
    duration: 88,
  },
  {
    shape: 'cloud3',
    displayW: 433,
    image: '/projects/Web-Banner_Instagram.jpg',
    label: 'Bark & Sole Insta Ad',
    href: '#project-10',
    top: '27%',
    duration: 72,
  },
].map(function(c, i, arr) {
  // Each cloud's delay is a fraction of *its own* duration, so it starts
  // evenly spaced within its personal cycle regardless of how fast it moves.
  // This preserves the parallax feel while eliminating clumping.
  return Object.assign({}, c, {
    delay: -Math.round((i / arr.length) * c.duration),
  });
});


const NS = 'http://www.w3.org/2000/svg';
const stage = document.getElementById('stage');

function svgEl(tag, attrs) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

clouds.forEach(function(c, i) {
  const shape = cloudShapes[c.shape];
  // Preserve aspect ratio from the original viewBox
  const displayH = Math.round(c.displayW * (shape.vbH / shape.vbW));
  const vb = '0 0 ' + shape.vbW + ' ' + shape.vbH;
  const clipId = 'clip_' + i;

  // Wrapper
  const wrap = document.createElement('div');
  wrap.className = 'cloud-wrap ' + (i % 2 === 0 ? 'cloud-from-left' : 'cloud-from-right');
  wrap.style.top = c.top;
  wrap.style.width = c.displayW + 'px';
  wrap.style.height = displayH + 'px';
  wrap.style.animationDuration = c.duration + 's';
  wrap.style.animationDelay = c.delay + 's';
  // Store authored sizes as a permanent source of truth so desktop scaling
  // and mobile layout scripts can each work from clean original values.
  wrap.dataset.origW    = c.displayW;
  wrap.dataset.origH    = displayH;
  wrap.dataset.topFrac  = parseFloat(c.top) / 100;

  // ── Layer 1: white cloud base (provides the drop-shadow outline) ──
  const svgBase = svgEl('svg', { class: 'cloud-svg', width: c.displayW, height: displayH, viewBox: vb });
  svgBase.style.cssText = 'position:absolute;top:0;left:0;z-index:1;overflow:visible;';

  const defs = svgEl('defs', {});
  const clip = svgEl('clipPath', { id: clipId });
  clip.appendChild(svgEl('path', { d: shape.d }));
  defs.appendChild(clip);
  svgBase.appendChild(defs);
  svgBase.appendChild(svgEl('path', { d: shape.d, fill: 'white' }));
  wrap.appendChild(svgBase);

  // ── Layer 2: clipped image (invisible at rest) ──
  const imgWrap = document.createElement('div');
  imgWrap.className = 'cloud-image-wrap';
  // Use SVG clipPath via url reference — works because clipPath uses userSpaceOnUse coords
  // We scale via a wrapping SVG instead, so we use a CSS mask approach here
  imgWrap.style.cssText = 'position:absolute;inset:0;z-index:2;';

  // Render image clipped by the cloud path using an inner SVG foreignObject approach
  // Most reliable: use a second SVG with the clip applied, containing an image element
  const svgImg = svgEl('svg', { width: c.displayW, height: displayH, viewBox: vb });
  svgImg.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
  const imgClipId = 'imgclip_' + i;
  const defs2 = svgEl('defs', {});
  const clip2 = svgEl('clipPath', { id: imgClipId });
  clip2.appendChild(svgEl('path', { d: shape.d }));
  defs2.appendChild(clip2);
  svgImg.appendChild(defs2);

  const svgImage = svgEl('image', {
    href: c.image,
    x: 0, y: 0,
    width: shape.vbW,
    height: shape.vbH,
    preserveAspectRatio: 'xMidYMid slice',
    'clip-path': 'url(#' + imgClipId + ')',
  });
  svgImg.appendChild(svgImage);
  imgWrap.appendChild(svgImg);
  wrap.appendChild(imgWrap);

  // ── Layer 3: white veil (fades away on hover) ──
  const svgVeil = svgEl('svg', { class: 'cloud-veil', width: c.displayW, height: displayH, viewBox: vb });
  svgVeil.style.cssText = 'position:absolute;top:0;left:0;z-index:3;';
  svgVeil.appendChild(svgEl('path', { d: shape.d, fill: 'white' }));
  wrap.appendChild(svgVeil);

  // ── Layer 4: hover label ──
  const label = document.createElement('div');
  label.className = 'cloud-label';
  label.style.cssText = 'z-index:4;';
  const link = document.createElement('a');
  link.href = c.href;
  link.textContent = c.label;
  label.appendChild(link);

  // ── Layer 5: ellipse hitbox — smaller than bounding box, drives hover + click ──
  const hit = document.createElement('div');
  hit.className = 'cloud-hit';
  hit.addEventListener('click', function() {
    openLightbox(c.image, c.label);
  });
  wrap.appendChild(hit);

  // On mobile the hitbox has pointer-events:none, so listen on the wrap instead
  wrap.addEventListener('click', function(e) {
    if (e.target === hit) return; // already handled above on desktop
    openLightbox(c.image, c.label);
  });
  wrap.appendChild(label);

  stage.appendChild(wrap);
});

// Stagger-preload all cloud images so requests don't all compete at once.
// The first two are already covered by <link rel="preload"> in the <head>;
// this handles the rest progressively in the background.
clouds.forEach(function(c, i) {
  setTimeout(function() {
    var img = new Image();
    img.src = c.image;
  }, i * 200);
});

// ── DESKTOP: fit all clouds within the visible stage height ──────────────────
(function initDesktopCloudFit() {
  if (window.matchMedia('(max-width: 900px)').matches) return;

  var wraps = Array.from(document.querySelectorAll('.cloud-wrap'));
  var padding = 24;

  function fit() {
    if (window.matchMedia('(max-width: 900px)').matches) return;
    var stageH = stage.offsetHeight;
    if (!stageH) return;

    var minScale = Infinity;
    wraps.forEach(function(wrap) {
      var origH   = parseFloat(wrap.dataset.origH);
      var topFrac = parseFloat(wrap.dataset.topFrac);
      if (!origH) return;
      var available = stageH - padding - (topFrac * stageH) - padding;
      if (available <= 0) return;
      var s = available / origH;
      if (s < minScale) minScale = s;
    });
    if (!isFinite(minScale) || minScale > 1) minScale = 1;

    wraps.forEach(function(wrap) {
      var origW = parseFloat(wrap.dataset.origW);
      var origH = parseFloat(wrap.dataset.origH);
      if (!origW || !origH) return;
      var newW = Math.round(origW * minScale);
      var newH = Math.round(origH * minScale);
      wrap.style.width  = newW + 'px';
      wrap.style.height = newH + 'px';
      wrap.querySelectorAll('svg').forEach(function(svg) {
        svg.setAttribute('width',  newW);
        svg.setAttribute('height', newH);
      });
    });
  }

  // Run after full paint so stage.offsetHeight is fully resolved.
  // 'load' fires after all resources; the rAF inside ensures we're
  // past the paint that commits the flex layout.
  function runFit() {
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        fit();
      });
    });
  }

  if (document.readyState === 'complete') {
    runFit();
  } else {
    window.addEventListener('load', runFit);
  }

  var resizeTimer;
  window.addEventListener('resize', function() {
    if (window.matchMedia('(max-width: 900px)').matches) return;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fit, 100);
  });
}());

// ── CLOUD BUILD + DESKTOP FIT ────────────────────────────
function initMobileClouds() {
    if (!window.matchMedia('(max-width: 900px)').matches) return;
    const wraps = Array.from(document.querySelectorAll('.cloud-wrap'));
    if (!wraps.length) return;

    const vw = () => Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        const viewH = window.innerHeight;
        const stageH = viewH * 3.4; // matches the min-height: 340vh CSS rule exactly

        const heights = wraps.map(function(w) {
          return parseFloat(w.dataset.origH) || 80;
        });
        const totalHeights = heights.reduce(function(s, v) { return s + v; }, 0);

        // Distribute clouds evenly with equal gaps above, between, and below
        const gaps = wraps.length + 1;
        let spacing = Math.floor((stageH - totalHeights) / gaps);
        // Floor to a reasonable minimum so clouds never overlap on tiny screens
        const minSpacing = Math.max(40, Math.round(viewH * 0.08));
        if (spacing < minSpacing) spacing = minSpacing;

        let cursorY = spacing;
        wraps.forEach(function(wrap, i) {
          wrap.style.position = 'absolute';

          // Reset to authored dimensions — desktop fit script may have scaled these down
          const w = parseFloat(wrap.dataset.origW) || 300;
          const h = heights[i];
          wrap.style.width  = w + 'px';
          wrap.style.height = h + 'px';
          wrap.querySelectorAll('svg').forEach(function(svg) {
            svg.setAttribute('width',  w);
            svg.setAttribute('height', h);
          });

          const fromLeft = (i % 2) === 0;

          // Resting position: 3/4 of cloud visible, 1/4 hanging off the edge
          if (fromLeft) {
            wrap.style.left = Math.round(-0.25 * w) + 'px';
          } else {
            wrap.style.left = Math.round(vw() - 0.75 * w) + 'px';
          }
          wrap.style.top = Math.round(cursorY) + 'px';
          cursorY += h + spacing;

          // Align label under the visible 75% of the cloud.
          // Left clouds hang off the left edge, so label is right-aligned
          // to sit under the exposed right portion. Vice versa for right clouds.
          const label = wrap.querySelector('.cloud-label');
          if (label) {
            label.style.width = Math.round(0.65 * w) + 'px';
            label.style.left  = fromLeft ? 'auto' : '0';
            label.style.right = fromLeft ? '0'    : 'auto';
            label.style.justifyContent = fromLeft ? 'flex-end' : 'flex-start';
          }

          // Start off-screen via transform
          wrap.style.transform = fromLeft ? 'translateX(-120vw)' : 'translateX(120vw)';
          wrap.style.transition = 'none';
        });

        // Force reflow so starting transforms are committed before we animate
        void stage.offsetHeight;

        // Now apply transitions and slide everything in with a stagger
        wraps.forEach(function(wrap, i) {
          var delay = i * 80; // 80ms stagger between each cloud
          wrap.style.visibility = 'visible';
          wrap.style.transition = 'transform 900ms cubic-bezier(0.22,1,0.36,1) ' + delay + 'ms';
          wrap.style.transform = 'translateX(0)';
        });

        // Resize: update right-side cloud positions
        var resizeTimer = null;
        window.addEventListener('resize', function() {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(function() {
            var newVw = vw();
            wraps.forEach(function(wrap, i) {
              if ((i % 2) !== 0) {
                var w = parseFloat(wrap.dataset.origW) || 300;
                wrap.style.left = Math.round(newVw - 0.75 * w) + 'px';
              }
            });
          }, 120);
        });
      });
    });
  }

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initMobileClouds();
  } else {
    document.addEventListener('DOMContentLoaded', initMobileClouds);
  }
  window.addEventListener('orientationchange', function() { setTimeout(initMobileClouds, 200); });

// ── MOBILE CLOUD INIT ────────────────────────────────────
// ── LIGHTBOX LOGIC ──
  const overlay   = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lightbox-img');
  const closeBtn  = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    // clear src after transition so there's no flash on next open
    setTimeout(function() { lbImg.src = ''; }, 400);
  }

  closeBtn.addEventListener('click', closeLightbox);

  // click outside the box also closes
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) closeLightbox();
  });

  // Escape key closes
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

// ── LIGHTBOX LOGIC ───────────────────────────────────────
// Reload when the viewport crosses the 900px breakpoint in either direction.
  // This ensures the desktop and mobile layouts always initialise cleanly
  // without trying to reconcile two conflicting sets of inline styles.
  window.matchMedia('(max-width: 900px)').addEventListener('change', function() {
    window.location.reload();
  });

// ── BREAKPOINT RELOAD ────────────────────────────────────
window.matchMedia('(max-width: 900px)').addEventListener('change', function() {
  window.location.reload();
});
