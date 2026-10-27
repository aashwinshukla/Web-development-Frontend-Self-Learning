import { cookies } from 'next/headers';

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export default async function RecentlyViewedPost(){
    const cookiesStore = await cookies();
    const recentlyViewed = cookiesStore.get("recentlyViewedPosts")?.value;
    const ids: number[] = recentlyViewed ? JSON.parse(recentlyViewed) : [];

    if (ids.length === 0) return null;

    const posts = await Promise.all(
        ids.map((id) =>
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                cache: "no-store",
            }).then((res) => res.json() as Promise<Post>)
        )
    );

    // simulate delay so Suspense fallback is visible
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-zinc-950">Recently Viewed Posts</h2>
            <ul className="space-y-3">
                {posts.map((post) => (
                    <li key={post.id}>
                        <p className="text-lg font-semibold text-zinc-950">
                            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}