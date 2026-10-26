import Link from "next/link";

type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export default async function PostsPage(){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    });
    const posts: Post[] = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 3000));

    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl"> 
                    Posts
                </h1>

                <ul className="space-y-3">
                    {posts.slice(0, 5).map((post) => (
                        <li key={post.id}>
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <Link href={`/post/${post.id}`} className="text-lg font-semibold text-zinc-950 hover:text-zinc-500">
                                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
