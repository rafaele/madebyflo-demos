# Starter — Free Tailwind CSS Template

A clean, minimal single-page template built with Tailwind CSS v4. Perfect for landing pages, product launches, or as a starting point for your next project.

**[Get more templates →](https://madebyflo.com)**

## Features

- ✦ **Tailwind CSS v4** — latest version with `@theme` directive
- ✦ **Dark mode** — system detection + manual toggle
- ✦ **Fully responsive** — mobile-first, looks great everywhere
- ✦ **Zero build step** — uses Tailwind browser CDN, just open and edit
- ✦ **Scroll animations** — subtle fade-in effects via Intersection Observer
- ✦ **Inter font** — clean, modern typography from Google Fonts
- ✦ **Semantic HTML** — accessible, SEO-friendly structure

## Quick Start

1. Download and unzip
2. Open `index.html` in your browser
3. Edit the HTML to make it yours

That's it. No npm, no build tools, no config files.

## Customizing Colors

Edit the `@theme` block in the `<style>` tag to change the color palette:

```css
@theme {
  --color-bg: #FAFAFA;        /* Light background */
  --color-bg-dark: #111111;    /* Dark background */
  --color-ink: #111111;        /* Light mode text */
  --color-ink-dark: #ECECEC;   /* Dark mode text */
  --color-muted: #71717A;      /* Secondary text */
  --color-surface: #F0F0F0;    /* Card backgrounds */
  /* ... */
}
```

## Production Use

For production, replace the Tailwind browser CDN with a proper build:

```bash
npm install tailwindcss @tailwindcss/cli
npx @tailwindcss/cli -i input.css -o output.css --minify
```

Then swap the `<script>` tag for a `<link>` to your compiled CSS.

## License

Free to use for personal and commercial projects. Attribution appreciated but not required.

Made with care by [MadebyFlo](https://madebyflo.com).
