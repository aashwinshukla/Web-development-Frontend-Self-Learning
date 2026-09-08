# CSS — Components

## Pagination

A row of links used to navigate between pages — common on blogs, search results, and product listings. Built with a `<nav>` and an unordered list.

### HTML
```html
<nav class="pagination-nav">
  <ul class="pagination">
    <li><a href="#">&laquo;</a></li>
    <li><a href="#" class="active">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">&raquo;</a></li>
  </ul>
</nav>
```

### CSS
```css
.pagination {
  list-style: none;
  display: flex;
  gap: 4px;
  padding: 0;
  margin: 0;
}

.pagination a {
  display: block;
  padding: 8px 14px;
  text-decoration: none;
  color: #333;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.pagination a:hover {
  background-color: #f0f0f0;
}

.pagination a.active {
  background-color: royalblue;
  color: white;
  border-color: royalblue;
}
```

- `&laquo;` and `&raquo;` render as « and » — used as previous/next arrows.
- `.active` marks the current page.

---

## Dropdown Menu

Shows a hidden submenu when the user hovers a parent item. The core technique is toggling `display: none` to `display: block` on `:hover`.

### HTML
```html
<nav>
  <ul class="nav-menu">
    <li><a href="#">Home</a></li>

    <li class="dropdown">
      <a href="#">Services</a>
      <ul class="dropdown-menu">
        <li><a href="#">Web Design</a></li>
        <li><a href="#">Development</a></li>
        <li><a href="#">SEO</a></li>
      </ul>
    </li>

    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### CSS
```css
.nav-menu {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  background-color: #333;
}

.nav-menu > li > a {
  display: block;
  padding: 14px 20px;
  color: white;
  text-decoration: none;
}

.nav-menu > li > a:hover {
  background-color: #555;
}

/* Anchor for the absolute submenu */
.dropdown {
  position: relative;
}

/* Hidden by default */
.dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;       /* sits directly below the parent item */
  left: 0;
  background-color: #444;
  min-width: 180px;
  display: none;
  z-index: 100;
}

.dropdown-menu li a {
  display: block;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  background-color: #666;
}

/* Reveal on hover */
.dropdown:hover .dropdown-menu {
  display: block;
}
```

### How it works
1. `.dropdown` gets `position: relative` — the submenu anchors to it.
2. `.dropdown-menu` uses `position: absolute; top: 100%` to sit directly below.
3. Starts as `display: none` — invisible and takes no space.
4. `.dropdown:hover .dropdown-menu` reveals it using the descendant combinator.
5. `z-index: 100` keeps it above other content.

---

## Navigation Bar

A full horizontal navbar with a logo on the left and links on the right.

### HTML
```html
<nav class="navbar">
  <div class="nav-logo">
    <a href="#">MySite</a>
  </div>
  <ul class="nav-links">
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

### CSS
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a2e;
  padding: 0 40px;
  height: 64px;
}

.nav-logo a {
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
}

.nav-links a {
  display: block;
  color: #ccc;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;
}

.nav-links a:hover {
  background-color: #ffffff20;
  color: white;
}

.nav-links a.active {
  background-color: royalblue;
  color: white;
}
```

### Sticky navbar
```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
}
```
Stays at the top of the viewport when the page scrolls.

---

## Website Layout

A standard webpage structure — full-width sections with a centered content container inside each.

### HTML
```html
<body>

  <header class="site-header">
    <nav class="navbar"><!-- navbar here --></nav>
  </header>

  <main class="site-main">

    <section class="hero">
      <h1>Welcome to My Site</h1>
      <p>A short tagline goes here.</p>
      <a href="#" class="btn">Get Started</a>
    </section>

    <section class="content-section">
      <div class="container">
        <h2>About</h2>
        <p>Content goes here.</p>
      </div>
    </section>

    <section class="cards-section">
      <div class="container">
        <div class="card-grid">
          <div class="card">Card 1</div>
          <div class="card">Card 2</div>
          <div class="card">Card 3</div>
        </div>
      </div>
    </section>

  </main>

  <footer class="site-footer">
    <p>&copy; 2026 MySite. All rights reserved.</p>
  </footer>

</body>
```

### CSS
```css
/* Reset and base */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Centered container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero */
.hero {
  background-color: #1a1a2e;
  color: white;
  text-align: center;
  padding: 100px 20px;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 32px;
  color: #ccc;
}

.btn {
  display: inline-block;
  padding: 14px 32px;
  background-color: royalblue;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.btn:hover {
  background-color: #2541b2;
}

/* Content section */
.content-section {
  padding: 80px 0;
}

/* Card grid */
.cards-section {
  padding: 80px 0;
  background-color: #f5f5f5;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  background-color: white;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

/* Footer */
.site-footer {
  background-color: #1a1a2e;
  color: #aaa;
  text-align: center;
  padding: 32px 20px;
}
```

The pattern is: **full-width section** for background colors, **`.container`** inside to keep content readable with a max-width. Used in nearly every real website.

---

## Image Gallery

A responsive image grid using CSS Grid.

### HTML
```html
<div class="gallery">
  <img src="img1.jpg" alt="Photo 1" />
  <img src="img2.jpg" alt="Photo 2" />
  <img src="img3.jpg" alt="Photo 3" />
  <img src="img4.jpg" alt="Photo 4" />
  <img src="img5.jpg" alt="Photo 5" />
  <img src="img6.jpg" alt="Photo 6" />
</div>
```

### CSS — fixed 3-column grid
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.gallery img {
  width: 100%;
  height: 250px;
  object-fit: cover;     /* fills cell uniformly, crops if needed */
  border-radius: 6px;
  display: block;
}
```
`object-fit: cover` is the key — every image fills its cell without distorting.

### Hover effect
```css
.gallery img {
  transition: transform 0.3s, opacity 0.3s;
}

.gallery img:hover {
  transform: scale(1.03);
  opacity: 0.85;
}
```

### Responsive — auto-fit
```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}
```
`auto-fit` with `minmax` adjusts column count automatically based on available space — no media queries needed.

---

## Icons

The most common approach is an icon library. **Font Awesome** is the most widely used.

### Setup
```html
<!-- Add to your HTML <head> -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
```
Or get the latest link from [fontawesome.com](https://fontawesome.com).

### Using icons
```html
<i class="fa-solid fa-house"></i>
<i class="fa-solid fa-user"></i>
<i class="fa-solid fa-magnifying-glass"></i>
<i class="fa-brands fa-github"></i>
<i class="fa-brands fa-instagram"></i>
```
Icons use the `<i>` tag with class names. They inherit `color` and scale with `font-size` from their parent.

### Sizing
```html
<i class="fa-solid fa-house fa-sm"></i>   <!-- small -->
<i class="fa-solid fa-house fa-lg"></i>   <!-- large -->
<i class="fa-solid fa-house fa-2x"></i>   <!-- 2x -->
<i class="fa-solid fa-house fa-3x"></i>   <!-- 3x -->
```

Or with CSS:
```css
i {
  font-size: 24px;
  color: royalblue;
}
```

### Icon with text
```html
<button>
  <i class="fa-solid fa-envelope"></i> Send Email
</button>
```

### Icons as bullet points
```html
<ul style="list-style: none; padding: 0;">
  <li><i class="fa-solid fa-check" style="color: green;"></i> Feature one</li>
  <li><i class="fa-solid fa-check" style="color: green;"></i> Feature two</li>
</ul>
```
