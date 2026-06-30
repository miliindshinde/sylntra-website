/* ============================================================
   Sylntra website — shared React components.
   Exposes window.SS.* — load AFTER React, ReactDOM, _ds_bundle.js
   and image-slot.js.
   ============================================================ */
(function () {
  const DS = window.SylntraDesignSystem_b1b938;
  const { Button, IconButton, WordmarkBanner } = DS;
  const h = React.createElement;

  /* ---- Site config ---------------------------------------- */
  const NAV = [
    { label: 'Home', href: 'index.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Blog', href: 'blog.html' },
    { label: 'Contact', href: 'contact.html' },
  ];

  const FOOTER_COLS = [
    { heading: 'Services', links: [
      ['Website Development', 'services.html'], ['AI Automation', 'services.html'],
      ['Business Systems', 'services.html'], ['Workflow Optimization', 'services.html'],
      ['BI Dashboards', 'services.html'], ['Consulting', 'services.html'] ] },
    { heading: 'Company', links: [
      ['About', 'about.html'], ['Our Approach', 'about.html'],
      ['Process', 'about.html'], ['Careers', 'about.html'] ] },
    { heading: 'Resources', links: [
      ['Blog', 'blog.html'], ['Insights', 'blog.html'],
      ['Case Studies', 'blog.html'], ['FAQs', 'index.html'] ] },
    { heading: 'Connect', links: [
      ['Book a consult', 'contact.html'], ['Contact', 'contact.html'],
      ['Email us', 'contact.html'] ] },
  ];

  /* ---- Icons (Lucide-style, 2px stroke) ------------------- */
  function Icon({ d, paths, size = 24, fill = false, stroke = 'currentColor', sw = 1.6, style }) {
    return h('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: fill ? 'currentColor' : 'none',
      stroke: stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round', style, 'aria-hidden': true },
      paths ? paths.map((p, i) => h('path', { key: i, d: p })) : h('path', { d }));
  }
  const ICONS = {
    arrowRight: 'M5 12h14M13 6l6 6-6 6',
    arrowUpRight: 'M7 17 17 7M8 7h9v9',
    check: 'M20 6 9 17l-5-5',
    spark: ['M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8'],
    layers: ['M12 2 2 7l10 5 10-5-10-5z', 'm2 17 10 5 10-5', 'm2 12 10 5 10-5'],
    workflow: ['M3 3h7v7H3zM14 14h7v7h-7z', 'M10 6.5h4a3 3 0 0 1 3 3V14'],
    gauge: ['M12 14 4 6', 'M12 22a10 10 0 1 0-10-10'],
    bot: ['M12 8V4H8', 'M2 14h2M20 14h2M15 13v2M9 13v2', 'M4 8h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z'],
    compass: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'm16.2 7.8-2.9 6.3-6.3 2.9 2.9-6.3 6.3-2.9z'],
    target: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z', 'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'],
    clock: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 6v6l4 2'],
    trend: ['m23 6-9.5 9.5-5-5L1 18', 'M17 6h6v6'],
    shield: ['M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'],
    users: ['M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M22 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75'],
    search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z', 'm21 21-4.3-4.3'],
    mail: ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'm22 7-10 6L2 7'],
    pin: ['M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z', 'M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'],
    chat: ['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'],
    quote: ['M6 17h3l2-4V7H5v6h3zM16 17h3l2-4V7h-6v6h3z'],
    play: ['M6 4l14 8-14 8z'],
    cube: ['M12 2 2 7l10 5 10-5-10-5z', 'M2 17l10 5 10-5M2 12l10 5 10-5'],
  };
  function Glyph({ name, size = 24, sw = 1.6, style }) {
    const p = ICONS[name]; if (!p) return null;
    return Array.isArray(p) ? h(Icon, { paths: p, size, sw, style }) : h(Icon, { d: p, size, sw, style });
  }

  /* ---- Reveal-on-scroll -----------------------------------
     Primary: IntersectionObserver (nice on-approach reveal in real
     browsers). Plus an immediate rect check for above-the-fold, plus an
     unconditional fallback so non-scrolling embeds / backgrounded tabs
     (where IO + CSS transitions stall) never leave content invisible. --- */
  function _lock(el) { el.style.transition = 'none'; el.style.opacity = '1'; el.style.transform = 'none'; }
  function Reveal({ children, variant = 'reveal', delay = 0, as = 'div', className = '', style = {}, ...rest }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const el = ref.current; if (!el) return;
      let done = false, io, t, lt;
      const reveal = () => {
        if (done) return; done = true;
        el.classList.add('is-in');
        if (io) io.disconnect();
        clearTimeout(t);
        lt = setTimeout(() => _lock(el), delay + 900);
      };
      try {
        io = new IntersectionObserver((ents) => {
          ents.forEach((e) => { if (e.isIntersecting) reveal(); });
        }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
        io.observe(el);
      } catch (e) { /* no IO */ }
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) reveal();
      else t = setTimeout(reveal, 1500);
      return () => { if (io) io.disconnect(); clearTimeout(t); clearTimeout(lt); };
    }, []);
    return h(as, { ref, className: `${variant} ${className}`.trim(),
      style: { transitionDelay: delay ? `${delay}ms` : undefined, ...style }, ...rest }, children);
  }

  /* ---- Count-up ------------------------------------------- */
  function Counter({ to, suffix = '', prefix = '', decimals = 0, duration = 1600, className = '', style = {} }) {
    const ref = React.useRef(null);
    const [val, setVal] = React.useState(0);
    React.useEffect(() => {
      const el = ref.current; if (!el) return;
      let raf, started = false, io, t;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const animate = () => {
        if (started) return; started = true;
        if (io) io.disconnect(); clearTimeout(t);
        if (reduce) { setVal(to); return; }
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - t0) / duration);
          setVal(to * (1 - Math.pow(1 - p, 3)));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      };
      const finalNow = () => { if (started) return; started = true; if (io) io.disconnect(); setVal(to); };
      try {
        io = new IntersectionObserver((ents) => { ents.forEach((e) => { if (e.isIntersecting) animate(); }); }, { threshold: 0.4 });
        io.observe(el);
      } catch (e) { /* no IO */ }
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.85 && r.bottom > 0) animate();
      else t = setTimeout(finalNow, 1700); // non-scrolling embeds: show final value
      return () => { if (io) io.disconnect(); cancelAnimationFrame(raf); clearTimeout(t); };
    }, [to]);
    const shown = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString();
    return h('span', { ref, className, style }, `${prefix}${shown}${suffix}`);
  }

  /* ---- Image slot wrapper --------------------------------- */
  function ImageSlot({ id, placeholder = 'Drop an image', shape = 'rounded', radius = 8, ratio, fit, src, className = '', style = {} }) {
    const st = { width: '100%', ...style };
    if (ratio) st.aspectRatio = ratio;
    return h('image-slot', { id, placeholder, shape, radius: String(radius), fit, src, class: className, style: st });
  }

  /* ---- Header --------------------------------------------- */
  function SiteHeader({ active }) {
    const [solid, setSolid] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setSolid(window.scrollY > 40);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);
    React.useEffect(() => {
      document.body.style.overflow = open ? 'hidden' : '';
    }, [open]);
    const txt = solid ? 'var(--color-ink)' : 'var(--color-on-dark)';
    return h(React.Fragment, null,
      h('header', { className: `site-header ${solid ? 'is-solid' : 'is-top'}` },
        h('div', { className: 'container site-header__inner' },
          h('a', { className: 'brand-lockup', href: 'index.html', style: { color: txt } },
            h('span', { className: 'brand-mark' }),
            h('span', { className: 'brand-word' }, 'sylntra')),
          h('nav', { className: 'nav-links' },
            NAV.map((n) => h('a', { key: n.label, href: n.href,
              className: `nav-link ${active === n.label ? 'is-active' : ''}`,
              style: { color: txt } }, n.label))),
          h('div', { className: 'nav-actions' },
            h('a', { href: 'contact.html', className: 'nav-secondary nav-link',
              style: { color: txt } }, 'Book a consult'),
            h('span', { className: 'nav-cta-desktop' },
              h(Button, { variant: 'primary', href: 'contact.html' }, 'Start a project')),
            h('button', { className: 'nav-toggle', 'aria-label': 'Menu', onClick: () => setOpen(o => !o) },
              h('span', { style: { background: txt } })))
          )),
      h('div', { className: `mobile-drawer ${open ? 'is-open' : ''}` },
        NAV.map((n) => h('a', { key: n.label, href: n.href, onClick: () => setOpen(false) }, n.label)),
        h('div', { style: { marginTop: 'var(--space-3xl)' } },
          h(Button, { variant: 'secondary-mint', href: 'contact.html' }, 'Start a project')))
    );
  }

  /* ---- Footer --------------------------------------------- */
  const SOCIALS = [
    ['M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6zM6 9H2v11h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'],
    ['M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'],
    ['M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z', 'm22 7-10 6L2 7'],
    ['M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z'],
  ];
  function SiteFooter() {
    return h('footer', { className: 'site-footer' },
      h('div', { className: 'container band-tight' },
        h('div', { className: 'footer-top' },
          h('div', { className: 'footer-col footer-brandcol', style: { gap: 'var(--space-lg)' } },
            h('a', { className: 'brand-lockup', href: 'index.html', style: { color: '#fff' } },
              h('span', { className: 'brand-mark' }),
              h('span', { className: 'brand-word' }, 'sylntra')),
            h('p', { className: 'body', style: { color: '#9a9ab0', maxWidth: 280 } },
              'Building intelligent business systems. We don\u2019t sell technology \u2014 we solve business problems.'),
            h(Button, { variant: 'secondary-mint', href: 'contact.html' }, 'Book a consult')),
          FOOTER_COLS.map((c) => h('div', { className: 'footer-col', key: c.heading },
            h('h4', null, c.heading),
            c.links.map((l) => h('a', { key: l[0], href: l[1] }, l[0]))))),
        h('div', { className: 'footer-bottom' },
          h('span', { className: 'body', style: { color: '#7c7c92' } },
            `\u00A9 ${new Date().getFullYear()} Sylntra \u00B7 Building Intelligent Business Systems`),
          h('div', { className: 'social-row' },
            SOCIALS.map((p, i) => h('a', { key: i, href: '#', className: 'social-btn', 'aria-label': 'social' },
              h(Icon, { paths: p, size: 18, sw: 1.5 })))),
          h('div', { style: { display: 'flex', gap: 'var(--space-lg)' } },
            h('a', { href: '#', className: 'footer-col', style: { color: '#7c7c92', fontSize: 14 } }, 'Privacy'),
            h('a', { href: '#', className: 'footer-col', style: { color: '#7c7c92', fontSize: 14 } }, 'Terms')))),
      h('div', { style: { overflow: 'hidden', textAlign: 'center', lineHeight: 0.82, paddingTop: 'var(--space-2xl)' } },
        h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 'var(--weight-medium)',
          fontSize: 'clamp(80px, 22vw, 300px)', letterSpacing: '-0.04em', color: '#11112e', whiteSpace: 'nowrap' } }, 'sylntra'))
    );
  }
  function ChatOrb() {
    return h('div', { className: 'chat-orb' },
      h(IconButton, { label: 'Chat with Sylntra' }, h(Glyph, { name: 'chat', size: 20, sw: 1.8 })));
  }

  window.SS = { h, Glyph, Icon, Reveal, Counter, ImageSlot, SiteHeader, SiteFooter, ChatOrb, NAV, ICONS, DS };
})();
