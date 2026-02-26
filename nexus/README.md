# Nexus — AI/SaaS Landing Page Template

A dark-mode-first, editorial-quality landing page template for AI startups, SaaS products, and developer tools. Built with pure HTML/CSS/JS — no frameworks, no dependencies.

## Pages

1. **index.html** — Full landing page (hero, logos, features bento grid, how it works, testimonials, pricing, FAQ, CTA)
2. **changelog.html** — Product update timeline
3. **legal.html** — Privacy policy + terms of service

## Features

- 🌙 Dark mode default + light mode toggle
- 📱 Mobile-first responsive design
- ✨ Scroll-reveal animations (Intersection Observer)
- 🎯 Spotlight hover effect on feature cards
- 🎨 Animated gradient border CTA button
- ♿ prefers-reduced-motion respected
- 🔍 Semantic HTML, clean CSS custom properties
- ⚡ Zero dependencies — pure HTML/CSS/JS

## Design Tokens

All colors, typography, spacing, and radii are CSS custom properties in `css/style.css`. Override the `:root` block to rebrand instantly.

## Structure

```
nexus/
├── index.html
├── changelog.html
├── legal.html
├── css/
│   ├── style.css        # Tokens, base, components
│   └── animations.css   # Scroll reveals, hero animations
├── js/
│   └── main.js          # Theme toggle, FAQ, observers, spotlight
└── README.md
```

## Customization

1. **Colors:** Edit CSS custom properties in `:root` (style.css line ~3)
2. **Fonts:** Swap Google Fonts / Fontshare links in `<head>`
3. **Content:** Replace placeholder text, logos, and mockup
4. **Images:** Drop a product screenshot into `.hero__mockup`

## Typography

- **Headings:** General Sans (via Fontshare) — geometric, confident
- **Body:** Inter (via Google Fonts) — clean, readable

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge). Backdrop-filter requires `-webkit-` prefix for Safari (included).

## License

Free for personal and commercial use. Attribution appreciated but not required.
