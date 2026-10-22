# Bootstrap — Icons

Bootstrap Icons is a separate, free, open-source icon library made by the Bootstrap team. Over 2000 SVG icons, designed to work well with Bootstrap but usable anywhere.

> **Reference:** `icons.getbootstrap.com` — searchable, all icons with names and usage.

---

## Setup

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
```

Add to `<head>`. Loads the icon font via CDN — no download needed.

### Downloaded

Download from `icons.getbootstrap.com` and link locally:

```html
<link rel="stylesheet" href="path/to/bootstrap-icons.min.css" />
```

### npm

```bash
npm install bootstrap-icons
```

```js
import 'bootstrap-icons/font/bootstrap-icons.css'
```

---

## Usage

### Font / CSS Method

Once the CSS is linked, icons are used as `<i>` elements with the icon class:

```html
<i class="bi bi-house"></i>
<i class="bi bi-person"></i>
<i class="bi bi-gear"></i>
<i class="bi bi-search"></i>
<i class="bi bi-heart-fill"></i>
```

Pattern: `bi bi-{icon-name}`

---

### Sizing

Icons inherit the font size of their parent. Can be sized with Bootstrap's font size utilities or inline:

```html
<i class="bi bi-star fs-1"></i>   <!-- very large -->
<i class="bi bi-star fs-3"></i>   <!-- large -->
<i class="bi bi-star fs-5"></i>   <!-- normal -->
<i class="bi bi-star fs-6"></i>   <!-- small -->

<!-- or with inline style -->
<i class="bi bi-star" style="font-size: 2rem;"></i>
```

---

### Colors

Icons inherit text color — use text utility classes:

```html
<i class="bi bi-check-circle text-success"></i>
<i class="bi bi-x-circle text-danger"></i>
<i class="bi bi-exclamation-triangle text-warning"></i>
<i class="bi bi-info-circle text-info"></i>
```

---

### Icons Inside Buttons

```html
<button class="btn btn-primary">
  <i class="bi bi-download me-2"></i> Download
</button>

<button class="btn btn-danger">
  <i class="bi bi-trash"></i>
</button>
```

`me-2` adds right margin between the icon and the text.

---

### Icons Inside Inputs (Input Groups)

```html
<div class="input-group">
  <span class="input-group-text">
    <i class="bi bi-search"></i>
  </span>
  <input type="text" class="form-control" placeholder="Search..." />
</div>
```

---

### SVG Method

Each icon can also be used as an inline SVG — copy directly from the docs:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="..."/>
</svg>
```

`fill="currentColor"` means it inherits the CSS `color` property — easy to color with text utilities.

---

## Commonly Used Icons

| Icon class | Usage |
|---|---|
| `bi-house` / `bi-house-fill` | Home |
| `bi-person` / `bi-person-fill` | User / profile |
| `bi-gear` / `bi-gear-fill` | Settings |
| `bi-search` | Search |
| `bi-x` / `bi-x-circle` | Close / error |
| `bi-check` / `bi-check-circle` | Success / confirm |
| `bi-exclamation-triangle` | Warning |
| `bi-info-circle` | Info |
| `bi-trash` | Delete |
| `bi-pencil` | Edit |
| `bi-plus` / `bi-plus-circle` | Add |
| `bi-arrow-left` / `bi-arrow-right` | Navigation |
| `bi-heart` / `bi-heart-fill` | Like / favorite |
| `bi-star` / `bi-star-fill` | Rating |
| `bi-download` / `bi-upload` | File actions |
| `bi-eye` / `bi-eye-slash` | Show / hide |
| `bi-lock` / `bi-unlock` | Auth |
| `bi-bell` | Notifications |
| `bi-three-dots` / `bi-three-dots-vertical` | More options menu |

---

## Notes

- Bootstrap Icons is a separate package — not included in Bootstrap's CSS/JS
- Font method is easiest for most projects — just link the CSS and use `<i>` tags
- SVG method is better when loading performance matters or when using icons in Canvas/PDF
- `fill` variants (`bi-heart-fill`) are the solid version — non-fill are outline
