"use client";

import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import QuoteForm from '../QuoteForm';

export default function StepsSection() {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    const steps = [
        {
            number: "1",
            title: "Get Your Free Quote",
            description: "Tell us about your move—where you're going, what you're moving, and when. Our team provides a fast, no-obligation quote with transparent pricing."
        },
        {
            number: "2",
            title: "Book Your Move",
            description: "Once you're ready, schedule your move with ease. Our team of licensed and insured professionals will handle the logistics while you relax."
        },
        {
            number: "3",
            title: "Sit Back & Relax",
            description: "We take care of the heavy lifting! From packing to transportation and unloading, our experts ensure a seamless and stress-free moving experience."
        }
    ];

    return (
        <>
            <section className="w-full py-16 md:py-24 bg-[#E8FDF5]">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        {/* Left Column: Title and Image */}
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0B2341] leading-tight">
                                How It Works – Your Move in 3 Easy Steps
                            </h2>
                            <div className="relative">
                                {/* Placeholder for the asset if it doesn't exist yet, or the actual image */}
                                <img
                                    src="/steps_assets/steps.png"
                                    alt="Movers illustration"
                                    className="w-full h-auto max-w-md mx-auto lg:mx-0 object-contain"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/600x400/E8FDF5/78D9A4?text=Movers+Illustration";
                                    }}
                                />
                            </div>
                        </div>

                        {/* Right Column: Steps */}
                        <div className="space-y-12 relative">
                            {/* Vertical Dotted Line (Absolute positioning to sit behind steps) */}
                            <div className="absolute left-[2.5rem] top-8 bottom-8 w-px border-l-2 border-dashed border-[#78D9A4] hidden md:block"></div>

                            {steps.map((step, index) => (
                                <div key={index} className="relative flex gap-8 items-start">
                                    {/* Step Number */}
                                    <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-white rounded-2xl border-2 border-dashed border-[#78D9A4] flex items-center justify-center shadow-sm">
                                        <span className="text-3xl font-bold text-[#78D9A4]">{step.number}</span>
                                    </div>

                                    {/* Step Content */}
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-[#0B2341] mb-3">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* CTA Button */}
                            <div className="pt-8 pl-28">
                                <button
                                    onClick={() => setIsQuoteOpen(true)}
                                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#78D9A4] px-8 text-sm font-bold text-[#0B2341] shadow transition-colors hover:bg-[#68c994] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#78D9A4]"
                                >
                                    Get a Quote <ArrowUpRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <QuoteForm isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        </>
    );
}
