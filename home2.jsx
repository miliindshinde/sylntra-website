/* Home — part 2: industries, process, case studies, testimonials, stats, why-choose, FAQ, final CTA */
(function () {
  const { h, Glyph, Reveal, Counter, ImageSlot, DS } = window.SS;
  const { Button, Card, StatCard, Badge } = DS;

  function Eyebrow({ children, onDark }) {
    return h('p', { className: `mono-eyebrow ${onDark ? 'on-dark' : ''}` }, children);
  }
  function Arrow() { return h(Glyph, { name: 'arrowRight', size: 18, sw: 1.8 }); }

  /* ---------------- INDUSTRIES ---------------- */
  function Industries() {
    const ind = [
      ['users', 'Professional services', 'Agencies, accountants, advisors \u2014 systems that scale your billable time.'],
      ['shield', 'Healthcare & clinics', 'Bookings, intake and reminders handled, so staff focus on patients.'],
      ['cube', 'Trades & field services', 'Quotes to invoices to scheduling \u2014 one workflow, no double entry.'],
      ['trend', 'Consultants & coaches', 'Look established, capture leads, and onboard clients automatically.'],
      ['gauge', 'Retail & hospitality', 'Connect storefront, bookings and stock into one clear dashboard.'],
      ['compass', 'Real estate', 'Listings, enquiries and follow-up that run while you\u2019re showing homes.'],
    ];
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { textAlign: 'center', maxWidth: 700, margin: '0 auto 52px' } },
          h(Reveal, null, h(Eyebrow, null, 'Industries we serve')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'Built for the businesses behind the spreadsheets.'))),
        h('div', { className: 'grid grid-3' },
          ind.map((it, i) => h(Reveal, { key: it[1], delay: (i % 3) * 90 },
            h('div', { className: 'lift', style: { background: '#fff', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 26, height: '100%', display: 'flex', flexDirection: 'column', gap: 14 } },
              h('span', { style: { color: 'var(--color-ink)' } }, h(Glyph, { name: it[0], size: 26 })),
              h('h3', { className: 'display-md' }, it[1]),
              h('p', { className: 'body' }, it[2])))))));
  }

  /* ---------------- PROCESS ---------------- */
  function Process() {
    const steps = [
      ['01', 'Discovery & strategy', 'We map how your business runs today \u2014 the bottlenecks, the leaks, the quick wins.',
        ['Deep-dive workshop', 'Process & systems audit', 'Prioritised roadmap', 'Clear scope & quote']],
      ['02', 'Design & build', 'We design the system around your way of working, then build it in tight, visible iterations.',
        ['System & UX design', 'Website / automation build', 'Integrations & data', 'Review at every step']],
      ['03', 'Launch & ongoing support', 'We launch carefully, train your team, and stay on to keep the system sharp as you grow.',
        ['Guided launch', 'Team training', 'Performance monitoring', 'Continuous improvement']],
    ];
    return h('section', { className: 'surface-dark band' },
      h('div', { className: 'container' },
        h('div', { style: { maxWidth: 680, marginBottom: 56 } },
          h(Reveal, null, h(Eyebrow, { onDark: true }, 'How we work')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'A calm, predictable path from chaos to clarity.'))),
        h('div', { style: { display: 'flex', flexDirection: 'column' } },
          steps.map((s, i) => h(Reveal, { key: s[0], delay: i * 60 },
            h('div', { style: { display: 'grid', gridTemplateColumns: '120px minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-3xl)', padding: '40px 0', borderTop: '1px solid var(--color-divider-dark)' }, className: 'process-row' },
              h('div', { style: { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 40, lineHeight: 1,
                background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' } }, s[0]),
              h('div', null,
                h('h3', { className: 'display-lg', style: { color: '#fff', marginBottom: 12 } }, s[1]),
                h('p', { className: 'body', style: { color: '#9a9ab0', maxWidth: 360 } }, s[2])),
              h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px', alignContent: 'start' } },
                s[3].map((d) => h('div', { key: d, style: { display: 'flex', gap: 8, alignItems: 'center' } },
                  h('span', { style: { color: 'var(--color-accent-mint)' } }, h(Glyph, { name: 'check', size: 16, sw: 2 })),
                  h('span', { className: 'body', style: { color: '#d3d3df' } }, d))))))))));
  }

  /* ---------------- CASE STUDIES ---------------- */
  function CaseStudies() {
    const cases = [
      ['cs-1', 'Pinnacle Fitness', 'Member bookings & admin, automated', 'Cut front-desk admin by 14 hrs a week and lifted online sign-ups 38%.', 'peach'],
      ['cs-2', 'Preference Floors', 'Quote-to-job system that scales', 'Replaced 4 spreadsheets with one system \u2014 quotes out same day, every day.', 'periwinkle'],
      ['cs-3', 'Dep Consulting', 'A site that finally converts', 'Rebuilt around outcomes; qualified enquiries up 2.6\u00D7 in the first quarter.', 'mint'],
    ];
    const tint = { peach: 'var(--color-accent-peach)', periwinkle: 'var(--color-accent-periwinkle)', mint: 'var(--color-accent-mint)' };
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 48, flexWrap: 'wrap' } },
          h('div', null,
            h(Reveal, null, h(Eyebrow, null, 'Selected work')),
            h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14, maxWidth: 560 } }, 'Real systems. Measurable outcomes.'))),
          h(Reveal, { delay: 140 }, h(Button, { variant: 'primary', href: 'blog.html' }, 'View case studies ', h(Arrow)))),
        h('div', { className: 'grid grid-3' },
          cases.map((c, i) => h(Reveal, { key: c[0], delay: (i % 3) * 90, variant: 'reveal-scale' },
            h('a', { href: 'blog.html', className: 'lift', style: { display: 'block', textDecoration: 'none', color: 'inherit', background: '#fff', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' } },
              h('div', { style: { background: tint[c[4]], padding: 16 } },
                h(ImageSlot, { id: c[0], placeholder: 'Drop project image', ratio: '16 / 10', radius: 4 })),
              h('div', { style: { padding: 24 } },
                h('div', { className: 'mono-eyebrow', style: { marginBottom: 8 } }, c[1]),
                h('h3', { className: 'display-md', style: { marginBottom: 10 } }, c[2]),
                h('p', { className: 'body' }, c[3]))))))));
  }

  /* ---------------- TESTIMONIALS ---------------- */
  function Testimonials() {
    const quotes = [
      ['Sylntra didn\u2019t pitch us tools \u2014 they understood the business first, then built exactly what we needed. The difference shows up in our calendar every single week.', 'Operations Lead', 'Professional services'],
      ['We went from drowning in admin to a system that runs quietly in the background. It\u2019s the calmest our team has felt in years.', 'Founder', 'Health & wellness'],
      ['Honest, sharp, and genuinely invested in the outcome. It felt like hiring a partner, not a vendor.', 'Managing Director', 'Trades & services'],
    ];
    return h('section', { className: 'surface-dark band' },
      h('div', { className: 'container' },
        h('div', { style: { maxWidth: 680, marginBottom: 52 } },
          h(Reveal, null, h(Eyebrow, { onDark: true }, 'What clients say')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'Trusted like an in-house team.'))),
        h('div', { className: 'grid grid-3' },
          quotes.map((q, i) => h(Reveal, { key: i, delay: (i % 3) * 100 },
            h('div', { style: { background: 'var(--color-surface-dark-soft)', border: '1px solid var(--color-divider-dark)', borderRadius: 'var(--radius-sm)', padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 22 } },
              h('span', { style: { color: 'var(--color-accent-periwinkle)' } }, h(Glyph, { name: 'quote', size: 28, fill: false })),
              h('p', { className: 'lead on-dark', style: { fontSize: 18, color: '#eaeaf2', flex: 1 } }, q[0]),
              h('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } },
                h('span', { style: { width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--gradient-brand)', flex: '0 0 auto' } }),
                h('div', null,
                  h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, color: '#fff' } }, q[1]),
                  h('div', { className: 'mono-eyebrow on-dark', style: { marginTop: 4 } }, q[2])))))))));
  }

  /* ---------------- STATS ---------------- */
  function Stats() {
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { textAlign: 'center', maxWidth: 640, margin: '0 auto 48px' } },
          h(Reveal, null, h(Eyebrow, null, 'The impact')),
          h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'Time back. Revenue up. Chaos gone.'))),
        h('div', { className: 'grid grid-4' },
          [['mint', 14, '', ' hrs', 'Saved per week, on average'],
           ['periwinkle', 2.6, '', '\u00D7', 'More qualified enquiries'],
           ['peach', 38, '', '%', 'Lift in online conversions'],
           ['mint', 99.9, 1, '%', 'System uptime maintained']].map((s, i) =>
            h(Reveal, { key: i, delay: (i % 4) * 80, variant: 'reveal-scale' },
              h('div', { style: { background: ({ mint: 'var(--color-accent-mint)', periwinkle: 'var(--color-accent-periwinkle)', peach: 'var(--color-accent-peach)' })[s[0]],
                borderRadius: 'var(--radius-sm)', padding: 'var(--space-3xl)', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 } },
                h('div', { style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 'clamp(34px,4vw,52px)', letterSpacing: '-0.03em', lineHeight: 1 } },
                  h(Counter, { to: s[1], decimals: s[2] || 0, suffix: s[3] })),
                h('div', { className: 'mono-eyebrow', style: { color: 'var(--color-ink)' } }, s[4])))))));
  }

  /* ---------------- WHY CHOOSE ---------------- */
  function WhyChoose() {
    const reasons = [
      ['target', 'Outcomes, not output', 'We measure success in hours saved and clients won \u2014 not features shipped.'],
      ['users', 'Founder-led, hands-on', 'You work directly with the people building your system. No account-manager telephone.'],
      ['shield', 'Built to last', 'Clean, documented systems you own \u2014 not a black box you\u2019re locked into.'],
      ['clock', 'Fast to value', 'Your first working system is usually live within days, not months.'],
    ];
    return h('section', { className: 'surface-dark band' },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: 'var(--space-5xl)', alignItems: 'center' }, className: 'grid-collapse' },
          h('div', null,
            h(Reveal, null, h(Eyebrow, { onDark: true }, 'Why Sylntra')),
            h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'A trusted advisor who happens to build the system too.')),
            h(Reveal, { delay: 160 }, h('p', { className: 'lead on-dark', style: { marginTop: 22, maxWidth: 440 } },
              'No jargon, no upsell, no lock-in. Just clear thinking and systems that quietly make your business better every week.')),
            h(Reveal, { delay: 240 }, h('div', { style: { marginTop: 32 } }, h(Button, { variant: 'secondary-mint', href: 'about.html' }, 'Why we started ', h(Arrow))))),
          h('div', { className: 'grid grid-2' },
            reasons.map((r, i) => h(Reveal, { key: r[1], delay: (i % 2) * 100 },
              h('div', { style: { background: 'var(--color-surface-dark-soft)', border: '1px solid var(--color-divider-dark)', borderRadius: 'var(--radius-sm)', padding: 24, height: '100%' } },
                h('span', { style: { color: 'var(--color-accent-mint)' } }, h(Glyph, { name: r[0], size: 24 })),
                h('h3', { className: 'display-md', style: { color: '#fff', margin: '18px 0 8px' } }, r[1]),
                h('p', { className: 'body', style: { color: '#9a9ab0' } }, r[2]))))))));
  }

  /* ---------------- FAQ ---------------- */
  function FAQ() {
    const faqs = [
      ['Do I need to understand the technology?', 'No. That\u2019s our job. We translate everything into plain business terms and outcomes \u2014 you stay focused on running the business.'],
      ['How long until I see results?', 'Most clients have a working system live within days. We deliver in small, visible steps so value shows up early and often.'],
      ['Is this just a website, or more?', 'We build whatever the outcome needs \u2014 often a website is one piece of a connected system that includes automation, data and workflows.'],
      ['What does it cost?', 'It depends on the system. We give you a clear, fixed scope and quote after a free discovery conversation \u2014 no surprises.'],
      ['Will I be locked in?', 'Never. You own your systems and data. We document everything and you\u2019re free to take it anywhere.'],
    ];
    const [open, setOpen] = React.useState(0);
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,0.8fr) minmax(0,1.2fr)', gap: 'var(--space-5xl)', alignItems: 'start' }, className: 'grid-collapse' },
          h('div', null,
            h(Reveal, null, h(Eyebrow, null, 'FAQs')),
            h(Reveal, { delay: 80 }, h('h2', { className: 'display-xxl', style: { marginTop: 14 } }, 'Questions, answered.')),
            h(Reveal, { delay: 160 }, h('p', { className: 'lead', style: { marginTop: 20, maxWidth: 320 } }, 'Still unsure? A 30-minute call usually clears it up \u2014 free, no pitch.')),
            h(Reveal, { delay: 220 }, h('div', { style: { marginTop: 28 } }, h(Button, { variant: 'primary', href: 'contact.html' }, 'Book a consult ', h(Arrow))))),
          h('div', null,
            faqs.map((f, i) => h(Reveal, { key: i, delay: i * 50 },
              h('div', { style: { borderBottom: 'var(--border-hairline)' } },
                h('button', { onClick: () => setOpen(open === i ? -1 : i),
                  style: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, background: 'none', border: 0, cursor: 'pointer', padding: '24px 0', textAlign: 'left' } },
                  h('span', { className: 'display-md' }, f[0]),
                  h('span', { style: { flex: '0 0 auto', color: 'var(--color-accent-orange)', transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 220ms ease' } },
                    h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 }, h('path', { d: 'M12 5v14M5 12h14' })))),
                h('div', { style: { maxHeight: open === i ? 240 : 0, overflow: 'hidden', transition: 'max-height 320ms ease' } },
                  h('p', { className: 'body', style: { paddingBottom: 24, maxWidth: 560 } }, f[1])))))))));
  }

  /* ---------------- FINAL CTA ---------------- */
  function FinalCTA() {
    return h('section', { className: 'surface-dark', style: { position: 'relative', overflow: 'hidden' } },
      h('div', { 'aria-hidden': true, className: 'atmo', style: { position: 'absolute', inset: 0, background: 'var(--gradient-brand)', opacity: 0.14, filter: 'blur(8px)' } }),
      h('div', { className: 'container band', style: { position: 'relative', textAlign: 'center' } },
        h(Reveal, null, h(Eyebrow, { onDark: true }, 'Let\u2019s talk')),
        h(Reveal, { delay: 80 }, h('h2', { className: 'display-hero', style: { margin: '16px auto 0', maxWidth: 900 } },
          'Ready to swap the chaos for a system?')),
        h(Reveal, { delay: 160 }, h('p', { className: 'lead on-dark', style: { margin: '22px auto 0', maxWidth: 560 } },
          'Book a free 30-minute consult. We\u2019ll find the highest-leverage fix in your business \u2014 whether you work with us or not.')),
        h(Reveal, { delay: 240 }, h('div', { style: { display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 36, flexWrap: 'wrap' } },
          h(Button, { variant: 'secondary-mint', href: 'contact.html' }, 'Book a free consult ', h(Arrow)),
          h(Button, { variant: 'ghost-on-dark', href: 'services.html' }, 'See what we do')))));
  }

  window.HOME = Object.assign(window.HOME || {}, { Industries, Process, CaseStudies, Testimonials, Stats, WhyChoose, FAQ, FinalCTA });
})();
