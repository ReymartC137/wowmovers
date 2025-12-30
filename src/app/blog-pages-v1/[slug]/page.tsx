import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { BlogPost } from '@/app/api/blog/route';

async function getBlogPost(slug: string): Promise<BlogPost | null> {
    try {
        // Fetch directly from WordPress API for server-side rendering
        const res = await fetch(
            `https://wowmover.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
            { next: { revalidate: 3600 } }
        );
        
        if (!res.ok) {
            return null;
        }
        
        const data = await res.json();
        if (!data || data.length === 0) {
            return null;
        }
        
        const item = data[0];
        const embedded = item._embedded || {};
        const featuredMedia = embedded['wp:featuredmedia']?.[0];
        const author = embedded['author']?.[0];
        // wp:term is an array of arrays: [categories[], tags[]]
        // First array contains categories, second contains tags
        const terms = embedded['wp:term'] || [];
        const categories = (terms[0] || []).filter((term: any) => 
            term?.taxonomy === 'category' || (!term?.taxonomy && term?.name)
        );
        
        return {
            id: item.id,
            slug: item.slug,
            title: item.title.rendered,
            excerpt: item.excerpt.rendered.replace(/<[^>]*>?/gm, '').trim(),
            content: item.content.rendered,
            date: item.date,
            featuredImage: featuredMedia?.source_url,
            author: author?.name || (author?.code ? undefined : 'Admin'),
            categories: categories.map((cat: any) => cat?.name || cat).filter(Boolean),
        };
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return null;
    }
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    
    if (!post) {
        return { title: 'Blog Post Not Found' };
    }
    
    return {
        title: `${post.title} | WowMover Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Featured Image */}
            {post.featuredImage && (
                <section className="relative h-[400px] md:h-[500px] w-full">
                    <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-end">
                        <div className="mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8 pb-12">
                            <div className="text-white">
                                {post.categories && post.categories.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {post.categories.map((category, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 text-sm font-semibold bg-[#76Dba8] rounded-full"
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                    {post.title}
                                </h1>
                                <div className="flex items-center gap-4 text-sm">
                                    {post.author && (
                                        <div className="flex items-center gap-2">
                                            <User className="h-4 w-4" />
                                            <span>{post.author}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{formatDate(post.date)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Breadcrumb */}
            <section className="bg-gray-50 py-4 border-b border-gray-200">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-[#0B2341]">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-[#0B2341]">Blog</Link>
                        <span>/</span>
                        <span className="text-[#0B2341] line-clamp-1">{post.title}</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16 bg-white">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Title (if no featured image) */}
                    {!post.featuredImage && (
                        <div className="mb-8">
                            {post.categories && post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.categories.map((category, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm font-semibold text-[#76Dba8] bg-[#F3FBF6] rounded-full"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <h1 className="text-4xl md:text-5xl font-bold text-[#0B2341] mb-6">
                                {post.title}
                            </h1>
                            <div className="flex items-center gap-4 text-gray-600 mb-8">
                                {post.author && (
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        <span>{post.author}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    <span>{formatDate(post.date)}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Blog Content */}
                    <div
                        className="prose prose-lg max-w-none text-gray-700 
                            prose-headings:text-[#0B2341] prose-headings:font-bold 
                            prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12
                            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8
                            prose-p:mb-6 prose-p:leading-relaxed
                            prose-a:text-[#76Dba8] prose-a:no-underline hover:prose-a:underline
                            prose-ul:list-none prose-ul:pl-0
                            [&_li]:relative [&_li]:pl-8 [&_li]:mb-3
                            [&_li::before]:content-[''] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:top-1.5 
                            [&_li::before]:h-5 [&_li::before]:w-5 
                            [&_li::before]:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM3NkRiYTgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaXJjbGUtY2hlY2siPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjEwIi8+PHBhdGggZD0ibTkgMTIgMiAyIDQtNCIvPjwvc3ZnPg==')] 
                            [&_li::before]:bg-no-repeat [&_li::before]:bg-contain
                            prose-table:w-full prose-table:border-collapse prose-table:border prose-table:border-gray-200 prose-table:my-8
                            prose-thead:bg-gray-50
                            prose-th:border prose-th:border-gray-200 prose-th:p-4 prose-th:text-left prose-th:font-bold prose-th:text-[#0B2341]
                            prose-td:border prose-td:border-gray-200 prose-td:p-4 prose-td:text-gray-600
                            prose-img:rounded-lg prose-img:shadow-lg"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </section>

            {/* Back to Blog Link */}
            <section className="py-8 bg-gray-50 border-t border-gray-200">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[#0B2341] font-semibold hover:text-[#76Dba8] transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>
                </div>
            </section>
        </div>
    );
}

