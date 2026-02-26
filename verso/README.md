# Verso — Minimal Portfolio Template

**A refined, anti-bland portfolio template for designers, developers, photographers, and freelancers who want a personal site that feels like a design studio made it.**

Verso is built around editorial typography, generous whitespace, and subtle scroll animations. Every detail — from the serif/sans pairing to the asymmetric project grid — is designed to make your work the focus.

---

## Features

- **5 Pages** — Home, Work, About, Journal, Contact
- **Light & Dark Mode** — Seamless theme toggle with smooth transitions
- **Scroll Animations** — Subtle fade-up reveals using Intersection Observer
- **Filterable Portfolio** — Category-based filtering on the Work page
- **Responsive** — Mobile-first design, pixel-perfect at all breakpoints
- **Smart Navigation** — Auto-hide on scroll, frosted glass effect, mobile drawer
- **Contact Form** — Styled form with validation-ready structure
- **Semantic HTML** — Clean, accessible markup throughout
- **prefers-reduced-motion** — All animations gracefully disabled

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Full-viewport hero, asymmetric featured projects grid, brief about, CTA |
| Work | `work.html` | Filterable 3-column project grid with hover reveals |
| About | `about.html` | Split layout (photo + bio), skills grid, experience timeline |
| Journal | `blog.html` | Typography-focused post list with dates and tags |
| Contact | `contact.html` | Minimal form, email/phone links, social links, location |

## Typography

- **Headings:** Playfair Display (serif) — editorial, characterful
- **Body:** Inter (sans-serif) — clean, highly legible
- **Hierarchy:** Fluid type scale using `clamp()` for smooth responsiveness
- **Details:** Tight heading tracking (-0.03em to -0.04em), generous body line-height (1.65)

## Colors

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| Background | `#FAF9F6` | `#141414` |
| Surface | `#F3F1EC` | `#1C1C1C` |
| Text | `#1A1A1A` | `#E8E4DF` |
| Accent | `#C45D3E` (Terracotta) | `#C45D3E` |
| Secondary | `#8A8578` | `#8A8578` |
| Border | `rgba(0,0,0,0.08)` | `rgba(255,255,255,0.06)` |

## Customization

### Changing Colors
All colors are defined as CSS custom properties in `css/style.css`. Update the `:root` and `[data-theme="dark"]` blocks to match your brand.

### Changing Fonts
Update the Google Fonts import at the top of `css/style.css` and the `--font-body` / `--font-heading` custom properties.

### Adding Projects
Duplicate a `.work-card` in `work.html` and update the `data-category` attribute for filtering.

### Content
All copy is inline in the HTML files — no CMS or build step required. Replace the placeholder text and images with your own.

## File Structure

```
verso/
├── index.html          # Home page
├── work.html           # Portfolio grid
├── about.html          # About page
├── blog.html           # Journal page
├── contact.html        # Contact page
├── css/
│   ├── style.css       # Design system & components
│   └── animations.css  # Scroll animations & transitions
├── js/
│   └── main.js         # Interactions & theme toggle
└── README.md           # This file
```

## Technical Details

- Pure HTML/CSS/JS — no build tools or frameworks
- CSS Custom Properties for full theming
- CSS Grid & Flexbox layouts
- Intersection Observer for scroll reveals
- `prefers-reduced-motion` respected
- Mobile-first responsive design
- 8px spacing grid system
- View Transitions API for cross-page transitions (Chrome)

## Recreating in Framer

This prototype serves as a pixel-perfect design spec. When building in Framer:

1. Set up the design tokens (colors, fonts, spacing) as Framer variables
2. Build the nav as a shared component with variants (light/dark, mobile/desktop)
3. Use Framer's built-in scroll animations for the reveal effects
4. The work grid filter can use Framer's CMS + filter component
5. Journal entries map to a CMS collection
6. Dark mode toggle uses Framer's color mode component
7. Contact form connects to Formspree or similar

---

*Designed as a free portfolio template for the Framer Marketplace.*
