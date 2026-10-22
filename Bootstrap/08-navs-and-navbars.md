# Bootstrap — Navs & Navbars

---

## Navs

Simple navigation links — tabs, pills, and horizontal/vertical lists.

### Basic Nav

```html
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
```

---

### Nav Variants

```html
<!-- tabs -->
<ul class="nav nav-tabs">...</ul>

<!-- pills -->
<ul class="nav nav-pills">...</ul>

<!-- fill — each item takes equal width -->
<ul class="nav nav-pills nav-fill">...</ul>

<!-- justified — each item fills available space equally -->
<ul class="nav nav-pills nav-justified">...</ul>
```

---

### Vertical Nav

```html
<ul class="nav flex-column">
  <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Profile</a></li>
  <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
</ul>
```

---

### Nav with Tab Content

Requires JS bundle:

```html
<ul class="nav nav-tabs" id="myTab">
  <li class="nav-item">
    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#home">Home</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile">Profile</button>
  </li>
</ul>

<div class="tab-content mt-3">
  <div class="tab-pane fade show active" id="home">Home content</div>
  <div class="tab-pane fade" id="profile">Profile content</div>
</div>
```

---

---

## Navbars

Full-featured responsive navigation header with brand, links, toggler, and optional search/dropdowns.

### Basic Navbar

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">

    <!-- brand -->
    <a class="navbar-brand" href="#">Brand</a>

    <!-- hamburger toggle for mobile -->
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- collapsible content -->
    <div class="collapse navbar-collapse" id="navbarContent">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </div>

  </div>
</nav>
```

- `navbar-expand-lg` — collapses into hamburger below `lg`, expands above it
- `ms-auto` on `navbar-nav` — pushes links to the right
- `data-bs-target` must match the `id` on the collapsible div

---

### Navbar Colors

```html
<!-- dark background -->
<nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">...</nav>

<!-- primary color -->
<nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">...</nav>

<!-- light -->
<nav class="navbar navbar-expand-lg bg-light">...</nav>
```

`data-bs-theme="dark"` switches the text and icon colors to light for dark backgrounds.

---

### Navbar with Search

```html
<form class="d-flex ms-auto" role="search">
  <input class="form-control me-2" type="search" placeholder="Search" />
  <button class="btn btn-outline-success" type="submit">Search</button>
</form>
```

Placed inside the collapsible div, after `navbar-nav`.

---

### Navbar with Dropdown

```html
<li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
    Dropdown
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action 1</a></li>
    <li><a class="dropdown-item" href="#">Action 2</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Something else</a></li>
  </ul>
</li>
```

---

### Fixed & Sticky Navbar

```html
<!-- fixed to top — always visible on scroll -->
<nav class="navbar fixed-top bg-dark" data-bs-theme="dark">...</nav>

<!-- sticky — scrolls with page until it hits the top, then sticks -->
<nav class="navbar sticky-top bg-dark" data-bs-theme="dark">...</nav>
```

With `fixed-top`, add padding to `<body>` to prevent content hiding behind it:
```css
body { padding-top: 56px; }
```

---

## Notes

- `navbar-expand-{breakpoint}` controls at what point the nav collapses — `lg` is the most common choice
- The `id` on the collapse div and `data-bs-target` on the toggler must match exactly
- Dropdowns and tab toggling require the JS bundle
- `ms-auto` is the standard way to right-align nav links in a navbar
