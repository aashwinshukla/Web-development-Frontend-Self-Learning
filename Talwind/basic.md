# Tailwind CSS

> **Reference:** `tailwindcss.com/docs` — official docs, every utility class listed with live examples, searchable by property name. Best place to look up any class visually.

---

## 1. Introduction

Tailwind CSS is a **utility-first CSS framework** where styling is done directly in HTML using small, pre-built classes instead of writing styles in a separate CSS file.

Created by Adam Wathan, released in 2017. Has grown into one of the most popular CSS frameworks in modern frontend development.

The core idea — every class does **one specific thing**. Padding, flex, colors, hover states — there's a class for each. These small utility classes are composed together to build any UI without writing custom CSS.

Unlike Bootstrap, Tailwind does **not** ship with pre-built components (buttons, navbars, cards). It provides **low-level building blocks**, giving full control over the design without fighting pre-made styles.

Works seamlessly with modern stacks — **React, Next.js, Vue, Astro**, etc. Fits naturally into a component-based workflow.

---

## 2. Tailwind vs Plain CSS

| Feature | Plain CSS | Tailwind CSS |
|---|---|---|
| Where styles are written | Separate `.css` file | Directly in HTML as classes |
| Class naming | Manual — named by the developer | Pre-defined by Tailwind |
| File switching | Constant back-and-forth between HTML and CSS | Everything in one place |
| Unused styles | Easy to accumulate dead code | Unused styles are purged automatically in production |
| Design consistency | Easy to go off-scale accidentally | Predefined spacing, color, and size scales keep things consistent |
| Learning curve | Low (already know CSS) | Slightly steep at start, fast once the class patterns click |
| Custom styles | Full freedom | Still fully possible, but works within a design system |
| Responsive design | Manual media queries | Built-in prefixes like `md:`, `lg:`, `xl:` |

### Code comparison

**Plain CSS approach:**
```css
.card {
  padding: 16px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

**Tailwind approach:**
```html
<div class="p-4 rounded-lg bg-white shadow-md">
  ...
</div>
```

Same result — no CSS file, no class naming, no context switching.

### When plain CSS still makes sense
- Full creative control outside a predefined scale is needed
- Very small project with minimal styling
- Team already deep in a BEM or OOCSS workflow

---

## 3. Fundamentals — How Tailwind Classes Work

### Tailwind Play
Tailwind Play (`play.tailwindcss.com`) is the official browser-based playground. Write HTML with Tailwind classes on the left, see the live preview on the right, and inspect the **generated CSS** in the bottom bar — useful for understanding exactly what each class compiles to.

### First example
```html
<h1 class="mt-2 text-center text-lg text-green-300">Hello World</h1>
```

Breaking down each class:

| Class | What it does | Generated CSS equivalent |
|---|---|---|
| `mt-2` | Margin top | `margin-top: 0.5rem` |
| `text-center` | Align text | `text-align: center` |
| `text-lg` | Font size large | `font-size: 1.125rem; line-height: 1.75rem` |
| `text-green-300` | Text color | `color: oklch(0.871 0.15 154.449)` |

### What the generated CSS shows
The bottom bar in Tailwind Play shows the actual CSS that Tailwind generates for the classes used. The output is split into distinct sections:

**`@layer base`**
- Contains Tailwind's global reset/normalize styles — things like `box-sizing: border-box`, default margin resets, font smoothing, etc.
- Applied to every project automatically. This is Tailwind's version of a CSS reset so browsers render elements consistently.

**`@layer utilities`**
- This is where the classes actually written in the HTML end up.
- Each used class gets compiled into its own rule here — nothing extra, only what's used.
- For the example above, `mt-2`, `text-center`, `text-lg`, and `text-green-300` each appear as separate CSS rules inside this layer.

A few things worth noting about the output overall:
- Only the classes **actually used** in the HTML are included — nothing extra is generated. This is how Tailwind keeps production builds small.
- Each utility class maps to a minimal, single-purpose CSS rule.
- Tailwind uses modern CSS values internally (like `oklch` for colors) even if the class name looks simple like `text-green-300`.
- The output is plain, valid CSS — no magic, just pre-defined values from Tailwind's design scale.

### How the class naming pattern works
Tailwind class names follow a readable pattern:

```
{property}-{value}
```

Examples:
- `mt-2` → margin-top, scale value 2
- `text-lg` → font-size, large preset
- `text-green-300` → color, green palette, shade 300
- `text-center` → text-align center

The numeric scale (1, 2, 3, 4...) maps to `rem` values based on a **4px base unit** — so `mt-2` = `0.5rem` = `8px`, `mt-4` = `1rem` = `16px`, and so on.

Color shades run from **50 (lightest) to 950 (darkest)** — `green-300` is a light green, `green-700` would be a darker one.

---

## 4. Spacing, Sizing, Layout & Typography Utilities

### Example
```html
<div class="my-4 h-10 w-full rounded-md border-2 border-violet-600 bg-violet-200 p-1 flex justify-center items-center">
  <h1 class="text-center font-mono font-extrabold">Hello World</h1>
