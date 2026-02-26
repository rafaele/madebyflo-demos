# Atelier — Premium Creative Studio Template

**A refined, award-quality website template for design studios, creative agencies, and freelance designers.**

Atelier is built for creatives who demand the same level of polish in their website as they deliver in their work. Every typographic detail, spacing decision, and interaction has been considered with the care you'd expect from a top-tier design studio.

---

## Features

- **6 Pages** — Home, Work, Case Study, About, Services, Contact
- **Light & Dark Mode** — Seamless theme toggle with smooth transitions
- **Scroll Animations** — Subtle fade-up reveals using Intersection Observer
- **Filterable Portfolio** — Category-based filtering on the Work page
- **Custom Cursor** — Elegant cursor effect on interactive elements (desktop)
- **Responsive** — Pixel-perfect at desktop, tablet, and mobile breakpoints
- **Smart Navigation** — Auto-hide on scroll, frosted glass effect, mobile drawer
- **Contact Form** — Styled form with validation-ready structure
- **Semantic HTML** — Clean, accessible markup throughout

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, featured work grid, services overview, testimonial, CTA |
| Work | `work.html` | Filterable project grid with hover effects |
| Case Study | `case-study.html` | Project deep-dive with problem/process/result format |
| About | `about.html` | Studio story, team grid, values section |
| Services | `services.html` | Service offerings, process steps, CTA |
| Contact | `contact.html` | Contact form, studio info, map placeholder, social links |

## Typography

- **Headings:** Playfair Display (serif) — elegant, editorial feel
- **Body:** Inter (sans-serif) — clean, highly legible
- **Hierarchy:** Fluid type scale using `clamp()` for smooth responsiveness

## Colors

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| Background | `#FAFAF8` | `#111111` |
| Text | `#1A1A1A` | `#F0F0F0` |
| Accent | `#C45D3E` (Terracotta) | `#C45D3E` |
| Muted | `#6B6B6B` | `#A0A0A0` |
| Border | `#E5E4E1` | `#2A2A2A` |

## Customization

### Changing Colors
All colors are defined as CSS custom properties in `css/style.css`. Update the `:root` and `[data-theme="dark"]` blocks to match your brand.

### Changing Fonts
Update the Google Fonts import at the top of `css/style.css` and the `--font-body` / `--font-heading` custom properties.

### Adding Projects
Duplicate a `.work-card` in `work.html` and update the `data-category` attribute. Create new case study pages by duplicating `case-study.html`.

### Content
All copy is inline in the HTML files — no CMS or build step required. Replace the placeholder text with your own studio content.

## File Structure

```
atelier/
├── index.html          # Home page
├── work.html           # Portfolio grid
├── case-study.html     # Case study template
├── about.html          # About page
├── services.html       # Services page
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
- CSS Custom Properties for theming
- CSS Grid & Flexbox layouts
- Intersection Observer for scroll reveals
- `prefers-reduced-motion` respected
- Mobile-first responsive design
- 8px spacing grid system

## Recreating in Framer

This prototype serves as a pixel-perfect design spec. When building in Framer:

1. Set up the design tokens (colors, fonts, spacing) as Framer variables
2. Build the nav as a shared component with variants (light/dark, mobile/desktop)
3. Use Framer's built-in scroll animations for the reveal effects
4. The work grid filter can use Framer's CMS + filter component
5. Each case study page maps to a CMS template page
6. Dark mode toggle uses Framer's color mode component

---

*Designed by Atelier Studio Template. Built for the Framer Marketplace.*
