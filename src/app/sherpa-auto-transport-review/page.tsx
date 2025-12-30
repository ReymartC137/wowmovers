import Image from 'next/image';
import Link from 'next/link';
import { Check, X, Star, Info } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export const metadata = {
    title: 'Sherpa Auto Transport Review: Reliable Car Shipping Service',
    description: 'In-depth review of Sherpa Auto Transport, covering pricing, services, and how it compares to the industry.',
};

export default function SherpaReviewPage() {
    const pros = [
        "Locked-in prices",
        "Free car wash",
        "Clean Car Guarantee (up to $20)",
        "Professional customer service",
        "Price match guarantee"
    ];

    const cons = [
        "No international shipping",
        "No terminal-to-terminal shipping"
    ];

    const industryComparison = [
        { feature: "Company's shipping availability", sherpa: "High", industry: "Avg" },
        { feature: "Professional customer service", sherpa: "High", industry: "Avg" },
        { feature: "Average customer rating", sherpa: "4.8/5", industry: "4.0/5" },
    ];

    const pricingData = [
        { route: "Los Angeles, CA to New York, NY", price: "$1,450" },
        { route: "Chicago, IL to Miami, FL", price: "$1,100" },
        { route: "Dallas, TX to Denver, CO", price: "$850" },
    ];

    const quotesVsFinal = [
        { type: "Initial Quote", price: "$1,050" },
        { type: "Final Price", price: "$1,050" },
        { type: "Difference", price: "$0" },
    ];

    const features = [
        { name: "Price Lock Promise", value: "Yes" },
        { name: "GPS Tracking", value: "Available" },
        { name: "24/7 Support", value: "Yes" },
        { name: "Insurance Coverage", value: "Yes" },
        { name: "Door-to-Door", value: "Yes" },
        { name: "Open Transport", value: "Yes" },
        { name: "Enclosed Transport", value: "Yes" },
    ];

    const services = [
        "Door-to-door service",
        "Open car transport",
        "Enclosed car transport",
        "Exotic car transport",
        "Classic car shipping",
        "Military car shipping"
    ];

    return (
        <div className="bg-white font-sans text-[#171717]">
            {/* Hero Section */}
            <div className="relative bg-white">
                <div className="container mx-auto px-4 py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-stretch gap-0">
                        {/* Image Side */}
                        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
                            <div className="absolute inset-0 rounded-l-2xl overflow-hidden">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2025/03/auto-transport.jpg"
                                    alt="Sherpa Auto Transport Truck"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="w-full lg:w-1/2 relative z-10">
                            <div className="bg-[#021D32] text-white h-full flex flex-col justify-center p-8 lg:p-16 relative rounded-r-2xl overflow-hidden">
                                {/* Curved Shape Overlay */}
                                <div className="absolute top-0 bottom-0 -left-16 w-16 h-full hidden lg:block">
                                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                                        <path d="M0 0 H100 V100 H0 Q60 50 0 0 Z" fill="#021D32" />
                                        <path d="M0 0 Q60 50 0 100" fill="none" stroke="#50C878" strokeWidth="4" />
                                    </svg>
                                </div>

                                {/* Green Curve Border on Left (Desktop) */}
                                <div className="absolute left-0 top-0 bottom-0 w-4 hidden lg:block">
                                    <svg viewBox="0 0 40 400" preserveAspectRatio="none" className="h-full w-full absolute -left-8 top-0 overflow-visible">
                                        <path d="M40,0 L40,400 C0,300 0,100 40,0 Z" fill="#021D32" />
                                        <path d="M40,0 C0,100 0,300 40,400" fill="none" stroke="#00D285" strokeWidth="4" />
                                    </svg>
                                </div>

                                <div className="relative z-10">
                                    <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                                        Sherpa Auto Transport Review: Reliable Car Shipping Service
                                    </h1>
                                    <p className="text-gray-300 mb-8 text-sm font-medium">
                                        Nov 1, 2024
                                    </p>

                                    <div className="w-full h-px bg-gray-600 mb-8"></div>

                                    <button className="bg-[#66C695] hover:bg-[#55b584] text-white font-bold py-4 px-10 rounded-full transition-colors uppercase tracking-wide text-sm">
                                        Get a Quote
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-5xl">
                {/* Intro Text */}
                <p className="text-gray-600 mb-12 leading-relaxed">
                    Sherpa Auto Transport is one of the best choices for shipping companies among others. The company connects you with a large group and offers top-notch service at customer satisfaction. Their Price Lock Promise ensures you won't get any surprise costs, making them a reliable choice.
                </p>

                {/* Pros & Cons Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        Pros & Cons Of Shipping With Sherpa
                    </h2>
                    <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-xl overflow-hidden">
                        <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
                            <h3 className="font-bold text-[#0B2341] mb-6 text-center uppercase tracking-wider text-sm">Pros</h3>
                            <ul className="space-y-4">
                                {pros.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                        <div className="mt-0.5 p-0.5 rounded-full bg-[#78D9A4] text-white flex-shrink-0">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 bg-gray-50">
                            <h3 className="font-bold text-[#0B2341] mb-6 text-center uppercase tracking-wider text-sm">Cons</h3>
                            <ul className="space-y-4">
                                {cons.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                        <div className="mt-0.5 p-0.5 rounded-full bg-[#78D9A4] text-white flex-shrink-0">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Industry Comparison Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        How Does Sherpa Auto Transport Compare To The Industry?
                    </h2>
                    <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Feature</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Sherpa</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Industry Average</th>
                                </tr>
                            </thead>
                            <tbody>
                                {industryComparison.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 text-sm font-bold text-gray-800">{row.feature}</td>
                                        <td className="p-4 text-sm text-gray-600">{row.sherpa}</td>
                                        <td className="p-4 text-sm text-gray-600">{row.industry}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Cost Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        How Much Does Sherpa Auto Transport Cost?
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Sherpa Auto Transport's cost depends on several factors, including distance, vehicle size, and transport type. On average, you can expect to pay around $1,000 for a long-distance move. However, prices can range from $600 for shorter trips to over $1,500 for cross-country moves.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Sherpa's Price Lock Promise ensures that the price you are quoted is the price you pay. This sets them apart from many other brokers who may increase the price later.
                    </p>

                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Car Shippers Usually Offer Discounts</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Most car shipping companies offer discounts for military personnel, students, and seniors. Sherpa also offers a "Clean Car Guarantee" reimbursement of up to $20 for a car wash after delivery.
                    </p>

                    <h3 className="text-xl font-bold text-[#0B2341] mb-6">Sherpa Auto Transport Pricing</h3>
                    <div className="overflow-x-auto border border-gray-200 rounded-xl mb-12">
                        <table className="w-full border-collapse min-w-[500px]">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Route</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingData.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 text-sm font-bold text-gray-800">{row.route}</td>
                                        <td className="p-4 text-sm text-gray-600">{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-bold text-[#0B2341] mb-6">How Does Sherpa's Pricing Compare?</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Sherpa's prices are generally competitive with other top providers. While they may not always be the absolute cheapest, their Price Lock Promise provides value by preventing unexpected price hikes.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        For example, vs <span className="text-green-500 font-bold">Montway Auto Transport</span>, Sherpa is often slightly higher initially but can be cheaper in the end due to no hidden fees.
                    </p>
                </section>

                {/* Still Confused Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Still confused about car shipping pricing?
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        It's tricky to understand exactly how car shipping costs are calculated. The best way to get an accurate price is to get a free quote directly from the company.
                    </p>

                    <h3 className="text-xl font-bold text-[#0B2341] mb-6">Sherpa Quotes Vs Final Prices</h3>
                    <div className="overflow-x-auto border border-gray-200 rounded-xl mb-12">
                        <table className="w-full border-collapse min-w-[500px]">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Description</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {quotesVsFinal.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 text-sm font-bold text-gray-800">{row.type}</td>
                                        <td className="p-4 text-sm text-gray-600">{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Liability Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Liability And Transit Coverage
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Sherpa Auto Transport requires all carriers to have a minimum of $100,000 in cargo insurance and $1,000,000 in liability insurance. This ensures your vehicle is protected during transport.
                    </p>
                </section>

                {/* Factors Affecting Cost */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Facts Affect The Sherpa's Cost
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Several factors can impact the cost of shipping your vehicle:
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Distance: Longer distances cost more overall but less per mile.",
                            "Vehicle Size: Larger vehicles cost more to ship.",
                            "Transport Type: Enclosed transport is more expensive than open transport.",
                            "Season: Summer is the busiest and most expensive time to ship."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                <div className="mt-0.5 p-0.5 rounded-full bg-[#78D9A4] text-white flex-shrink-0">
                                    <Check className="w-3 h-3" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Features Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Sherpa's Features
                    </h2>
                    <h3 className="text-xl font-bold text-[#0B2341] mb-6">Sherpa Auto Transport Description</h3>
                    <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full border-collapse min-w-[500px]">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Description</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Company Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 text-sm font-bold text-gray-800">{row.name}</td>
                                        <td className="p-4 text-sm text-gray-600">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Services Offered Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Services Offered
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Sherpa Auto Transport offers a wide range of services to meet your needs:
                    </p>
                    <ul className="space-y-4">
                        {services.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                <div className="mt-0.5 p-0.5 rounded-full bg-[#78D9A4] text-white flex-shrink-0">
                                    <Check className="w-3 h-3" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Motorcycle Shipping Section */}
                <section className="mb-16">
                    <h2 className="text-xl font-bold text-[#0B2341] mb-4">Looking for someone to ship your motorcycle?</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We researched shipping companies nationwide to find the best ones for motorcycles. In short, we highly recommend choosing a company with experience in shipping motorcycles, offering extra insurance, and more.
                    </p>
                </section>

                {/* What We Like Most Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        What We Like Most About Sherpa Auto Transport?
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-[#0B2341] mb-4">Price Lock Promise</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Sherpa's promise price lock guarantees that your final car shipping price won't go over $300 more than the original quote. This feature is highly appreciated by customers in reviews and stands out as one of the best in the car shipping industry.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Besides, we were really impressed by Sherpa's honesty. Unlike other companies that might increase prices at the last minute, Sherpa is transparent about how pricing works.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                This level of customer care is rare in car shipping. This is why Sherpa ranks among the top companies even though it's been starting a journey for just seven years.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#0B2341] mb-4">Should I consider an enclosed carrier?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Yes, especially if you have expensive cars, luxury vehicles, and more. To <Link href="#" className="text-[#78D9A4] font-bold hover:underline">choose the enclosed carriers</Link>, read our article here.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#0B2341] mb-4">World-class Carrier Vetting</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Sherpa Auto Transport focuses on finding the safest drivers for your vehicle. While the carrier chooses from a pool of over 10,000 drivers, Sherpa ensures they select the best by:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Analyzing stats: The company tracks performance and shipment details to ensure consistency and accountability.",
                                    "Reviewing government records: Sherpa checks safety, regulatory, and insurance details from the Federal Motor Carrier Safety Administration (FMCSA).",
                                    "Offering extra insurance coverage: Sherpa requires carriers to list them as certificate holders on their insurance. This isn't always standard in the industry.",
                                    "Maintaining a \"do not use\" list: If a carrier doesn't meet safety standards, they are added to this list."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                        <div className="mt-0.5 p-0.5 rounded-full bg-[#78D9A4] text-white flex-shrink-0">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span dangerouslySetInnerHTML={{ __html: item.replace(':', ':</b>').replace(/^/, '<b>') }} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#0B2341] mb-4">Unmatched Customer Service</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The company's founders faced many issues in car shipping, like changing prices, poor communication, and unreliable carriers. They realized the best way to fix these problems was by creating a new type of auto-shipping company.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Therefore, Sherpa focused on providing excellent customer service and introduced the first Clean Car Guarantee (a free car wash) with every shipment. Also, this company introduced its Price Lock Promise to make customers feel more confident about their final bills.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                While no company is perfect, Sherpa's guaranteed pricing and excellent customer service result in satisfied customers. It has maintained an average customer rating of 4.8 out of 5 stars for the past two years.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Hiring Advice Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-4">
                        What should I look for when hiring a car shipper?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        When looking for the best car shipping company, focus on finding low prices, reliable quotes, and good customer reviews. It's also a good idea to pick one with extra insurance. Be careful of scams, as they're common and can end up costing you.
                    </p>
                </section>

                {/* Long-term Review Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-4">
                        A Long-term Review Of Sherpa Auto Transport
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Sherpa Auto Transport has been a standout in the car shipping industry since it started. Established in 2017, it quickly became one of the top car shipping companies. And it is now our top choice for auto transport in 2024.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Though for new companies to succeed in this industry, and many shut down before their first year. But Sherpa has continued to grow and adapt, becoming a strong competitor. For example, its prices have dropped from 10% above the industry average in 2020 to 5% below in 2022, a nearly 20% decrease in just two years.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Another feature is Sherpa's online quoting tool, which gives customers a quote in under two minutes and allows online booking. With its competitive pricing and excellent services, it's no surprise that Sherpa has maintained a customer rating of 4.8 out of 5 stars for over two years.
                    </p>
                </section>

                {/* Recommendation Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-4">
                        Our Recommendation
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Sherpa is one of the best car shipping companies out there with its many exceptional features. For example, it offers a $300 Price Lock Promise, a clean car guarantee, and hires top-quality drivers. With an average customer rating of 4.8 out of 5 stars, Sherpa truly delivers on its promises.
                    </p>
                </section>

                {/* FAQs Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        FAQs About Sherpa Auto Transport
                    </h2>
                    <FAQSection items={[
                        {
                            question: "Does Sherpa have cheap car shipping?",
                            answer: "Yes, Sherpa Auto Transport offers competitive pricing. And it provides a Price Lock Promise for transparent pricing at $300."
                        },
                        {
                            question: "What is Sherpa's Clean Car Guarantee?",
                            answer: "The Clean Car Guarantee offers up to $20 reimbursement for a car wash if your vehicle arrives dirty after transport."
                        },
                        {
                            question: "Does Sherpa have a damage-free guarantee?",
                            answer: "No, this company don't have any damage-free guarantee but requires carriers to list them on insurance policies for more straightforward claims processing."
                        },
                        {
                            question: "Does Sherpa have vehicle tracking?",
                            answer: "Yes, you can track your vehicle by calling their customer service line for updates on location and delivery time."
                        },
                        {
                            question: "What's the average rating of Sherpa Auto Transport reviews?",
                            answer: "Sherpa Auto Transport has an average customer review rating of 4.8 out of 5 stars across multiple platforms."
                        },
                        {
                            question: "What is Sherpa's auto shipping dispatch fee?",
                            answer: "The dispatch fee is $25 if you cancel before a carrier is assigned."
                        }
                    ]} />
                </section>

                {/* How We Review Section */}
                <section>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        How We Review The Moving Companies?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        We research and analyze many ways to give you authentic information about car shipping companies. Some steps we follow—
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-700 mb-4">
                        <li><span className="font-bold">Compare quotes:</span> We go through over 4,000 quotes from several companies, then analyze their prices, services, insurance coverages, and more.</li>
                        <li><span className="font-bold">Analyze reviews:</span> Also we read customer reviews and read thousands of reviews. Then, divide positive and negative reviews and give ratings.</li>
                        <li><span className="font-bold">Mystery shopping:</span> Apart from these, we even called the company and pretended customers to get authentic information.</li>
                    </ol>
                    <p className="text-gray-600 text-sm">
                        <span className="font-bold">Annual calendar:</span> Every year, we do this process and update our data according to the company's information.
                    </p>
                </section>
            </div>
        </div>
    );
}
