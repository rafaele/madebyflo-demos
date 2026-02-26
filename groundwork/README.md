# Groundwork — Contractor & Trades Website Template

A clean, professional, conversion-focused website template built for contractors, plumbers, electricians, landscapers, roofers, handymen, and home service businesses.

## Pages
- **Home** (`index.html`) — Hero with CTA, services grid, about snippet, testimonials, service areas, trust badges
- **Services** (`services.html`) — Detailed service cards with descriptions and process section
- **About** (`about.html`) — Company story, values, team, certifications
- **Projects** (`gallery.html`) — Project showcase grid + before/after comparisons
- **Contact** (`contact.html`) — Contact form with service dropdown, business info, hours, map placeholder

## Customization

### Change the Accent Color
Open `css/style.css` and modify these CSS variables at the top:
```css
--accent: #E67E22;        /* Main accent color */
--accent-dark: #CF6D17;   /* Hover state */
--accent-light: #F39C4A;  /* Light variant */
--accent-rgb: 230, 126, 34; /* RGB for opacity uses */
```

Some good alternatives:
- **Deep Green:** `#2D6A4F` (landscaping, eco)
- **Navy Blue:** `#1E3A5F` (plumbing, HVAC)
- **Red:** `#C0392B` (emergency services)
- **Teal:** `#0D7377` (modern trades)

### Replace Content
- Update company name in the `.header__logo` and `.footer__brand-name` elements
- Replace phone number (`+15551234567`) across all pages
- Swap placeholder images with your own project photos
- Update Schema.org JSON-LD in `index.html` with your business details
- Replace service descriptions and testimonials

### Dark Mode
Add `data-theme="dark"` to `<html>` or use the optional dark mode toggle (add `data-dark-toggle` attribute to a button).

## Tech Stack
- Pure HTML, CSS, JavaScript — no dependencies
- Google Fonts: DM Sans (headings) + Inter (body)
- CSS custom properties for easy theming
- Mobile-first responsive design
- Schema.org LocalBusiness structured data
- Semantic HTML with ARIA labels
- IntersectionObserver for scroll animations
- `prefers-reduced-motion` respected

## Browser Support
All modern browsers (Chrome, Firefox, Safari, Edge). Uses backdrop-filter for glassmorphic nav.

## License
Template for Framer marketplace. $35.
