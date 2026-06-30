/* Home — part 1: hero, social proof, pains, why-fail, approach, services */
(function () {
  const { h, Glyph, Reveal, ImageSlot, DS } = window.SS;
  const { Button, Card, Badge } = DS;

  function Eyebrow({ children, onDark }) {
    return h('p', { className: `mono-eyebrow ${onDark ? 'on-dark' : ''}` }, children);
  }
  function Arrow() { return h(Glyph, { name: 'arrowRight', size: 18, sw: 1.8 }); }

  /* ---------------- HERO ---------------- */
  function Hero() {
    return h('section', { className: 'surface-dark', style: { position: 'relative', overflow: 'hidden', paddingTop: 132 } },
      // gradient atmosphere
      h('div', { 'aria-hidden': true, className: 'atmo', style: {
        position: 'absolute', top: '-30%', right: '-10%', width: '60vw', height: '60vw',
        background: 'var(--gradient-brand)', filter: 'blur(140px)', opacity: 0.28, borderRadius: '50%', pointerEvents: 'none' } }),
      h('div', { className: 'container', style: { position: 'relative', paddingBottom: 'var(--space-section)' } },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-5xl)', alignItems: 'center' }, className: 'hero-grid' },
          h('div', null,
            h(Reveal, null,
              h('div', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', border: '1px solid var(--color-divider-dark)', borderRadius: 'var(--radius-sm)', marginBottom: 24 } },
                h('span', { style: { width: 7, height: 7, borderRadius: 99, background: 'var(--color-accent-mint)' } }),
                h('span', { className: 'mono-eyebrow on-dark' }, 'Intelligent business systems'))),
            h(Reveal, { delay: 80 },
              h('h1', { className: 'display-hero' }, 'Better systems.', h('br'),
                h('span', { className: 'gradient-text' }, 'Not more software.'))),
            h(Reveal, { delay: 160 },
              h('p', { className: 'lead on-dark', style: { maxWidth: 520, marginTop: 24 } },
                'Sylntra helps busy business owners win back time, win more clients, and run leaner \u2014 with websites, automation and systems built around how you actually work.')),
            h(Reveal, { delay: 240 },
              h('div', { style: { display: 'flex', gap: 'var(--space-md)', marginTop: 36, flexWrap: 'wrap' } },
                h(Button, { variant: 'secondary-mint', href: 'contact.html' }, 'Book a free consult ', h(Arrow)),
                h(Button, { variant: 'ghost-on-dark', href: 'services.html' }, 'Explore services'))),
            h(Reveal, { delay: 320 },
              h('div', { style: { display: 'flex', gap: 'var(--space-3xl)', marginTop: 52, flexWrap: 'wrap' } },
                [['12+ yrs', 'Operating experience'], ['15 days', 'Avg. first system live'], ['100%', 'Outcome-focused']].map((s) =>
                  h('div', { key: s[0] },
                    h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 24, letterSpacing: '-0.02em' } }, s[0]),
                    h('div', { className: 'mono-eyebrow on-dark', style: { marginTop: 6 } }, s[1])))))),
          // visual
          h(Reveal, { variant: 'reveal-scale', delay: 200, className: 'slot-dark' },
            h('div', { style: { position: 'relative' } },
              // brand glow behind portrait \u2014 consistent with existing hero atmosphere language
              h('div', { 'aria-hidden': true, style: {
                position: 'absolute', inset: '-10%', background: 'var(--gradient-brand)',
                filter: 'blur(80px)', opacity: 0.13, borderRadius: '50%', pointerEvents: 'none' } }),
              h('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', position: 'relative' } },
                h('img', { src: 'assets/images/founder/milind-shinde.webp',
                  alt: 'Milind Shinde, Founder of Sylntra',
                  className: 'hero-portrait' }),
                h('div', { style: { background: 'var(--color-canvas)', color: 'var(--color-ink)',
                  border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-sm)', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: 'rgba(1,1,32,.18) 0 18px 40px' } },
                  h('span', { style: { width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--gradient-brand)', flex: '0 0 auto' } }),
                  h('div', null,
                    h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16 } }, '14 hrs / week saved'),
                    h('div', { className: 'mono-eyebrow' }, 'After workflow automation')))))))));
  }

  /* ---------------- PAIN POINTS ---------------- */
  function Pains() {
    const pains = [
      ['Drowning in manual work', 'Quotes, invoices, follow-ups and admin eat the hours you should spend growing.'],
      ['A website that doesn\u2019t sell', 'It looks fine, but it doesn\u2019t bring enquiries or make you look like the obvious choice.'],
      ['Tools that don\u2019t talk', 'Spreadsheets, inboxes and apps everywhere \u2014 nothing joined up, nothing reliable.'],
      ['No clear picture', 'You\u2019re making decisions on gut feel because the numbers live in five places.'],
    ];
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { maxWidth: 760, marginBottom: 56 } },
          h(Reveal, null, h(Eyebrow, null, 'Sound familiar?')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } },
            'You don\u2019t have a software problem. ', h('span', { style: { color: 'var(--color-body)' } }, 'You have a systems problem.')))),
        h('div', { className: 'grid grid-2' },
          pains.map((p, i) => h(Reveal, { key: p[0], delay: (i % 2) * 90 },
            h('div', { className: 'lift', style: { background: '#fff', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 28, height: '100%' } },
              h('div', { style: { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 13, color: 'var(--color-accent-orange)', marginBottom: 14 } }, String(i + 1).padStart(2, '0')),
              h('h3', { className: 'display-md', style: { marginBottom: 10 } }, p[0]),
              h('p', { className: 'body' }, p[1])))))));
  }

  /* ---------------- WHY TRADITIONAL FAILS ---------------- */
  function WhyFail() {
    const rows = [
      ['More software', 'More logins, more cost, more things to maintain \u2014 and the same chaos underneath.'],
      ['Generic templates', 'Built for everyone, fitted to no one. Your edge gets flattened into a theme.'],
      ['One-off fixes', 'A patch here, a plugin there. It works until it quietly doesn\u2019t.'],
    ];
    return h('section', { className: 'surface-dark band' },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: 'var(--space-5xl)', alignItems: 'start' }, className: 'grid-collapse' },
          h('div', null,
            h(Reveal, null, h(Eyebrow, { onDark: true }, 'Why the usual approach fails')),
            h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'Most \u201Csolutions\u201D add complexity. Good systems remove it.')),
            h(Reveal, { delay: 160 }, h('p', { className: 'lead on-dark', style: { marginTop: 22, maxWidth: 480 } },
              'We start with the outcome you want \u2014 then design the simplest system that gets you there and keeps working without you babysitting it.'))),
          h('div', { style: { display: 'flex', flexDirection: 'column', gap: 16 } },
            rows.map((r, i) => h(Reveal, { key: r[0], delay: i * 100 },
              h('div', { style: { display: 'flex', gap: 18, padding: '22px 0', borderBottom: '1px solid var(--color-divider-dark)' } },
                h('span', { style: { color: 'var(--color-accent-magenta)', flex: '0 0 auto', marginTop: 2 } }, h(Glyph, { name: 'arrowUpRight', size: 22 })),
                h('div', null,
                  h('h3', { className: 'display-md', style: { color: '#fff' } }, r[0]),
                  h('p', { className: 'body', style: { color: '#9a9ab0', marginTop: 6 } }, r[1])))))))));
  }

  /* ---------------- APPROACH ---------------- */
  function Approach() {
    const items = [
      ['compass', 'Start with the business', 'We learn how you make money and where time leaks before we touch a tool.'],
      ['layers', 'Design the system', 'One joined-up way of working \u2014 website, automation and data pulling in the same direction.'],
      ['trend', 'Build for momentum', 'Systems that compound: less manual work this month, more capacity every month after.'],
    ];
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' } },
          h(Reveal, null, h(Eyebrow, null, 'Our approach')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'Less of a vendor. More of a business partner.'))),
        h('div', { className: 'grid grid-3' },
          items.map((it, i) => h(Reveal, { key: it[1], delay: i * 110 },
            h('div', { style: { padding: 28 } },
              h('div', { style: { width: 52, height: 52, borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-dark)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 22 } },
                h(Glyph, { name: it[0], size: 24 })),
              h('h3', { className: 'display-lg', style: { marginBottom: 10 } }, it[1]),
              h('p', { className: 'body' }, it[2])))))));
  }

  /* ---------------- SERVICES OVERVIEW ---------------- */
  function Services() {
    const svc = [
      ['cube', 'Website Development', 'Sites that earn trust and turn visitors into enquiries.'],
      ['bot', 'AI Automation', 'Hand the repetitive work to systems that never forget a follow-up.'],
      ['layers', 'Business Systems', 'One connected backbone for quotes, jobs, clients and cash.'],
      ['workflow', 'Workflow Optimization', 'Map the mess, remove the friction, reclaim your week.'],
      ['gauge', 'BI Dashboards', 'See the numbers that matter, the moment they change.'],
      ['compass', 'Consulting', 'A clear, prioritised plan before a single thing is built.'],
    ];
    return h('section', { className: 'surface-light', style: { paddingBottom: 'var(--space-section)' } },
      h('div', { className: 'container' },
        h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 48, flexWrap: 'wrap' } },
          h('div', null,
            h(Reveal, null, h(Eyebrow, null, 'What we do')),
            h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14, maxWidth: 620 } }, 'Six ways we make your business run itself.'))),
          h(Reveal, { delay: 140 }, h(Button, { variant: 'primary', href: 'services.html' }, 'All services ', h(Arrow)))),
        h('div', { className: 'grid grid-3' },
          svc.map((s, i) => h(Reveal, { key: s[1], delay: (i % 3) * 90 },
            h('a', { href: 'services.html', className: 'lift', style: { display: 'block', textDecoration: 'none', color: 'inherit', background: '#fff', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 28, height: '100%' } },
              h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
                h('span', { style: { color: 'var(--color-ink)' } }, h(Glyph, { name: s[0], size: 28 })),
                h('span', { style: { color: '#c4c4cf' } }, h(Glyph, { name: 'arrowUpRight', size: 20 }))),
              h('h3', { className: 'display-md', style: { marginTop: 28, marginBottom: 8 } }, s[1]),
              h('p', { className: 'body' }, s[2])))))));
  }

  window.HOME = Object.assign(window.HOME || {}, { Hero, Pains, WhyFail, Approach, Services });
})();
