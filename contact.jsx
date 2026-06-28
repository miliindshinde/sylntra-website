/* Contact page — consultation booking focus */
(function () {
  const { h, Glyph, Reveal, DS } = window.SS;
  const { Button, Card, Input } = DS;
  function Eyebrow({ children, onDark }) { return h('p', { className: `mono-eyebrow ${onDark ? 'on-dark' : ''}` }, children); }
  function Arrow() { return h(Glyph, { name: 'arrowRight', size: 18, sw: 1.8 }); }

  function Hero() {
    return h('section', { className: 'surface-dark', style: { position: 'relative', overflow: 'hidden', paddingTop: 132 } },
      h('div', { 'aria-hidden': true, style: { position: 'absolute', top: '-40%', left: '-5%', width: '46vw', height: '46vw', background: 'var(--gradient-brand)', filter: 'blur(150px)', opacity: 0.22, borderRadius: '50%' } }),
      h('div', { className: 'container', style: { position: 'relative', paddingTop: 'var(--space-5xl)', paddingBottom: 'var(--space-4xl)' } },
        h(Reveal, null, h(Eyebrow, { onDark: true }, 'Contact')),
        h(Reveal, { delay: 80 }, h('h1', { className: 'display-hero', style: { marginTop: 16, maxWidth: 860 } },
          'Let\u2019s find your ', h('span', { className: 'gradient-text' }, 'highest-leverage'), ' fix.')),
        h(Reveal, { delay: 160 }, h('p', { className: 'lead on-dark', style: { marginTop: 24, maxWidth: 560 } },
          'Book a free 30-minute consult. We\u2019ll dig into where time and revenue are leaking \u2014 and point you at the one change worth making first. No pitch, no pressure.'))));
  }

  function Options() {
    const opts = [
      ['chat', 'Book a consult', 'A free 30-minute call to talk through your business.', 'Pick a time'],
      ['mail', 'Email us', 'Prefer to write? Send the details and we\u2019ll reply within a day.', 'Miliind.shinde@invictrons.com'],
      ['bot', 'Quick question', 'Not sure if we\u2019re a fit? Ask away \u2014 honest answers only.', 'Start a chat'],
    ];
    return h('section', { className: 'surface-dark', style: { paddingBottom: 'var(--space-section)' } },
      h('div', { className: 'container' },
        h('div', { className: 'grid grid-3' },
          opts.map((o, i) => h(Reveal, { key: o[1], delay: (i % 3) * 90 },
            h('div', { className: 'lift', style: { background: 'var(--color-surface-dark-soft)', border: '1px solid var(--color-divider-dark)', borderRadius: 'var(--radius-sm)', padding: 28, height: '100%', display: 'flex', flexDirection: 'column', gap: 12 } },
              h('span', { style: { color: 'var(--color-accent-mint)' } }, h(Glyph, { name: o[0], size: 26 })),
              h('h3', { className: 'display-md', style: { color: '#fff' } }, o[1]),
              h('p', { className: 'body', style: { color: '#9a9ab0', flex: 1 } }, o[2]),
              h('span', { style: { display: 'inline-flex', alignItems: 'center', gap: 8, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: 6 } }, o[3], h(Glyph, { name: 'arrowUpRight', size: 16 }))))))));
  }

  function Field({ label, type = 'text', placeholder, full, area, value, onChange }) {
    return h('div', { style: { display: 'flex', flexDirection: 'column', gap: 8, gridColumn: full ? '1 / -1' : 'auto' } },
      h('label', { className: 'mono-eyebrow' }, label),
      area
        ? h('textarea', { value, onChange, placeholder, rows: 5, style: { ...fieldStyle, resize: 'vertical' }, onFocus: foc, onBlur: blur })
        : h('input', { type, value, onChange, placeholder, style: fieldStyle, onFocus: foc, onBlur: blur }));
  }
  const fieldStyle = { fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--color-ink)', background: '#fff', border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: '13px 15px', outline: 'none', width: '100%' };
  const foc = (e) => { e.currentTarget.style.borderColor = 'var(--color-ink)'; };
  const blur = (e) => { e.currentTarget.style.borderColor = 'var(--color-hairline)'; };

  function FormAndInfo() {
    const [sent, setSent] = React.useState(false);
    const [f, setF] = React.useState({ name: '', email: '', company: '', help: '', message: '' });
    const up = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));
    return h('section', { className: 'surface-light band' },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,0.7fr)', gap: 'var(--space-5xl)', alignItems: 'start' }, className: 'grid-collapse' },
          // form
          h(Reveal, null, h('div', { style: { border: 'var(--border-hairline)', borderRadius: 'var(--radius-sm)', padding: 'clamp(24px,4vw,40px)' } },
            sent
              ? h('div', { style: { textAlign: 'center', padding: '48px 16px' } },
                  h('div', { style: { width: 64, height: 64, borderRadius: 'var(--radius-sm)', background: 'var(--color-accent-mint)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' } }, h(Glyph, { name: 'check', size: 30, sw: 2 })),
                  h('h3', { className: 'display-lg', style: { marginBottom: 10 } }, 'Thanks \u2014 message received.'),
                  h('p', { className: 'body', style: { maxWidth: 380, margin: '0 auto 24px' } }, 'We\u2019ll get back to you within one business day. In the meantime, feel free to keep exploring.'),
                  h(Button, { variant: 'outline', onClick: () => { setSent(false); setF({ name: '', email: '', company: '', help: '', message: '' }); } }, 'Send another'))
              : h(React.Fragment, null,
                  h('h2', { className: 'display-lg', style: { marginBottom: 6 } }, 'Tell us about your business'),
                  h('p', { className: 'body', style: { marginBottom: 28 } }, 'A few details so our first conversation is useful from minute one.'),
                  h('form', { onSubmit: (e) => { e.preventDefault(); setSent(true); }, className: 'contact-form',
                    style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' } },
                    h(Field, { label: 'Your name', placeholder: 'Jane Doe', value: f.name, onChange: up('name') }),
                    h(Field, { label: 'Email', type: 'email', placeholder: 'jane@company.com', value: f.email, onChange: up('email') }),
                    h(Field, { label: 'Company', placeholder: 'Company name', value: f.company, onChange: up('company') }),
                    h(Field, { label: 'What do you need help with?', placeholder: 'e.g. Automation, a new website\u2026', value: f.help, onChange: up('help') }),
                    h(Field, { label: 'Tell us more', area: true, full: true, placeholder: 'What\u2019s slowing the business down right now?', value: f.message, onChange: up('message') }),
                    h('div', { style: { gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginTop: 4 } },
                      h(Button, { variant: 'primary', type: 'submit' }, 'Send & book a consult ', h(Arrow)),
                      h('span', { className: 'mono-caption' }, 'WE REPLY WITHIN 1 BUSINESS DAY')))))),
          // info
          h(Reveal, { delay: 120 }, h('div', { style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-2xl)' } },
            h(InfoBlock, { icon: 'mail', label: 'Email', value: 'Miliind.shinde@invictrons.com', href: 'mailto:Miliind.shinde@invictrons.com' }),
            h(InfoBlock, { icon: 'pin', label: 'Based in', value: 'Thane, Maharashtra' }),
            h(InfoBlock, { icon: 'clock', label: 'Office hours', value: 'Mon \u2013 Fri \u00B7 9:00 AM \u2013 6:00 PM IST' }),
            h('div', { style: { background: 'var(--color-canvas-dark)', color: '#fff', borderRadius: 'var(--radius-sm)', padding: 24 } },
              h(Eyebrow, { onDark: true }, 'What to expect'),
              h('ul', { style: { listStyle: 'none', margin: '16px 0 0', padding: 0, display: 'grid', gap: 12 } },
                ['A reply within one business day', 'A free, no-pressure 30-min call', 'One clear recommendation to start'].map((t) =>
                  h('li', { key: t, style: { display: 'flex', gap: 10, alignItems: 'flex-start' } },
                    h('span', { style: { color: 'var(--color-accent-mint)', flex: '0 0 auto', marginTop: 2 } }, h(Glyph, { name: 'check', size: 16, sw: 2 })),
                    h('span', { className: 'body', style: { color: '#d3d3df' } }, t))))))))));
  }
  function InfoBlock({ icon, label, value, href }) {
    const inner = h(React.Fragment, null,
      h('span', { style: { width: 44, height: 44, borderRadius: 'var(--radius-sm)', background: 'var(--color-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' } }, h(Glyph, { name: icon, size: 20 })),
      h('div', null, h('div', { className: 'mono-eyebrow' }, label), h('div', { className: 'body', style: { color: 'var(--color-ink)', marginTop: 4 } }, value)));
    return href
      ? h('a', { href, style: { display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'inherit' } }, inner)
      : h('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } }, inner);
  }

  function MapAndFAQ() {
    const faqs = [
      ['How much does a project cost?', 'After a free discovery call we give you a clear, fixed scope and quote \u2014 no surprises, no hourly black holes.'],
      ['How quickly can we start?', 'Usually within a week or two. Your first working system is often live within days of kickoff.'],
      ['Do you work remotely?', 'Yes \u2014 we work with clients wherever they are. Most of the process happens over short, focused calls.'],
      ['What if I just need advice?', 'That\u2019s the consulting offer. We\u2019ll give you a prioritised plan you can run yourself or with us.'],
    ];
    return h('section', { className: 'surface-light', style: { paddingBottom: 'var(--space-section)' } },
      h('div', { className: 'container' },
        h('div', { style: { display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--space-5xl)', alignItems: 'start' }, className: 'grid-collapse' },
          h(Reveal, null, h('div', null,
            h(Eyebrow, null, 'Find us'),
            h('h2', { className: 'display-lg', style: { margin: '14px 0 20px' } }, 'Thane, Maharashtra'),
            h('div', { style: { position: 'relative', borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: 'var(--border-hairline)', aspectRatio: '4 / 3', background: 'linear-gradient(135deg,#f3f3f5,#e9e9ef)' } },
              h('div', { style: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--color-hairline) 1px, transparent 1px), linear-gradient(90deg, var(--color-hairline) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.7 } }),
              h('div', { style: { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' } },
                h('span', { style: { display: 'inline-flex', color: 'var(--color-accent-magenta)' } }, h(Glyph, { name: 'pin', size: 40, sw: 1.6 })),
                h('div', { className: 'mono-eyebrow', style: { marginTop: 8 } }, 'Map placeholder'))))),
          h(Reveal, { delay: 120 }, h('div', null,
            h(Eyebrow, null, 'Before you ask'),
            h('h2', { className: 'display-lg', style: { margin: '14px 0 24px' } }, 'Quick answers'),
            h('div', null, faqs.map((f, i) => h(FAQItem, { key: i, q: f[0], a: f[1] })))))))); 
  }
  function FAQItem({ q, a }) {
    const [open, setOpen] = React.useState(false);
    return h('div', { style: { borderBottom: 'var(--border-hairline)' } },
      h('button', { onClick: () => setOpen((o) => !o), style: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, background: 'none', border: 0, cursor: 'pointer', padding: '20px 0', textAlign: 'left' } },
        h('span', { className: 'display-md' }, q),
        h('span', { style: { flex: '0 0 auto', color: 'var(--color-accent-orange)', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 220ms ease' } },
          h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 }, h('path', { d: 'M12 5v14M5 12h14' })))),
      h('div', { style: { maxHeight: open ? 200 : 0, overflow: 'hidden', transition: 'max-height 300ms ease' } },
        h('p', { className: 'body', style: { paddingBottom: 20, maxWidth: 520 } }, a)));
  }

  window.CONTACTPAGE = { Hero, Options, FormAndInfo, MapAndFAQ };
})();
