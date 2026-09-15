# Tailwind CSS — Responsive Design

## Mobile-First Approach

Tailwind is **mobile-first**. Styles without any prefix apply to all screen sizes. Prefixed utilities kick in at and above a specific breakpoint.

Style for mobile first, then layer overrides for larger screens using breakpoint prefixes.

```html
<!-- mobile: black, sm and above: amber-500, md and above: amber-700 -->
<div class="bg-black sm:bg-amber-500 md:bg-amber-700">
  <p class="text-white">Wider than 768px</p>
</div>
```

---

## Breakpoints

| Prefix | Min-width | Target |
|---|---|---|
| *(none)* | 0px | Mobile — default |
| `sm:` | 640px | Large phones / small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large / wide screens |

Every breakpoint prefix compiles to a `@media (min-width: ...)` rule.

---

## Max-width Variants

`max-{breakpoint}:` targets screen sizes **below** a breakpoint.

| Prefix | Max-width |
|---|---|
| `max-sm:` | 639px |
| `max-md:` | 767px |
| `max-lg:` | 1023px |
| `max-xl:` | 1279px |
| `max-2xl:` | 1535px |

```html
<!-- black only on screens below md -->
<div class="max-md:bg-black">...</div>
```

---

## How It Compiles

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

---

## Common Patterns

```html
<!-- stack on mobile, row on md and above -->
<div class="flex flex-col md:flex-row">...</div>

<!-- hidden on mobile, visible from md up -->
<div class="hidden md:block">...</div>

<!-- full width on mobile, half on lg -->
<div class="w-full lg:w-1/2">...</div>

<!-- smaller text on mobile, larger on xl -->
<h1 class="text-2xl xl:text-5xl">...</h1>
```

Breakpoint prefixes work with **any** utility — layout, spacing, typography, colors, visibility, etc.
