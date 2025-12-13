import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, StarHalf, Check, Phone, X } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

interface Company {
    id: number;
    slug: string;
    name: string;
    logo: string;
    badge: string;
    onlineQuotes: string;
    rating: number;
    pros: string[];
    phone: string;
    quoteLink: string;
    intro: string;
}

async function getCompanies(): Promise<Company[]> {
    try {
        const res = await fetch('https://wowmover.com/wp-json/wp/v2/auto-transport?_embed', { next: { revalidate: 3600 } });
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        return data.map((item: any) => {
            const acf = item.acf || {};
            const embedded = item._embedded || {};
            const featuredMedia = embedded['wp:featuredmedia']?.[0];

            // Parse pros from HTML list
            const prosHtml = acf.quick_pros || '';
            const pros = prosHtml
                .replace(/<\/li>/g, '')
                .split('<li>')
                .filter((p: string) => p.trim().length > 0)
                .map((p: string) => p.replace(/<[^>]*>?/gm, '').trim())
                .slice(0, 2); // Take top 2

            return {
                id: item.id,
                slug: item.slug,
                name: acf.movers_name || item.title.rendered,
                logo: featuredMedia?.source_url || 'https://wowmover.com/wp-content/uploads/2022/07/nowlogo.png', // Fallback logo
                badge: acf.title || 'Top Rated',
                onlineQuotes: "Yes", // Default or derive if possible
                rating: parseFloat(acf.rating) || 4.5,
                pros: pros.length > 0 ? pros : ["Reliable Service", "Nationwide Coverage"],
                phone: acf.phone_number || '(888) 000-0000',
                quoteLink: acf.quote_link || '#',
                intro: acf.quick_intro || ''
            };
        });
    } catch (error) {
        console.error('Error fetching companies:', error);
        return [];
    }
}

function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center gap-1">
            <span className="mr-2 text-sm font-bold text-gray-700">{rating}</span>
            {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                    return <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />;
                } else if (i === fullStars && hasHalfStar) {
                    return <StarHalf key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />;
                } else {
                    return <Star key={i} className="h-4 w-4 text-gray-300" />;
                }
            })}
        </div>
    );
}

export default async function AutoTransportPage() {
    const companies = await getCompanies();

    const faqData = [
        {
            question: "How much does it cost to ship a car?",
            answer: "The cost to ship a car depends on distance, vehicle size, and transport type (open vs. enclosed). On average, it costs between $500 and $1,500 for domestic shipping."
        },
        {
            question: "How long does auto transport take?",
            answer: "Shipping time varies by distance. Coast-to-coast moves can take 7-10 days, while shorter distances might take 1-3 days."
        },
        {
            question: "Is my car insured during transport?",
            answer: "Yes, reputable auto transport companies provide insurance coverage. Always verify the coverage limits and ask for proof of insurance before booking."
        },
        {
            question: "Can I pack personal items in my car?",
            answer: "Most carriers advise against packing personal items in the vehicle due to weight restrictions and liability issues. Some may allow up to 100 lbs in the trunk, but check with your carrier."
        },
        {
            question: "What is the difference between open and enclosed transport?",
            answer: "Open transport is the most common and affordable method, where your car is shipped on an open trailer. Enclosed transport offers more protection from weather and road debris, ideal for luxury or classic cars, but costs more."
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-[#0B2341] mb-6 leading-tight">
                                Best Auto Transport<br />Companies
                            </h1>
                            <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
                                <p>
                                    Looking for the best way to ship your car? We've researched and reviewed the top auto transport companies to help you find reliable and affordable vehicle shipping services.
                                </p>
                                <p>
                                    Compare prices, ratings, and services to choose the right auto transporter for your needs.
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Link href="/" className="hover:text-[#0B2341]">Home</Link>
                                <span>/</span>
                                <span className="text-[#0B2341]">Auto Transport</span>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden bg-gray-50">
                            <Image
                                src="https://wowmover.com/wp-content/uploads/2022/02/truck-rental-1.jpg" // Placeholder or use a relevant image
                                alt="Auto Transport Illustration"
                                fill
                                className="object-cover"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* What Are The Best Section */}
            <section className="py-12 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#0B2341] mb-8">
                        Top Rated Auto Transport Companies
                    </h2>
                    <ul className="space-y-4 text-gray-700">
                        {companies.map((company) => (
                            <li key={company.id} className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#0B2341]"></span>
                                <span className="font-bold text-[#0B2341]">{company.name}:</span> {company.badge}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Comparison Cards Section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold text-[#0B2341] sm:text-4xl mb-12">
                        Compare Best Auto Transport Companies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {companies.map((company, index) => (
                            <div
                                key={company.id}
                                className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${index === 0 ? 'border-2 border-[#0B2341]' : 'border border-gray-200'
                                    }`}
                            >
                                {/* Badge */}
                                <div className={`py-3 px-4 text-center ${index === 0 ? 'bg-[#0B2341] text-white' : 'bg-gray-100 text-gray-800'
                                    }`}>
                                    <p className="text-sm font-semibold">{company.badge}</p>
                                </div>

                                {/* Logo */}
                                <div className="h-32 flex items-center justify-center p-6 border-b border-gray-100 relative">
                                    <Image
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        width={200}
                                        height={100}
                                        className="max-h-full max-w-full object-contain"
                                        unoptimized
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold text-[#0B2341] text-center mb-4">
                                        <Link href={`/auto-transport/${company.slug}`} className="hover:underline">
                                            {company.name}
                                        </Link>
                                    </h3>

                                    <div className="flex justify-center mb-4">
                                        <StarRating rating={company.rating} />
                                    </div>

                                    <ul className="space-y-2 mb-6 flex-grow">
                                        {company.pros.map((pro, idx) => (
                                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                                                <span className="text-[#76Dba8] mr-2">✓</span>
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Buttons */}
                                    <div className="space-y-3 mt-auto">
                                        <a
                                            href={company.quoteLink}
                                            className="block w-full text-center px-6 py-3 rounded-lg bg-[#76Dba8] text-white font-bold text-sm hover:bg-[#68c994] transition-colors"
                                        >
                                            Get a Quote
                                        </a>
                                        <a
                                            href={`tel:${company.phone}`}
                                            className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                        >
                                            <Phone className="h-4 w-4" />
                                            {company.phone}
                                        </a>
                                        <Link
                                            href={`/auto-transport/${company.slug}`}
                                            className="block w-full text-center px-6 py-2 rounded-lg border border-gray-300 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
                                        >
                                            Read Review
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Breakdown Sections (Dynamic) */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-20">
                        {companies.map((company) => (
                            <div key={company.id} id={company.slug}>
                                <h2 className="text-3xl font-bold text-[#0B2341] mb-6">{company.name} Review</h2>
                                <div className="prose prose-lg text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: company.intro }} />

                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={company.quoteLink}
                                        className="px-6 py-3 rounded-lg bg-[#76Dba8] text-white font-bold text-sm hover:bg-[#68c994] transition-colors"
                                    >
                                        Get Free Quote
                                    </a>
                                    <Link
                                        href={`/auto-transport/${company.slug}`}
                                        className="px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                    >
                                        Full Review
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection items={faqData} />
        </div>
    );
}
