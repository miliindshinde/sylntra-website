/* @ds-bundle: {"format":3,"namespace":"SylntraDesignSystem_b1b938","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Tabs","sourcePath":"components/data/Tabs.jsx"},{"name":"ToggleGroup","sourcePath":"components/data/ToggleGroup.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"WordmarkBanner","sourcePath":"components/navigation/WordmarkBanner.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b70547162377","components/core/Button.jsx":"47c7e3e2e6db","components/core/Card.jsx":"c4b247858a29","components/core/IconButton.jsx":"99511e41635b","components/core/StatCard.jsx":"517edc22ca80","components/data/DataTable.jsx":"74b33d35f8ce","components/data/Tabs.jsx":"949384618cb9","components/data/ToggleGroup.jsx":"7e767772b843","components/forms/Input.jsx":"ab682fcccb4c","components/navigation/Footer.jsx":"84e6a59877a1","components/navigation/NavBar.jsx":"246020d45b23","components/navigation/WordmarkBanner.jsx":"cd04095ff7ac","ui_kits/website/FeatureSection.jsx":"7d2a7f1fc0c6","ui_kits/website/Hero.jsx":"ee8022a6bda4","ui_kits/website/PricingBand.jsx":"6f097486303c","ui_kits/website/ResearchBand.jsx":"a00bdccd7c85","ui_kits/website/TestimonialsBand.jsx":"83d08f4c425b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SylntraDesignSystem_b1b938 = window.SylntraDesignSystem_b1b938 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inline tag pill. `neutral` on light surfaces, `on-dark` on dark bands.
 * Hairline chrome, 4px radius, no shadow.
 */
function Badge({
  variant = 'neutral',
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-display)',
    fontSize: 'var(--body-md-size)',
    lineHeight: 'var(--body-md-line)',
    letterSpacing: 'var(--body-md-track)',
    padding: 'var(--space-xxs) var(--space-sm)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent'
  };
  const variants = {
    neutral: {
      background: 'var(--color-hairline)',
      color: 'var(--color-ink)',
      borderColor: 'var(--color-hairline)'
    },
    'on-dark': {
      background: 'var(--color-surface-dark-soft)',
      color: 'var(--color-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.neutral),
      ...style
    }
  }, rest), children);
}

/**
 * Mono uppercase eyebrow — the recurring section/cell label.
 * Sits above every section headline and labels every technical cell.
 */
