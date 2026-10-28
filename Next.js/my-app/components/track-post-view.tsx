"use client";

import { useEffect } from "react";
import { trackPostView } from "@/app/actions";

export default function TrackPostView({ postId }: { postId: number }) {
    useEffect(() => {
        trackPostView(postId);
    }, [postId]);

    return null;
}
