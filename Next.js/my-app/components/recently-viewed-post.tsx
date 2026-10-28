import { cookies } from "next/headers";
import { getPostById } from "@/lib/utils";
import { capitalize } from "@/lib/helpers";

export default async function RecentlyViewedPost() {
    const cookieStore = await cookies();
    const recentlyViewed = cookieStore.get("recentlyViewedPosts")?.value;
    const ids: number[] = recentlyViewed ? JSON.parse(recentlyViewed) : [];

    if (ids.length === 0) return null;

    const posts = await Promise.all(ids.map((id) => getPostById(id)));
    const validPosts = posts.filter(Boolean);

    // simulate delay so Suspense fallback is visible
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-950">Recently Viewed Posts</h2>
            <ul className="space-y-3">
                {validPosts.map((post) => (
                    <li key={post!.id}>
                        <p className="text-lg font-semibold text-zinc-950">
                            {capitalize(post!.title)}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