function Eyebrow({
  children,
  onDark = false,
  as: Tag = 'div',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--mono-eyebrow-size)',
      lineHeight: 'var(--mono-eyebrow-line)',
      letterSpacing: 'var(--mono-eyebrow-track)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--color-on-dark)' : 'var(--color-body)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge, Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sylntra primary action. The black `primary` pill carries every conversion
 * target; mint / white variants are hero-only; ghost rides dark surfaces;
 * outline lives in pricing/feature UIs. Labels are always uppercase mono.
 */
function Button({
  variant = 'primary',
  type = 'button',
  href,
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-medium)',
    fontSize: 'var(--mono-button-size)',
    lineHeight: 'var(--mono-button-line)',
    letterSpacing: 'var(--mono-button-track)',
    textTransform: 'uppercase',
    textDecoration: 'none',
    padding: 'var(--space-md) var(--space-2xl)',
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'opacity 120ms ease, background-color 120ms ease',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    'secondary-mint': {
      background: 'var(--color-accent-mint)',
      color: 'var(--color-ink)'
    },
    'secondary-white': {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)'
    },
    'ghost-on-dark': {
      background: 'var(--color-surface-dark-soft)',
      color: 'var(--color-on-dark)'
    },
    outline: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-xs)'
    }
  };
  const merged = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...style
  };
  const Tag = href ? 'a' : 'button';
  const tagProps = href ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, tagProps, {
    style: merged,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.opacity = '0.85';
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.opacity = '1';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The brand's universal container. Flat by default — depth comes from a
 * hairline border + surface contrast, never a shadow on light surfaces.
 *
 * surface: 'light'  → white card, hairline border (testimonial / article)
 *          'dark'   → navy card, dark hairline border (research / code editor)
 */
function Card({
  surface = 'light',
  padding,
  children,
  style = {},
  ...rest
}) {
  const isDark = surface === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: isDark ? 'var(--color-canvas-dark)' : 'var(--color-canvas)',
      color: isDark ? 'var(--color-on-dark)' : 'var(--color-ink)',
      border: isDark ? 'var(--border-hairline-dark)' : 'var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: padding || 'var(--space-2xl)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * The floating chat-launcher orb — the ONLY fully-pill shape in the system.
 * Black fill, white icon, soft drop shadow (the one place a shadow is allowed).
 */
function IconButton({
  children,
  size = 44,
  label = 'Chat',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: 0,
      borderRadius: 'var(--radius-full)',
      boxShadow: 'var(--shadow-soft)',
      cursor: 'pointer',
      transition: 'opacity 120ms ease',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = '0.88';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = '1';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pastel-tinted stat tile for the white middle band. Big number in display-xl,
 * label in mono eyebrow. tint: 'mint' | 'periwinkle' | 'peach'.
 */
function StatCard({
  value,
  label,
  tint = 'mint',
  style = {},
  ...rest
}) {
  const tints = {
    mint: 'var(--color-accent-mint)',
    periwinkle: 'var(--color-accent-periwinkle)',
    peach: 'var(--color-accent-peach)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tints[tint] || tints.mint,
      color: 'var(--color-ink)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-3xl)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-xl-size)',
      lineHeight: 'var(--display-xl-line)',
      letterSpacing: 'var(--display-xl-track)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--mono-eyebrow-size)',
      lineHeight: 'var(--mono-eyebrow-line)',
      letterSpacing: 'var(--mono-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--color-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pricing-style data table. Header row sits on the hairline surface in mono
 * eyebrow caps; body rows are hairline-divided. Reads more like a sheet than
 * a marketing component.
 *
 * columns: [{ key, label, align }]
 * rows:    [{ [key]: node }]
 */
function DataTable({
  columns = [],
  rows = [],
  style = {},
  ...rest
}) {
  const cell = align => ({
    padding: 'var(--space-md) var(--space-lg)',
    textAlign: align || 'left'
  });
  return /*#__PURE__*/React.createElement("table", _extends({
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-display)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--color-hairline)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      ...cell(c.align),
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--mono-eyebrow-size)',
      letterSpacing: 'var(--mono-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--color-body)'
    }
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: 'var(--border-hairline)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      ...cell(c.align),
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      letterSpacing: 'var(--body-md-track)',
      color: 'var(--color-ink)'
    }
  }, row[c.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tab pill row. Two variants:
 *  - 'feature' : larger pills (radius-md) on a hairline rail — "Full-stack cloud".
 *  - 'subtab'  : tight pills (radius-xs) for pricing tables — TEXT/VISION/IMAGE…
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'feature',
  style = {},
  ...rest
}) {
  const active = value ?? items[0];
  const isFeature = variant === 'feature';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 'var(--space-xs)',
      background: 'var(--color-hairline)',
      borderRadius: isFeature ? 'var(--radius-md)' : 'var(--radius-sm)',
      padding: 'var(--space-xs)',
      ...style
    }
  }, rest), items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      role: "tab",
      "aria-selected": isActive,
      onClick: () => onChange && onChange(item),
      style: {
        fontFamily: isFeature ? 'var(--font-display)' : 'var(--font-display)',
        fontWeight: isFeature ? 'var(--weight-medium)' : 'var(--weight-regular)',
        fontSize: 'var(--body-md-size)',
        letterSpacing: 'var(--body-md-track)',
        color: 'var(--color-ink)',
        background: isActive ? 'var(--color-canvas)' : 'transparent',
        border: 0,
        borderRadius: isFeature ? 'var(--radius-md)' : 'var(--radius-xs)',
        padding: isFeature ? 'var(--space-md) var(--space-2xl)' : 'var(--space-sm) var(--space-lg)',
        cursor: 'pointer',
        transition: 'background-color 120ms ease'
      }
    }, item);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/data/ToggleGroup.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Segmented control — "Standard / Wholesale" style. Hairline rail; the active
 * pill flips to black (primary) with white mono label.
 */
