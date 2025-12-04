'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white pb-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Heading */}
                    <div className="lg:w-1/3">
                        <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl sticky top-8">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    {/* Accordion */}
                    <div className="lg:w-2/3 space-y-4">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm"
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
                                >
                                    <span className="text-lg font-bold text-[#0B2341] pr-8">
                                        {item.question}
                                    </span>
                                    {openIndex === index ? (
                                        <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
