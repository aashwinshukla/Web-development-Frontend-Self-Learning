# Bootstrap — Grid System

Bootstrap's grid is built on **flexbox** and divides the page into **12 columns**. Layouts are created by defining how many of those 12 columns each element should occupy at different screen sizes.

---

## Basic Structure

Every grid needs three things — a container, a row, and columns inside it.

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>
```

- `container` — centers content and adds horizontal padding
- `row` — creates a flex row, handles negative margins between columns
- `col` — each column. Without a number, they split space equally

---

## Container Types

| Class | Behavior |
|---|---|
| `container` | Fixed max-width at each breakpoint, centered |
| `container-fluid` | Full width at all screen sizes |
| `container-{breakpoint}` | Fluid below the breakpoint, fixed above — e.g. `container-md` |

---

## Column Sizing

Columns are based on a **12-column grid**. Numbers must add up to 12 per row.

```html
<div class="row">
  <div class="col-8">Takes 8 columns</div>
  <div class="col-4">Takes 4 columns</div>
</div>
```

```html
<div class="row">
  <div class="col-4">4</div>
  <div class="col-4">4</div>
  <div class="col-4">4</div>
</div>
```

If columns add up to more than 12, the overflow wraps to a new line.

---

## Responsive Columns

Pattern: `col-{breakpoint}-{size}`

| Prefix | Breakpoint |
|---|---|
| `col-` | All screen sizes (no breakpoint) |
| `col-sm-` | 576px and above |
| `col-md-` | 768px and above |
| `col-lg-` | 992px and above |
| `col-xl-` | 1200px and above |
| `col-xxl-` | 1400px and above |

```html
<!-- full width on mobile, half on md and above -->
<div class="row">
  <div class="col-12 col-md-6">Left</div>
  <div class="col-12 col-md-6">Right</div>
</div>
```

```html
<!-- 12 on mobile → 6 on sm → 4 on lg -->
<div class="row">
  <div class="col-12 col-sm-6 col-lg-4">Card</div>
  <div class="col-12 col-sm-6 col-lg-4">Card</div>
  <div class="col-12 col-sm-6 col-lg-4">Card</div>
</div>
```

---

## Auto-layout Columns

```html
<!-- equal width, auto-distributed -->
<div class="row">
  <div class="col">A</div>
  <div class="col">B</div>
  <div class="col">C</div>
</div>

<!-- one fixed, rest fill remaining space -->
<div class="row">
  <div class="col">Auto</div>
  <div class="col-6">Fixed 6</div>
  <div class="col">Auto</div>
</div>
```

---

## Gutters (spacing between columns)

| Class | Effect |
|---|---|
| `g-{n}` | Gap on all sides between columns |
| `gx-{n}` | Horizontal gap only |
| `gy-{n}` | Vertical gap only |
| `g-0` | No gap |

```html
<div class="row gx-4 gy-2">
  <div class="col-6">A</div>
  <div class="col-6">B</div>
</div>
```

---

## Offset

Pushes a column to the right by a set number of columns:

```html
<div class="row">
  <div class="col-4 offset-4">Centered column</div>
</div>
```

`offset-4` skips 4 columns, then the `col-4` takes the next 4 — centered in the 12-column grid.

---

## Nesting

Rows can be nested inside columns. The inner row gets its own 12-column grid:

```html
<div class="row">
  <div class="col-8">
    <div class="row">
      <div class="col-6">Nested A</div>
      <div class="col-6">Nested B</div>
    </div>
  </div>
  <div class="col-4">Sidebar</div>
</div>
```

---

## Notes

- Always wrap `col-*` inside a `row`, and `row` inside a `container` — skipping levels breaks spacing
- `col` without a number = equal-width auto column
- Columns that don't add to 12 leave empty space; going over 12 wraps to next line
- Gutters are set on the `row`, not on individual columns
