import { notFound } from "next/navigation";
import { trackPostView } from "@/app/actions";
import { getPostById } from "@/lib/utils";
import { capitalize } from "@/lib/helpers";
import TrackPostView from "@/components/track-post-view";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function PostPage({ params }: Props) {
    const { id } = await params;

    const post = await getPostById(Number(id));

    if (!post) notFound();

    return (
        <article className="space-y-6">
            <TrackPostView postId={Number(id)} />
            <div className="space-y-4">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                    {capitalize(post.title)}
                </h1>
                <p className="text-lg leading-8 text-zinc-700">{post.body}</p>
            </div>
        </article>
    );
}
