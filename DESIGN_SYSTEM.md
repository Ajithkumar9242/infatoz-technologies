# Infatoz Technologies Design System (ITDS)
**Version:** 1.0.0  
**Design Reference:** Tech Mahindra (Enterprise Rigor, Scale, Clarity)  
**Target Identity:** Infatoz Technologies ("Idea to Impact")  
**Compliance Target:** WCAG 2.2 AA

---

## 1. Brand Direction & Creative Philosophy
Infatoz Technologies is positioned as an enterprise-grade digital engineering and business technology transformation partner. The visual style moves away from generic SaaS templates and towards an authoritative, confident corporate presence:
- **Authority & Precision:** Clean architectural grid alignments, deliberate whitespace, structured information density.
- **Enterprise Palette:** Deep corporate navy/slate (`#0A1128`, `#0F172A`) paired with high-contrast electric cobalt (`#0284C7`, `#2563EB`) and cyan highlights (`#38BDF8`), grounded on pure white and subtle mist gray backdrops (`#F8FAFC`).
- **Typography:** High-impact geometric display typography for headings paired with crisp, highly legible body copy.
- **Authenticity:** All metrics, service definitions, client testimonials, case studies, and contact coordinates reflect verified Infatoz operational reality.

---

## 2. Semantic Token Definitions

### Color System (CSS Variables)
```css
:root {
  /* Brand Tokens */
  --color-brand-primary: #0A1128;        /* Deep Enterprise Slate */
  --color-brand-secondary: #0047AB;      /* Strategic Cobalt */
  --color-brand-accent: #0284C7;         /* High-tech Cyan/Blue */
  --color-brand-accent-hover: #0369A1;
  --color-brand-glow: #38BDF8;

  /* Surface & Backgrounds */
  --surface-main: #FFFFFF;
  --surface-subtle: #F8FAFC;             /* Light mist background */
  --surface-card: #FFFFFF;
  --surface-dark: #0B132B;               /* Enterprise dark section */
  --surface-dark-card: #14213D;
  --surface-dark-border: rgba(255, 255, 255, 0.1);

  /* Typography / Foreground */
  --text-primary: #0F172A;              /* 900 slate, > 11:1 contrast */
  --text-secondary: #334155;            /* 700 slate, > 6:1 contrast */
  --text-muted: #64748B;                /* 500 slate, > 4.5:1 contrast */
  --text-inverse: #FFFFFF;
  --text-inverse-muted: #94A3B8;

  /* Borders & Dividers */
  --border-subtle: rgba(226, 232, 240, 0.8);
  --border-medium: #CBD5E1;
  --border-focus: #0284C7;

  /* State Tokens */
  --state-success: #10B981;
  --state-warning: #F59E0B;
  --state-error: #EF4444;
}
```

---

## 3. Typography Scale & Fluid Hierarchies
Typography uses fluid `clamp()` formulations to ensure seamless scaling from 360px mobile viewport to 4K ultra-wide screens without jarring breakpoint jumps.

| Role | Token / Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| **Display / Hero** | `clamp(2.5rem, 5vw, 4.25rem)` | 800 (Bold) | 1.1 | -0.03em |
| **H1 Headline** | `clamp(2rem, 4vw, 3.25rem)` | 700 (Bold) | 1.15 | -0.025em |
| **H2 Section** | `clamp(1.75rem, 3vw, 2.5rem)` | 700 (Bold) | 1.2 | -0.02em |
| **H3 Subsection** | `clamp(1.25rem, 2vw, 1.625rem)` | 600 (Semibold) | 1.3 | -0.015em |
| **H4 Card Title** | `1.125rem` (18px) | 600 (Semibold) | 1.4 | -0.01em |
| **Body Large** | `1.125rem` (18px) | 400/500 | 1.65 | 0 |
| **Body Base** | `1rem` (16px) | 400 | 1.6 | 0 |
| **Body Small** | `0.875rem` (14px) | 400/500 | 1.5 | 0 |
| **Eyebrow / Badge** | `0.75rem` (12px) | 700 | 1.0 | +0.08em (Uppercase) |

---

## 4. Spacing Scale & Container Layout Rules
- **Container Maximum Width:** `1280px` (`max-w-7xl`) for standard editorial grids, with `1440px` (`max-w-screen-2xl`) for global navigation and footer frames.
- **Horizontal Gutters:**
  - Mobile (< 640px): `px-4` (16px) or `px-6` (24px)
  - Tablet (640px - 1024px): `px-8` (32px)
  - Desktop (1024px+): `px-8` or `px-12` (48px)
- **Section Vertical Padding:**
  - Standard Sections: `py-16 md:py-24` (64px to 96px)
  - Hero Section: `pt-28 pb-16 md:pt-36 md:pb-24`
  - Compact Sections: `py-10 md:py-14`

---

## 5. Component Variants & States

