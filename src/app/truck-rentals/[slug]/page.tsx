import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import FAQSection from '@/components/FAQSection';
import { Star, Check, X, Phone } from 'lucide-react';

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
    acf: {
        movers_name: string;
        quick_intro: string;
        title: string;
        quick_pros: string;
        quick_cons: string;
        quote_link: string;
        phone_number: string;
        rating: string;
        overall_pros: string;
        overall_cons: string;
        recommendation_intro: string;
        review_image_bg: string;
        faq_title: string;
        [key: string]: string; // For dynamic FAQ fields
    };
    yoast_head_json?: {
        schema?: {
            '@graph'?: Array<{
                thumbnailUrl?: string;
                [key: string]: any;
            }>;
        };
    };
}

async function getData(slug: string): Promise<WPPost | null> {
    const res = await fetch(
        `https://wowmover.com/wp-json/wp/v2/truck-rentals/?slug=${slug}`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getData(slug);

    if (!post) {
        return {
            title: 'Review Not Found',
        };
    }

    return {
        title: `${post.title.rendered} - WowMover`,
        description: post.acf.quick_intro.replace(/<[^>]*>/g, '').slice(0, 160),
    };
}

export default async function ReviewPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getData(slug);

    if (!post) {
        notFound();
    }

    // Parse FAQs
    const faqItems = [];
    for (let i = 1; i <= 15; i++) {
        const question = post.acf[`faq_question_${i}`];
        const answer = post.acf[`faq_answer_${i}`];
        if (question && answer) {
            faqItems.push({ question, answer });
        }
    }

    // Helper to parse list items from HTML string
    const parseList = (html: string) => {
        return html
            .replace(/<ul>/g, '')
            .replace(/<\/ul>/g, '')
            .split('</li>')
            .map((item) => item.replace(/<li>/g, '').trim())
            .filter((item) => item.length > 0);
    };

    const pros = parseList(post.acf.overall_pros || post.acf.quick_pros);
    const cons = parseList(post.acf.overall_cons || post.acf.quick_cons);

    return (
        <div className="min-h-screen bg-white font-sans text-[#0B2341]">

            <main>
                {/* Hero Section */}
                <div className="bg-[#F5FBF7] py-12 lg:py-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            {/* Left Content */}
                            <div className="lg:w-1/2">
                                <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-[#0B2341]">
                                    {post.title.rendered}
                                </h1>
                                <div
                                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: post.acf.quick_intro }}
                                />
                            </div>

                            {/* Right Card - Best Overall */}
                            <div className="lg:w-1/2 w-full">
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                                    {/* Card Header */}
                                    <div className="bg-[#76D69F] text-[#0B2341] font-bold text-center py-3 text-lg">
                                        {post.acf.title || 'Best overall'}
                                    </div>

                                    <div className="p-6 lg:p-8">
                                        <div className="flex flex-col lg:flex-row gap-8">
                                            {/* Logo and Rating */}
                                            <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4">
                                                <div className="w-40 h-16 relative">
                                                    {(() => {
                                                        // Extract thumbnailUrl from yoast_head_json
                                                        const thumbnailUrl = post.yoast_head_json?.schema?.['@graph']?.find(
                                                            (item: any) => item.thumbnailUrl
                                                        )?.thumbnailUrl;
                                                        const logoUrl = thumbnailUrl || post.acf.review_image_bg;

                                                        return (
                                                            <Image
                                                                src={logoUrl}
                                                                alt={post.acf.movers_name}
                                                                width={160}
                                                                height={60}
                                                                className="object-contain"
                                                            />
                                                        );
                                                    })()}
                                                </div>
                                                <div className="flex items-center bg-[#FFF8E1] px-3 py-1.5 rounded-md">
                                                    <span className="font-bold text-[#0B2341] mr-2">{post.acf.rating}/5</span>
                                                    <div className="flex text-[#FFB800]">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(post.acf.rating)) ? 'fill-current' : 'text-gray-300'}`} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Features List */}
                                            <div className="flex-grow space-y-3">
                                                <div className="flex items-start gap-2 text-sm text-gray-700">
                                                    <div className="mt-0.5 p-0.5 rounded-full border border-green-500 text-green-500"><Check className="w-3 h-3" /></div>
                                                    Nationwide availability
                                                </div>
                                                <div className="flex items-start gap-2 text-sm text-gray-700">
                                                    <div className="mt-0.5 p-0.5 rounded-full border border-green-500 text-green-500"><Check className="w-3 h-3" /></div>
                                                    Multiple delivery options
                                                </div>
                                                <div className="flex items-start gap-2 text-sm text-gray-700">
                                                    <div className="mt-0.5 p-0.5 rounded-full border border-red-500 text-red-500"><X className="w-3 h-3" /></div>
                                                    Not available for local moves
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[200px]">
                                                <Link
                                                    href={post.acf.quote_link || '#'}
                                                    className="bg-[#76D69F] hover:bg-[#65c58e] text-[#0B2341] font-bold py-3 px-6 rounded-full text-center transition-colors flex items-center justify-center gap-2"
                                                >
                                                    Get a Quote
                                                    <span className="text-xs">↗</span>
                                                </Link>
                                                {post.acf.phone_number && (
                                                    <a href={`tel:${post.acf.phone_number}`} className="bg-[#0B2341] hover:bg-[#153055] text-white font-bold py-3 px-6 rounded-full text-center transition-colors flex items-center justify-center gap-2">
                                                        <Phone className="w-4 h-4" />
                                                        {post.acf.phone_number}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12">
                    {/* Pros and Cons Section */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Pros */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-[#76D69F] text-[#0B2341] font-bold px-6 py-3">
                                Pros
                            </div>
                            <div className="p-6 bg-white">
                                <ul className="space-y-4">
                                    {pros.map((pro, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[#0B2341]">
                                            <div className="mt-0.5 p-0.5 rounded-full border border-green-500 text-green-500 flex-shrink-0">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Cons */}
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <div className="bg-[#E94E2D] text-white font-bold px-6 py-3">
                                Cons
                            </div>
                            <div className="p-6 bg-white">
                                <ul className="space-y-4">
                                    {cons.map((con, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-[#0B2341]">
                                            <div className="mt-0.5 p-0.5 rounded-full border border-[#E94E2D] text-[#E94E2D] flex-shrink-0">
                                                <X className="w-3 h-3" />
                                            </div>
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="max-w-none prose prose-lg 
                        prose-p:text-[#4B5563] prose-p:leading-relaxed prose-p:mb-4
                        prose-a:text-[#0B2341] prose-a:font-bold prose-a:no-underline hover:prose-a:underline 
                        prose-img:rounded-xl
                        
                        /* Heading Overrides - Using direct selectors for maximum specificity */
                        [&_h2]:text-[#0B2341] [&_h2]:font-bold [&_h2]:text-3xl [&_h2]:mt-12 [&_h2]:mb-6 [&_h2]:leading-tight
                        [&_h3]:text-[#0B2341] [&_h3]:font-bold [&_h3]:text-3xl [&_h3]:mt-12 [&_h3]:mb-6 [&_h3]:leading-tight
                        [&_h4]:text-[#0B2341] [&_h4]:font-bold [&_h4]:text-xl [&_h4]:mt-8 [&_h4]:mb-4 [&_h4]:leading-tight
                        
                        /* Table Styling */
                        [&_table]:w-full [&_table]:border-collapse [&_table]:mb-8 [&_table]:mt-6
                        [&_th]:border [&_th]:border-gray-200 [&_th]:p-3 [&_th]:text-center [&_th]:text-sm [&_th]:font-bold [&_th]:text-[#0B2341]
                        [&_td]:border [&_td]:border-gray-200 [&_td]:p-3 [&_td]:text-center [&_td]:text-sm [&_td]:text-gray-600
                        
                        /* Table Buttons (Last Column Links) */
                        [&_td:last-child_a]:block [&_td:last-child_a]:w-full [&_td:last-child_a]:py-2 [&_td:last-child_a]:px-2 [&_td:last-child_a]:rounded-md [&_td:last-child_a]:text-white [&_td:last-child_a]:text-xs [&_td:last-child_a]:font-bold [&_td:last-child_a]:no-underline [&_td:last-child_a]:transition-colors
                        [&_tr:nth-child(odd)_td:last-child_a]:bg-[#76D69F] [&_tr:nth-child(odd)_td:last-child_a]:hover:bg-[#65c58e]
                        [&_tr:nth-child(even)_td:last-child_a]:bg-[#0B2341] [&_tr:nth-child(even)_td:last-child_a]:hover:bg-[#153055]
                        
                        /* List Styling (Checkmarks) */
                        [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-3 [&_ul]:mb-6
                        [&_li]:flex [&_li]:items-start [&_li]:gap-3
                        [&_li]:before:content-['✓'] [&_li]:before:flex [&_li]:before:items-center [&_li]:before:justify-center [&_li]:before:w-5 [&_li]:before:h-5 [&_li]:before:rounded-full [&_li]:before:border [&_li]:before:border-[#76D69F] [&_li]:before:text-[#76D69F] [&_li]:before:text-xs [&_li]:before:font-bold [&_li]:before:flex-shrink-0
                    ">
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </div>

                    {/* FAQ Section */}
                    {faqItems.length > 0 && (
                        <div className="mt-16">
                            <FAQSection items={faqItems} />
                        </div>
                    )}
                </div>
            </main>

        </div>
    );
}