</div>
```

---

### Padding

Pattern: `p{side}-{size}`

| Class | CSS |
|---|---|
| `p-{n}` | `padding` on all sides |
| `pt-{n}` | `padding-top` |
| `pr-{n}` | `padding-right` |
| `pb-{n}` | `padding-bottom` |
| `pl-{n}` | `padding-left` |
| `px-{n}` | `padding-left` + `padding-right` (horizontal) |
| `py-{n}` | `padding-top` + `padding-bottom` (vertical) |

---

### Margin

Pattern: `m{side}-{size}`

| Class | CSS |
|---|---|
| `m-{n}` | `margin` on all sides |
| `mt-{n}` | `margin-top` |
| `mr-{n}` | `margin-right` |
| `mb-{n}` | `margin-bottom` |
| `ml-{n}` | `margin-left` |
| `mx-{n}` | `margin-left` + `margin-right` (horizontal) |
| `my-{n}` | `margin-top` + `margin-bottom` (vertical) |
| `mx-auto` | centers block element horizontally |

---

### Sizing

| Class | CSS |
|---|---|
| `w-{n}` | `width` — fixed size from scale |
| `w-full` | `width: 100%` |
| `w-screen` | `width: 100vw` |
| `w-auto` | `width: auto` |
| `h-{n}` | `height` — fixed size from scale |
| `h-full` | `height: 100%` |
| `h-screen` | `height: 100vh` |
| `min-w-{n}` | `min-width` |
| `max-w-{n}` | `max-width` |
| `min-h-{n}` | `min-height` |
| `max-h-{n}` | `max-height` |

> `h-10` = `height: 2.5rem` (40px), `w-full` = `width: 100%`

---

### Border

| Class | CSS |
|---|---|
| `border` | `border-width: 1px` |
| `border-{n}` | `border-width: {n}px` — e.g. `border-2` = `2px` |
| `border-{color}-{shade}` | `border-color` |
| `rounded` | `border-radius: 0.25rem` |
| `rounded-md` | `border-radius: 0.375rem` |
| `rounded-lg` | `border-radius: 0.5rem` |
| `rounded-full` | `border-radius: 9999px` (pill / circle) |
| `rounded-none` | removes border radius |

---

### Background

| Class | CSS |
|---|---|
| `bg-{color}-{shade}` | `background-color` |
| `bg-transparent` | `background-color: transparent` |
| `bg-white` | `background-color: white` |
| `bg-black` | `background-color: black` |

---

### Flexbox

| Class | CSS |
|---|---|
| `flex` | `display: flex` |
| `inline-flex` | `display: inline-flex` |
| `flex-row` | `flex-direction: row` (default) |
| `flex-col` | `flex-direction: column` |
| `justify-start` | `justify-content: flex-start` |
| `justify-center` | `justify-content: center` |
| `justify-end` | `justify-content: flex-end` |
| `justify-between` | `justify-content: space-between` |
| `items-start` | `align-items: flex-start` |
| `items-center` | `align-items: center` |
| `items-end` | `align-items: flex-end` |
| `gap-{n}` | `gap` between flex/grid children |
| `flex-wrap` | `flex-wrap: wrap` |
| `flex-1` | `flex: 1 1 0%` |

---

### Typography

| Class | CSS |
|---|---|
| `text-{size}` | font-size — `xs`, `sm`, `base`, `lg`, `xl`, `2xl`... |
| `text-{color}-{shade}` | text color |
| `text-left / center / right` | text alignment |
| `font-thin` | `font-weight: 100` |
| `font-light` | `font-weight: 300` |
| `font-normal` | `font-weight: 400` |
| `font-medium` | `font-weight: 500` |
| `font-semibold` | `font-weight: 600` |
| `font-bold` | `font-weight: 700` |
| `font-extrabold` | `font-weight: 800` |
| `font-black` | `font-weight: 900` |
| `font-sans` | system sans-serif stack |
| `font-serif` | system serif stack |
| `font-mono` | monospace font stack |
| `uppercase` | `text-transform: uppercase` |
| `lowercase` | `text-transform: lowercase` |
| `capitalize` | `text-transform: capitalize` |
| `tracking-tight` | `letter-spacing: -0.05em` |
| `tracking-wide` | `letter-spacing: 0.025em` |
| `leading-{n}` | `line-height` |

---

## 5. JIT Compiler

JIT stands for **Just-In-Time**. Tailwind v3 switched to a JIT compiler by default, and it changed how Tailwind generates CSS fundamentally.

### How it worked before (pre-v3)
Tailwind used to pre-generate a massive CSS file upfront — every possible class combination for every utility. That file could be **several MBs** in development. A separate purge step would remove unused classes for production builds.

### How JIT works
Instead of generating everything upfront, the JIT compiler **watches the HTML/JSX/template files in real time** and generates CSS **only for the classes actually used** — on demand, as they appear.

- Write a class → CSS for that class is generated instantly
- Remove a class → it disappears from the output
- No bloated dev build, no separate purge step needed
- Dev and production output are essentially the same size

### What this unlocks
JIT also enabled **arbitrary values** — a major feature that wasn't practical before:

```html
<div class="w-[320px] text-[#a855f7] mt-[13px]">
```

Any value in square brackets gets compiled on the fly. This means the full power of CSS is available without ever leaving HTML — no need to drop into a custom CSS file for one-off values.

### In Tailwind Play
Tailwind Play runs the JIT engine in the browser. Every keystroke re-runs the compiler — which is why the generated CSS in the bottom bar updates live as classes are added or removed.

---

## 6. Flexbox & Grid

### Flexbox example
```html
<div class="flex flex-col items-center justify-center space-y-6 mt-2">
  <div class="h-16 w-16 rounded-full bg-blue-400"></div>
  <div class="h-16 w-16 rounded-full bg-orange-400"></div>
  <div class="h-16 w-16 rounded-full bg-green-400"></div>
