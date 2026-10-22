# Bootstrap — Forms

Bootstrap provides styled classes for every form element — inputs, selects, checkboxes, radios, file inputs, ranges, and more — plus layout utilities for building clean form structures.

---

## Basic Input

```html
<div class="mb-3">
  <label for="email" class="form-label">Email address</label>
  <input type="email" class="form-control" id="email" placeholder="name@example.com" />
</div>
```

- `form-label` — styles the label
- `form-control` — styles the input (full width, border, padding, focus ring)
- `mb-3` — spacing between fields

---

## Input Sizes

```html
<input class="form-control form-control-lg" type="text" placeholder="Large" />
<input class="form-control" type="text" placeholder="Default" />
<input class="form-control form-control-sm" type="text" placeholder="Small" />
```

---

## Textarea

```html
<div class="mb-3">
  <label for="message" class="form-label">Message</label>
  <textarea class="form-control" id="message" rows="4"></textarea>
</div>
```

---

## Select

```html
<div class="mb-3">
  <label for="country" class="form-label">Country</label>
  <select class="form-select" id="country">
    <option selected>Choose...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>
</div>
```

`form-select-lg` and `form-select-sm` for sizing.

---

## Checkbox & Radio

```html
<!-- checkbox -->
<div class="form-check">
  <input class="form-check-input" type="checkbox" id="check1" />
  <label class="form-check-label" for="check1">Check me</label>
</div>

<!-- radio -->
<div class="form-check">
  <input class="form-check-input" type="radio" name="options" id="radio1" />
  <label class="form-check-label" for="radio1">Option 1</label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="options" id="radio2" />
  <label class="form-check-label" for="radio2">Option 2</label>
</div>

<!-- inline checkbox/radio -->
<div class="form-check form-check-inline">...</div>
```

---

## Switch

Styled toggle switch using checkbox:

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="switch1" />
  <label class="form-check-label" for="switch1">Toggle me</label>
</div>
```

---

## Range

```html
<div class="mb-3">
  <label for="range" class="form-label">Range</label>
  <input type="range" class="form-range" id="range" min="0" max="100" />
</div>
```

---

## File Input

```html
<div class="mb-3">
  <label for="file" class="form-label">Upload file</label>
  <input class="form-control" type="file" id="file" />
</div>
```

---

## Input Group

Prepend or append text, icons, or buttons to an input:

```html
<!-- prepend text -->
<div class="input-group mb-3">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Username" />
</div>

<!-- append button -->
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Search..." />
  <button class="btn btn-primary">Go</button>
</div>

<!-- icon prepend -->
<div class="input-group mb-3">
  <span class="input-group-text">
    <i class="bi bi-search"></i>
  </span>
  <input type="text" class="form-control" placeholder="Search..." />
</div>
```

---

## Floating Labels

Label floats above the input when focused or filled:

```html
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatEmail" placeholder="name@example.com" />
  <label for="floatEmail">Email address</label>
</div>

<div class="form-floating mb-3">
  <textarea class="form-control" id="floatMessage" placeholder="Message"></textarea>
  <label for="floatMessage">Message</label>
</div>
```

The `placeholder` attribute is required for floating labels to work — it can be anything.

---

## Form Layout

### Horizontal with Grid

```html
<div class="row mb-3">
  <label class="col-sm-2 col-form-label">Email</label>
  <div class="col-sm-10">
    <input type="email" class="form-control" />
  </div>
</div>
```

### Inline Form

```html
<form class="row row-cols-lg-auto g-3 align-items-center">
  <div class="col-12">
    <input type="text" class="form-control" placeholder="Name" />
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
```

---

## Validation States

```html
<!-- valid -->
<input type="text" class="form-control is-valid" />
<div class="valid-feedback">Looks good!</div>

<!-- invalid -->
<input type="text" class="form-control is-invalid" />
<div class="invalid-feedback">Please provide a valid value.</div>
```

For JS-driven validation, add `was-validated` class to the `<form>` element instead.

---

## Disabled & Readonly

```html
<input class="form-control" type="text" placeholder="Disabled" disabled />
<input class="form-control" type="text" value="Readonly" readonly />

<!-- disabled fieldset — disables all inputs inside -->
<fieldset disabled>
  <input class="form-control mb-2" type="text" />
  <button class="btn btn-primary">Submit</button>
</fieldset>
```

---

## Notes

- Every input needs a matching `for`/`id` pair between label and input — required for accessibility
- `form-control` is the base class for text inputs, textareas, and file inputs
- `form-select` is specifically for `<select>` elements
- Floating labels require a `placeholder` attribute to be present on the input
- `input-group` is the go-to for search bars with buttons or icon-prefixed fields
