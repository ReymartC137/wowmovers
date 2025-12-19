import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Check } from 'lucide-react';

// Types for the WP API response
interface WPPost {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
    };
}

async function getPostData(slug: string): Promise<WPPost | null> {
    try {
        const res = await fetch(
            `https://wowmover.com/wp-json/wp/v2/posts/?slug=${slug}&_embed`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) {
            console.error(`Failed to fetch post: ${slug}`);
            return null;
        }

        const posts = await res.json();
        return posts.length > 0 ? posts[0] : null;
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
}

export async function generateMetadata() {
    const post = await getPostData('cut-cost-for-home-relocation');

    if (!post) {
        return {
            title: 'Page Not Found',
        };
    }

    return {
        title: `${post.title.rendered} - WowMover`,
        description: post.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
    };
}

export default async function CutCostPage() {
    const mainSlug = 'cut-cost-for-home-relocation';
    const relatedSlugs = [
        'things-to-consider-when-using-diy-storage-for-your-upcoming-move',
        'storage-101-the-ultimate-guide-to-storage-unit',
        'pest-prevention-tips-for-new-renters',
        'how-inflation-has-affected-moving-costs-in-the-united-states',
        'best-storage-options-for-moving-in-the-us',
        'how-to-introduce-your-pets-to-your-new-home-after-moving',
    ];

    // Fetch main post
    const post = await getPostData(mainSlug);

    if (!post) {
        notFound();
    }

    // Fetch related posts in parallel
    const relatedPostsPromises = relatedSlugs.map(slug => getPostData(slug));
    const relatedPostsResults = await Promise.all(relatedPostsPromises);
    const relatedPosts = relatedPostsResults.filter((p): p is WPPost => p !== null);

    // Debug: Log content to check for embedded buttons
    console.log('Post Content:', post.content.rendered);

   
    let cleanedContent = post.content.rendered;
    const relatedArticlesIndex = cleanedContent.indexOf('<p><strong>Related Articles:</strong></p>');
    if (relatedArticlesIndex !== -1) {
        cleanedContent = cleanedContent.substring(0, relatedArticlesIndex);
    }

   
    const buttonToRemove = '<div class="wp-block-image"><figure class="aligncenter size-full"><a href="https://wowmover.com/get-a-free-quote/"><img decoding="async" width="258" height="66" src="https://wowmover.com/wp-content/uploads/2021/06/button_find-a-mover-2.png" alt="Find A Mover" class="wp-image-13206 skip-lazy" /></a></figure></div>';
    cleanedContent = cleanedContent.replace(buttonToRemove, '');

    
    
    const spacerToRemove = '<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>';
    cleanedContent = cleanedContent.replace(spacerToRemove, '');

    // Remove duplicate specific paragraph about "all of this however"
    const duplicateParagraph = '<p>All of this, however, is only achievable if you select the appropriate moving company that provides excellent service at a reasonable cost. It would be ideal if you completed your homework on each mover&#8217;s trustworthiness before employing them. Because no two movers charge the same, you should receive quotes from at least three different companies. You may choose the proper mover who meets your budget and relocating criteria after reviewing their company profiles and pricing estimates and deciding who gives the greatest services.</p>';
   
    while (cleanedContent.includes(duplicateParagraph + duplicateParagraph)) {
        cleanedContent = cleanedContent.replace(duplicateParagraph + duplicateParagraph, duplicateParagraph);
    }
   
    const parts = cleanedContent.split(duplicateParagraph);
    if (parts.length > 2) {
        cleanedContent = parts[0] + duplicateParagraph + parts.slice(2).join(''); // This removes the middle parts... wait.
        // parts[0] + P + parts[1] + P + parts[2]
        // joining parts[0] + P + parts[1] + parts[2] ... removes the second P.
        cleanedContent = parts.shift() + duplicateParagraph + parts.join('');
    }

    // Split content to inject sections
    // This is a naive split based on paragraphs to try and match the visual flow
    // In a real scenario, we might want more robust parsing
    const contentParts = cleanedContent.split('</p>');

    // Re-assemble content with injected blocks
    // Part 1: Intro text (first 2 paragraphs)
    const introContent = contentParts.slice(0, 2).join('</p>') + '</p>';

    // Part 2: Middle content (next few paragraphs)
    const middleContent = contentParts.slice(2, 6).join('</p>') + '</p>';

    // Part 3: Remaining content
    const remainingContent = contentParts.slice(6).join('</p>');


    return (
        <div className="min-h-screen bg-white font-sans text-[#0B2341]">
            <main>
                {/* Custom Split Hero Section - Contained Card Layout */}
                <div className="w-full bg-[#F5F5F7] py-12 lg:py-20">
                    <div className="container mx-auto px-4 lg:px-0 max-w-6xl">
                        <div className="relative w-full bg-[#0B2341] rounded-3xl overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[500px] shadow-2xl">

                            {/* Left Image Side (60%) */}
                            <div className="lg:w-[60%] relative h-[300px] lg:h-full">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2021/10/How-To-Cut-Cost-for-Home-Relocation-1.jpg"
                                    alt="How To Cut Cost for Home Relocation"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Green Curve Divider */}
                                <div className="absolute top-0 right-[-1px] h-full w-[15%] z-20 hidden lg:block">
                                    <svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M100 0 V100 H0 C50 70 50 30 0 0 H100Z" fill="#0B2341" />
                                        {/* Add a green stroke/border effect if needed, or a separate path for the green line */}
                                        <path d="M0 0 C 50 30 50 70 0 100" stroke="#10B981" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
                                    </svg>
                                </div>
                                {/* Alternative Green Curve implementation to match the reference more closely */}
                                <div className="absolute top-0 right-0 h-full w-16 z-20 hidden lg:block pointer-events-none">
                                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
                                        <path d="M100 0 L100 100 L0 100 C 50 75 50 25 0 0 Z" fill="#0B2341" />
                                        <path d="M0 0 C 50 25 50 75 0 100" stroke="#34D399" strokeWidth="3" fill="none" />
                                    </svg>
                                </div>
                            </div>

                            {/* Right Content Side (40%) */}
                            <div className="lg:w-[40%] bg-[#0B2341] flex flex-col justify-center p-8 lg:pl-8 lg:pr-16 text-white relative z-30">
                                <h1
                                    className="text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />

                                <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
                                    <span>June 3, 2024</span>
                                    <div className="h-px bg-gray-600 w-full max-w-[100px]"></div>
                                </div>

                                {/* Button removed as requested */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 pb-12 lg:pb-16 max-w-5xl">

                    {/* Intro Content */}
                    <div className="prose prose-lg max-w-none mb-12
                        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base
                        prose-headings:text-[#0B2341]
                    ">
                        <div dangerouslySetInnerHTML={{ __html: introContent }} />
                    </div>



                    {/* Middle Content (Image usually here in WP content) */}
                    <div className="prose prose-lg max-w-none mb-12
                        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base
                        prose-img:mx-auto prose-img:rounded-none prose-img:shadow-none
                    ">
                        <div dangerouslySetInnerHTML={{ __html: middleContent }} />
                    </div>

                    {/* Also Read Block */}
                    <div className="bg-[#F0FDF4] p-4 rounded-lg mb-12 border-l-4 border-[#76D69F]">
                        <p className="font-bold text-[#0B2341] m-0 flex gap-2">
                            Also Read: <span className="text-[#76D69F] font-normal">How Inflation Has Affected Moving Costs in the United States</span>
                        </p>
                    </div>

                    {/* Remaining Content */}
                    <div className="prose prose-lg max-w-none mb-16
                        prose-p:text-gray-600 prose-p:leading-relaxed prose-p:text-base
                    ">
                        <div dangerouslySetInnerHTML={{ __html: remainingContent.replace('Are You Ready To Move?</h3>', '') }} />
                    </div>

                    {/* Give us a call CTA */}
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-[#0B2341] mb-8">Are You Ready To Move?</h3>
                        <a href="tel:8448581971" className="inline-block bg-[#10B981] hover:bg-[#059669] text-white font-bold py-4 px-16 rounded-md text-xl transition-colors shadow-lg shadow-green-200">
                            Find A Mover
                        </a>
                    </div>

                    {/* Related Articles Grid */}
                    <div>
                        <h3 className="text-lg font-bold text-[#0B2341] mb-8">Related Articles:</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/${relatedPost.slug}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                                        {/* Checkmark Badge */}
                                        <div className="absolute top-2 left-2 z-10 bg-[#A7F3D0] rounded-full p-1">
                                            <Check className="w-3 h-3 text-[#059669]" strokeWidth={3} />
                                        </div>

                                        {relatedPost._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                                            <Image
                                                src={relatedPost._embedded['wp:featuredmedia'][0].source_url}
                                                alt={relatedPost._embedded['wp:featuredmedia'][0].alt_text || relatedPost.title.rendered}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                                                No Image
                                            </div>
                                        )}
                                    </div>
                                    <h4
                                        className="text-sm font-normal text-gray-600 leading-snug mb-2 group-hover:text-[#76D69F] transition-colors"
                                        dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
