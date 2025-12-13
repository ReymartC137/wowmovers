import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, StarHalf, Phone, Check, X, Calendar, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';

import FAQSection from '@/components/FAQSection';

interface Company {
    id: number;
    slug: string;
    title: string;
    content: string;
    name: string;
    logo: string;
    badge: string;
    rating: number;
    pros: string[];
    cons: string[];
    phone: string;
    quoteLink: string;
    intro: string;
    overallPros: string[];
    overallCons: string[];
    faqTitle: string;
    faqs: { question: string; answer: string }[];
}

async function getCompany(slug: string): Promise<Company | null> {
    try {
        const res = await fetch(`https://wowmover.com/wp-json/wp/v2/auto-transport?slug=${slug}&_embed`, { next: { revalidate: 3600 } });
        if (!res.ok) {
            return null;
        }
        const data = await res.json();
        if (!data || data.length === 0) {
            return null;
        }
        const item = data[0];
        const acf = item.acf || {};
        const embedded = item._embedded || {};
        const featuredMedia = embedded['wp:featuredmedia']?.[0];

        // Helper to parse HTML lists
        const parseList = (html: string) => {
            if (!html) return [];
            // Try splitting by <li> first
            if (html.includes('<li>')) {
                return html
                    .replace(/<\/li>/g, '')
                    .split('<li>')
                    .filter((p: string) => p.trim().length > 0)
                    .map((p: string) => p.replace(/<[^>]*>?/gm, '').trim());
            }
            // Fallback for missing <li>, split by </li>
            return html
                .split('</li>')
                .map((p: string) => p.replace(/<[^>]*>?/gm, '').trim())
                .filter((p: string) => p.length > 0);
        };

        // Parse FAQs
        const faqs = [];
        for (let i = 1; i <= 15; i++) {
            const question = acf[`faq_question_${i}`];
            const answer = acf[`faq_answer_${i}`];
            if (question && answer) {
                faqs.push({ question, answer });
            }
        }

        return {
            id: item.id,
            slug: item.slug,
            title: item.title.rendered,
            content: item.content.rendered,
            name: acf.movers_name || item.title.rendered,
            logo: featuredMedia?.source_url || 'https://wowmover.com/wp-content/uploads/2022/07/nowlogo.png',
            badge: acf.title || 'Review',
            rating: parseFloat(acf.rating) || 4.5,
            pros: parseList(acf.quick_pros),
            cons: parseList(acf.quick_cons),
            phone: acf.phone_number || '(888) 000-0000',
            quoteLink: acf.quote_link || '#',
            intro: acf.quick_intro || '',
            overallPros: parseList(acf.overall_pros),
            overallCons: parseList(acf.overall_cons),
            faqTitle: acf.faq_title || 'Frequently Asked Questions',
            faqs: faqs,
        };
    } catch (error) {
        console.error('Error fetching company:', error);
        return null;
    }
}

function StarRating({ rating }: { rating: number }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
        <div className="flex items-center gap-1">
            <span className="mr-2 text-lg font-bold text-gray-700">{rating}</span>
            {[...Array(5)].map((_, i) => {
                if (i < fullStars) {
                    return <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />;
                } else if (i === fullStars && hasHalfStar) {
                    return <StarHalf key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />;
                } else {
                    return <Star key={i} className="h-5 w-5 text-gray-300" />;
                }
            })}
        </div>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const company = await getCompany(slug);
    if (!company) return { title: 'Not Found' };
    return {
        title: `${company.name} Review - Auto Transport`,
        description: company.intro.replace(/<[^>]*>?/gm, '').slice(0, 160),
    };
}

export default async function CompanyReviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const company = await getCompany(slug);

    if (!company) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-[#F3FBF6] py-12 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        {/* Left Content */}
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-bold text-[#0B2341] mb-6 leading-tight">
                                {company.title.split(':').map((part, index) => (
                                    <span key={index} className="block">
                                        {part.trim()}{index === 0 && ':'}
                                    </span>
                                ))}
                            </h1>
                            <div className="prose prose-lg text-gray-700 mb-8 prose-h2:text-[#0B2341] prose-h2:font-bold prose-h3:text-[#0B2341] prose-a:text-[#76Dba8]" dangerouslySetInnerHTML={{ __html: company.intro }} />
                        </div>

                        {/* Right Card */}
                        <div className="w-full md:w-1/3 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="bg-[#76Dba8] py-2 text-center">
                                <span className="text-white font-bold text-sm uppercase tracking-wide">Best Overall</span>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="relative h-12 w-32">
                                        <Image
                                            src={company.logo}
                                            alt={`${company.name} logo`}
                                            fill
                                            className="object-contain object-left"
                                            unoptimized
                                        />
                                    </div>
                                    <div className="text-right">
                                        <StarRating rating={company.rating} />
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-6">
                                    {(company.pros.length > 0 ? company.pros : ["Worldwide availability", "Discounts on moving services"]).slice(0, 2).map((pro, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <div className="mt-0.5 rounded-full bg-green-100 p-0.5">
                                                <Check className="h-3 w-3 text-[#76Dba8]" />
                                            </div>
                                            <span>{pro}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="space-y-3">
                                    <a
                                        href={company.quoteLink}
                                        className="block w-full text-center px-6 py-3 rounded-full bg-[#76Dba8] text-white font-bold hover:bg-[#68c994] transition-colors shadow-sm"
                                    >
                                        Get a Quote »
                                    </a>
                                    <a
                                        href={`tel:${company.phone}`}
                                        className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full bg-[#0B2341] text-white font-bold hover:bg-[#1a3b5d] transition-colors shadow-sm"
                                    >
                                        <Phone className="h-4 w-4" />
                                        {company.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pros & Cons Section */}
            <section className="py-12 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Pros */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="bg-[#5cdb5c] py-4 px-6">
                                <h3 className="font-bold text-white text-xl flex items-center gap-2">
                                    <Check className="h-6 w-6" /> Pros
                                </h3>
                            </div>
                            <ul className="p-6 space-y-4">
                                {(company.overallPros.length > 0 ? company.overallPros : company.pros).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-[#5cdb5c] shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cons */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                            <div className="bg-[#ef4444] py-4 px-6">
                                <h3 className="font-bold text-white text-xl flex items-center gap-2">
                                    <X className="h-6 w-6" /> Cons
                                </h3>
                            </div>
                            <ul className="p-6 space-y-4">
                                {(company.overallCons.length > 0 ? company.overallCons : company.cons).map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <X className="h-5 w-5 text-[#ef4444] shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none text-gray-700 
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
                        prose-td:border prose-td:border-gray-200 prose-td:p-4 prose-td:text-gray-600"
                    >
                        <div dangerouslySetInnerHTML={{ __html: company.content }} />
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {company.faqs.length > 0 && (
                <FAQSection items={company.faqs} />
            )}
        </div>
    );
}
