"use cache";

import { cacheLife } from "next/cache";
import { cacheTag } from "next/cache";

export type Post = {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export async function getAllPosts(): Promise<Post[]> {
    cacheLife("hours");
    cacheTag("posts");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
}

export async function getPostById(id: number): Promise<Post | null> {
    cacheLife("hours");
    cacheTag("posts");

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) return null;
    return response.json();
}
