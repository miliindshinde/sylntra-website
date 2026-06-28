/* Services page sections */
(function () {
  const { h, Glyph, Reveal, ImageSlot, DS } = window.SS;
  const { Button, Card, Badge } = DS;
  function Eyebrow({ children, onDark }) { return h('p', { className: `mono-eyebrow ${onDark ? 'on-dark' : ''}` }, children); }
  function Arrow() { return h(Glyph, { name: 'arrowRight', size: 18, sw: 1.8 }); }

  const SERVICES = [
    { id: 'web', icon: 'cube', tint: 'periwinkle', name: 'Website Development',
      tag: 'A site that earns trust and brings enquiries.',
      problem: 'Your website looks fine but it doesn\u2019t win work \u2014 visitors leave without ever getting in touch.',
      solution: 'We design and build fast, modern sites engineered around one job: turning the right visitors into booked conversations.',
      benefits: ['More qualified enquiries', 'Looks like the obvious choice', 'Loads fast, ranks well', 'Easy for you to update'],
      deliverables: ['Conversion-focused design', 'Responsive build', 'Copywriting support', 'Analytics & lead tracking'],
      ideal: 'Owners whose site isn\u2019t pulling its weight.' },
    { id: 'ai', icon: 'bot', tint: 'mint', name: 'AI Automation',
      tag: 'Hand the repetitive work to systems that never forget.',
      problem: 'The same manual tasks eat hours every week \u2014 follow-ups, data entry, chasing, copying between tools.',
      solution: 'We identify the highest-leverage tasks and automate them with practical AI and workflows that run quietly in the background.',
      benefits: ['Hours back every week', 'Nothing slips through', 'Faster response times', 'Lower cost to serve'],
      deliverables: ['Automation audit', 'Custom workflows', 'AI-assisted tasks', 'Monitoring & handover'],
      ideal: 'Teams buried in repetitive admin.' },
    { id: 'systems', icon: 'layers', tint: 'peach', name: 'Business Systems',
      tag: 'One connected backbone for how you run.',
      problem: 'Quotes, jobs, clients and cash live in different tools and spreadsheets \u2014 nothing joined up, nothing reliable.',
      solution: 'We design a single, joined-up system so information flows once and everyone works from the same source of truth.',
      benefits: ['One source of truth', 'No double entry', 'Clear visibility', 'Scales as you grow'],
      deliverables: ['System architecture', 'Tool selection & setup', 'Data migration', 'Team onboarding'],
      ideal: 'Businesses outgrowing spreadsheets.' },
    { id: 'workflow', icon: 'workflow', tint: 'periwinkle', name: 'Workflow Optimization',
      tag: 'Map the mess, remove the friction.',
      problem: 'Work bounces between people and tools with hand-offs, delays and things falling through the cracks.',
      solution: 'We map how work actually flows, then redesign it to remove friction, clarify ownership and speed everything up.',
      benefits: ['Faster turnaround', 'Clear ownership', 'Fewer errors', 'A calmer team'],
      deliverables: ['Process mapping', 'Redesigned workflows', 'SOPs & playbooks', 'Rollout support'],
      ideal: 'Teams where things keep slipping.' },
    { id: 'bi', icon: 'gauge', tint: 'mint', name: 'BI Dashboards',
      tag: 'See the numbers that matter, the moment they change.',
      problem: 'Decisions are made on gut feel because the numbers are buried across five places and always out of date.',
      solution: 'We connect your data into clean, live dashboards that surface the handful of metrics that actually drive the business.',
      benefits: ['Decisions backed by data', 'Live, always current', 'Spot problems early', 'One clear view'],
      deliverables: ['Metric definition', 'Data connections', 'Live dashboards', 'Training'],
      ideal: 'Owners flying without instruments.' },
    { id: 'consult', icon: 'compass', tint: 'peach', name: 'Consulting',
      tag: 'A clear, prioritised plan before anything is built.',
      problem: 'You know things could run better but it\u2019s hard to know where to start \u2014 or what\u2019s worth doing first.',
      solution: 'We step back, understand the business, and hand you a prioritised roadmap of the highest-impact moves \u2014 build with us or not.',
      benefits: ['Clarity on what matters', 'A prioritised roadmap', 'No wasted spend', 'Confidence to act'],
      deliverables: ['Discovery workshop', 'Systems audit', 'Prioritised roadmap', 'Clear next steps'],
      ideal: 'Owners who want a plan, not a pitch.' },
  ];
  const TINT = { mint: 'var(--color-accent-mint)', periwinkle: 'var(--color-accent-periwinkle)', peach: 'var(--color-accent-peach)' };

  function Hero() {
    return h('section', { className: 'surface-dark', style: { position: 'relative', overflow: 'hidden', paddingTop: 132 } },
      h('div', { 'aria-hidden': true, style: { position: 'absolute', top: '-40%', left: '30%', width: '50vw', height: '50vw', background: 'var(--gradient-brand)', filter: 'blur(150px)', opacity: 0.22, borderRadius: '50%' } }),
      h('div', { className: 'container band', style: { position: 'relative' } },
        h(Reveal, null, h(Eyebrow, { onDark: true }, 'Services')),
        h(Reveal, { delay: 80 }, h('h1', { className: 'display-hero', style: { marginTop: 16, maxWidth: 980 } },
          'Everything you need to ', h('span', { className: 'gradient-text' }, 'run the business'), ', not the software.')),
        h(Reveal, { delay: 160 }, h('p', { className: 'lead on-dark', style: { marginTop: 24, maxWidth: 600 } },
          'Six ways we turn day-to-day chaos into calm, dependable systems. Each one starts with your outcome \u2014 then we build the simplest thing that gets you there.')),
        h(Reveal, { delay: 220 }, h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 40 } },
          SERVICES.map((s) => h('a', { key: s.id, href: `#${s.id}`, style: { textDecoration: 'none' } },
            h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', border: '1px solid var(--color-divider-dark)', borderRadius: 'var(--radius-sm)', color: '#d3d3df', fontFamily: 'var(--font-display)', fontSize: 15 } },
              h(Glyph, { name: s.icon, size: 18 }), s.name)))))));
  }

  function Intro() {
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-5xl)', alignItems: 'center' }, className: 'grid-collapse' },
          h(Reveal, null, h('h2', { className: 'display-xxl', style: { maxWidth: 460 } }, 'We don\u2019t sell technology. We solve business problems.')),
          h(Reveal, { delay: 120 }, h('div', null,
            h('p', { className: 'lead' }, 'Every engagement is shaped around outcomes you can feel \u2014 hours saved, clients won, decisions made with confidence.'),
            h('p', { className: 'body', style: { marginTop: 18 } }, 'You won\u2019t hear jargon or be pushed toward tools you don\u2019t need. You\u2019ll get clear thinking, honest advice, and systems you actually own.'))))));
  }

  function ServiceRow({ s, i }) {
    const flip = i % 2 === 1;
    const visual = h('div', { style: { flex: '1 1 360px', minWidth: 0 } },
      h('div', { style: { background: TINT[s.tint], borderRadius: 'var(--radius-sm)', padding: 18 } },
        h(ImageSlot, { id: `svc-${s.id}`, placeholder: `Drop a ${s.name.toLowerCase()} image`, ratio: '4 / 3', radius: 4 })),
      h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 } },
        h('span', { className: 'mono-eyebrow' }, 'Ideal for'),
        h('span', { className: 'body', style: { color: 'var(--color-ink)' } }, s.ideal)));
    const detail = h('div', { style: { flex: '1 1 420px', minWidth: 0 } },
      h('div', { style: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 } },
        h('span', { style: { width: 48, height: 48, borderRadius: 'var(--radius-sm)', background: 'var(--color-canvas-dark)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' } }, h(Glyph, { name: s.icon, size: 24 })),
        h('div', null, h('h3', { className: 'display-xl' }, s.name), h('p', { className: 'mono-eyebrow', style: { marginTop: 6 } }, s.tag))),
      h('div', { style: { display: 'grid', gap: 18, marginTop: 8 } },
        h('div', null, h('p', { className: 'mono-eyebrow', style: { color: 'var(--color-accent-orange)', marginBottom: 6 } }, 'The problem'), h('p', { className: 'body', style: { color: 'var(--color-ink)' } }, s.problem)),
        h('div', null, h('p', { className: 'mono-eyebrow', style: { marginBottom: 6 } }, 'The solution'), h('p', { className: 'body', style: { color: 'var(--color-ink)' } }, s.solution))),
      h('div', { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', marginTop: 24 }, className: 'svc-cols' },
        h('div', null, h('p', { className: 'mono-eyebrow', style: { marginBottom: 12 } }, 'Business benefits'),
          h('ul', { style: { listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 } },
            s.benefits.map((b) => h('li', { key: b, style: { display: 'flex', gap: 10, alignItems: 'flex-start' } },
              h('span', { style: { color: 'var(--color-accent-magenta)', flex: '0 0 auto', marginTop: 2 } }, h(Glyph, { name: 'check', size: 16, sw: 2 })),
              h('span', { className: 'body', style: { color: 'var(--color-ink)' } }, b))))),
        h('div', null, h('p', { className: 'mono-eyebrow', style: { marginBottom: 12 } }, 'What you get'),
          h('ul', { style: { listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 10 } },
            s.deliverables.map((d) => h('li', { key: d, style: { display: 'flex', gap: 10, alignItems: 'flex-start' } },
              h('span', { style: { color: 'var(--color-body)', flex: '0 0 auto', marginTop: 2 } }, h(Glyph, { name: 'arrowUpRight', size: 16 })),
              h('span', { className: 'body', style: { color: 'var(--color-ink)' } }, d)))))),
      h('div', { style: { marginTop: 28 } }, h(Button, { variant: 'primary', href: 'contact.html' }, 'Discuss this service ', h(Arrow))));
    return h('section', { id: s.id, className: 'surface-light', style: { paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-5xl)', borderTop: 'var(--border-hairline)' } },
      h('div', { className: 'container' },
        h(Reveal, null,
          h('div', { style: { display: 'flex', gap: 'var(--space-5xl)', alignItems: 'center', flexDirection: flip ? 'row-reverse' : 'row', flexWrap: 'wrap' }, className: 'svc-row' }, visual, detail))));
  }

  function AllServices() {
    return h(React.Fragment, null, SERVICES.map((s, i) => h(ServiceRow, { key: s.id, s, i })));
  }

  function FinalCTA() {
    return h('section', { className: 'surface-dark', style: { position: 'relative', overflow: 'hidden' } },
      h('div', { 'aria-hidden': true, style: { position: 'absolute', inset: 0, background: 'var(--gradient-brand)', opacity: 0.13 } }),
      h('div', { className: 'container band', style: { position: 'relative', textAlign: 'center' } },
        h(Reveal, null, h(Eyebrow, { onDark: true }, 'Not sure where to start?')),
        h(Reveal, { delay: 80 }, h('h2', { className: 'display-hero', style: { margin: '16px auto 0', maxWidth: 820 } }, 'Let\u2019s find your highest-leverage fix.')),
        h(Reveal, { delay: 160 }, h('p', { className: 'lead on-dark', style: { margin: '20px auto 0', maxWidth: 540 } }, 'Book a free consult and we\u2019ll point you at the one change that will save the most time \u2014 no pitch, no pressure.')),
        h(Reveal, { delay: 220 }, h('div', { style: { marginTop: 34 } }, h(Button, { variant: 'secondary-mint', href: 'contact.html' }, 'Book a free consult ', h(Arrow))))));
  }

  window.SERVICESPAGE = { Hero, Intro, AllServices, FinalCTA };
})();
