# Tailwind CSS — Misc Utilities

## Accent Color

Controls the color of browser-native form elements — checkboxes, radio buttons, range sliders, progress bars.

```html
<input type="checkbox" class="accent-violet-500" checked />
<input type="range" class="accent-pink-500" />
```

| Class | CSS |
|---|---|
| `accent-{color}-{shade}` | `accent-color` |
| `accent-auto` | resets to browser default |

---

## Fluid Text

Tailwind has no built-in fluid text utility. Done with `clamp()` via arbitrary values:

```html
<h1 class="text-[clamp(1.5rem,5vw,3rem)]">Fluid Heading</h1>
```

- `clamp(min, preferred, max)` — scales font size between min and max based on viewport width
- No media queries needed — scales smoothly across all screen sizes
- Common in landing pages and hero sections

---

## File Input Styling

`file:` prefix styles the button part of a native file input:

```html
<input type="file" class="file:bg-violet-600 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-0 file:cursor-pointer" />
```

| Class | What it styles |
|---|---|
| `file:bg-{color}` | background of the file button |
| `file:text-{color}` | text color |
| `file:px-{n}` / `file:py-{n}` | padding |
| `file:rounded-{size}` | border radius |
| `file:border-0` | removes default border |
| `file:cursor-pointer` | pointer cursor on hover |

---

## Highlight / Selection Color

Controls the background when text is selected by the user:

```html
<p class="selection:bg-violet-400 selection:text-white">
  Select this text to see the highlight.
</p>
```

| Class | CSS |
|---|---|
| `selection:bg-{color}` | background of selected text |
| `selection:text-{color}` | color of selected text |

Can be placed on a parent — cascades to all children.

---

## Open Prefix

Targets the open state of `<details>` and `<dialog>` elements:

```html
<details class="open:bg-violet-100 open:border open:border-violet-400 rounded-lg p-2">
  <summary class="cursor-pointer font-semibold">Click to expand</summary>
  <p class="mt-2 text-sm">Visible when open.</p>
</details>
```

| Class | When it applies |
|---|---|
| `open:bg-{color}` | when `<details>` / `<dialog>` is open |
| `open:border-{...}` | border only when open |
| `open:shadow-{...}` | shadow only when open |

Works like `hover:` or `focus:` — a state-based prefix.

---

## Caret Color

Controls the blinking text cursor color inside inputs and textareas:

```html
<input type="text" class="caret-violet-500 outline-none border px-3 py-2 rounded" />
<textarea class="caret-pink-400"></textarea>
```

| Class | CSS |
|---|---|
| `caret-{color}-{shade}` | `caret-color` |
| `caret-transparent` | hides the caret |

---

## Scroll Behavior & Scroll Margin

Useful in almost every multi-section page with anchor navigation:

```html
<!-- smooth scrolling on the whole page -->
<html class="scroll-smooth">

<!-- offset so fixed navbar doesn't cover the section -->
<section id="about" class="scroll-mt-20">...</section>
```

| Class | CSS |
|---|---|
| `scroll-smooth` | `scroll-behavior: smooth` |
| `scroll-mt-{n}` | `scroll-margin-top` — offset for anchor links |
| `scroll-mb-{n}` | `scroll-margin-bottom` |

Without `scroll-mt-*`, anchor links on pages with a fixed navbar land behind the nav. This fixes it without JS.

---

## Pointer Events & Cursor

Frequently needed for disabled states, loading states, and interactive UI:

```html
<button class="cursor-not-allowed opacity-50 pointer-events-none">Disabled</button>
<div class="cursor-pointer hover:opacity-80">Clickable card</div>
```

| Class | CSS |
|---|---|
| `cursor-pointer` | `cursor: pointer` |
| `cursor-not-allowed` | `cursor: not-allowed` |
| `cursor-default` | `cursor: default` |
| `cursor-grab` | `cursor: grab` |
| `cursor-text` | `cursor: text` |
| `pointer-events-none` | `pointer-events: none` — disables all mouse interaction |
| `pointer-events-auto` | re-enables pointer events |
