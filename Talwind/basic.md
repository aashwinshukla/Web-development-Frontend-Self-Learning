# Tailwind CSS

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
