# Bootstrap — Tables & Alerts

---

## Tables

### Basic Table

```html
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>John</td>
      <td>Admin</td>
    </tr>
  </tbody>
</table>
```

`table` applies base spacing and a bottom border to each cell.

---

### Table Variants

```html
<table class="table table-striped">...</table>
<table class="table table-bordered">...</table>
<table class="table table-borderless">...</table>
<table class="table table-hover">...</table>
<table class="table table-sm">...</table>
```

| Class | Effect |
|---|---|
| `table-striped` | Alternating row background colors |
| `table-bordered` | Borders on all cells |
| `table-borderless` | Removes all borders |
| `table-hover` | Highlights row on hover |
| `table-sm` | Reduces cell padding |

Variants can be combined:
```html
<table class="table table-striped table-hover table-bordered">...</table>
```

---

### Table Colors

Applied per row or per cell:

```html
<tr class="table-primary"><td>Primary row</td></tr>
<tr class="table-success"><td>Success row</td></tr>
<tr class="table-danger"><td>Danger row</td></tr>
<tr class="table-warning"><td>Warning row</td></tr>
<tr class="table-info"><td>Info row</td></tr>
<tr class="table-light"><td>Light row</td></tr>
<tr class="table-dark"><td>Dark row</td></tr>
```

---

### Dark Table

```html
<table class="table table-dark table-striped table-hover">...</table>
```

---

### Responsive Table

Wraps the table in a div to enable horizontal scrolling on small screens:

```html
<div class="table-responsive">
  <table class="table">...</table>
</div>
```

Breakpoint-specific: `table-responsive-sm`, `table-responsive-md`, etc. — only scrollable below that breakpoint.

---

### Table Head Variants

```html
<thead class="table-dark">...</thead>
<thead class="table-light">...</thead>
```

---

---

## Alerts

### Basic Alert

```html
<div class="alert alert-primary" role="alert">
  A simple primary alert.
</div>
```

`role="alert"` is for accessibility — screen readers announce it.

---

### Variants

```html
<div class="alert alert-primary">Primary</div>
<div class="alert alert-secondary">Secondary</div>
<div class="alert alert-success">Success</div>
<div class="alert alert-danger">Danger</div>
<div class="alert alert-warning">Warning</div>
<div class="alert alert-info">Info</div>
<div class="alert alert-light">Light</div>
<div class="alert alert-dark">Dark</div>
```

---

### Alert with Link

```html
<div class="alert alert-warning" role="alert">
  Check out this <a href="#" class="alert-link">important link</a>.
</div>
```

`alert-link` styles the anchor to match the alert color.

---

### Alert with Heading

```html
<div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Done!</h4>
  <p>Your changes have been saved successfully.</p>
  <hr />
  <p class="mb-0">You can continue editing anytime.</p>
</div>
```

---

### Dismissible Alert

Requires the JS bundle:

```html
<div class="alert alert-warning alert-dismissible fade show" role="alert">
  This alert can be dismissed.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
```

- `alert-dismissible` — adds right padding for the close button
- `fade show` — enables the fade-out animation on dismiss
- `data-bs-dismiss="alert"` — wires up the JS behavior, no custom JS needed

---

## Notes

- `table-responsive` should be the default for any table that might be viewed on mobile
- Alerts don't auto-dismiss — need JS for timed dismissal
- `fade show` without `alert-dismissible` still works — it just won't have a close button
