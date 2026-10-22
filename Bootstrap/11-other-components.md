# Bootstrap — Other Components

---

## Modal

A dialog box that overlays the page. Requires JS bundle.

```html
<!-- trigger button -->
<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Open Modal
</button>

<!-- modal -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        Content goes here.
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>

    </div>
  </div>
</div>
```

### Modal Sizes

```html
<div class="modal-dialog modal-sm">...</div>
<div class="modal-dialog modal-lg">...</div>
<div class="modal-dialog modal-xl">...</div>
<div class="modal-dialog modal-fullscreen">...</div>
```

### Centered Modal

```html
<div class="modal-dialog modal-dialog-centered">...</div>
```

### Scrollable Modal

```html
<div class="modal-dialog modal-dialog-scrollable">...</div>
```

---

## Dropdown

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown">
    Dropdown
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Something else</a></li>
  </ul>
</div>
```

### Dropdown Alignment

```html
<!-- right-align the menu -->
<ul class="dropdown-menu dropdown-menu-end">...</ul>
```

### Dropdown Directions

```html
<div class="dropup">...</div>
<div class="dropend">...</div>
<div class="dropstart">...</div>
```

---

## Accordion

Collapsible content panels. Requires JS bundle.

```html
<div class="accordion" id="accordionExample">

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#item1">
        Item 1
      </button>
    </h2>
    <div id="item1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">Content for item 1.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#item2">
        Item 2
      </button>
    </h2>
    <div id="item2" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">Content for item 2.</div>
    </div>
  </div>

</div>
```

- `data-bs-parent` — closing one item closes others (accordion behavior). Remove it to allow multiple open at once
- `collapsed` class on the button reflects closed state styling
- `show` on the collapse div means it's open by default

---

## Tooltip

Small hover label. Requires JS bundle + manual initialization.

```html
<button class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-title="Tooltip text">
  Hover me
</button>
```

Must be initialized in JS — tooltips don't auto-initialize:

```js
const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]')
tooltips.forEach(el => new bootstrap.Tooltip(el))
```

### Placement

```html
<button data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Top">Top</button>
<button data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Bottom">Bottom</button>
<button data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Left">Left</button>
<button data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Right">Right</button>
```

---

## Toast

Lightweight notification — appears briefly then dismisses. Requires JS bundle.

```html
<div class="toast-container position-fixed bottom-0 end-0 p-3">
  <div id="myToast" class="toast" role="alert">
    <div class="toast-header">
      <strong class="me-auto">Notification</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
    </div>
    <div class="toast-body">
      Something happened.
    </div>
  </div>
</div>
```

Show via JS:

```js
const toast = new bootstrap.Toast(document.getElementById('myToast'))
toast.show()
```

---

## Spinner

Loading indicator — CSS only, no JS needed.

```html
<!-- border spinner -->
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- growing spinner -->
<div class="spinner-grow" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<!-- colored -->
<div class="spinner-border text-primary"></div>
<div class="spinner-border text-danger"></div>

<!-- sizes -->
<div class="spinner-border spinner-border-sm"></div>
```

---

## Badge

Small count or label attached to elements:

```html
<button class="btn btn-primary">
  Notifications <span class="badge bg-danger">4</span>
</button>

<h5>Inbox <span class="badge bg-secondary">3</span></h5>
```

### Pill Badge

```html
<span class="badge rounded-pill bg-success">New</span>
```

---

## Progress Bar

```html
<div class="progress">
  <div class="progress-bar" style="width: 60%">60%</div>
</div>

<!-- colored -->
<div class="progress">
  <div class="progress-bar bg-success" style="width: 75%"></div>
</div>

<!-- striped + animated -->
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" style="width: 45%"></div>
</div>

<!-- stacked -->
<div class="progress">
  <div class="progress-bar bg-success" style="width: 30%"></div>
  <div class="progress-bar bg-warning" style="width: 20%"></div>
  <div class="progress-bar bg-danger" style="width: 10%"></div>
</div>
```

---

## List Group

Flexible component for displaying a series of content:

```html
<ul class="list-group">
  <li class="list-group-item">Item 1</li>
  <li class="list-group-item active">Active item</li>
  <li class="list-group-item disabled">Disabled item</li>
</ul>

<!-- with badges -->
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    Messages
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
</ul>

<!-- flush — no outer borders, used inside cards -->
<ul class="list-group list-group-flush">...</ul>
```

---

## Breadcrumb

```html
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active">Data</li>
  </ol>
</nav>
```

---

## Pagination

```html
<nav>
  <ul class="pagination">
    <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>

<!-- sizes -->
<ul class="pagination pagination-lg">...</ul>
<ul class="pagination pagination-sm">...</ul>
```

---

## Offcanvas

A sidebar panel that slides in from the edge. Requires JS bundle.

```html
<button class="btn btn-primary" data-bs-toggle="offcanvas" data-bs-target="#sidebar">
  Open Sidebar
</button>

<div class="offcanvas offcanvas-start" id="sidebar">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Sidebar</h5>
    <button class="btn-close" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body">
    Sidebar content here.
  </div>
</div>
```

Directions: `offcanvas-start` (left), `offcanvas-end` (right), `offcanvas-top`, `offcanvas-bottom`.

---

## Notes

- Modal, dropdown, accordion, tooltip, toast, and offcanvas all require the JS bundle
- Tooltips are the only component that require manual JS initialization — everything else works via `data-bs-*` attributes alone
- `visually-hidden` on spinner text hides it visually but keeps it for screen readers
- `data-bs-parent` on accordion items is what enforces "only one open at a time" behavior