</div>
```

| Class | CSS |
|---|---|
| `flex` | `display: flex` |
| `flex-col` | `flex-direction: column` |
| `items-center` | `align-items: center` |
| `justify-center` | `justify-content: center` |
| `space-y-{n}` | adds `margin-top` between children vertically |
| `space-x-{n}` | adds `margin-left` between children horizontally |

> `space-y-*` and `space-x-*` are a Tailwind shorthand — instead of manually adding margin to each child, it targets all children except the first using a CSS sibling selector.

---

### Grid example
```html
<div class="grid grid-cols-3 gap-2 mt-2 mx-2">
  <div class="h-16 rounded-full bg-blue-400"></div>
  <div class="h-16 rounded-full bg-orange-400"></div>
  <div class="h-16 rounded-full bg-green-400"></div>
</div>
```

| Class | CSS |
|---|---|
| `grid` | `display: grid` |
| `grid-cols-{n}` | `grid-template-columns: repeat(n, minmax(0, 1fr))` |
| `grid-rows-{n}` | `grid-template-rows: repeat(n, minmax(0, 1fr))` |
| `gap-{n}` | `gap` — spacing between all rows and columns |
| `gap-x-{n}` | `column-gap` only |
| `gap-y-{n}` | `row-gap` only |
| `col-span-{n}` | `grid-column: span n` — item spans n columns |
| `row-span-{n}` | `grid-row: span n` — item spans n rows |
| `col-start-{n}` | `grid-column-start: n` |
| `col-end-{n}` | `grid-column-end: n` |

---

### Flexbox vs Grid — quick distinction

| | Flexbox | Grid |
|---|---|---|
| Direction | One axis at a time (row **or** column) | Two axes simultaneously (rows **and** columns) |
| Best for | Nav bars, button groups, centering, linear layouts | Page layouts, card grids, complex 2D arrangements |
| Item sizing | Items size to their content by default | Items fit into defined grid tracks |

---

### Practice resources
- **Flexbox Froggy** — `flexboxfroggy.com` — game for learning flexbox properties by moving frogs to lily pads
- **Grid Garden** — `cssgridgarden.com` — game for learning CSS grid by watering a carrot garden

Both cover the underlying CSS concepts, which map directly to Tailwind's flex and grid utility classes.

---

## 7. Responsive Design & Media Queries

### Mobile-First Approach
Tailwind follows a **mobile-first** design philosophy. This means styles without any prefix apply to **all screen sizes**, and prefixed utilities only kick in at and above a certain breakpoint.

So the pattern is — style for mobile first, then layer on overrides for larger screens using breakpoint prefixes.

```html
<!-- mobile: black, sm and above: amber-500, md and above: amber-700 -->
<div class="bg-black sm:bg-amber-500 md:bg-amber-700">
  <p class="text-white">I appear on screen wider than 768px</p>
