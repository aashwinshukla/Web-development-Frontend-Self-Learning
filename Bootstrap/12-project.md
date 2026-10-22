# Bootstrap — Project: Cosmos Webpage

A small universe-themed webpage built entirely with Bootstrap 5. Covers most of the concepts from the notes in a single practical page.

> **Location:** `bootstrap-5.0.2-dist/index.html`

---

## Structure

```
bootstrap-5.0.2-dist/
├── index.html       ← the project
├── css/
│   └── bootstrap.min.css
└── js/
    └── bootstrap.bundle.min.js
```

Images are loaded from Unsplash via URL — no local assets needed.

---

## Sections & What Each Uses

### Navbar
- `navbar navbar-expand-lg sticky-top` — collapses on mobile, sticks to top on scroll
- `navbar-brand`, `navbar-toggler`, `navbar-collapse`
- `ms-auto` to push nav links to the right
- Custom dark background and purple accent via inline CSS

### Hero — Image Left, Info Right
- `container` + `row align-items-center` + two `col-12 col-md-6` columns
- `img-fluid` on the image for responsiveness
- Custom `btn-cosmos` — pill-shaped button with hover lift

### Jumbotron Strip
- A full-width centered `<div>` — Bootstrap 5 removed the `.jumbotron` component, so this is a manually styled strip
- `text-center` + `container` inside

### Cards — Three in a Row
- `row row-cols-1 row-cols-md-3 g-4` — single column on mobile, three on md+
- `h-100` not needed here since cards are equal height via fixed image height
- `object-fit: cover` on images keeps them uniform regardless of source aspect ratio
- Custom `btn-cosmos-outline` — transparent outlined pill button

### Contact Form
- `justify-content-center` to center the form column
- `form-control` with custom dark styling overridden via `.form-control-cosmos`
- `d-grid` on button wrapper for full-width submit button

### Footer
- `position: sticky; bottom: 0` — stays visible at the bottom of the viewport
- Minimal — copyright, two links

---

## Concepts Practised

- Grid system — responsive two-column and three-column layouts
- Navbar with collapse and sticky positioning
- Cards with `row-cols-*` pattern
- Form controls styled over Bootstrap base
- Utility classes — `ms-auto`, `d-grid`, `text-center`, `gap-2`, `g-4`, `mt-*`, `mb-*`
- Custom CSS layered on top of Bootstrap without overriding the framework files

---

## Notes

- Bootstrap 5 removed `.jumbotron` — the centered strip is a plain `<div>` with manual styling
- `sticky-top` on the navbar uses `position: sticky` — the footer uses `position: sticky; bottom: 0`
- All Bootstrap JS components (navbar toggler) work via `data-bs-*` attributes with no custom JS written
