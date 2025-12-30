import React from "react";
import { Post } from "@/lib/wordpress";

interface BlogListProps {
    posts: Post[];
}


const BlogList: React.FC<BlogListProps> = ({ posts }) => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => {
                    const image =
                        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
                        "https://via.placeholder.com/600x400";
                    const category =
                        post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Uncategorized";
                    const date = new Date(post.date).toLocaleDateString();

                    return (
                        <article
                            key={post.id}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
                        >
                            <img
                                src={image}
                                alt={post.title.rendered}
                                className="h-48 w-full object-cover"
                            />

                            <div className="p-6 flex flex-col h-full">
                                <span className="text-sm text-indigo-600 font-medium mb-2">
                                    {category}
                                </span>

                                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                                    {post.title.rendered}
                                </h2>

                                <p
                                    className="text-gray-600 text-sm mb-6 line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                />

                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-xs text-gray-500">{date}</span>
                                    <a
                                        href={`/blog/${post.slug}`}
                                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                                    >
                                        Read more →
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    )
}


export default BlogList;