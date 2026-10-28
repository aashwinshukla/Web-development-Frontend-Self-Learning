import Link from "next/link";
import { Suspense } from "react";
import RecentlyViewedPost from "@/components/recently-viewed-post";
import { getAllPosts } from "@/lib/utils";
import { capitalize } from "@/lib/helpers";
import { createPost } from "@/app/actions";

export const instant = false;

export default async function PostsPage() {
    const posts = await getAllPosts();

    return (
        <div className="space-y-8">

            {/* ── posts list ── */}
            <section className="space-y-4">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                    Posts
                </h1>

                <ul className="space-y-3">
                    {posts.slice(0, 5).map((post) => (
                        <li key={post.id}>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Link
                                    href={`/post/${post.id}`}
                                    className="text-lg font-semibold text-zinc-950 hover:text-zinc-500"
                                >
                                    {capitalize(post.title)}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── create post form ── */}
            <section className="space-y-4 border-t border-zinc-200 pt-6">
                <h2 className="text-2xl font-semibold text-zinc-950">Create a Post</h2>
                <form action={createPost} className="space-y-3">
                    <div className="space-y-1">
                        <label htmlFor="title" className="text-sm font-medium text-zinc-700">
                            Title
                        </label>
                        <input
                            id="title"
                            name="title"
                            type="text"
                            required
                            placeholder="Post title"
                            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-950 outline-none focus:border-zinc-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <label htmlFor="body" className="text-sm font-medium text-zinc-700">
                            Body
                        </label>
                        <textarea
                            id="body"
                            name="body"
                            required
                            rows={4}
                            placeholder="Write something..."
                            className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm text-zinc-950 outline-none focus:border-zinc-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
                    >
                        Publish
                    </button>
                </form>
            </section>

            {/* ── recently viewed ── */}
            <Suspense fallback={<p className="text-zinc-500">Loading recently viewed posts...</p>}>
                <RecentlyViewedPost />
            </Suspense>

        </div>
    );
}