</div>
```

---

### Breakpoints

| Prefix | Min-width | Typical target |
|---|---|---|
| *(none)* | 0px | Mobile (default) |
| `sm:` | 640px | Large phones / small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large / wide screens |

Every breakpoint prefix compiles to a `@media (min-width: ...)` rule in the generated CSS.

---

### Max-width variant — `max-{breakpoint}:`
By default all breakpoints are `min-width`. Tailwind also supports `max-{breakpoint}:` for targeting screen sizes **below** a breakpoint.

| Prefix | Max-width | Meaning |
|---|---|---|
| `max-sm:` | 639px | Only on screens smaller than sm |
| `max-md:` | 767px | Only on screens smaller than md |
| `max-lg:` | 1023px | Only on screens smaller than lg |
| `max-xl:` | 1279px | Only on screens smaller than xl |
| `max-2xl:` | 1535px | Only on screens smaller than 2xl |

```html
<!-- black only on screens below md (767px) -->
<div class="max-md:bg-black">...</div>
```

---

### How it compiles
Each responsive class becomes a media-wrapped rule in `@layer utilities`:

```css
/* sm:bg-amber-500 */
@media (min-width: 640px) {
  .sm\:bg-amber-500 { background-color: oklch(...) }
}

/* md:bg-amber-700 */
@media (min-width: 768px) {
  .md\:bg-amber-700 { background-color: oklch(...) }
}

