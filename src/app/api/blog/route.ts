import { NextResponse } from 'next/server';

export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    featuredImage?: string;
    author?: string;
    categories?: string[];
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = searchParams.get('page') || '1';
        const perPage = searchParams.get('per_page') || '10';
        const category = searchParams.get('category');

        let url = `https://wowmover.com/wp-json/wp/v2/posts?_embed&page=${page}&per_page=${perPage}`;

        if (category) {
            url += `&categories=${category}`;
        }

        const res = await fetch(url, {
            next: { revalidate: 3600 }
        });

        if (!res.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch blog posts' },
                { status: res.status }
            );
        }

        const data = await res.json();
        const totalPages = res.headers.get('x-wp-totalpages') || '1';
        const totalPosts = res.headers.get('x-wp-total') || '0';

        const posts: BlogPost[] = data.map((item: any) => {
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
        });

        console.log("test iff this is wokring");

        return NextResponse.json({
            posts,
            pagination: {
                page: parseInt(page),
                perPage: parseInt(perPage),
                totalPages: parseInt(totalPages),
                totalPosts: parseInt(totalPosts),
            },
        });
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