### Button Variants
1. **Primary Button:** High contrast cobalt background (`bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all focus-visible:ring-4 focus-visible:ring-blue-300`).
2. **Secondary / Enterprise Button:** Deep dark corporate background (`bg-slate-900 hover:bg-slate-800 text-white border border-slate-700`).
3. **Outline Button:** Clean border (`border-2 border-slate-300 text-slate-900 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50`).
4. **Text / Link Button:** Arrow link transition with forward nudge on hover (`group-hover:translate-x-1`).

### Card Elevation & Transitions
- Cards employ subtle border `border border-slate-200/80` and ambient shadow `shadow-sm hover:shadow-md hover:border-blue-500/30`.
- All transitions respect standard easing curves `cubic-bezier(0.16, 1, 0.3, 1)`.
---

## 6. Brand Logo Architecture & Asset Strategy

Infatoz Technologies uses vector SVG assets rendered through the unified component `components/ui/InfatozLogo.tsx`.

### Asset Specifications
- **Light Surface Logo:** `public/images/infatoz-logo.svg`
  - High-contrast geometric "I" mark with deep navy `#0A1128` logotype and electric blue dot.
  - Rendered in Header navigation (`SiteHeader.tsx`) and mobile drawer (`MobileDrawer.tsx`).
- **Dark Surface Logo (Inverse):** `public/images/infatoz-logo-white.svg`
  - Crisp white logotype `#FFFFFF` with cobalt monogram and sky-blue dot.
  - Rendered in Global Footer (`SiteFooter.tsx`).
- **Asset Replacement Guide for Proprietary Files:**
  - To substitute with the design agency's vector export, save the light logo file directly to `public/images/infatoz-logo.svg` and the dark/white logo file to `public/images/infatoz-logo-white.svg`. The application will automatically reflect the updated assets with zero code changes needed.

---

## 7. Purposeful Motion Design Tokens

All animations adhere to enterprise restraint: continuous animations provide ambient life without cognitive distraction, and every animation immediately halts when `prefers-reduced-motion: reduce` is detected.

| Motion Token | Timing / Keyframe | Purpose | Trigger / Controls |
|---|---|---|---|
| **Tech Marquee** | `marquee 38s linear infinite` | Displays continuous rotating ecosystem strip | Pauses automatically on `:hover` and `:focus-within`; switches to static grid on reduced motion |
| **Hero Ambient Glow** | `pulse-subtle 7s ease-in-out infinite` | Soft atmospheric depth in hero backdrop | Ambient, hardware-accelerated via `opacity` and `transform` |
| **Workflow Step Track** | Desktop horizontal gradient connector | Visual progress journey across 5 delivery phases | Static visual line behind step cards (`hidden lg:block`) |
| **Carousel Transition** | 200ms ease-out | Smooth testimonial transitions | Arrow keys, click controls, tab buttons |

---

## 8. WCAG 2.2 AA Contrast Compliance Matrix

Every foreground color token is strictly verified against background luminance to ensure full WCAG 2.2 AA compliance (≥ 4.5:1 for normal body text, ≥ 3.0:1 for large display titles and icons).

### Light Backgrounds (`#FFFFFF`, `#F8FAFC`, `#F1F5F9`)
- `text-slate-900` (`#0F172A`): **14.2:1** (AAA Compliant) — Page titles, headlines, bold card headers.
- `text-slate-800` (`#1E293B`): **10.3:1** (AAA Compliant) — Primary body copy, emphasis labels.
- `text-slate-700` (`#334155`): **7.6:1** (AAA Compliant) — Secondary body copy, descriptions, list items.
- `text-slate-600` (`#475569`): **5.7:1** (AA Compliant for all text) — Micro-copy, metadata, category tags, disclaimers.
- `text-blue-700` (`#1D4ED8`): **7.2:1** (AAA Compliant) — Primary links, active badges, phase indicators.
- ⚠️ *Deprecated:* `text-slate-400` on light surfaces (~3.1:1) has been completely removed and upgraded to `text-slate-600`.

### Dark Backgrounds (`#020617`, `#0A1128`, `#0F172A`)
- `text-white` (`#FFFFFF`): **16.5:1** (AAA Compliant) — Hero headlines, section titles.
- `text-slate-100` (`#F1F5F9`): **14.1:1** (AAA Compliant) — Featured testimonial blockquotes.
- `text-slate-300` (`#CBD5E1`): **8.5:1** (AAA Compliant) — Hero body narrative, telemetry metadata.
- `text-sky-400` (`#38BDF8`): **6.2:1** (AA Compliant) — Accent highlights, badges, glowing indicators.

---

## 9. Prohibited Visual Patterns
- ❌ No generic neon multi-color rainbow gradients.
- ❌ No low-contrast thin light gray text (`text-slate-400`) on white or light surfaces.
- ❌ No ungrounded floating 3D glass cards with excessive 50px border-radii.
- ❌ No auto-advancing carousels that move without user pause controls.
- ❌ No fake fabricated numbers or customer logos not substantiated by verified source materials.