/* max-md:bg-black */
@media (max-width: 767px) {
  .max-md\:bg-black { background-color: #000 }
}
```

No manually written media queries needed — the breakpoint prefix handles it all.

---

### Key points
- Unprefixed classes = mobile styles, always applied
- `sm:`, `md:`, `lg:` etc. = min-width, stack on top as screen grows
- `max-md:`, `max-lg:` etc. = max-width, only apply below that breakpoint
- Breakpoint prefixes work with **any** utility — layout, spacing, typography, colors, visibility, etc.

```html
<!-- stack on mobile, side by side on md and above -->
<div class="flex flex-col md:flex-row">...</div>

<!-- hidden on mobile, visible from md up -->
<div class="hidden md:block">...</div>

<!-- full width on mobile, half on lg -->
<div class="w-full lg:w-1/2">...</div>
```

---

## 8. Dark Mode

### How it works
Tailwind's dark mode is class-based by default in v4. A `dark:` prefix on any utility applies that style only when a `.dark` class is present on a parent element (usually `<html>` or `<body>`).

```html
<div class="bg-white dark:bg-black text-black dark:text-white">
  Dark mode disabled
</div>
```

- `bg-white` — default (light mode) background
- `dark:bg-black` — background when `.dark` class is active
- `text-black` — default text color
- `dark:text-white` — text color in dark mode

---

### Enabling dark mode in Tailwind v4
In v4, dark mode variant behavior is configured via CSS using `@custom-variant`:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

This tells Tailwind — apply `dark:` utilities whenever the element or any of its ancestors has the `.dark` class. Toggle dark mode by adding/removing the `dark` class on `<html>` with JavaScript.

> Note: `@custon-variant` in the example is a typo — the correct directive is `@custom-variant`.

---

### Toggling dark mode with JavaScript
```js
// enable dark mode
document.documentElement.classList.add('dark')

// disable dark mode
document.documentElement.classList.remove('dark')

// toggle
document.documentElement.classList.toggle('dark')
```

---

### Common dark mode utility pairs

| Light | Dark |
|---|---|
| `bg-white` | `dark:bg-black` |
| `bg-gray-100` | `dark:bg-gray-900` |
| `text-black` | `dark:text-white` |
| `text-gray-700` | `dark:text-gray-300` |
| `border-gray-200` | `dark:border-gray-700` |
| `shadow-md` | `dark:shadow-gray-900` |

---

### Key points
- `dark:` works with **any** utility — colors, borders, shadows, opacity, etc.
- Class-based approach gives full manual control — OS preference does not auto-trigger it unless explicitly wired up with JS (`window.matchMedia('(prefers-color-scheme: dark)')`)
- Pairs cleanly with responsive prefixes — `md:dark:bg-gray-800` is valid

---

## 9. Custom Styles & Reusability

### Arbitrary Values with `[]`
The JIT compiler allows any one-off value using square brackets:

```html
<div class="w-[320px] text-[#a855f7] mt-[13px] bg-[#1a1a2e]">...</div>
```

This works and is useful occasionally — but using `[]` everywhere is considered bad practice:

- Breaks the design system — every dev can put any random value, consistency disappears
- Harder to maintain — scattered magic numbers across the HTML
- Defeats the purpose of having a design scale
- No single source of truth for brand colors, spacing, etc.

---

### The right way — defining custom values in CSS (Tailwind v4)

In Tailwind v4, custom design tokens are defined directly in CSS using `@theme` inside the main CSS file (the one with `@import "tailwindcss"`):

```css
@import "tailwindcss";

@theme {
  --color-brand-primary: #6d28d9;
  --color-brand-secondary: #a78bfa;
  --color-brand-accent: #f59e0b;
  --color-surface: #1e1e2e;

  --font-size-display: 3.5rem;

  --spacing-section: 5rem;
}
```

Tailwind automatically picks up any CSS variable defined inside `@theme` and turns it into a utility class.

---

### Syntax — how variables become classes

The naming convention maps directly to class names:

| CSS Variable | Generated class |
|---|---|
| `--color-brand-primary` | `bg-brand-primary`, `text-brand-primary`, `border-brand-primary` |
| `--color-brand-secondary` | `bg-brand-secondary`, `text-brand-secondary` |
| `--color-surface` | `bg-surface`, `text-surface` |
| `--font-size-display` | `text-display` |
| `--spacing-section` | `mt-section`, `py-section`, `gap-section` |

Pattern: `--{category}-{name}` → `{utility}-{name}`

```html
<!-- using custom theme tokens -->
<div class="bg-surface text-brand-primary py-section">
  <h1 class="text-display text-brand-accent">Hello</h1>
</div>
```

---

### Reusability with `@apply`
For truly repeated patterns (like a button style used across many components), Tailwind provides `@apply` to extract utility classes into a single reusable CSS class:

```css
@layer components {
  .btn-primary {
    @apply bg-brand-primary text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90;
  }

  .card {
    @apply bg-surface rounded-xl p-6 shadow-md border border-brand-secondary;
  }
}
```

Then in HTML:
```html
<button class="btn-primary">Submit</button>
<div class="card">...</div>
```

> `@apply` should be used sparingly — only for genuinely repeated UI patterns. Overusing it brings back the same problems as writing plain CSS classes everywhere.

---

### Summary — when to use what

| Approach | When to use |
|---|---|
| Utility classes directly | Most cases — the default Tailwind workflow |
| `[]` arbitrary values | One-off values with no design-system equivalent |
| `@theme` CSS variables | Brand colors, font sizes, spacing that repeat across the project |
| `@apply` in `@layer components` | Repeated UI patterns like buttons, cards, inputs |

---
