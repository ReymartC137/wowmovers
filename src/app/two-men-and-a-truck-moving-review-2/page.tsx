import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, X, Phone, Star } from 'lucide-react';

export const metadata = {
    title: 'Two Men and a Truck Review: Services, Pricing, and Reputation',
    description: 'Two Men and a Truck is a national full-service moving company with a long-standing reputation in the U.S.',
};

export default function TwoMenAndATruckReviewPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#0B2341]">
            {/* Hero Section */}
            <div className="bg-[#F0F0F0] min-h-[500px] flex items-center justify-center py-12 lg:py-20 relative overflow-hidden">
                {/* Geometric Background Pattern (Approximation) */}
                <div className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}
                ></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[400px]">

                        {/* Left: Illustration Area */}
                        <div className="lg:w-[55%] p-8 lg:p-12 flex items-center justify-center bg-white relative">
                            <div className="w-full max-w-md">
                                <img
                                    src="https://wowmover.com/wp-content/uploads/2021/04/Two-Men-and-a-Truck-Available-Services.png"
                                    alt="Two Men and a Truck Services"
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* Right: Dark Blue Curved Section */}
                        <div className="lg:w-[45%] bg-[#0B2341] relative flex flex-col justify-center p-8 lg:p-12 text-white">
                            {/* Green Curve Border */}
                            <div className="absolute top-0 bottom-0 -left-12 w-24 bg-[#0B2341] hidden lg:block"
                                style={{
                                    clipPath: 'ellipse(60% 100% at 100% 50%)',
                                    zIndex: 10
                                }}
                            ></div>
                            {/* Green Accent Line */}
                            <div className="absolute top-0 bottom-0 -left-[52px] w-24 bg-[#65D698] hidden lg:block"
                                style={{
                                    clipPath: 'ellipse(60% 100% at 100% 50%)',
                                    zIndex: 5
                                }}
                            ></div>

                            <div className="relative z-20">
                                <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                                    Two Men and a Truck Review: Services, Pricing, and Reputation
                                </h1>
                                <p className="text-gray-400 text-sm mb-8">
                                    September 29, 2025
                                </p>
                                <div className="w-full h-px bg-gray-700 mb-8"></div>
                                <Link
                                    href="#"
                                    className="inline-block bg-[#65D698] hover:bg-[#54c085] text-[#0B2341] font-bold py-3 px-8 rounded-full transition-colors"
                                >
                                    GET A QUOTE
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* Intro */}
                <div className="mb-12 text-gray-700 leading-relaxed">
                    <p className="mb-4">
                        Two Men and a Truck® is a national full-service moving company with a long-standing reputation in the U.S. Founded in 1985, it has grown into one of the largest franchised moving networks in North America.
                    </p>
                    <p className="mb-4">
                        Their motto, "Movers Who Care®," signals a commitment not just to moving but to community service and ethical conduct.
                    </p>
                    <p>
                        Below is an updated overview of their services, coverage, cost factors, pricing, and customer feedback.
                    </p>
                </div>

                {/* Service Coverage & Network */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Service Coverage & Network</h2>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                            <div className="mt-1 p-0.5 rounded-full border border-[#65D698] text-[#65D698]">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-gray-700">Two Men and a Truck operates in <strong>48 U.S. states</strong>, excluding Alaska and Hawaii.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 p-0.5 rounded-full border border-[#65D698] text-[#65D698]">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-gray-700">In addition to U.S. operations, they have a presence in <strong>Canada, the UK, and Ireland</strong> through franchising.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="mt-1 p-0.5 rounded-full border border-[#65D698] text-[#65D698]">
                                <Check className="w-3 h-3" />
                            </div>
                            <span className="text-gray-700">Because it's a franchise model, service offerings vary by location. Some franchises may offer special services (e.g. junk removal, portable storage) that others don't.</span>
                        </li>
                    </ul>

                    {/* Service Table */}
                    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-white border-b border-gray-200">
                                    <th className="p-4 font-bold text-[#0B2341] w-1/3 border-r border-gray-200">Service</th>
                                    <th className="p-4 font-bold text-[#0B2341]">Description & Notes</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-gray-700">
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-bold border-r border-gray-200">Local Moving / Hourly Moves</td>
                                    <td className="p-4">For moves within the same metro area. The "Hourly Movers" program lets you hire them just for labor and transport on an hourly basis.</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-bold border-r border-gray-200">Long-Distance Moves</td>
                                    <td className="p-4">For moves beyond the local region, they offer <strong>Expedited Long-Distance</strong> (dedicated truck and crew) and <strong>Value Flex</strong> (more flexible, cost-saving option).</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-bold border-r border-gray-200">Packing & Unpacking</td>
                                    <td className="p-4">You can choose full, partial, or "as needed" packing services. They also offer packing even if you aren't moving (e.g. preparing for storage).</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-bold border-r border-gray-200">Storage Solutions</td>
                                    <td className="p-4">Short- and long-term storage, typically in secure warehouses. Some franchises also offer portable units or climate-controlled options.</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-bold border-r border-gray-200">Junk Removal / Cleanout</td>
                                    <td className="p-4">Available in select locations. They will haul away unwanted items (furniture, appliances, etc.), with proper disposal protocols.</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-bold border-r border-gray-200">Pickup & Delivery</td>
                                    <td className="p-4">Useful for furniture/appliances or one-off item delivery needs.</td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-4 font-bold border-r border-gray-200">Labor-Only / Loading & Unloading</td>
                                    <td className="p-4">If you have your own truck or container and just need help loading/unloading, they offer "Carry Crew" / labor-only options.</td>
                                </tr>
                                <tr>
                                    <td className="p-4 font-bold border-r border-gray-200">Business / Corporate Moves & Storage</td>
                                    <td className="p-4">Office relocations, corporate accounts with discounts, business storage for files and equipment.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Pricing & Cost Factors */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Pricing & Cost Factors</h2>
                    <p className="text-gray-700 mb-6">
                        Two Men and a Truck doesn't publish flat rates universally because the cost depends heavily on several factors. Here are the main determinants:
                    </p>
                    <ul className="space-y-3 mb-6">
                        {[
                            "Labor time (loading + unloading)",
                            "Driving distance (fuel, travel time, toll, crew size)",
                            "Number of movers / crew size",
                            "Stairs, elevators, long walk distances",
                            "Disassembly / reassembly of furniture",
                            "Packing services / supplies used",
                            "Valuation protection / insurance coverage",
                            "Extra stops, delays, or complicated items"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="mt-1 p-0.5 rounded-full border border-[#65D698] text-[#65D698]">
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-700 mb-4">
                        They encourage full transparency when requesting a quote so there are fewer surprises.
                    </p>
                    <p className="text-gray-700">
                        As a rough guide, local moves are hourly (typical two-man crew rates vary by region), while long-distance moves have a cost structure based on weight, distance, and service level.
                    </p>
                </section>

                {/* Pros & Cons */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
                    <p className="text-gray-700 mb-6">Here's a balanced look based on recent customer feedback and industry insights.</p>

                    <div className="mb-8">
                        <h3 className="font-bold mb-4">Pros:</h3>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                            <li><strong>Comprehensive service options.</strong> One-stop for packing, moving, storage, junk removal, labor.</li>
                            <li><strong>Strong brand & network.</strong> Because it's a large franchise system, many customers find it easy to locate a nearby office.</li>
                            <li><strong>Professionalism & Training.</strong> Movers typically are background-checked, drug-screened, and trained.</li>
                            <li><strong>Referral / Loyalty reputation.</strong> The company cites a high customer referral rate in its marketing.</li>
                            <li><strong>Flexible options.</strong> The 'Value Flex' long-distance option is budget-friendly, and labor-only services give flexibility.</li>
                        </ol>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Cons / Caution:</h3>
                        <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                            <li><strong>Inconsistent offerings by location.</strong> Not all franchises support all services (e.g. long-distance, storage, junk removal).</li>
                            <li><strong>Variable quality & experience.</strong> Because each branch is independently operated, some customers report damage, delays, or poor handling.</li>
                            <li><strong>Lack of transparent pricing in some cases.</strong> Some customers report quotes changing when crews arrive.</li>
                            <li><strong>Not suitable for international moves or vehicle shipping.</strong> Their core operations are within the U.S. and Canada.</li>
                            <li><strong>Peak-season constraints.</strong> During summer or high-demand times, scheduling and pricing may become more rigid.</li>
                        </ol>
                    </div>
                </section>

                {/* Customer Reviews & Reputation */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Customer Reviews & Reputation</h2>
                    <p className="text-gray-700 mb-4">
                        The company receives mixed but generally positive reviews overall.
                        Some customers praise punctuality, care, and communication; others have reported issues like damaged items or unexpected fees.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Because quality varies by franchise, it's best to:
                    </p>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                        <li>Ask for <strong>local references</strong> or recent customer contacts.</li>
                        <li>Walk through the fine print of your quote carefully.</li>
                        <li>Get an <strong>in-home or virtual survey</strong> before confirming your booking.</li>
                    </ol>
                </section>

                {/* Tips & Recommendations */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Tips & Recommendations for Potential Customers</h2>
                    <ul className="space-y-3">
                        {[
                            "Request a Guaranteed Not-To-Exceed (GNTE) quote if available.",
                            "Be precise and upfront about your inventory to avoid cost changes.",
                            "Prepare in advance: disassemble what you can, label boxes, and clear paths for movers.",
                            "Check what your local franchise offers, as not all have the same services.",
                            "Document condition of fragile items before the move.",
                            "Review damage or insurance policies before signing.",
                            "Book early, especially during peak moving seasons."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <div className="mt-1 p-0.5 rounded-full border border-[#65D698] text-[#65D698]">
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="text-gray-700">{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Get a Free Quote */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">Get a Free Quote</h2>
                    <p className="text-gray-700 mb-4">
                        WowMover helps you connect with trusted moving companies like Two Men and a Truck so you can easily compare services and pricing options.
                    </p>
                    <p className="text-gray-700 mb-4">
                        If you're interested in hiring Two Men and a Truck for your upcoming move, we can help you get in touch with a local representative to receive an accurate estimate.
                    </p>
                    <p className="text-gray-700 mb-8">
                        Provide detailed information about your move, confirm which services are available in your area, and request a written or binding quote when possible.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-[#65D698] hover:bg-[#54c085] text-[#0B2341] font-bold py-3 px-6 rounded-full transition-colors"
                        >
                            Get a Free Quote for Two Men and a Truck
                            <span className="text-lg">↗</span>
                        </Link>
                        <a
                            href="tel:(888) 555-0123" // Placeholder phone number
                            className="inline-flex items-center justify-center gap-2 text-[#0B2341] font-bold py-3 px-6 hover:underline"
                        >
                            <Phone className="w-4 h-4" />
                            Call: (888) 555-0123
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
