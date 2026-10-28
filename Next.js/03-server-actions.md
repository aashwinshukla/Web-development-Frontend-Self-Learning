# Next.js — Server Actions

---

## What are Server Actions?

Server Actions are **async functions that run on the server** — called directly from components without needing to manually create an API route. They're the standard way to handle mutations (create, update, delete, set cookies, etc.) in Next.js App Router.

Marked with the `"use server"` directive.

---

## Defining a Server Action

### Inline — inside a Server Component

```tsx
// app/post/page.tsx
export default function Page() {

    async function handleSubmit(formData: FormData) {
        "use server";
        const title = formData.get("title");
        // runs on server — can use Prisma, cookies, fs, etc.
    }

    return (
        <form action={handleSubmit}>
            <input name="title" />
            <button type="submit">Submit</button>
        </form>
    );
}
```

---

### Separate file — `actions.ts`

The cleaner approach for reusable actions. `"use server"` at the top of the file marks every export as a Server Action:

```ts
// app/actions.ts  (or lib/actions.ts)
"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function setRecentlyViewed(postId: number) {
    const cookieStore = await cookies();
    const existing = cookieStore.get("recentlyViewedPosts")?.value;
    const ids: number[] = existing ? JSON.parse(existing) : [];

    // add to front, remove duplicates, keep last 5
    const updated = [postId, ...ids.filter((id) => id !== postId)].slice(0, 5);

    cookieStore.set("recentlyViewedPosts", JSON.stringify(updated), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
    });

    revalidatePath("/post"); // refresh the post list so recently viewed updates
}
```

---

## Calling a Server Action from a Component

### From a Server Component — via form action

```tsx
import { setRecentlyViewed } from "@/app/actions";

export default function PostPage({ post }) {
    return (
        <form action={setRecentlyViewed.bind(null, post.id)}>
            <button type="submit">Mark as viewed</button>
        </form>
    );
}
```

`.bind(null, post.id)` pre-fills the first argument since form actions receive `FormData` by default.

---

### From a Client Component — called directly

```tsx
"use client";

import { setRecentlyViewed } from "@/app/actions";

export default function ViewButton({ postId }: { postId: number }) {
    return (
        <button onClick={() => setRecentlyViewed(postId)}>
            Mark as viewed
        </button>
    );
}
```

Server Actions can be imported and called from Client Components — Next.js handles the server round-trip automatically. No API route, no fetch needed.

---

### From a Client Component — with `useTransition`

For better UX — track pending state while the action runs:

```tsx
"use client";

import { useTransition } from "react";
import { setRecentlyViewed } from "@/app/actions";

export default function ViewButton({ postId }: { postId: number }) {
    const [isPending, startTransition] = useTransition();

    return (
        <button
            onClick={() => startTransition(() => setRecentlyViewed(postId))}
            disabled={isPending}
        >
            {isPending ? "Saving..." : "Mark as viewed"}
        </button>
    );
}
```

---

## In This Project — Setting the Cookie

When a post is visited at `/post/[id]`, the post ID should be written into the `recentlyViewedPosts` cookie. This is a mutation — a Server Action is the right tool.

```ts
// app/actions.ts
"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function trackPostView(postId: number) {
    const cookieStore = await cookies();
    const existing = cookieStore.get("recentlyViewedPosts")?.value;
    const ids: number[] = existing ? JSON.parse(existing) : [];

    const updated = [postId, ...ids.filter((id) => id !== postId)].slice(0, 5);

    cookieStore.set("recentlyViewedPosts", JSON.stringify(updated), {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    revalidatePath("/post");
}
```

Called in `post/[id]/page.tsx`:

```tsx
// app/post/[id]/page.tsx
import { trackPostView } from "@/app/actions";

export default async function PostPage({ params }) {
    const { id } = await params;
    await trackPostView(Number(id));

    // rest of the page...
}
```

Now every time a post is viewed, its ID is added to the cookie and `/post` is revalidated — so the recently viewed list updates on the next visit.

---

## What Server Actions Can Do

- Read and write **cookies** (`next/headers`)
- Read **headers** (`next/headers`)
- Query and mutate the **database** via Prisma
- Call **revalidatePath** / **revalidateTag** to bust the cache
- Redirect with **redirect()** from `next/navigation`
- Access the **file system** (`fs`)
- Send **emails**, call external APIs

All of this without exposing an API endpoint — the action runs server-side and the client never sees the implementation.

---

## Server Actions vs API Routes

| | Server Actions | API Routes (`app/api/`) |
|---|---|---|
| Definition | `"use server"` function | `route.ts` with `GET`/`POST` handlers |
| Calling | Import and call directly | `fetch("/api/...")` |
| Form support | Native — `<form action={fn}>` | Manual — handle submit with JS |
| Type safety | Full — shared types across client/server | Manual — parse request body |
| Best for | Mutations from components | External clients, webhooks, public APIs |

---

## Key Points

- `"use server"` at the top of a file → every export is a Server Action
- `"use server"` inside a function body → only that function is a Server Action
- Server Actions always run on the server — the code is never sent to the browser
- Can be called from both Server and Client Components
- Always `async` — they return a Promise
- `revalidatePath` / `revalidateTag` inside an action refreshes the relevant cached pages after the mutation
