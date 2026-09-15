# Tailwind CSS — Utilities

## Example

```html
<div class="my-4 h-10 w-full rounded-md border-2 border-violet-600 bg-violet-200 p-1 flex justify-center items-center">
  <h1 class="text-center font-mono font-extrabold">Hello World</h1>
</div>
```

---

## Padding

Pattern: `p{side}-{size}`

| Class | CSS |
|---|---|
| `p-{n}` | `padding` all sides |
| `pt-{n}` | `padding-top` |
| `pr-{n}` | `padding-right` |
| `pb-{n}` | `padding-bottom` |
| `pl-{n}` | `padding-left` |
| `px-{n}` | `padding-left` + `padding-right` |
| `py-{n}` | `padding-top` + `padding-bottom` |

---

## Margin

Pattern: `m{side}-{size}`

| Class | CSS |
|---|---|
| `m-{n}` | `margin` all sides |
| `mt-{n}` | `margin-top` |
| `mr-{n}` | `margin-right` |
| `mb-{n}` | `margin-bottom` |
| `ml-{n}` | `margin-left` |
| `mx-{n}` | `margin-left` + `margin-right` |
| `my-{n}` | `margin-top` + `margin-bottom` |
| `mx-auto` | centers block element horizontally |

---

## Sizing

| Class | CSS |
|---|---|
| `w-{n}` | `width` from scale |
| `w-full` | `width: 100%` |
| `w-screen` | `width: 100vw` |
| `w-auto` | `width: auto` |
| `h-{n}` | `height` from scale |
| `h-full` | `height: 100%` |
| `h-screen` | `height: 100vh` |
| `min-w-{n}` | `min-width` |
| `max-w-{n}` | `max-width` |
| `min-h-{n}` | `min-height` |
| `max-h-{n}` | `max-height` |

> `h-10` = `2.5rem` (40px) — `w-full` = `100%`

---

## Border

| Class | CSS |
|---|---|
| `border` | `border-width: 1px` |
| `border-{n}` | `border-width: {n}px` |
| `border-{color}-{shade}` | `border-color` |
| `rounded` | `border-radius: 0.25rem` |
| `rounded-md` | `border-radius: 0.375rem` |
| `rounded-lg` | `border-radius: 0.5rem` |
| `rounded-full` | `border-radius: 9999px` — pill / circle |
| `rounded-none` | removes border radius |

---

## Background

| Class | CSS |
|---|---|
| `bg-{color}-{shade}` | `background-color` |
| `bg-transparent` | `background-color: transparent` |
| `bg-white` | `background-color: white` |
| `bg-black` | `background-color: black` |

---

## Flexbox

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
| `gap-{n}` | `gap` between children |
| `flex-wrap` | `flex-wrap: wrap` |
| `flex-1` | `flex: 1 1 0%` |

---

## Typography

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
