# Bootstrap — Typography

Bootstrap applies base typographic styles globally and provides utility classes to control headings, text alignment, weight, color, and more.

---

## Headings

Standard HTML headings work as-is. Bootstrap also provides `.h1`–`.h6` classes to match heading styles on any element:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<!-- heading style on a non-heading element -->
<p class="h1">Looks like h1</p>
```

---

## Display Headings

Larger, more prominent headings — for hero sections and page titles:

```html
<h1 class="display-1">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3">Display 3</h1>
<h1 class="display-4">Display 4</h1>
<h1 class="display-5">Display 5</h1>
<h1 class="display-6">Display 6</h1>
```

---

## Lead Text

Slightly larger, lighter paragraph — used for introductory text:

```html
<p class="lead">This is a lead paragraph. Stands out from regular text.</p>
```

---

## Inline Text Elements

```html
<p><mark>Highlighted text</mark></p>
<p><del>Deleted text</del></p>
<p><s>Strikethrough</s></p>
<p><ins>Inserted text</ins></p>
<p><u>Underlined</u></p>
<p><small>Small text</small></p>
<p><strong>Bold</strong></p>
<p><em>Italic</em></p>
```

---

## Text Alignment

```html
<p class="text-start">Left aligned</p>
<p class="text-center">Center aligned</p>
<p class="text-end">Right aligned</p>

<!-- responsive -->
<p class="text-start text-md-center">Left on mobile, centered on md+</p>
```

---

## Text Transform

```html
<p class="text-uppercase">uppercase</p>
<p class="text-lowercase">LOWERCASE</p>
<p class="text-capitalize">capitalize each word</p>
```

---

## Font Weight & Style

```html
<p class="fw-bold">Bold</p>
<p class="fw-semibold">Semibold</p>
<p class="fw-normal">Normal</p>
<p class="fw-light">Light</p>
<p class="fst-italic">Italic</p>
<p class="fst-normal">Normal style</p>
```

---

## Text Color

```html
<p class="text-primary">Primary</p>
<p class="text-secondary">Secondary</p>
<p class="text-success">Success</p>
<p class="text-danger">Danger</p>
<p class="text-warning">Warning</p>
<p class="text-info">Info</p>
<p class="text-muted">Muted</p>
<p class="text-white bg-dark">White</p>
```

---

## Text Decoration

```html
<p class="text-decoration-underline">Underlined</p>
<p class="text-decoration-line-through">Strikethrough</p>
<p class="text-decoration-none">No decoration</p>
```

---

## Blockquote

```html
<blockquote class="blockquote">
  <p>A well-known quote.</p>
  <footer class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </footer>
</blockquote>
```

---

## Lists

```html
<!-- unstyled — removes bullets and padding -->
<ul class="list-unstyled">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<!-- inline list -->
<ul class="list-inline">
  <li class="list-inline-item">Item 1</li>
  <li class="list-inline-item">Item 2</li>
  <li class="list-inline-item">Item 3</li>
</ul>
```

---

## Text Wrapping & Overflow

```html
<p class="text-wrap">Long text wraps normally...</p>
<p class="text-nowrap">This text will not wrap no matter how long it is.</p>
<p class="text-truncate" style="max-width: 200px;">Truncated with ellipsis when too long.</p>
```

---

## Notes

- Bootstrap's base font is system-ui stack — no Google Fonts loaded by default
- `text-muted` is the go-to for secondary/hint text
- `display-*` classes are heavier weight than regular headings — good for heroes, not body content
