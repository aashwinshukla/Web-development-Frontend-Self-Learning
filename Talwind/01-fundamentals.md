# Tailwind CSS — Fundamentals

## Tailwind Play

`play.tailwindcss.com` — official browser-based playground. Write HTML with Tailwind classes on the left, live preview on the right, generated CSS in the bottom bar.

---

## First Example

```html
<h1 class="mt-2 text-center text-lg text-green-300">Hello World</h1>
```

| Class | What it does | Generated CSS |
|---|---|---|
| `mt-2` | Margin top | `margin-top: 0.5rem` |
| `text-center` | Text alignment | `text-align: center` |
| `text-lg` | Font size large | `font-size: 1.125rem; line-height: 1.75rem` |
| `text-green-300` | Text color | `color: oklch(0.871 0.15 154.449)` |

---

## The Generated CSS Panel

The bottom bar in Tailwind Play shows the actual CSS compiled from the classes used. Split into two sections:

**`@layer base`**
- Tailwind's global reset — `box-sizing: border-box`, margin resets, font smoothing, etc.
- Applied automatically to every project. Browser consistency layer.

**`@layer utilities`**
- Where the classes written in HTML end up.
- Each used class compiles into its own rule here — nothing extra, only what's used.
- `mt-2`, `text-center`, `text-lg`, `text-green-300` each appear as a separate rule.

Other things worth noting:
- Only classes **actually used** are included — nothing extra generated
- Tailwind uses modern CSS values internally (`oklch` for colors)
- The output is plain, valid CSS — pre-defined values from Tailwind's design scale

---

## Class Naming Pattern

```
{property}-{value}
```

Examples:
- `mt-2` → margin-top, scale value 2
- `text-lg` → font-size, large preset
- `text-green-300` → color, green palette, shade 300
- `text-center` → text-align center

### Numeric scale
Based on a **4px base unit** mapped to `rem`:

| Scale | rem | px |
|---|---|---|
| `1` | `0.25rem` | `4px` |
| `2` | `0.5rem` | `8px` |
| `4` | `1rem` | `16px` |
| `6` | `1.5rem` | `24px` |
| `8` | `2rem` | `32px` |
| `10` | `2.5rem` | `40px` |
| `16` | `4rem` | `64px` |

### Color shades
Run from **50 (lightest) to 950 (darkest)** — `green-300` is light, `green-700` is dark.
