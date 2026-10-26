type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

type Props = {
    params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
    const { id } = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store",
    });
    const post: Post = await response.json();

    return (
        <article className="space-y-6">
            <div className="space-y-4">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </h1>
                <p className="text-lg leading-8 text-zinc-700">{post.body}</p>
            </div>
        </article>
    );
}
