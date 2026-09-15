# Tailwind CSS — Directives

Directives are special `@` instructions in the CSS file that Tailwind processes. They control how Tailwind is imported, how custom styles are layered, and how the design system is extended.

---

## `@import "tailwindcss"`

Entry point. Replaces the old v3 three-liner (`@tailwind base/components/utilities`). One line pulls everything in.

```css
@import "tailwindcss";
```

Must be at the top of the CSS file. Everything else goes below it.

---

## `@theme`

Defines custom design tokens — colors, font sizes, spacing — that Tailwind registers into its utility system.

```css
@theme {
  --color-brand: #6d28d9;
  --color-surface: #1e1e2e;
  --font-size-display: 3.5rem;
  --spacing-section: 5rem;
}
```

- Variables follow `--{category}-{name}` pattern
- Automatically converted into utility classes
- Single source of truth for the design system

---

## `@layer`

Controls which CSS cascade layer custom styles go into. Three built-in layers:

```css
@layer base {
  /* global resets, element defaults */
  h1 { font-size: 2rem; }
}

@layer components {
  /* reusable UI patterns */
  .btn { @apply px-4 py-2 rounded-lg font-semibold; }
}

@layer utilities {
  /* custom single-purpose utilities */
  .scrollbar-hide { scrollbar-width: none; }
}
```

| Layer | Purpose |
|---|---|
| `base` | Element-level defaults and resets |
| `components` | Reusable class patterns — buttons, cards, inputs |
| `utilities` | Single-purpose custom utility classes |

Order matters — `base` has lowest specificity, `utilities` has highest. Matches the Tailwind class override model.

---

## `@apply`

Composes Tailwind utility classes into a single custom CSS class. Used inside `@layer components`.

```css
@layer components {
  .btn-primary {
    @apply bg-brand text-white px-4 py-2 rounded-lg hover:opacity-90;
  }
}
```

```html
<button class="btn-primary">Click</button>
```

---

## `@custom-variant`

Defines a custom variant with custom selector logic. Used in v4 to configure dark mode and other state-based variants.

```css
@custom-variant dark (&:where(.dark, .dark *));
```

- `dark` — the variant name, used as `dark:` prefix in HTML
- `&:where(.dark, .dark *)` — applies when the element or any ancestor has `.dark` class

Custom variants can be anything:

```css
@custom-variant theme-red (&:where(.theme-red, .theme-red *));
```

Then `theme-red:bg-red-500` works in HTML when `.theme-red` is on a parent.

---

## `@source`

Tells Tailwind where to scan for class names when auto-detection misses certain files.

```css
@source "../components/**/*.jsx";
```

Useful when classes are generated dynamically or come from files outside the default scan path.

---

## Quick Reference

| Directive | Purpose |
|---|---|
| `@import "tailwindcss"` | Loads Tailwind — entry point |
| `@theme` | Defines custom design tokens |
| `@layer base` | Global element defaults and resets |
| `@layer components` | Reusable UI class patterns |
| `@layer utilities` | Custom single-purpose utilities |
| `@apply` | Composes Tailwind classes into a custom CSS class |
| `@custom-variant` | Creates a new variant prefix with custom selector logic |
| `@source` | Manually adds file paths for class scanning |
