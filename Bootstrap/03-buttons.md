# Bootstrap — Buttons

Bootstrap ships with a full button system — variants, sizes, states, and group layouts — all through class names.

---

## Basic Button

```html
<button class="btn btn-primary">Primary</button>
```

Every button needs two classes — `btn` (base styles) and a variant class.

---

## Variants

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-light">Light</button>
<button class="btn btn-dark">Dark</button>
<button class="btn btn-link">Link</button>
```

---

## Outline Variants

Transparent background, colored border and text:

```html
<button class="btn btn-outline-primary">Primary</button>
<button class="btn btn-outline-danger">Danger</button>
<button class="btn btn-outline-success">Success</button>
```

Same naming pattern — `btn-outline-{variant}`.

---

## Sizes

```html
<button class="btn btn-primary btn-lg">Large</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-sm">Small</button>
```

---

## Full Width

```html
<button class="btn btn-primary w-100">Full width</button>

<!-- or use d-grid on parent for block-level -->
<div class="d-grid">
  <button class="btn btn-primary">Block button</button>
</div>
```

---

## States

```html
<!-- disabled via attribute -->
<button class="btn btn-primary" disabled>Disabled</button>

<!-- active state (pressed look) -->
<button class="btn btn-primary active">Active</button>

<!-- loading / spinner inside button -->
<button class="btn btn-primary" disabled>
  <span class="spinner-border spinner-border-sm me-2"></span>
  Loading...
</button>
```

---

## Button on Non-button Elements

`btn` works on `<a>` and `<input>` too:

```html
<a href="#" class="btn btn-primary">Link Button</a>
<input type="submit" class="btn btn-success" value="Submit" />
```

---

## Button Group

Groups multiple buttons inline without gaps:

```html
<div class="btn-group">
  <button class="btn btn-outline-primary">Left</button>
  <button class="btn btn-outline-primary">Middle</button>
  <button class="btn btn-outline-primary">Right</button>
</div>
```

Vertical group:
```html
<div class="btn-group-vertical">
  <button class="btn btn-primary">Top</button>
  <button class="btn btn-primary">Bottom</button>
</div>
```

---

## Notes

- `btn` alone gives base padding and border-radius — variant class adds color
- Outline buttons are useful on colored backgrounds
- `btn-group` removes border-radius on inner buttons and merges borders cleanly
