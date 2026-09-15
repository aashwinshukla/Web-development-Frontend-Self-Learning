# Tailwind CSS — Custom Styles & Reusability

## Arbitrary Values with `[]`

One-off values using square brackets — JIT compiles them on the fly:

```html
<div class="w-[320px] text-[#a855f7] mt-[13px] bg-[#1a1a2e]">...</div>
```

### Why overusing `[]` is bad
- Breaks the design system — any dev can put any random value, consistency disappears
- Scattered magic numbers across HTML — hard to maintain
- Defeats the purpose of a design scale
- No single source of truth for brand colors, spacing, etc.

---

## Custom Design Tokens — `@theme`

In Tailwind v4, custom tokens are defined in CSS using `@theme`. Variables defined here become utility classes automatically.

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

### How variables become classes

Pattern: `--{category}-{name}` → `{utility}-{name}`

| CSS Variable | Generated classes |
|---|---|
| `--color-brand-primary` | `bg-brand-primary`, `text-brand-primary`, `border-brand-primary` |
| `--color-brand-secondary` | `bg-brand-secondary`, `text-brand-secondary` |
| `--color-surface` | `bg-surface`, `text-surface` |
| `--font-size-display` | `text-display` |
| `--spacing-section` | `mt-section`, `py-section`, `gap-section` |

```html
<div class="bg-surface text-brand-primary py-section">
  <h1 class="text-display text-brand-accent">Hello</h1>
</div>
```

---

## Reusability with `@apply`

For repeated UI patterns, `@apply` extracts utility classes into a single reusable CSS class:

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

```html
<button class="btn-primary">Submit</button>
<div class="card">...</div>
```

> `@apply` should be used sparingly — only for genuinely repeated patterns. Overusing it brings back the same problems as writing plain CSS classes everywhere.

---

## When to Use What

| Approach | When to use |
|---|---|
| Utility classes directly | Most cases — the default Tailwind workflow |
| `[]` arbitrary values | One-off values with no design-system equivalent |
| `@theme` CSS variables | Brand colors, font sizes, spacing repeated across the project |
| `@apply` in `@layer components` | Repeated UI patterns — buttons, cards, inputs |
