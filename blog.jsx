/* Blog page — interactive knowledge hub */
(function () {
  const { h, Glyph, Reveal, ImageSlot, DS } = window.SS;
  const { Button, Card, Badge, Input } = DS;
  function Eyebrow({ children, onDark }) { return h('p', { className: `mono-eyebrow ${onDark ? 'on-dark' : ''}` }, children); }
  function Arrow() { return h(Glyph, { name: 'arrowRight', size: 18, sw: 1.8 }); }

  const CATS = ['All', 'Automation', 'Systems', 'Strategy', 'Websites', 'Case Studies'];
  const ARTICLES = [
    { id: 'a1', cat: 'Strategy', title: 'You don\u2019t have a software problem', excerpt: 'Why buying another tool rarely fixes the chaos \u2014 and what to do instead.', author: 'Miliind Shinde', read: 6, tint: 'periwinkle', tags: ['Systems', 'Mindset'] },
    { id: 'a2', cat: 'Automation', title: 'The 5 tasks every small business should automate first', excerpt: 'A practical, no-jargon starting list that buys back real hours each week.', author: 'Sylntra Team', read: 8, tint: 'mint', tags: ['Automation', 'Productivity'] },
    { id: 'a3', cat: 'Websites', title: 'A pretty website isn\u2019t the goal', excerpt: 'How to design a site around enquiries, not applause \u2014 with examples.', author: 'Sylntra Team', read: 5, tint: 'peach', tags: ['Websites', 'Conversion'] },
    { id: 'a4', cat: 'Systems', title: 'One source of truth: killing the spreadsheet sprawl', excerpt: 'What it takes to get quotes, jobs and clients into a single system.', author: 'Miliind Shinde', read: 9, tint: 'mint', tags: ['Systems', 'Data'] },
    { id: 'a5', cat: 'Case Studies', title: 'How Pinnacle Fitness reclaimed 14 hours a week', excerpt: 'A behind-the-scenes look at automating member bookings and admin.', author: 'Sylntra Team', read: 7, tint: 'periwinkle', tags: ['Case Study', 'Automation'] },
    { id: 'a6', cat: 'Strategy', title: 'The simplest system usually wins', excerpt: 'Why clever solutions fail and boring, reliable ones compound.', author: 'Miliind Shinde', read: 4, tint: 'peach', tags: ['Strategy', 'Design'] },
    { id: 'a7', cat: 'Automation', title: 'AI without the hype: where it actually saves time', excerpt: 'The handful of practical use cases worth your attention right now.', author: 'Sylntra Team', read: 10, tint: 'mint', tags: ['AI', 'Automation'] },
    { id: 'a8', cat: 'Systems', title: 'Dashboards that get used (and the ones that don\u2019t)', excerpt: 'Designing BI around the three numbers that actually change behaviour.', author: 'Sylntra Team', read: 6, tint: 'periwinkle', tags: ['Data', 'BI'] },
    { id: 'a9', cat: 'Case Studies', title: 'From four spreadsheets to one quote-to-job system', excerpt: 'How Preference Floors started sending same-day quotes, every day.', author: 'Miliind Shinde', read: 7, tint: 'peach', tags: ['Case Study', 'Systems'] },
  ];
  const TINT = { mint: 'var(--color-accent-mint)', periwinkle: 'var(--color-accent-periwinkle)', peach: 'var(--color-accent-peach)' };
  const FEATURED = ARTICLES[0];

  function Meta({ author, read, onDark }) {
    return h('div', { style: { display: 'flex', alignItems: 'center', gap: 12, color: onDark ? '#9a9ab0' : 'var(--color-body)' } },
      h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 7 } },
        h('span', { style: { width: 22, height: 22, borderRadius: 'var(--radius-sm)', background: 'var(--gradient-brand)', flex: '0 0 auto' } }),
        h('span', { className: 'body', style: { color: onDark ? '#d3d3df' : 'var(--color-ink)', fontSize: 14 } }, author)),
      h('span', { style: { width: 3, height: 3, borderRadius: 9, background: 'currentColor' } }),
      h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 6 } }, h(Glyph, { name: 'clock', size: 14 }), h('span', { className: 'mono-caption', style: { fontSize: 11 } }, `${read} MIN READ`)));
  }

  function Hero({ query, setQuery }) {
    return h('section', { className: 'surface-dark', style: { paddingTop: 132 } },
      h('div', { className: 'container', style: { paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-4xl)' } },
        h(Reveal, null, h(Eyebrow, { onDark: true }, 'Insights')),
        h(Reveal, { delay: 80 }, h('h1', { className: 'display-hero', style: { marginTop: 16, maxWidth: 820 } }, 'Plain-spoken ideas on building better business systems.')),
        h(Reveal, { delay: 160 }, h('div', { style: { marginTop: 32, maxWidth: 460, position: 'relative' } },
          h('span', { style: { position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#9a9ab0', pointerEvents: 'none' } }, h(Glyph, { name: 'search', size: 18 })),
          h('input', { value: query, onChange: (e) => setQuery(e.target.value), placeholder: 'Search articles\u2026',
            style: { width: '100%', fontFamily: 'var(--font-display)', fontSize: 16, color: '#fff', background: 'var(--color-surface-dark-soft)', border: '1px solid var(--color-divider-dark)', borderRadius: 'var(--radius-sm)', padding: '14px 16px 14px 46px', outline: 'none' },
            onFocus: (e) => { e.currentTarget.style.borderColor = '#fff'; }, onBlur: (e) => { e.currentTarget.style.borderColor = 'var(--color-divider-dark)'; } })))));
  }

  function ArticleCard({ a }) {
    return h('a', { href: '#', className: 'lift', style: { display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', background: '#fff', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', height: '100%' } },
      h('div', { style: { background: TINT[a.tint], padding: 14 } }, h(ImageSlot, { id: `blog-${a.id}`, placeholder: 'Drop article image', ratio: '16 / 9', radius: 4 })),
      h('div', { style: { padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 } },
        h('span', { className: 'mono-eyebrow', style: { color: 'var(--color-accent-orange)' } }, a.cat),
        h('h3', { className: 'display-md' }, a.title),
        h('p', { className: 'body', style: { flex: 1 } }, a.excerpt),
        h('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap' } }, a.tags.map((t) => h(Badge, { key: t }, t))),
        h('div', { style: { marginTop: 6 } }, h(Meta, { author: a.author, read: a.read }))));
  }

  function Sidebar() {
    const popular = ARTICLES.slice(1, 5);
    const tags = ['Automation', 'Systems', 'Strategy', 'AI', 'Websites', 'Data', 'Conversion', 'Productivity'];
    return h('aside', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' } },
      h('div', { style: { background: 'var(--color-canvas-dark)', color: '#fff', borderRadius: 'var(--radius-sm)', padding: 28 } },
        h(Eyebrow, { onDark: true }, 'Newsletter'),
        h('h3', { className: 'display-md', style: { color: '#fff', margin: '12px 0 8px' } }, 'Systems thinking, monthly.'),
        h('p', { className: 'body', style: { color: '#9a9ab0', marginBottom: 18 } }, 'One practical idea to run your business leaner. No spam, ever.'),
        h('input', { placeholder: 'you@company.com', style: { width: '100%', fontFamily: 'var(--font-display)', fontSize: 15, color: '#fff', background: 'var(--color-surface-dark-soft)', border: '1px solid var(--color-divider-dark)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', outline: 'none', marginBottom: 12 } }),
        h(Button, { variant: 'secondary-mint', style: { width: '100%' } }, 'Subscribe')),
      h('div', { style: { border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 28 } },
        h(Eyebrow, null, 'Popular reads'),
        h('div', { style: { display: 'flex', flexDirection: 'column', gap: 18, marginTop: 18 } },
          popular.map((a, i) => h('a', { key: a.id, href: '#', style: { display: 'flex', gap: 14, textDecoration: 'none', color: 'inherit' } },
            h('span', { style: { fontFamily: 'var(--font-mono)', fontWeight: 500, color: 'var(--color-accent-magenta)', fontSize: 14, flex: '0 0 auto' } }, String(i + 1).padStart(2, '0')),
            h('div', null, h('div', { className: 'body', style: { color: 'var(--color-ink)' } }, a.title), h('div', { className: 'mono-caption', style: { marginTop: 4 } }, `${a.read} MIN READ`)))))),
      h('div', { style: { border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 28 } },
        h(Eyebrow, null, 'Browse tags'),
        h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 16 } }, tags.map((t) => h(Badge, { key: t }, t)))));
  }

  function Feed() {
    const [query, setQuery] = React.useState('');
    const [cat, setCat] = React.useState('All');
    const [page, setPage] = React.useState(1);
    const PER = 4;
    React.useEffect(() => { setPage(1); }, [query, cat]);
    const filtered = ARTICLES.filter((a) => {
      const okCat = cat === 'All' || a.cat === cat;
      const q = query.trim().toLowerCase();
      const okQ = !q || (a.title + a.excerpt + a.tags.join(' ')).toLowerCase().includes(q);
      return okCat && okQ;
    });
    const pages = Math.max(1, Math.ceil(filtered.length / PER));
    const shown = filtered.slice((page - 1) * PER, page * PER);
    return h(React.Fragment, null,
      h(Hero, { query, setQuery }),
      // category rail
      h('section', { className: 'surface-dark', style: { paddingBottom: 'var(--space-4xl)' } },
        h('div', { className: 'container' },
          h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid var(--color-divider-dark)', paddingTop: 'var(--space-3xl)' } },
            CATS.map((c) => h('button', { key: c, onClick: () => setCat(c),
              style: { fontFamily: 'var(--font-mono)', fontWeight: 500, fontSize: 13, letterSpacing: '0.5px', textTransform: 'uppercase', cursor: 'pointer',
                padding: '9px 16px', borderRadius: 'var(--radius-sm)', border: '1px solid ' + (cat === c ? 'transparent' : 'var(--color-divider-dark)'),
                background: cat === c ? '#fff' : 'transparent', color: cat === c ? 'var(--color-ink)' : '#d3d3df', transition: 'all 140ms ease' } }, c))))),
      // featured (only on All + page 1 + no query)
      (cat === 'All' && page === 1 && !query.trim()) && h('section', { className: 'surface-light band-tight' },
        h('div', { className: 'container' },
          h(Reveal, null, h('a', { href: '#', className: 'lift feat-card', style: { display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 'var(--space-3xl)', alignItems: 'stretch', textDecoration: 'none', color: 'inherit', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' } },
            h('div', { className: 'feat-media', style: { background: TINT[FEATURED.tint], padding: 18 } }, h(ImageSlot, { id: 'blog-featured', placeholder: 'Drop featured image', ratio: '16 / 10', radius: 4 })),
            h('div', { style: { padding: '36px 36px 36px 8px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 } },
              h('span', { className: 'mono-eyebrow', style: { color: 'var(--color-accent-orange)' } }, 'Featured \u00B7 ' + FEATURED.cat),
              h('h2', { className: 'display-xl' }, FEATURED.title),
              h('p', { className: 'lead' }, FEATURED.excerpt),
              h('div', null, h(Meta, { author: FEATURED.author, read: FEATURED.read })),
              h('div', { style: { marginTop: 8 } }, h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.5px' } }, 'Read article ', h(Arrow)))))))),
      // feed + sidebar
      h('section', { className: 'surface-light band' },
        h('div', { className: 'container' },
          h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 340px', gap: 'var(--space-5xl)', alignItems: 'start' }, className: 'blog-grid' },
            h('div', null,
              h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 28, flexWrap: 'wrap', gap: 12 } },
                h('h2', { className: 'display-lg' }, cat === 'All' ? 'Latest articles' : cat),
                h('span', { className: 'mono-eyebrow' }, `${filtered.length} article${filtered.length === 1 ? '' : 's'}`)),
              shown.length === 0
                ? h('div', { style: { textAlign: 'center', padding: '64px 24px', border: '1px dashed var(--color-hairline)', borderRadius: 'var(--radius-sm)' } },
                    h('div', { style: { display: 'inline-flex', color: 'var(--color-body)', marginBottom: 16 } }, h(Glyph, { name: 'search', size: 32, sw: 1.4 })),
                    h('h3', { className: 'display-md', style: { marginBottom: 8 } }, 'No articles found'),
                    h('p', { className: 'body', style: { maxWidth: 360, margin: '0 auto 20px' } }, 'Try a different search or category \u2014 or clear your filters to see everything.'),
                    h(Button, { variant: 'outline', onClick: () => { setQuery(''); setCat('All'); } }, 'Clear filters'))
                : h('div', { className: 'grid grid-2' }, shown.map((a, i) => h(Reveal, { key: a.id, delay: (i % 2) * 80 }, h(ArticleCard, { a })))),
              // pagination
              shown.length > 0 && h('div', { style: { display: 'flex', gap: 8, marginTop: 'var(--space-3xl)', alignItems: 'center' } },
                h('button', { onClick: () => setPage((p) => Math.max(1, p - 1)), disabled: page === 1, className: 'page-btn', style: pageBtn(page === 1) }, h(Glyph, { name: 'arrowRight', size: 16, style: { transform: 'rotate(180deg)' } })),
                Array.from({ length: pages }, (_, i) => i + 1).map((n) => h('button', { key: n, onClick: () => setPage(n), style: { ...pageBtn(false), background: n === page ? 'var(--color-ink)' : '#fff', color: n === page ? '#fff' : 'var(--color-ink)' } }, n)),
                h('button', { onClick: () => setPage((p) => Math.min(pages, p + 1)), disabled: page === pages, style: pageBtn(page === pages) }, h(Glyph, { name: 'arrowRight', size: 16 })))),
            h('div', { className: 'blog-aside' }, h(Sidebar))))));
  }
  function pageBtn(disabled) {
    return { width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-sm)', border: 'var(--border-hairline)', background: '#fff', color: 'var(--color-ink)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.4 : 1, fontFamily: 'var(--font-mono)', fontSize: 14 };
  }

  function FinalCTA() {
    return h('section', { className: 'surface-dark', style: { position: 'relative', overflow: 'hidden' } },
      h('div', { 'aria-hidden': true, style: { position: 'absolute', inset: 0, background: 'var(--gradient-brand)', opacity: 0.12 } }),
      h('div', { className: 'container band', style: { position: 'relative', textAlign: 'center' } },
        h(Reveal, null, h(Eyebrow, { onDark: true }, 'Enough reading?')),
        h(Reveal, { delay: 80 }, h('h2', { className: 'display-hero', style: { margin: '16px auto 0', maxWidth: 760 } }, 'Let\u2019s apply this to your business.')),
        h(Reveal, { delay: 160 }, h('div', { style: { marginTop: 32 } }, h(Button, { variant: 'secondary-mint', href: 'contact.html' }, 'Book a free consult ', h(Arrow))))));
  }

  window.BLOGPAGE = { Feed, FinalCTA };
})();