function ToggleGroup({
  items = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  const active = value ?? items[0];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    style: {
      display: 'inline-flex',
      gap: 'var(--space-xs)',
      background: 'var(--color-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-xs)',
      ...style
    }
  }, rest), items.map(item => {
    const isActive = item === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      "aria-pressed": isActive,
      onClick: () => onChange && onChange(item),
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 'var(--weight-medium)',
        fontSize: 'var(--mono-button-size)',
        letterSpacing: 'var(--mono-button-track)',
        textTransform: 'uppercase',
        color: isActive ? 'var(--color-on-primary)' : 'var(--color-ink)',
        background: isActive ? 'var(--color-primary)' : 'var(--color-canvas)',
        border: 0,
        borderRadius: 'var(--radius-sm)',
        padding: 'var(--space-sm) var(--space-lg)',
        cursor: 'pointer',
        transition: 'background-color 120ms ease, color 120ms ease'
      }
    }, item);
  }));
}
Object.assign(__ds_scope, { ToggleGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ToggleGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input for forms. White fill, hairline border, display-sans body, 4px radius.
 */
function Input({
  label,
  id,
  style = {},
  wrapperStyle = {},
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--mono-eyebrow-size)',
      letterSpacing: 'var(--mono-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--color-body)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      letterSpacing: 'var(--body-md-track)',
      color: 'var(--color-ink)',
      background: 'var(--color-canvas)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-md) var(--space-lg)',
      outline: 'none',
      ...style
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--color-ink)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--color-hairline)';
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Bottom 4-column footer nav. White surface, mono-eyebrow column headers,
 * display-sans link rows.
 *
 * columns: [{ heading, links: string[] }]
 */
function Footer({
  columns = [],
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      padding: 'var(--space-section) var(--gutter-desktop)',
      display: 'grid',
      gridTemplateColumns: `repeat(${Math.max(columns.length, 1)}, 1fr)`,
      gap: 'var(--space-3xl)',
      ...style
    }
  }, rest), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.heading,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--mono-eyebrow-size)',
      letterSpacing: 'var(--mono-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--color-body)',
      marginBottom: 'var(--space-sm)'
    }
  }, col.heading), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--body-md-size)',
      letterSpacing: 'var(--body-md-track)',
      textDecoration: 'none',
      color: 'var(--color-ink)'
    }
  }, l)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Top nav. Dark over the hero (`surface="dark"`), white after scroll
 * (`surface="light"`). Logo left, link row centre, CTAs right.
 */
function NavBar({
  links = [],
  surface = 'dark',
  style = {},
  ...rest
}) {
  const isDark = surface === 'dark';
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-2xl)',
      padding: 'var(--space-lg) var(--gutter-desktop)',
      background: isDark ? 'var(--color-canvas-dark)' : 'var(--color-canvas)',
      borderBottom: isDark ? '1px solid var(--color-divider-dark)' : 'var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--gradient-brand)',
      display: 'inline-block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 20,
      letterSpacing: '-0.6px',
      color: isDark ? 'var(--color-on-dark)' : 'var(--color-ink)'
    }
  }, "sylntra")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2xl)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-regular)',
      fontSize: 'var(--body-md-size)',
      letterSpacing: 'var(--body-md-track)',
      textDecoration: 'none',
      color: isDark ? 'var(--color-on-dark)' : 'var(--color-ink)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--body-md-size)',
      letterSpacing: 'var(--body-md-track)',
      textDecoration: 'none',
      color: isDark ? 'var(--color-on-dark)' : 'var(--color-ink)'
    }
  }, "Contact sales"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary"
  }, "Sign in")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/WordmarkBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Giant `sylntra.ai` wordmark sign-off — edge-to-edge, square corners,
 * tinted toward the hairline so it reads as a faint stencil. Sits at the
 * very bottom of every long page.
 */
