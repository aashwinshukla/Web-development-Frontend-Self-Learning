# Tailwind CSS — Flexbox & Grid

## Flexbox

```html
<div class="flex flex-col items-center justify-center space-y-6 mt-2">
  <div class="h-16 w-16 rounded-full bg-blue-400"></div>
  <div class="h-16 w-16 rounded-full bg-orange-400"></div>
  <div class="h-16 w-16 rounded-full bg-green-400"></div>
</div>
```

| Class | CSS |
|---|---|
| `flex` | `display: flex` |
| `flex-col` | `flex-direction: column` |
| `items-center` | `align-items: center` |
| `justify-center` | `justify-content: center` |
| `space-y-{n}` | adds `margin-top` between children vertically |
| `space-x-{n}` | adds `margin-left` between children horizontally |

> `space-y-*` and `space-x-*` target all children except the first using a CSS sibling selector — no need to manually add margin to each child.

---

## Grid

```html
<div class="grid grid-cols-3 gap-2 mt-2 mx-2">
  <div class="h-16 rounded-full bg-blue-400"></div>
  <div class="h-16 rounded-full bg-orange-400"></div>
  <div class="h-16 rounded-full bg-green-400"></div>
</div>
```

| Class | CSS |
|---|---|
| `grid` | `display: grid` |
| `grid-cols-{n}` | `grid-template-columns: repeat(n, minmax(0, 1fr))` |
| `grid-rows-{n}` | `grid-template-rows: repeat(n, minmax(0, 1fr))` |
| `gap-{n}` | `gap` — rows and columns |
| `gap-x-{n}` | `column-gap` only |
| `gap-y-{n}` | `row-gap` only |
| `col-span-{n}` | `grid-column: span n` |
| `row-span-{n}` | `grid-row: span n` |
| `col-start-{n}` | `grid-column-start: n` |
| `col-end-{n}` | `grid-column-end: n` |

---

## Flexbox vs Grid

| | Flexbox | Grid |
|---|---|---|
| Direction | One axis — row **or** column | Two axes — rows **and** columns |
| Best for | Navbars, button groups, centering, linear layouts | Page layouts, card grids, 2D arrangements |
| Item sizing | Items size to content by default | Items fit into defined grid tracks |

---

## Practice

- **Flexbox Froggy** — `flexboxfroggy.com` — learn flexbox by moving frogs to lily pads
- **Grid Garden** — `cssgridgarden.com` — learn CSS grid by watering a carrot garden
