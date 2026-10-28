"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function trackPostView(postId: number) {
    const cookieStore = await cookies();
    const existing = cookieStore.get("recentlyViewedPosts")?.value;
    const ids: number[] = existing ? JSON.parse(existing) : [];

    // add to front, remove duplicates, keep last 5
    const updated = [postId, ...ids.filter((id) => id !== postId)].slice(0, 5);

    cookieStore.set("recentlyViewedPosts", JSON.stringify(updated), {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
    });

    revalidatePath("/post");
}

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const body = formData.get("body") as string;

    if (!title?.trim() || !body?.trim()) return;

    // with Prisma this would be:
    // await prisma.post.create({ data: { title, body, userId: 1 } });

    await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body, userId: 1 }),
    });

    revalidatePath("/post");
}
