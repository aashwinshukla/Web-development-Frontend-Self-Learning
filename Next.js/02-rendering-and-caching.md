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

---

## Partial Rendering with Suspense

### The Problem Without Suspense

Without Suspense, the entire page waits for the slowest data fetch before anything is shown to the user. If one section takes 5 seconds, the whole page is blank for 5 seconds.

```tsx
// everything blocks until ALL data is ready — bad UX
export default async function PostsPage() {
    const posts = await fetchPosts();           // 500ms
    const recentlyViewed = await fetchRecent(); // 5000ms
    // user sees nothing for 5.5 seconds
}
```

---

### Suspense — Stream Parts Independently

`<Suspense>` lets slow parts of the page load independently. The fast parts render immediately, the slow parts show a fallback until they're ready — all in a single page load, no client JS needed.

```tsx
import { Suspense } from "react";
import RecentlyViewedPost from "@/components/recently-viewed-post";

export default async function PostsPage() {
    const posts = await fetchPosts(); // fast — renders immediately

    return (
        <div>
            {/* renders right away */}
            <ul>
                {posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>

            {/* shows fallback instantly, streams in after 5s */}
            <Suspense fallback={<p>Loading recently viewed posts...</p>}>
                <RecentlyViewedPost />
            </Suspense>
        </div>
    );
}
```

The page HTML is **streamed** from the server — the browser receives and paints the fast parts first, then the slow parts stream in as they resolve.

---

### How it works in this project

```
/post page loads
    ↓
Posts list renders immediately (fast fetch)
    ↓
<Suspense> boundary mounts — shows "Loading recently viewed posts..."
    ↓
RecentlyViewedPost component resolves after 5s (reads cookie + fetches posts)
    ↓
Fallback replaced with the actual recently viewed list
```

`recently-viewed-post.tsx` is an async Server Component. The delay lives inside it — not in the parent — so only that section is held back, not the whole page.

---

### Suspense Fallback

The `fallback` prop is what shows while the component is loading. Can be anything — text, a spinner, a skeleton:

```tsx
// simple text
<Suspense fallback={<p>Loading...</p>}>

// spinner
<Suspense fallback={<div className="animate-spin h-5 w-5 border-2 border-zinc-400 rounded-full" />}>

// skeleton
<Suspense fallback={<div className="h-10 w-full rounded bg-zinc-200 animate-pulse" />}>
```

---

### `loading.tsx` — Route-level Suspense

`loading.tsx` placed inside a route folder is Next.js's built-in Suspense wrapper for the entire route. It automatically wraps the page in a `<Suspense>` with the loading UI as the fallback.

```
app/
└── post/
    ├── page.tsx
    └── loading.tsx   ← shown while page.tsx is loading
```

```tsx
// app/post/loading.tsx
export default function Loading() {
    return <p className="text-zinc-500">Loading posts...</p>;
}
```

- Triggered when navigating to `/post` — shows instantly while `page.tsx` fetches data
- Does NOT affect nested `<Suspense>` boundaries inside the page — those work independently

---

### Partial Prerendering (PPR) — `cacheComponents` + `partialPrefetching`

Partial Prerendering is a Next.js 16 experimental feature that combines static and dynamic rendering **within the same route**:

- The **static shell** (layout, non-dynamic content) is pre-rendered at build time and served instantly from cache
- The **dynamic holes** (`<Suspense>` boundaries with dynamic content) are streamed in at request time

```tsx
// next.config.ts
const nextConfig = {
    cacheComponents: true,      // enables the static shell caching
    partialPrefetching: true,   // prefetches the static shell on hover
};
```

```tsx
// the static shell — pre-rendered at build
<div>
    <h1>Posts</h1>       {/* static — in the shell */}
    <ul>...</ul>         {/* static — in the shell */}

    {/* dynamic hole — streamed at request time */}
    <Suspense fallback={<p>Loading recently viewed...</p>}>
        <RecentlyViewedPost />   {/* reads cookies = dynamic */}
    </Suspense>
</div>
```

