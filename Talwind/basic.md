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
