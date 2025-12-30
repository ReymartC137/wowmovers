import React from "react";
import BlogList from "@/components/blog/BlogList";
import { fetchPosts } from "@/lib/wordpress";

export default async function Blog() {

    const posts = await fetchPosts();

    return <BlogList posts={posts} />
}