The user gets the static shell **instantly** (from cache), then the dynamic parts stream in. Fastest possible experience — no waiting for the whole page.

### `export const instant = false`

When PPR is enabled, Next.js expects every dynamic access (`cookies()`, `headers()`, uncached `fetch`) to be inside a `<Suspense>` boundary. If it's not — the build fails.

`export const instant = false` opts the route out of this requirement — tells Next.js it's fine to block the whole route on dynamic data, like the old behaviour:

```ts
// app/post/page.tsx
export const instant = false;
```

Use this as a temporary escape hatch when migrating. For best performance, wrap dynamic parts in `<Suspense>` instead.

---

## Summary — Rendering Decision Tree

```
Is the route reading cookies / headers / uncached fetch?
    ├── No  → Static — pre-rendered at build, served from cache
    └── Yes → Is it inside <Suspense>?
                  ├── Yes → Partial Prerender — static shell + dynamic stream
                  └── No  → export const instant = false → fully dynamic
```

---

## Cache Components (`"use cache"`)

`"use cache"` is a Next.js 16 directive — similar to `"use client"` and `"use server"` but for caching. It marks a function or component so its output is **cached on the server** and reused across requests.

Requires `cacheComponents: true` in `next.config.ts` to be enabled.

---

### On a function

```ts
"use cache";

export async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}
```

The first time `getPosts()` is called, it fetches and caches the result. Every subsequent call returns the cached value — no network request made.

---

### On a component

```tsx
"use cache";

export default async function PostsList() {
    const posts = await getPosts();

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
```

The entire rendered output of the component is cached. Next.js stores the React Server Component payload and reuses it across requests.

---

### Cache lifetime — `cacheLife`

By default `"use cache"` caches indefinitely. Control the lifetime with `cacheLife`:

```ts
"use cache";
import { cacheLife } from "next/cache";

export async function getPosts() {
    cacheLife("hours"); // revalidate after a few hours

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}
```

Built-in profiles:

| Profile | Revalidates after |
|---|---|
| `"seconds"` | A few seconds |
| `"minutes"` | A few minutes |
| `"hours"` | A few hours |
| `"days"` | A few days |
| `"weeks"` | A few weeks |
| `"max"` | As long as possible |

---

### Cache tags — `cacheTag`

Tag a cached function so it can be manually invalidated later:

```ts
"use cache";
import { cacheTag } from "next/cache";

export async function getPosts() {
    cacheTag("posts"); // tag this cache entry

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}
```

Then invalidate from a Server Action:

```ts
"use server";
import { revalidateTag } from "next/cache";

export async function invalidatePosts() {
    revalidateTag("posts"); // clears all cache entries tagged "posts"
}
```

---

### `"use cache"` vs `cache: "no-store"` vs default fetch cache

| | Behaviour |
|---|---|
| `"use cache"` on function/component | Caches the result on the server, reused across requests |
| `fetch(url)` (default) | Cached by Next.js data cache |
| `fetch(url, { cache: "no-store" })` | Never cached — always fresh |
| `fetch(url, { next: { revalidate: 60 } })` | Cached, revalidated every 60 seconds |

---

### In this project

Currently `post/page.tsx` uses `cache: "no-store"` because it reads cookies — cookies are per-request so the page must be dynamic. `"use cache"` wouldn't apply here.

But the posts fetch itself (the list) could be cached since it doesn't change often:

```ts
// lib/posts.ts
"use cache";
import { cacheLife } from "next/cache";

export async function getAllPosts() {
    cacheLife("hours");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}
```

Then in `post/page.tsx` — the cookie read makes the route dynamic, but the posts data itself comes from cache rather than a fresh fetch every request.

---

### Key points

- `"use cache"` is placed at the **top of the file** (applies to all exports) or at the **top of a function body** (applies to that function only)
- Works on both async functions and async Server Components
- Cannot be used in Client Components (`"use client"` files)
- Replaces the need for `unstable_cache` from older Next.js versions
- Requires `cacheComponents: true` in `next.config.ts` — that's the only reason that config option exists