function WordmarkBanner({
  text = 'sylntra.ai',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-canvas)',
      overflow: 'hidden',
      textAlign: 'center',
      lineHeight: 0.9,
      padding: 'var(--space-3xl) 0 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'clamp(80px, 22vw, 320px)',
      letterSpacing: '-0.03em',
      color: 'var(--color-hairline)',
      whiteSpace: 'nowrap'
    }
  }, text));
}
Object.assign(__ds_scope, { WordmarkBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/WordmarkBanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FeatureSection.jsx
try { (() => {
// Light band: "Full-stack cloud" feature tabs + a dark code-editor mockup,
// plus the pastel stat-tile grid.
function FeatureSection() {
  const {
    Tabs,
    Eyebrow,
    StatCard
  } = window.SylntraDesignSystem_b1b938;
  const [tab, setTab] = React.useState('Inference');
  const copy = {
    Inference: {
      title: 'Serverless inference, instantly',
      body: 'Call 200+ open models over an OpenAI-compatible API. No cold starts, pay per token.',
      code: ['from sylntra import Sylntra', '', 'client = Sylntra()', 'resp = client.chat.completions.create(', '    model="meta-llama/Llama-3.1-70B",', '    messages=[{"role":"user",', '        "content":"Explain MoE routing"}],', ')', 'print(resp.choices[0].message.content)']
    },
    'Fine-tuning': {
      title: 'Fine-tune on your data',
      body: 'LoRA and full fine-tunes with one command. Deploy the result to a dedicated endpoint.',
      code: ['sylntra fine-tuning create \\', '  --model meta-llama/Llama-3.1-8B \\', '  --training-file data.jsonl \\', '  --lora --n-epochs 3', '', '# → ft-job-7fa2c... queued', '# → checkpoint ready in ~14m']
    },
    'GPU Clusters': {
      title: 'Dedicated GPU clusters',
      body: 'Reserve H100 and H200 clusters with high-speed interconnect for training at scale.',
      code: ['cluster:', '  accelerator: H200', '  nodes: 16', '  interconnect: infiniband-3.2T', '  region: us-east', '', '# 128 GPUs · provisioned in minutes']
    }
  };
  const active = copy[tab];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      padding: 'var(--space-section) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }, "Full-stack cloud"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-2xl)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-xl-size)',
      lineHeight: 'var(--display-xl-line)',
      letterSpacing: 'var(--display-xl-track)',
      color: 'var(--color-ink)'
    }
  }, "The Sylntra Platform"), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Inference', 'Fine-tuning', 'GPU Clusters'],
    value: tab,
    onChange: setTab,
    style: {
      marginBottom: 'var(--space-3xl)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 'var(--space-5xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-lg)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-lg-size)',
      lineHeight: 'var(--display-lg-line)',
      letterSpacing: 'var(--display-lg-track)',
      color: 'var(--color-ink)'
    }
  }, active.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 420,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      letterSpacing: 'var(--body-md-track)',
      color: 'var(--color-body)'
    }
  }, active.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-canvas-dark)',
      color: 'var(--color-on-dark)',
      borderRadius: 'var(--radius-sm)',
      padding: 'var(--space-2xl)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--mono-caption-size)',
      lineHeight: '1.7',
      letterSpacing: 'var(--mono-caption-track)',
      whiteSpace: 'pre',
      overflowX: 'auto'
    }
  }, active.code.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-surface-dark-soft)',
      filter: 'brightness(2.2)',
      userSelect: 'none'
    }
  }, String(i + 1).padStart(2, ' ')), /*#__PURE__*/React.createElement("span", null, line || ' '))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-lg)',
      marginTop: 'var(--space-section)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "200+",
    label: "Open models served",
    tint: "mint"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "11x",
    label: "Faster than vLLM",
    tint: "periwinkle"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "99.9%",
    label: "Production uptime",
    tint: "peach"
  }))));
}
window.SylntraFeatureSection = FeatureSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FeatureSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Brand gradient ribbon — the only decorative chrome. Layered translucent
// shapes that imply depth without leaving the palette.
function RibbonGraphic({
  height = 420
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 520 460",
    width: "100%",
    style: {
      display: 'block',
      maxHeight: height
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "ribbonA",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#fc4c02"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "52%",
    stopColor: "#ef2cc1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#bdbbff"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "ribbonB",
    x1: "1",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#bdbbff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "50%",
    stopColor: "#ef2cc1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#fc4c02"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M40 300 C 120 120, 260 80, 480 60 C 360 160, 320 280, 360 420 C 220 360, 120 380, 40 300 Z",
    fill: "url(#ribbonA)",
    opacity: "0.95"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M90 360 C 180 200, 300 160, 470 150 C 360 240, 330 340, 360 440 C 240 400, 160 420, 90 360 Z",
    fill: "url(#ribbonB)",
    opacity: "0.55"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M150 250 C 230 150, 330 130, 460 120 C 380 200, 360 300, 380 400 C 280 360, 210 330, 150 250 Z",
    fill: "url(#ribbonA)",
    opacity: "0.4"
  }));
}
function Hero() {
  const {
    Button,
    Eyebrow
  } = window.SylntraDesignSystem_b1b938;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas-dark)',
      color: 'var(--color-on-dark)',
      padding: 'var(--space-section) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-6xl)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true,
    style: {
      marginBottom: 'var(--space-2xl)'
    }
  }, "The AI Native Cloud"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-xxl-size)',
      lineHeight: 'var(--display-xxl-line)',
      letterSpacing: 'var(--display-xxl-track)'
    }
  }, "Build what's next on the AI Native Cloud"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-2xl) 0 var(--space-5xl)',
      maxWidth: 460,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--body-lg-size)',
      lineHeight: 'var(--body-lg-line)',
      letterSpacing: 'var(--body-lg-track)',
      opacity: 0.78
    }
  }, "Train, fine-tune, and run inference on 200+ open models \u2014 on GPU infrastructure built for frontier-scale AI."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-mint"
  }, "Start building"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary-white"
  }, "Contact sales"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RibbonGraphic, null))));
}
window.SylntraHero = Hero;
window.SylntraRibbon = RibbonGraphic;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PricingBand.jsx
try { (() => {
// Light band: pricing — toggle + sub-tabs + serverless inference data table.
function PricingBand() {
  const {
    DataTable,
    Tabs,
    ToggleGroup,
    Eyebrow,
    Button
  } = window.SylntraDesignSystem_b1b938;
  const [mode, setMode] = React.useState('Standard Pricing');
  const [tab, setTab] = React.useState('TEXT');
  const data = {
    TEXT: [{
      model: 'Llama 3.1 70B Instruct',
      ctx: '128K',
      input: '$0.88',
      output: '$0.88'
    }, {
      model: 'Llama 3.1 8B Instruct',
      ctx: '128K',
      input: '$0.18',
      output: '$0.18'
    }, {
      model: 'Qwen2.5 72B Instruct',
      ctx: '32K',
      input: '$1.20',
      output: '$1.20'
    }, {
      model: 'DeepSeek V3',
      ctx: '64K',
      input: '$0.27',
      output: '$1.10'
    }, {
      model: 'Mixtral 8x22B',
      ctx: '64K',
      input: '$1.20',
      output: '$1.20'
    }],
    VISION: [{
      model: 'Llama 3.2 90B Vision',
      ctx: '128K',
      input: '$1.20',
      output: '$1.20'
    }, {
      model: 'Qwen2-VL 72B',
      ctx: '32K',
      input: '$1.20',
      output: '$1.20'
    }],
    IMAGE: [{
      model: 'FLUX.1 [schnell]',
      ctx: '—',
      input: '$0.0027 / img',
      output: '—'
    }, {
      model: 'FLUX.1 [dev]',
      ctx: '—',
      input: '$0.025 / img',
      output: '—'
    }],
    AUDIO: [{
      model: 'Whisper Large v3',
      ctx: '—',
      input: '$0.0015 / min',
      output: '—'
    }]
  };
  const discount = mode === 'Wholesale Pricing';
  const rows = data[tab].map(r => discount && r.input.startsWith('$') ? {
    ...r,
    input: r.input,
    output: r.output,
    model: r.model + '  ·  −20%'
  } : r);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      padding: 'var(--space-5xl) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: 'var(--space-2xl)',
      marginBottom: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-xl-size)',
      lineHeight: 'var(--display-xl-line)',
      letterSpacing: 'var(--display-xl-track)',
      color: 'var(--color-ink)'
    }
  }, "Pay only for what you use"), /*#__PURE__*/React.createElement(ToggleGroup, {
    items: ['Standard Pricing', 'Wholesale Pricing'],
    value: mode,
    onChange: setMode
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    variant: "subtab",
    items: ['TEXT', 'VISION', 'IMAGE', 'AUDIO'],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'model',
      label: 'Model'
    }, {
      key: 'ctx',
      label: 'Context'
    }, {
      key: 'input',
      label: 'Input $/1M',
      align: 'right'
    }, {
      key: 'output',
      label: 'Output $/1M',
      align: 'right'
    }],
    rows: rows
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3xl)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Get started now"))));
}
window.SylntraPricingBand = PricingBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PricingBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ResearchBand.jsx
try { (() => {
// Dark band: "Grounded in cutting-edge research" — 4-up research-card grid.
function ResearchBand() {
  const {
    Card,
    Eyebrow,
    Button
  } = window.SylntraDesignSystem_b1b938;
  const cards = [{
    tag: 'INFERENCE',
    title: 'FlashAttention-3',
    body: 'Up to 2x faster attention on Hopper GPUs with asynchrony and low-precision.'
  }, {
    tag: 'TRAINING',
    title: 'Mixture of Agents',
    body: 'Layered open models that collectively outperform a single frontier model.'
  }, {
    tag: 'KERNELS',
    title: 'Speculative decoding',
    body: 'Draft-and-verify decoding that cuts latency without quality loss.'
  }, {
    tag: 'DATASETS',
    title: 'RedPajama v2',
    body: '30T tokens of open pre-training data with quality signals included.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas-dark)',
      color: 'var(--color-on-dark)',
      padding: 'var(--space-section) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 'var(--space-5xl)',
      flexWrap: 'wrap',
      gap: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true,
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }, "Research"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: 560,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-xl-size)',
      lineHeight: 'var(--display-xl-line)',
      letterSpacing: 'var(--display-xl-track)'
    }
  }, "Grounded in cutting-edge research")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-on-dark"
  }, "Read the research")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-lg)'
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    surface: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--mono-eyebrow-size)',
      letterSpacing: 'var(--mono-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--color-accent-periwinkle)',
      marginBottom: 'var(--space-2xl)'
    }
  }, c.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 var(--space-md)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-md-size)',
      lineHeight: 'var(--display-md-line)',
      letterSpacing: 'var(--display-md-track)'
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      letterSpacing: 'var(--body-md-track)',
      opacity: 0.72
    }
  }, c.body))))));
}
window.SylntraResearchBand = ResearchBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ResearchBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TestimonialsBand.jsx
try { (() => {
// Light band: "AI natives build on Sylntra" — 3-up testimonial cards.
// Portraits are placeholder square crops (no licensed photography in the kit).
function TestimonialsBand() {
  const {
    Card,
    Eyebrow
  } = window.SylntraDesignSystem_b1b938;
  const items = [{
    name: 'Maya Okonkwo',
    role: 'CTO, Vectorlin',
    quote: 'We cut inference cost 60% the week we moved to Sylntra — and latency dropped with it.',
    stat: '60% LOWER COST',
    tint: 'var(--color-accent-mint)',
    initials: 'MO'
  }, {
    name: 'Dev Ramachandran',
    role: 'Founder, Loomtide',
    quote: 'Fine-tuning that used to take a day of plumbing is now one command and a coffee.',
    stat: '14 MIN / FINE-TUNE',
    tint: 'var(--color-accent-periwinkle)',
    initials: 'DR'
  }, {
    name: 'Sofia Brandt',
    role: 'Head of AI, Northwind',
    quote: 'Dedicated H200 clusters let us train frontier-scale models without owning a datacenter.',
    stat: '128 GPUS RESERVED',
    tint: 'var(--color-accent-peach)',
    initials: 'SB'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      padding: 'var(--space-section) var(--gutter-desktop)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 'var(--space-lg)'
    }
  }, "Customers"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 var(--space-5xl)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-xl-size)',
      lineHeight: 'var(--display-xl-line)',
      letterSpacing: 'var(--display-xl-track)',
      color: 'var(--color-ink)'
    }
  }, "AI natives build on Sylntra"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-lg)'
    }
  }, items.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    surface: "light",
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1 / 1',
      background: t.tint,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 40,
      letterSpacing: '1px',
      color: 'var(--color-ink)',
      opacity: 0.85
    }
  }, t.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-2xl)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-2xl)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--body-md-size)',
      lineHeight: 'var(--body-md-line)',
      letterSpacing: 'var(--body-md-track)',
      color: 'var(--color-ink)'
    }
  }, "\"", t.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--display-md-size)',
      lineHeight: 'var(--display-md-line)',
      letterSpacing: 'var(--display-md-track)',
      color: 'var(--color-ink)'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--caption-size)',
      color: 'var(--color-body)',
      marginTop: 'var(--space-xxs)'
    }
  }, t.role), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-lg)',
      paddingTop: 'var(--space-lg)',
      borderTop: 'var(--border-hairline)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--mono-eyebrow-size)',
      letterSpacing: 'var(--mono-eyebrow-track)',
      textTransform: 'uppercase',
      color: 'var(--color-body)'
    }
  }, t.stat)))))));
}
window.SylntraTestimonialsBand = TestimonialsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TestimonialsBand.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ToggleGroup = __ds_scope.ToggleGroup;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.WordmarkBanner = __ds_scope.WordmarkBanner;

})();
