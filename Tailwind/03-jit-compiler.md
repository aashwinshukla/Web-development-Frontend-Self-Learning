# Tailwind CSS — JIT Compiler

JIT = **Just-In-Time**. Tailwind v3 switched to JIT by default. v4 uses it exclusively.

---

## Before JIT (pre-v3)

Tailwind pre-generated a massive CSS file upfront — every possible class combination for every utility. That file could be **several MBs** in development. A separate purge step removed unused classes for production.

---

## How JIT Works

Instead of generating everything upfront, the JIT compiler **watches HTML/JSX/template files in real time** and generates CSS **only for the classes actually used** — on demand, as they appear.

- Add a class → CSS for it is generated instantly
- Remove a class → it disappears from the output
- No bloated dev build
- No separate purge step needed
- Dev and production output are the same size

---

## Arbitrary Values

JIT enabled **arbitrary values** using square brackets — any one-off value compiled on the fly:

```html
<div class="w-[320px] text-[#a855f7] mt-[13px] bg-[#1a1a2e]">...</div>
```

Full CSS power without leaving HTML. No need to drop into a custom CSS file for one-off values.

---

## In Tailwind Play

Tailwind Play runs the JIT engine in the browser. Every keystroke re-runs the compiler — the generated CSS in the bottom bar updates live as classes are added or removed.
