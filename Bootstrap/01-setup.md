# Bootstrap — Setup

## Ways to Include Bootstrap

| Method | Use case |
|---|---|
| Downloaded compiled CSS & JS | Standalone HTML projects — works offline, no build step |
| CDN | Same as above but served from a remote link |
| npm | React, Next.js, or any project with an existing build pipeline |

---

## Downloaded Compiled CSS & JS (current setup)

Downloaded from `getbootstrap.com` → Compiled CSS and JS. Extracts as a folder:

```
bootstrap-5.0.2-dist/
├── css/
│   ├── bootstrap.min.css       ← the one to link
│   └── ...
└── js/
    ├── bootstrap.bundle.min.js ← the one to link (includes Popper)
    └── ...
```

Link locally in HTML relative to where the project file sits:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <!-- Bootstrap CSS -->
    <link href="../bootstrap-5.0.2-dist/css/bootstrap.min.css" rel="stylesheet" />
  </head>
  <body>

    <!-- Bootstrap JS bundle (includes Popper) -->
    <script src="../bootstrap-5.0.2-dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

- Adjust the relative path (`../`) based on where the HTML file lives relative to the dist folder
- `bootstrap.bundle.min.js` already includes Popper.js — no separate Popper import needed
- JS bundle only needed for interactive components — modals, dropdowns, tooltips, collapse, etc.

---

## CDN Setup (alternative)

No download needed — links to hosted files:

```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />

<!-- JS bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

---

## npm Setup (for React / Next.js)

```bash
npm install bootstrap
```

```js
// main.jsx or main.js
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
```

---

## Notes

- Always include the `viewport` meta tag — Bootstrap's responsive grid depends on it
- Only `bootstrap.min.css` and `bootstrap.bundle.min.js` are needed — ignore the rest of the dist files
- JS bundle is optional for purely static layouts
