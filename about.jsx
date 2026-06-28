/* About page sections */
(function () {
  const { h, Glyph, Reveal, ImageSlot, Counter, DS } = window.SS;
  const { Button, Card } = DS;
  function Eyebrow({ children, onDark }) { return h('p', { className: `mono-eyebrow ${onDark ? 'on-dark' : ''}` }, children); }
  function Arrow() { return h(Glyph, { name: 'arrowRight', size: 18, sw: 1.8 }); }

  function Hero() {
    return h('section', { className: 'surface-dark', style: { position: 'relative', overflow: 'hidden', paddingTop: 132 } },
      h('div', { 'aria-hidden': true, style: { position: 'absolute', top: '-30%', right: '-5%', width: '46vw', height: '46vw', background: 'var(--gradient-brand)', filter: 'blur(150px)', opacity: 0.22, borderRadius: '50%' } }),
      h('div', { className: 'container band', style: { position: 'relative' } },
        h(Reveal, null, h(Eyebrow, { onDark: true }, 'About Sylntra')),
        h(Reveal, { delay: 80 }, h('h1', { className: 'display-hero', style: { marginTop: 16, maxWidth: 960 } },
          'We started Sylntra because ', h('span', { className: 'gradient-text' }, 'good businesses'), ' were being failed by their tools.')),
        h(Reveal, { delay: 160 }, h('p', { className: 'lead on-dark', style: { marginTop: 24, maxWidth: 620 } },
          'Hard-working owners, drowning in admin, sold more software they didn\u2019t need. We believed the answer was simpler: better systems, built around the business \u2014 not the other way around.'))));
  }

  function Story() {
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-5xl)', alignItems: 'center' }, className: 'grid-collapse' },
          h(Reveal, { variant: 'reveal-scale' }, h(ImageSlot, { id: 'about-story', placeholder: 'Drop a workspace / team photo', ratio: '4 / 3', radius: 8, style: { border: 'var(--border-hairline)' } })),
          h(Reveal, { delay: 120 }, h('div', null,
            h(Eyebrow, null, 'Our story'),
            h('h2', { className: 'display-xxl', style: { margin: '14px 0 20px' } }, 'Born from frustration. Built on outcomes.'),
            h('p', { className: 'body', style: { color: 'var(--color-ink)', marginBottom: 14 } }, 'After years inside growing businesses, one pattern kept repeating: smart owners losing their evenings to manual work, and patching it with yet another subscription that never quite fit.'),
            h('p', { className: 'body' }, 'So we flipped the model. Understand the business first. Design the simplest system that moves the needle. Build it, prove it, and stay to keep it sharp. No jargon. No lock-in. Just systems that quietly make work better.'))))));
  }

  function MissionVision() {
    const items = [
      ['target', 'Our mission', 'To give business owners their time back \u2014 by replacing chaos and busywork with calm, dependable systems.'],
      ['compass', 'Our vision', 'A world where running a great business doesn\u2019t mean fighting your tools \u2014 where the system does the heavy lifting, quietly.'],
    ];
    return h('section', { className: 'surface-dark band' },
      h('div', { className: 'container' },
        h('div', { className: 'grid grid-2' },
          items.map((it, i) => h(Reveal, { key: it[1], delay: i * 120 },
            h('div', { style: { background: 'var(--color-surface-dark-soft)', border: '1px solid var(--color-divider-dark)', borderRadius: 'var(--radius-sm)', padding: 36, height: '100%' } },
              h('span', { style: { color: 'var(--color-accent-mint)' } }, h(Glyph, { name: it[0], size: 28 })),
              h('h3', { className: 'display-lg', style: { color: '#fff', margin: '20px 0 12px' } }, it[1]),
              h('p', { className: 'lead on-dark', style: { fontSize: 19 } }, it[2])))))));
  }

  function Philosophy() {
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container', style: { textAlign: 'center' } },
        h(Reveal, null, h(Eyebrow, null, 'Our philosophy')),
        h(Reveal, { delay: 80 }, h('p', { className: 'display-xxl', style: { margin: '20px auto 0', maxWidth: 920 } },
          'Businesses don\u2019t need more software. ', h('span', { style: { color: 'var(--color-body)' } }, 'They need better systems.')))));
  }

  function Values() {
    const vals = [
      ['target', 'Outcomes over output', 'We measure ourselves in your results \u2014 hours saved, clients won \u2014 not features delivered.'],
      ['users', 'Honesty, always', 'If a simpler or cheaper path is right, we\u2019ll tell you. Even if it means less work for us.'],
      ['shield', 'You own it', 'Clean, documented systems that belong to you. No black boxes, no being held hostage.'],
      ['layers', 'Simple beats clever', 'The best system is the one your team actually uses. We design for clarity, not complexity.'],
      ['clock', 'Momentum matters', 'Small wins, early and often. Value should show up in week one, not month six.'],
      ['compass', 'Partner, not vendor', 'We\u2019re in it for the long game \u2014 invested in your business like it\u2019s our own.'],
    ];
    return h('section', { className: 'surface-light', style: { paddingBottom: 'var(--space-section)' } },
      h('div', { className: 'container' },
        h('div', { style: { maxWidth: 640, marginBottom: 48 } },
          h(Reveal, null, h(Eyebrow, null, 'Core values')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'What we believe, in practice.'))),
        h('div', { className: 'grid grid-3' },
          vals.map((v, i) => h(Reveal, { key: v[1], delay: (i % 3) * 90 },
            h('div', { className: 'lift', style: { background: '#fff', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 28, height: '100%' } },
              h('span', { style: { color: 'var(--color-ink)' } }, h(Glyph, { name: v[0], size: 26 })),
              h('h3', { className: 'display-md', style: { margin: '18px 0 8px' } }, v[1]),
              h('p', { className: 'body' }, v[2])))))));
  }

  function Founder() {
    return h('section', { className: 'surface-dark band' },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)', gap: 'var(--space-5xl)', alignItems: 'center' }, className: 'grid-collapse' },
          h(Reveal, { variant: 'reveal-scale' }, h('div', null,
            h(ImageSlot, { id: 'about-founder', placeholder: 'Drop founder photo', ratio: '1 / 1', radius: 8, className: '', style: { border: '1px solid var(--color-divider-dark)' } }))),
          h(Reveal, { delay: 120 }, h('div', null,
            h(Eyebrow, { onDark: true }, 'Founder message'),
            h('p', { className: 'display-lg', style: { color: '#fff', margin: '16px 0 18px' } },
              '\u201CI started Sylntra to be the partner I wished those businesses had \u2014 one who listens first, simplifies relentlessly, and only builds what moves the needle.\u201D'),
            h('p', { className: 'body', style: { color: '#9a9ab0' } },
              'Every project still crosses my desk. You work directly with the people who build your system \u2014 no hand-offs, no telephone game.'),
            h('div', { style: { display: 'flex', alignItems: 'center', gap: 14, marginTop: 28 } },
              h('span', { style: { width: 46, height: 46, borderRadius: 'var(--radius-sm)', background: 'var(--gradient-brand)', flex: '0 0 auto' } }),
              h('div', null,
                h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, color: '#fff', fontSize: 17 } }, 'Miliind Shinde'),
                h('div', { className: 'mono-eyebrow on-dark', style: { marginTop: 4 } }, 'Founder, Sylntra'))))))));
  }

  function HowWeThink() {
    const steps = [
      ['Listen first', 'We learn your business before we touch a tool \u2014 how you make money, where time leaks.'],
      ['Find the leverage', 'We look for the one or two changes that unlock the most time and revenue.'],
      ['Build the simplest thing', 'We ship the smallest system that solves it \u2014 then iterate from real use.'],
      ['Stay for the long game', 'We monitor, refine and grow the system with you as the business changes.'],
    ];
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { maxWidth: 640, marginBottom: 48 } },
          h(Reveal, null, h(Eyebrow, null, 'How we think')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'A simple way of working that just works.'))),
        h('div', { className: 'grid grid-4' },
          steps.map((s, i) => h(Reveal, { key: s[0], delay: (i % 4) * 80 },
            h('div', { style: { borderTop: '2px solid var(--color-ink)', paddingTop: 18 } },
              h('div', { style: { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 13, color: 'var(--color-accent-orange)', marginBottom: 12 } }, String(i + 1).padStart(2, '0')),
              h('h3', { className: 'display-md', style: { marginBottom: 8 } }, s[0]),
              h('p', { className: 'body' }, s[1])))))));
  }

  function Trust() {
    return h('section', { className: 'surface-dark band' },
      h('div', { className: 'container' },
        h('div', { style: { textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' } },
          h(Reveal, null, h(Eyebrow, { onDark: true }, 'Why clients trust us')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'The numbers behind the relationship.'))),
        h('div', { className: 'grid grid-4' },
          [['mint', 10, '+', 'Years of operating experience'], ['periwinkle', 14, ' hrs', 'Saved per client, weekly'], ['peach', 100, '%', 'Systems you fully own'], ['mint', 0, '', 'Long-term lock-in contracts']].map((s, i) =>
            h(Reveal, { key: i, delay: (i % 4) * 80, variant: 'reveal-scale' },
              h('div', { style: { background: ({ mint: 'var(--color-accent-mint)', periwinkle: 'var(--color-accent-periwinkle)', peach: 'var(--color-accent-peach)' })[s[0]], borderRadius: 'var(--radius-sm)', padding: 'var(--space-3xl)', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 } },
                h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(34px,4vw,52px)', letterSpacing: '-0.03em', lineHeight: 1 } }, h(Counter, { to: s[1], suffix: s[2] })),
                h('div', { className: 'mono-eyebrow', style: { color: 'var(--color-ink)' } }, s[3])))))));
  }

  function FinalCTA() {
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container', style: { textAlign: 'center' } },
        h(Reveal, null, h(Eyebrow, null, 'Let\u2019s build something that lasts')),
        h(Reveal, { delay: 80 }, h('h2', { className: 'display-hero', style: { margin: '16px auto 0', maxWidth: 760 } }, 'Work with a partner, not a vendor.')),
        h(Reveal, { delay: 160 }, h('div', { style: { display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' } },
          h(Button, { variant: 'primary', href: 'contact.html' }, 'Book a free consult ', h(Arrow)),
          h(Button, { variant: 'outline', href: 'services.html' }, 'Explore services')))));
  }

  window.ABOUTPAGE = { Hero, Story, MissionVision, Philosophy, Values, Founder, HowWeThink, Trust, FinalCTA };
})();
