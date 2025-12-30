export type Post = {
    id: number;
    slug: string;
    title: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    _embedded?: {
        "wp:featuredmedia"?: { source_url: string }[];
        "wp:term"?: { name: string }[][];
    };
};

export async function fetchPosts(page = 1): Promise<Post[]> {

    const res = await fetch(`https://wowmover.com/wp-json/wp/v2/posts?page=${page}&_embed`);

    if (!res.ok) {
        throw new Error('Failed to fetch post');
    }

    const posts: Post[] = await res.json();

    return posts;
}

