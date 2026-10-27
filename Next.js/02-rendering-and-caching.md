# Next.js — Rendering, Caching & Builds

---

## Rendering Strategies

Next.js 15+ defaults to **static rendering** for everything. Each route is analysed at build time and assigned a rendering strategy automatically — unless explicitly overridden.

---

### Static Rendering (default)

The page is rendered **once at build time** and the HTML is cached. Every user gets the same pre-built HTML — extremely fast, no server work per request.

```ts
// no fetch, no async — always static
export default function AboutPage() {
    return <h1>About</h1>;
}
```

Also static when fetch is cached:
```ts
const response = await fetch("https://api.example.com/data");
// no cache option = defaults to cached = static
```

Best for — marketing pages, blog posts that don't change often, documentation.

---

### Dynamic Rendering

The page is rendered **on the server at request time** — fresh for every user. Triggered automatically when:

- `cache: "no-store"` is used on a fetch
- `cookies()` or `headers()` are read
- Search params are accessed
- `export const dynamic = "force-dynamic"` is set

```ts
// app/post/page.tsx — current project
const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",  // ← this makes the route dynamic
});
```

Best for — dashboards, user-specific data, real-time content.

---

### Static + Dynamic in the Same App

Both can coexist — different routes use different strategies:

```
/ (home)           → static  — no fetch, renders once at build
/post              → dynamic — cache: "no-store" on fetch
/post/[id]         → dynamic — cache: "no-store" on fetch
/about             → static  — no data fetching
```

---

## Caching Layers

Next.js has multiple layers of caching that work independently.

---

### 1. Request Memoization

If the same `fetch()` URL is called multiple times in a single render cycle (e.g. in layout + page), Next.js deduplicates it — only one actual network request is made.

```ts
// called in layout.tsx AND page.tsx for the same render
await fetch("https://api.example.com/user/1");
// → only ONE real request sent
```

Automatic. No configuration needed. Scoped to a single request lifecycle.

---

### 2. Data Cache

The result of `fetch()` is stored in a **persistent server-side cache** across requests and deployments.

```ts
// cached indefinitely (default)
await fetch("https://api.example.com/posts");

// cached for 60 seconds, then revalidated
await fetch("https://api.example.com/posts", {
    next: { revalidate: 60 },
});

// never cached — always fresh
await fetch("https://api.example.com/posts", {
    cache: "no-store",
});
```

---

### 3. Full Route Cache

Stores the **rendered HTML and RSC payload** of static routes on the server. Users get pre-built pages without any server computation.

- Static routes → cached at build time
- Dynamic routes → not cached (rendered per request)
- Can be invalidated with `revalidatePath()` or `revalidateTag()`

---

### 4. Router Cache (Client-side)

The browser caches previously visited routes in memory. Navigating back to a visited page is instant — no network request.

- Automatically populated as user navigates
- Cleared on full page reload
- Duration: 30 seconds for dynamic routes, 5 minutes for static

---

## Revalidation

Revalidation updates the cache without a full redeploy.

### Time-based
```ts
// refetch and update cache every 60 seconds
const response = await fetch("https://api.example.com/posts", {
    next: { revalidate: 60 },
});
```

Or at route level:
```ts
// app/post/page.tsx
export const revalidate = 60; // revalidate the whole route every 60s
```

### On-demand
Manually invalidate cache from a Server Action or Route Handler:

```ts
import { revalidatePath, revalidateTag } from "next/cache";

// invalidate a specific route
revalidatePath("/post");

// invalidate by tag (fetch must be tagged first)
revalidateTag("posts");
```

Tagging a fetch:
```ts
await fetch("https://api.example.com/posts", {
    next: { tags: ["posts"] },
});
```

---

## Static Generation with Dynamic Params — `generateStaticParams`

For dynamic routes like `/post/[id]`, Next.js can pre-render a set of known pages at build time instead of rendering them on demand:

```ts
// app/post/[id]/page.tsx
export async function generateStaticParams() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return posts.slice(0, 5).map((post: { id: number }) => ({
        id: String(post.id),
    }));
}
```

This pre-builds `/post/1` through `/post/5` at build time. Any other ID is rendered dynamically on first request.

---

## Development vs Production Build

### Development (`npm run dev`)

```bash
npm run dev
```

- Uses **Turbopack** (or Webpack) for fast incremental compilation
- Every route is rendered fresh on each request — no caching
- Source maps enabled — errors point to original code
- No optimisation — larger bundle sizes, slower than production
- Hot Module Replacement (HMR) — changes reflect instantly without full reload
- `console.log` with `browserToTerminal: true` in `next.config.ts` pipes browser logs to the terminal

---

### Production Build (`npm run build` + `npm start`)

```bash
npm run build   # compiles and analyses the app
npm start       # starts the production server
```

**`npm run build` output shows:**

```
Route (app)                    Size    First Load JS
┌ ○ /                          2.5 kB  98.2 kB
├ ○ /about                     1.2 kB  97.1 kB
├ ƒ /post                      3.1 kB  99.1 kB
└ ƒ /post/[id]                 2.8 kB  98.8 kB

○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand
```

| Symbol | Meaning |
|---|---|
| `○` | Static — pre-rendered at build time |
| `ƒ` | Dynamic — rendered on server per request |
| `◐` | Partial prerender — static shell + dynamic parts |

- All static routes are pre-built to HTML files
- CSS and JS are minified and split into chunks
- Images are optimised
- Tree shaking removes unused code
- No HMR, no source maps in production

---

### Key Differences

| | Development | Production |
|---|---|---|
| Command | `npm run dev` | `npm run build && npm start` |
| Caching | Disabled | Fully active |
| Rendering | All dynamic | Mixed — static where possible |
| Speed | Slower (DX focus) | Faster (optimised) |
| Bundle size | Large | Minified and split |
| Errors | Detailed with source maps | Generic (no source exposure) |
| HMR | Yes | No |

---

## `next.config.ts` — Relevant Options

```ts
const nextConfig: NextConfig = {
    logging: {
        browserToTerminal: true, // pipe browser console to terminal in dev
    },
};
```

`browserToTerminal` is dev-only — in production there's no terminal to pipe to.

---

## Notes

- In development, caching is skipped entirely — `cache: "no-store"` and default cached fetches behave the same
- Always run `npm run build` before deploying — it catches type errors and shows the rendering strategy for every route
- `revalidate = 0` is equivalent to `cache: "no-store"` at route level
- Prisma queries are always dynamic — there's no built-in caching layer for them, unlike `fetch()`. Use `unstable_cache` from `next/cache` to cache Prisma results if needed
