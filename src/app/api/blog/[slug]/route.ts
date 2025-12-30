import { NextResponse } from 'next/server';
import { BlogPost } from '../route';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        
        const res = await fetch(
            `https://wowmover.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            return NextResponse.json(
                { error: 'Blog post not found' },
                { status: 404 }
            );
        }

        const data = await res.json();

        if (!data || data.length === 0) {
            return NextResponse.json(
                { error: 'Blog post not found' },
                { status: 404 }
            );
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

        const post: BlogPost = {
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

        return NextResponse.json(post);
    } catch (error) {
        console.error('Error fetching blog post:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

