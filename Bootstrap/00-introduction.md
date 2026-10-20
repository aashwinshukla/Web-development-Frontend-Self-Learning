# Bootstrap — Introduction

> **Reference:** `getbootstrap.com/docs` — official docs, all components, utilities, and examples.

---

## What is Bootstrap?

Bootstrap is a **free, open-source CSS framework** originally developed by Twitter in 2011. It provides a collection of pre-built components, a responsive grid system, and utility classes that can be dropped directly into HTML.

The idea — instead of writing CSS from scratch for every project, Bootstrap ships with ready-made styles for buttons, navbars, forms, modals, cards, and more. A full UI can be assembled just by adding the right class names to HTML elements.

Currently on **Bootstrap 5** — dropped jQuery dependency, improved grid, added utility API, and refined components.

---

## Why Use Bootstrap?

- **Speed** — pre-built components mean less time writing repetitive CSS
- **Responsive out of the box** — the grid system handles layouts across all screen sizes automatically
- **Cross-browser consistency** — normalizes styling differences between browsers
- **Large ecosystem** — extensive documentation, themes, templates, and community support
- **No build step required** — can be used via CDN, nothing to install or configure
- **Familiar class names** — widely used in teams, easy to pick up for anyone who's seen it before

---

## Bootstrap vs Tailwind CSS

| | Bootstrap | Tailwind CSS |
|---|---|---|
| Approach | Component-based | Utility-first |
| Pre-built components | Yes — buttons, navbars, modals, cards built in | No — build everything from scratch |
| Design opinions | Opinionated — Bootstrap look out of the box | Unopinionated — full design control |
| File size | Larger — ships full component CSS | Smaller — JIT generates only what's used |
| Customization | Override defaults or use Sass variables | Design system via `@theme` tokens |
| Learning curve | Low — class names map to components | Moderate — need to know which utilities to combine |
| Best for | Rapid prototyping, admin panels, internal tools | Custom designs, product UIs, design-heavy projects |

Bootstrap is faster to get something on screen. Tailwind gives more control over how it looks.
