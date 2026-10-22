# Bootstrap — Images & Utilities

---

## Images

### Responsive Images

```html
<img src="image.jpg" class="img-fluid" alt="..." />
```

`img-fluid` sets `max-width: 100%` and `height: auto` — the image scales with its parent container and never overflows.

---

### Image Shapes

```html
<img src="image.jpg" class="rounded" alt="..." />
<img src="image.jpg" class="rounded-circle" alt="..." />
<img src="image.jpg" class="img-thumbnail" alt="..." />
```

| Class | Effect |
|---|---|
| `rounded` | Slightly rounded corners |
| `rounded-circle` | Circular crop (works best on square images) |
| `img-thumbnail` | Rounded corners + border + padding |

---

### Aligning Images

```html
<img src="image.jpg" class="float-start" alt="..." />
<img src="image.jpg" class="float-end" alt="..." />

<!-- centered block image -->
<img src="image.jpg" class="d-block mx-auto" alt="..." />
```

---

## Utilities

Bootstrap's utility classes cover spacing, display, flexbox, sizing, borders, shadows, and more — directly in HTML without writing custom CSS.

---

### Spacing

Pattern: `{property}{side}-{size}`

| Property | |
|---|---|
| `m` | margin |
| `p` | padding |

| Side | |
|---|---|
| `t` | top |
| `b` | bottom |
| `s` | start (left) |
| `e` | end (right) |
| `x` | left + right |
| `y` | top + bottom |
| *(none)* | all sides |

Scale: `0` through `5` + `auto`

```html
<div class="mt-3 px-4 mb-0 ms-auto">...</div>
```

---

### Display

```html
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-flex">Flex</div>
<div class="d-inline">Inline</div>
<div class="d-inline-block">Inline block</div>
<div class="d-grid">Grid</div>

<!-- responsive -->
<div class="d-none d-md-block">Hidden on mobile, block on md+</div>
```

---

### Flexbox Utilities

```html
<div class="d-flex justify-content-center align-items-center gap-3">
  <div>A</div>
  <div>B</div>
</div>
```

| Class | CSS |
|---|---|
| `justify-content-start/center/end/between/around/evenly` | `justify-content` |
| `align-items-start/center/end/baseline/stretch` | `align-items` |
| `flex-row / flex-column` | `flex-direction` |
| `flex-wrap / flex-nowrap` | `flex-wrap` |
| `flex-grow-1` | `flex-grow: 1` |
| `gap-{n}` | `gap` |
| `ms-auto` | pushes element to the right in flex |

---

### Sizing

```html
<div class="w-25">25% wide</div>
<div class="w-50">50% wide</div>
<div class="w-75">75% wide</div>
<div class="w-100">100% wide</div>
<div class="h-100">100% height</div>
<div class="mw-100">max-width: 100%</div>
<div class="mh-100">max-height: 100%</div>
```

---

### Colors

```html
<!-- background -->
<div class="bg-primary text-white">Primary</div>
<div class="bg-secondary">Secondary</div>
<div class="bg-light">Light</div>
<div class="bg-dark text-white">Dark</div>
<div class="bg-transparent">Transparent</div>

<!-- text -->
<p class="text-primary">Primary</p>
<p class="text-danger">Danger</p>
<p class="text-muted">Muted</p>
```

---

### Borders

```html
<div class="border">All sides</div>
<div class="border-top">Top only</div>
<div class="border-0">No border</div>
<div class="border border-primary">Colored border</div>
<div class="border border-3">Thicker border</div>

<!-- radius -->
<div class="rounded">Default radius</div>
<div class="rounded-circle">Circle</div>
<div class="rounded-pill">Pill</div>
<div class="rounded-0">No radius</div>
```

---

### Shadows

```html
<div class="shadow-none">No shadow</div>
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Regular shadow</div>
<div class="shadow-lg">Large shadow</div>
```

---

### Position

```html
<div class="position-relative">
  <div class="position-absolute top-0 end-0">Top right</div>
</div>

<div class="position-fixed bottom-0 end-0">Fixed bottom right</div>
<div class="position-sticky top-0">Sticky top</div>
```

Position values: `top-0`, `top-50`, `top-100`, `start-0`, `start-50`, `start-100`, `end-0`, `end-50`, `end-100`, `bottom-0`, `bottom-50`, `bottom-100`

---

### Overflow

```html
<div class="overflow-auto">Scrollable</div>
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-visible">Visible</div>
<div class="overflow-scroll">Always scroll</div>
```

---

### Opacity

```html
<div class="opacity-100">Full</div>
<div class="opacity-75">75%</div>
<div class="opacity-50">50%</div>
<div class="opacity-25">25%</div>
<div class="opacity-0">Invisible</div>
```

---

### Visibility

```html
<!-- hides but keeps space in layout -->
<div class="invisible">Hidden but still occupies space</div>
<div class="visible">Visible</div>

<!-- removes from layout entirely -->
<div class="d-none">Gone from layout</div>
```

---

## Notes

- `img-fluid` is the standard for any image inside a responsive layout — always use it
- `ms-auto` inside a flex container is the cleanest way to push an item to the far right (e.g. nav actions)
- `d-none d-md-block` is the standard pattern for hiding elements on mobile
