# Bootstrap — Cards

Cards are flexible content containers with optional header, body, footer, image, and list group sections.

---

## Basic Card

```html
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some quick example text.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

---

## Card with Image

```html
<div class="card">
  <img src="image.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some text here.</p>
  </div>
</div>
```

- `card-img-top` — image at the top, rounded top corners
- `card-img-bottom` — image at the bottom

---

## Card Sections

```html
<div class="card">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Subtitle</h6>
    <p class="card-text">Body content.</p>
    <a href="#" class="card-link">Link 1</a>
    <a href="#" class="card-link">Link 2</a>
  </div>
  <div class="card-footer text-muted">Footer</div>
</div>
```

| Class | Purpose |
|---|---|
| `card-header` | Top section — often used for titles or tabs |
| `card-body` | Main content area |
| `card-footer` | Bottom section |
| `card-title` | Heading inside card body |
| `card-subtitle` | Subheading below title |
| `card-text` | Paragraph text |
| `card-link` | Inline link styled for cards |

---

## Card Sizing

Cards take full width of their parent by default. Control width with grid or utility classes:

```html
<!-- using grid -->
<div class="row">
  <div class="col-md-4">
    <div class="card">...</div>
  </div>
</div>

<!-- using width utility -->
<div class="card w-50">...</div>
```

---

## Card Colors

```html
<div class="card text-white bg-primary">...</div>
<div class="card text-white bg-danger">...</div>
<div class="card border-success">...</div>
```

- `bg-{variant}` — fills card background with theme color
- `border-{variant}` — colored border only
- `text-white` — needed when using dark backgrounds

---

## Card with List Group

```html
<div class="card">
  <div class="card-header">Featured</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Item 1</li>
    <li class="list-group-item">Item 2</li>
    <li class="list-group-item">Item 3</li>
  </ul>
</div>
```

`list-group-flush` removes outer borders so it sits flush inside the card.

---

## Card Groups & Grid

```html
<!-- equal height cards side by side -->
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">...</div>
  </div>
  <div class="col">
    <div class="card h-100">...</div>
  </div>
  <div class="col">
    <div class="card h-100">...</div>
  </div>
</div>
```

- `row-cols-{n}` — sets how many columns per row
- `h-100` on the card — stretches all cards to equal height
- `g-4` — gutters between cards

---

## Horizontal Card

```html
<div class="card">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="image.jpg" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Title</h5>
        <p class="card-text">Text content.</p>
      </div>
    </div>
  </div>
</div>
```

---

## Notes

- Cards have no fixed width — they fill their container
- `h-100` is the standard fix for uneven card heights in a grid
- `list-group-flush` is almost always used when putting a list inside a card
