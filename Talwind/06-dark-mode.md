# Tailwind CSS — Dark Mode

## How It Works

`dark:` prefix on any utility applies that style only when a `.dark` class is present on a parent element — usually `<html>` or `<body>`.

```html
<div class="bg-white dark:bg-black text-black dark:text-white">
  Dark mode disabled
</div>
```

| Class | When it applies |
|---|---|
| `bg-white` | default (light mode) |
| `dark:bg-black` | when `.dark` class is active on a parent |
| `text-black` | default |
| `dark:text-white` | when `.dark` is active |

---

## Setup in Tailwind v4

Dark mode variant is configured in CSS using `@custom-variant`:

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
```

Applies `dark:` utilities whenever the element or any ancestor has the `.dark` class.

---

## Toggling with JavaScript

```js
// enable
document.documentElement.classList.add('dark')

// disable
document.documentElement.classList.remove('dark')

// toggle
document.documentElement.classList.toggle('dark')
```

---

## Common Dark Mode Pairs

| Light | Dark |
|---|---|
| `bg-white` | `dark:bg-black` |
| `bg-gray-100` | `dark:bg-gray-900` |
| `text-black` | `dark:text-white` |
| `text-gray-700` | `dark:text-gray-300` |
| `border-gray-200` | `dark:border-gray-700` |
| `shadow-md` | `dark:shadow-gray-900` |

---

## Notes

- `dark:` works with any utility — colors, borders, shadows, opacity, etc.
- Class-based — OS preference does not auto-trigger it unless wired up with JS (`window.matchMedia('(prefers-color-scheme: dark)')`)
- Combines with responsive prefixes — `md:dark:bg-gray-800` is valid
