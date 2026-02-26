# Signal — Newsletter / Creator Template

A clean, editorial website template designed for newsletter creators, writers, and independent publishers. Built with pure HTML, CSS, and vanilla JavaScript.

## Pages

1. **Home** (`index.html`) — Hero with subscribe CTA, featured post, recent posts grid, social proof/testimonials
2. **Archive** (`archive.html`) — Full post archive with search and category filters
3. **About** (`about.html`) — Creator bio, stats, mission statement, testimonials
4. **Post** (`post.html`) — Single article layout with share buttons, author card, related posts
5. **Contact** (`contact.html`) — Contact form, social links, speaking inquiries

## Features

- **Dark/Light theme toggle** with localStorage persistence
- **Mobile-responsive** hamburger navigation
- **Scroll animations** via Intersection Observer
- **Archive filtering** by category with live search
- **Subscribe forms** on every page (visual — connect your own backend)
- **Auto-hiding navbar** on scroll
- **No dependencies** — pure HTML, CSS, vanilla JS
- **No build tools** — open `index.html` and go

## Design

- **Fonts:** Instrument Serif (headings) + Inter (body) via Google Fonts
- **Accent:** Coral/salmon `#E86C5D`
- **Approach:** Typography-forward, generous whitespace, editorial feel

## Customization

All design tokens are CSS custom properties in `css/style.css`:

```css
:root {
  --color-accent: #E86C5D;
  --font-heading: 'Instrument Serif', Georgia, serif;
  --font-body: 'Inter', sans-serif;
  --max-width: 1200px;
  /* ... */
}
```

## Structure

```
signal/
├── index.html
├── archive.html
├── about.html
├── post.html
├── contact.html
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   └── main.js
├── README.md
└── LICENSE.md
```

## License

MIT — see LICENSE.md
