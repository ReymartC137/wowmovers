import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '@/app/api/blog/route';

async function getBlogPosts(
    page: number = 1
): Promise<{ posts: BlogPost[]; pagination: any }> {
    try {
        // Fetch directly from WordPress API for server-side rendering
        // Use cache: 'no-store' to ensure fresh data with force-dynamic
        const res = await fetch(`https://wowmover.com/wp-json/wp/v2/posts?_embed&per_page=10&page=${page}`, {
            cache: 'no-store',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (compatible; Next.js)',
            },
        });

        // Get response text first (can only be read once)
        let responseText = await res.text();

        if (!res.ok) {
            console.error('Failed to fetch blog posts:', res.status, res.statusText);
            console.error('Error response:', responseText.substring(0, 500));
            return { posts: [], pagination: {} };
        }

        // Strip HTML/PHP notices/warnings that WordPress might prepend to JSON
        // Look for the start of JSON array or object
        const jsonStart = responseText.search(/[\[\{]/);
        if (jsonStart > 0) {
            // Found JSON after some HTML/PHP output, extract just the JSON part
            responseText = responseText.substring(jsonStart);
        }

        // Check if response is actually JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            // Even if content-type is wrong, try to parse if it looks like JSON
            if (!responseText.trim().startsWith('[') && !responseText.trim().startsWith('{')) {
                console.error('Expected JSON but got:', contentType);
                console.error('Response preview:', responseText.substring(0, 500));
                return { posts: [], pagination: {} };
            }
        }

        // Try to parse JSON
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('Failed to parse JSON response:', parseError);
            console.error('Response text preview:', responseText.substring(0, 500));
            return { posts: [], pagination: {} };
        }

        // Check if data is an array
        if (!Array.isArray(data)) {
            console.error('Expected array but got:', typeof data, data);
            return { posts: [], pagination: {} };
        }

        if (data.length === 0) {
            console.log('No posts found in API response');
            return { posts: [], pagination: {} };
        }

        const totalPages = res.headers.get('x-wp-totalpages') || '1';
        const totalPosts = res.headers.get('x-wp-total') || '0';

        const posts: BlogPost[] = data
            .filter((item: any) => item && item.id)
            .map((item: any) => {
                const embed = item._embedded || {};
                const featuredMedia = embed['wp:featuredmedia']?.[0];
                const author = embed['author']?.[0];
                // wp:term is an array of arrays: [categories[], tags[]]
                // First array contains categories, second contains tags
                const terms = embed['wp:term'] || [];
                // Get categories from first array (index 0)
                const categoryArray = Array.isArray(terms) && terms.length > 0 ? terms[0] : [];
                const categories = Array.isArray(categoryArray)
                    ? categoryArray.map((cat: any) => cat?.name || cat).filter(Boolean)
                    : [];

                return {
                    id: item.id,
                    slug: item.slug,
                    title: item.title?.rendered || 'Untitled',
                    excerpt: (item.excerpt?.rendered || '').replace(/<[^>]*>?/gm, '').trim(),
                    content: item.content?.rendered || '',
                    date: item.date || new Date().toISOString(),
                    featuredImage: featuredMedia?.source_url,
                    author: author?.name || (author?.code ? undefined : 'Admin'),
                    categories: categories,
                };
            });

        console.log(`Successfully fetched ${posts.length} blog posts out of ${data.length} total`);

        return {
            posts,
            pagination: {
                page: 1,
                perPage: 10,
                totalPages: parseInt(totalPages),
                totalPosts: parseInt(totalPosts),
            },
        };
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        if (error instanceof Error) {
            console.error('Error details:', error.message, error.stack);
        }
        return { posts: [], pagination: {} };
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

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Blog - Moving Tips, Guides & Resources | WowMover',
    description: 'Read our latest blog posts about moving tips, guides, and resources to help make your move easier.',
};

export default async function BlogPage({ searchParams }: { searchParams: any }) {
    const getParam = await searchParams;
    const page = getParam.page;

    const { posts, pagination } = await getBlogPosts(page);

    // Debug: Log posts count (this will show in server console)
    console.log('BlogPage render - posts count:', posts?.length || 0);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#F3FBF6] py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0B2341] mb-6 leading-tight">
                            Moving Blog
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Expert tips, guides, and resources to help make your move easier and more affordable.
                        </p>
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                            <Link href="/" className="hover:text-[#0B2341]">Home</Link>
                            <span>/</span>
                            <span className="text-[#0B2341]">Blog</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {!posts || posts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg mb-4">No blog posts found.</p>
                            <p className="text-sm text-gray-400">Posts count: {posts?.length || 0}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post) => (
                                <article
                                    key={post.id}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                                >
                                    {/* Featured Image */}
                                    {post.featuredImage && (
                                        <Link href={`/blog/${post.slug}`} className="relative h-48 w-full overflow-hidden">
                                            <Image
                                                src={post.featuredImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-300"
                                                unoptimized
                                            />
                                        </Link>
                                    )}

                                    {/* Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        {/* Categories */}
                                        {post.categories && post.categories.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {post.categories.slice(0, 2).map((category, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 text-xs font-semibold text-[#76Dba8] bg-[#F3FBF6] rounded-full"
                                                    >
                                                        {category}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Title */}
                                        <h2 className="text-xl font-bold text-[#0B2341] mb-3 line-clamp-2">
                                            <Link
                                                href={`/blog/${post.slug}`}
                                                className="hover:text-[#76Dba8] transition-colors"
                                            >
                                                {post.title}
                                            </Link>
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta Information */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
                                            {post.author && (
                                                <div className="flex items-center gap-1">
                                                    <User className="h-4 w-4" />
                                                    <span>{post.author}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                <span>{formatDate(post.date)}</span>
                                            </div>
                                        </div>

                                        {/* Read More Link */}
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-[#76Dba8] font-semibold hover:text-[#68c994] transition-colors mt-auto"
                                        >
                                            Read More
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    {pagination && pagination.totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-12">
                            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                                <Link
                                    key={page}
                                    href={`/blog/page=${page}`}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${pagination.page === page
                                        ? 'bg-[#76Dba8] text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {page}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

