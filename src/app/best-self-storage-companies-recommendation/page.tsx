import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, StarHalf, Check, Phone, X, Truck, Calendar, MapPin, DollarSign, Globe, Package, Warehouse, Shield, BarChart, Wrench, Lightbulb, ThumbsUp } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

interface Company {
    name: string;
    logo: string;
    badge: string;
    onlineQuotes: string;
    rating: number;
    pros: string[];
    phone: string;
    quoteLink: string;
}

const companies: Company[] = [
    {
        name: "PODS Storage",
        logo: "https://wowmover.com/wp-content/uploads/2025/12/pods-svg.svg",
        badge: "Most Convenient",
        onlineQuotes: "Yes",
        rating: 4,
        pros: ["Flexible solutions that allow you to take your time while you pack up", "Transparent about pricing on the website"],
        phone: "(833)742-0934",
        quoteLink: "https://wowmover.com/upack/"
    },
    {
        name: "1-800-PACK-RAT",
        logo: "https://wowmover.com/wp-content/uploads/2025/09/1-800-pack-rat-logo-png.png",
        badge: "Price is negotiable",
        onlineQuotes: "No",
        rating: 4,
        pros: ["Price is somewhat negotiable", "For the most part, the customer determines the schedule"],
        phone: "(855)898-8943",
        quoteLink: "https://wowmover.com/PACK-RAT"
    },
    {
        name: "Public Storage",
        logo: "https://wowmover.com/wp-content/uploads/2023/06/1200px-Public_Storage_Logo.svg_.png",
        badge: "Best customer service",
        onlineQuotes: "No",
        rating: 4,
        pros: ["2,000+ locations", "Rent Online Right Now", "Skip the Counter & Go Straight to Your Space."],
        phone: "(833)462-1107",
        quoteLink: "https://www.publicstorage.com/"
    },
    {
        name: "Life Storage",
        logo: "https://wowmover.com/wp-content/uploads/2023/06/lifestorage.png",
        badge: "Good security",
        onlineQuotes: "Yes",
        rating: 3,
        pros: ["1,400+ locations", "Moving Boxes in various sizes","Dish and Glass Moving Kits"],
        phone: "(833)554-3260",
        quoteLink: "https://www.lifestorage.com/storage-units/"
    },
    {
        name: "Neighbor",
        logo: "https://wowmover.com/wp-content/uploads/2023/06/neighbor.png",
        badge: "Peer-to-peer storage",
        onlineQuotes: "Yes",
        rating: 4,
        pros: ["Low prices", "Wide availability for most users","Storage to fit all sizes","Easy-to-navigate app"],
        phone: "(533)858-1971",
        quoteLink: "https://www.neighbor.com/search-q?mta=WyJtdjpBOiIsImVzcTpCOiJd"
    }
];
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
export default function BestSelfStoragePage() {
     const faqData = [
        {
            question: "Which is the best moving truck rental company?",
            answer: "U-Haul is often considered the best overall moving truck rental company due to its extensive network and vehicle availability. Budget Truck Rental and Enterprise Truck Rental are also highly rated for competitive pricing and customer service. Penske offers newer trucks and better maintenance records."
        },
        {
            question: "What do I need to rent a moving truck?",
            answer: "You need a valid driver's license, credit or debit card for payment and deposit, and must meet the minimum age requirement (typically 18-25 years old). Some companies require additional identification, proof of insurance, or may run a background check. International renters may need additional documentation."
        },
        {
            question: "How much does it cost to rent a moving truck?",
            answer: "Moving truck rental costs vary by size, distance, and duration. Local moves typically cost $30-$300 per day plus $1.29-$1.99 per mile. Long-distance moves range from $1,200-$4,000+ depending on truck size and distance. Additional fees may apply for insurance, equipment, fuel, and late returns."
        },
        {
            question: "What size moving truck do I need?",
            answer: "A 10-12 ft truck works for studio to 1-bedroom moves, 15-17 ft for 2-bedroom homes, 20 ft for 3-bedroom homes, and 26 ft for 4+ bedroom homes. Consider the volume of belongings, not just room count. It's better to rent slightly larger than needed to avoid multiple trips."
        },
        {
            question: "How far in advance should I book a moving truck?",
            answer: "Book 2-8 weeks in advance for best availability and pricing. During peak moving season (May-September) and end/beginning of months, book even earlier. Last-minute rentals are possible but may have limited truck sizes, higher prices, and inconvenient pickup locations."
        },
        {
            question: "Do I need special insurance for a rental truck?",
            answer: "Your auto insurance may cover rental trucks, but coverage varies. Most rental companies offer optional insurance including damage waivers, cargo protection, and liability coverage. Check with your insurance provider first, then consider rental company options for gaps in coverage."
        },
        {
            question: "Can I drive a moving truck with a regular license?",
            answer: "Yes, most moving trucks under 26,000 lbs can be driven with a regular driver's license. This includes most rental trucks from 10-26 feet. However, some states have specific restrictions, and you should be comfortable driving larger vehicles. CDL requirements only apply to trucks over 26,000 lbs."
        },
        {
            question: "What happens if I return the truck late or to wrong location?",
            answer: "Late returns typically incur additional daily rental charges plus late fees ranging from $40-$200. Returning to a different location than agreed may result in one-way fees of $50-$400+. Contact the rental company immediately if delays are expected to potentially negotiate or minimize fees."
        },
        {
            question: "Do rental trucks come with moving equipment?",
            answer: "Most rental trucks come with a loading ramp or lift gate. Additional equipment like dollies, furniture pads, straps, and boxes are usually available for rent separately. Some companies offer moving supply packages. Basic safety equipment like reflectors may be included, but moving supplies are typically extra."
        },
        {
            question: "What should I check before driving away with a rental truck?",
            answer: "Inspect the truck for existing damage and document with photos, check fuel level, tire condition, lights, and mirrors. Verify mileage, ensure you have all paperwork, test brakes and steering in the parking lot, and adjust mirrors and seat. Report any issues immediately before leaving the lot."
        }
    ];
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-white py-12 lg:py-20 overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        {/* Text Content */}
                        <div className="space-y-6 max-w-2xl">
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0B2341] leading-tight">
                                Best 5 Self-Storage<br />
                                Container Companies
                            </h1>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    Whether you want to store your item for a long or short-term period, self-storage companies are your best bet. But finding the best one is tough, though. You have to do research and compare each company's features.
                                </p>
                                <p>
                                    This is a long and time-consuming process; if you want to follow the easy path, read this whole article. Here, we discuss the best 5 self-storage companies by mentioning their prices, ratings, services, and more–
                                </p>
                            </div>

                            {/* Breadcrumbs */}
                            <nav className="flex items-center text-sm text-gray-500 pt-2">
                                <Link href="/" className="hover:text-[#0B2341] transition-colors">
                                    Home
                                </Link>
                                <span className="mx-2 text-gray-300">/</span>
                                <span className="text-gray-600">Self Storage</span>
                            </nav>
                        </div>

                        {/* Hero Image */}
                        <div className="relative flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[600px] aspect-[4/3]">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2025/09/Group-11.png"
                                    alt="Self Storage Illustration"
                                    fill
                                    className="object-contain"
                                    priority
                                    unoptimized // Since it's an external URL
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Are The Best Self-Storage Companies? Section */}
            <section className="bg-white pb-20 pt-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2341] mb-8">
                            What Are The Best Self-Storage Companies?
                        </h2>

                        <ul className="space-y-4 text-lg text-gray-700">
                            <li className="flex items-start">
                                <span className="text-[#0B2341] mr-3 font-bold">•</span>
                                <div>
                                    <span className="font-bold text-gray-900">Extra Space Storage:</span> Best Overall
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0B2341] mr-3 font-bold">•</span>
                                <div>
                                    <span className="font-bold text-gray-900">Neighbor.com:</span> Best budget storage
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0B2341] mr-3 font-bold">•</span>
                                <div>
                                    <span className="font-bold text-gray-900">Public Storage:</span> Best customer service
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0B2341] mr-3 font-bold">•</span>
                                <div>
                                    <span className="font-bold text-gray-900">Life Storage:</span> Best security
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#0B2341] mr-3 font-bold">•</span>
                                <div>
                                    <span className="font-bold text-gray-900">CubeSmart:</span> Lowest prices
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* Comparison Cards Section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold text-[#0B2341] sm:text-4xl mb-12">
                        Top 5 Cheapest Moving Container Companies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${index === 0 ? 'border-2 border-[#0B2341]' : 'border border-gray-200'
                                    }`}
                            >
                                {/* Badge */}
                                <div className={`py-3 px-4 text-center ${index === 0 ? 'bg-[#0B2341] text-white' : 'bg-gray-100 text-gray-800'
                                    }`}>
                                    <p className="text-sm font-semibold">{company.badge}</p>
                                </div>

                                {/* Logo */}
                                <div className="h-32 flex items-center justify-center p-6 border-b border-gray-100">
                                    <img
                                        src={company.logo}
                                        alt={`${company.name} logo`}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold text-[#0B2341] text-center mb-4">
                                        {company.name}
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Where is U-Haul? Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h2 className="text-2xl font-bold text-[#0B2341] mb-6">
                            #Where is U-Haul?
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            U-Haul also offers self-storage facilities but is not mentioned in our list for its poor consumer reviews. Still, if you want to know about this, read our U-Haul Self Storage. (interlink)
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5BC236] text-white font-semibold hover:bg-[#4da82e] transition-colors"
                        >
                            U-Haul Self Storage
                            <svg className="w-4 h-4 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* Best Storage & Moving Container Companies List Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#0B2341] mb-12">
                        What Are The Best Storage & Moving Container Companies?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {/* PODS */}
                        <div className="flex pl-4 border-l-4 border-[#0B2341]">
                            <div>
                                <span className="font-bold text-[#0B2341] block mb-1">PODS:</span>
                                <span className="text-gray-600">Best for affordable price</span>
                            </div>
                        </div>

                        {/* UNITS */}
                        <div className="flex pl-4 border-l-4 border-[#0B2341]">
                            <div>
                                <span className="font-bold text-[#0B2341] block mb-1">UNITS:</span>
                                <span className="text-gray-600">Best for customer service</span>
                            </div>
                        </div>

                        {/* 1-800-PACK-RAT */}
                        <div className="flex pl-4 border-l-4 border-[#0B2341]">
                            <div>
                                <span className="font-bold text-[#0B2341] block mb-1">1-800-PACK-RAT:</span>
                                <span className="text-gray-600">Strong containers</span>
                            </div>
                        </div>

                        {/* U-Pack */}
                        <div className="flex pl-4 border-l-4 border-[#0B2341]">
                            <div>
                                <span className="font-bold text-[#0B2341] block mb-1">U-Pack:</span>
                                <span className="text-gray-600">Best for long distance move</span>
                            </div>
                        </div>

                        {/* Zippy Shell */}
                        <div className="flex pl-4 border-l-4 border-[#0B2341]">
                            <div>
                                <span className="font-bold text-[#0B2341] block mb-1">Zippy Shell:</span>
                                <span className="text-gray-600">Best for reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cheapest Moving Container Companies Section */}
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Images on the left with overlapping layout */}
                        <div className="relative">
                            {/* Top image - Moving truck */}
                            <div className="relative z-10">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2022/02/temporary-storage-1.jpg"
                                    alt="forklift container"
                                    width={463}
                                    height={309}
                                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                                />
                            </div>
                            {/* Bottom image - Shipping containers - overlapping and extending to the right */}
                            <div className="relative -mt-32 ml-auto w-[90%] z-20">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2022/02/temporary-storage-2.jpg"
                                    alt="Colorful shipping containers"
                                    width={416}
                                    height={277}
                                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Content on the right */}
                        <div className="space-y-6">
                            <h2 className="text-4xl font-bold text-[#0B2341] leading-tight">
                               Best 5 Self-Storage Container Companies
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Wowmover.com researched 8 storage providers and analyzed more than 2,500 quotes to find the best storage unit companies in the nation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Best Cheap Moving Containers Section */}
            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Section Title */}
                    <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
                        Best 5 Self-Storage Container Companies
                    </h2>

                    {/* U-Pack Review */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Left Content */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#0B2341]">
                                    1.  PODS Review
                                </h3>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
You may need to store your belongings for a few days or weeks in the middle of a big move. If your new home isn’t ready when you need it or you have to move out of your old home before you know where you’re moving to, then PODS’ combination of moving and storage services makes it your most convenient option.   </p>
                                  
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://wowmover.com/portable-in-demand-2/"
                                        className="px-6 py-3 rounded-lg bg-[#76Dba8] text-white font-bold text-sm hover:bg-[#68c994] transition-colors"
                                    >
                                        Get Free Quote
                                    </a>
                                    <a
                                        href="tel:(833)241-3873"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        (833)742-0934
                                    </a>
                                </div>
                            </div>

                            {/* Right Image with Logo */}
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="https://wowmover.com/wp-content/uploads/2022/02/pods-temporary-storage.jpg"
                                        alt="pods"
                                        width={450}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* U-Pack Logo Overlay */}
                                    <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                        <Image
                                            src="https://wowmover.com/wp-content/uploads/2025/12/pods-svg.svg"
                                            alt="PODS Logo"
                                            width={100}
                                            height={40}
                                            className="h-10 w-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="mt-4 flex items-center justify-end gap-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(4)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <span className="text-sm text-gray-600">4.5 Stars</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 1-800-PACK-RAT Review */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Left Image with Logo */}
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="https://wowmover.com/wp-content/uploads/2022/02/1-800-pack-rat-temporary-storage.jpg"
                                        alt="pacrat container"
                                        width={450}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* 1-800-PACK-RAT Logo Overlay */}
                                    <div className="absolute top-4 right-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                        <Image
                                            src="https://wowmover.com/wp-content/uploads/2025/09/1-800-pack-rat-logo-png.png"
                                            alt="packrat Logo"
                                            width={120}
                                            height={40}
                                            className="h-10 w-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="mt-4 flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(3)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <StarHalf className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    </div>
                                    <span className="text-sm text-gray-600">4.5 Stars</span>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#0B2341]">
                                    2. Public Storage
                                </h3>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                   1-800-PACK-RAT knows that you expect more than just extra storage space from the company you trust with your belongings.  We designed our nationwide storage facilities to give you peace of mind and convenience, in addition to taking excellent care of your storage needs. We not only offer you the simplest way to store your stuff, but you can also be confident that your belongings will be safe with us.


                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://wowmover.com/PACK-RAT"
                                        className="px-6 py-3 rounded-lg bg-[#76Dba8] text-white font-bold text-sm hover:bg-[#68c994] transition-colors"
                                    >
                                        Get Free Quote
                                    </a>
                                    <a
                                        href="tel:(855)898-8943"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        (855)715-8943
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PODS Review */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Left Content */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#0B2341]">
                                    3. Public Storage
                                </h3>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                       Start by searching for storage near you. With thousands of locations nationwide, we’re always just around the corner
Reserve your unit for free with no obligation.
On move-in day, our property manager will show you your unit and get you set up. If you decide you need more (or less) space, we’ll be happy to help you find a different unit.

                                    </p>
              
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://wowmover.com/portable-in-demand/"
                                        className="px-6 py-3 rounded-lg bg-[#76Dba8] text-white font-bold text-sm hover:bg-[#68c994] transition-colors"
                                    >
                                        Get Free Quote
                                    </a>
                                    <a
                                        href="tel:(833)742-0934"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        (833)461-1107
                                    </a>
                                </div>
                            </div>

                            {/* Right Image with Logo */}
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="https://wowmover.com/wp-content/uploads/2023/06/why-public-storage2-e1687189679508.jpg"
                                        alt="uhaul moving container"
                                        width={450}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* PODS Logo Overlay - Top Left */}
                                    <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                        <Image
                                            src="https://wowmover.com/wp-content/uploads/2023/06/1200px-Public_Storage_Logo.svg_.png"
                                            alt="Public Storage Logo"
                                            width={100}
                                            height={40}
                                            className="h-10 w-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="mt-4 flex items-center justify-end gap-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(4)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <Star className="h-5 w-5 text-gray-300" />
                                    </div>
                                    <span className="text-sm text-gray-600">4 Stars</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* enterprise Review */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Left Image with Logo */}
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="https://wowmover.com/wp-content/uploads/2023/06/lifestorages-e1687191268554.webp"
                                        alt="LifeStorage"
                                        width={450}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* U-Haul Logo Overlay - Top Right */}
                                    <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
                                        <Image
                                            src="https://wowmover.com/wp-content/uploads/2023/06/lifestorage.png"
                                            alt="LifeStorage Logo"
                                            width={100}
                                            height={100}
                                            className="h-16 w-16 object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="mt-4 flex items-center gap-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(3)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        {[...Array(3)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-gray-300" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">3.5 Stars</span>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#0B2341]">
                                    4.LifeStorage
                                </h3>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Build your truck and van rental program with custom rates.


                                    </p>
                                    <p>
                                        We’ll deliver the commercial trucks and vans you require for your project-based, seasonal or long-term needs. Whether you’re looking for a one-time rental or a long-term strategy, our experts are here for you.

                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://wowmover.com/u-haul/"
                                        className="px-6 py-3 rounded-lg bg-[#76Dba8] text-white font-bold text-sm hover:bg-[#68c994] transition-colors"
                                    >
                                        Get Free Quote
                                    </a>
                                    <a
                                        href="tel:(833)891-0559"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                        (833)462-1107
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Zippy Shell Review */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                            {/* Left Content */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-[#0B2341]">
                                    5. The Home Depot
                                </h3>

                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>
                                        Rent Load ‘N Go Pickup Trucks or Cargo Vans at the Home Depot Rental Center or Special Service Desk at your local Home Depot.</p>
                                    <p>
                                        No purchase necessary
                                        Save money on delivery fees
                                        Additional rates/fees may apply</p>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="https://www.zippyshell.com/get-quote"
                                        className="px-6 py-3 rounded-lg bg-[#76Dba8] text-white font-bold text-sm hover:bg-[#68c994] transition-colors"
                                    >
                                        Get Free Quote
                                    </a>
                                    <a
                                        href="tel:(844)858-1971"
                                        className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                    >
                                        <Phone className="h-4 w-4" />
                                       (844)858-1971
                                    </a>
                                </div>
                            </div>

                            {/* Right Image with Logo */}
                            <div className="relative">
                                <div className="relative rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src="https://wowmover.com/wp-content/uploads/2023/06/host-garage-750-80-e1687191953591.webp"
                                        alt="neighbor storage"
                                        width={450}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                    {/* Zippy Shell Logo Overlay - Top Left */}
                                    <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                                        <Image
                                            src="https://wowmover.com/wp-content/uploads/2023/06/neighbor.png"
                                            alt="neighbor Logo"
                                            width={120}
                                            height={40}
                                            className="h-10 w-auto object-contain"
                                        />
                                    </div>
                                </div>

                                {/* Star Rating */}
                                <div className="mt-4 flex items-center justify-end gap-2">
                                    <div className="flex items-center gap-1">
                                        {[...Array(3)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <Star className="h-5 w-5 text-gray-300" />
                                    </div>
                                    <span className="text-sm text-gray-600">3 Stars</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Breakdown Sections */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto space-y-20">

                        {/* Penske Breakdown */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0B2341] mb-6">Penske Truck Rentals: #1 for Long-Distance Moves</h2>
                            <div className="prose prose-lg text-gray-700">
                                <p className="mb-6">
                                    Penske stands out as the top choice for long-distance moves and large loads, offering the newest fleet in the industry with five truck sizes ranging from cargo vans to 26-foot trucks suitable for 5-7 room homes.
                                </p>
                                <p className="mb-8">
                                    With the best average pricing for moves over 100 miles and particularly competitive rates for 1,000+ mile relocations, Penske combines affordability with reliability and comprehensive service offerings.
                                </p>

                                <div className="bg-blue-50 p-8 rounded-xl mb-8">
                                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Why Penske is Our #1 Choice</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Check className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-gray-900">Best Prices for Long-Distance:</span>
                                                <p className="text-sm mt-1">Saves over $200 on ultra long-distance moves (1,000-2,000 miles) compared to competitors.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-gray-900">Industry's Newest Fleet:</span>
                                                <p className="text-sm mt-1">Significantly reduces the risk of breakdowns, providing peace of mind for long hauls.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-gray-900">Available Discounts:</span>
                                                <p className="text-sm mt-1">AAA (12%+), Military (10%), and Student (10%) discounts available.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Budget Breakdown */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0B2341] mb-6">Budget Truck Rentals: Unbeatable Local Move Pricing</h2>
                            <div className="prose prose-lg text-gray-700">
                                <p className="mb-6">
                                    Budget stands out as the most cost-effective option for local moves under 100 miles, combining the lowest upfront rates with extremely competitive mileage charges. Their average truck rental cost is just $27.60 compared to competitors charging $38.70-$328.09.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                        <h4 className="font-bold text-[#0B2341] mb-2">Upfront Rental Cost</h4>
                                        <div className="text-3xl font-bold text-green-600 mb-1">$27.60</div>
                                        <p className="text-sm text-gray-500">Average for local moves</p>
                                    </div>
                                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                                        <h4 className="font-bold text-[#0B2341] mb-2">Mileage Rate</h4>
                                        <div className="text-3xl font-bold text-green-600 mb-1">$0.47</div>
                                        <p className="text-sm text-gray-500">Per mile average</p>
                                    </div>
                                </div>

                                <p className="mb-6">
                                    Their partnership with Avis and extensive discount programs (up to 20% off) make Budget an excellent choice for budget-conscious movers, particularly those relocating locally or regionally.
                                </p>
                            </div>
                        </div>

                        {/* U-Haul Breakdown */}
                        <div>
                            <h2 className="text-3xl font-bold text-[#0B2341] mb-6">U-Haul: Maximum Availability & Comprehensive Services</h2>
                            <div className="prose prose-lg text-gray-700">
                                <p className="mb-6">
                                    U-Haul dominates the truck rental industry with unmatched availability through over 21,000 locations nationwide and the widest selection of seven distinct moving truck sizes designed specifically for domestic relocations rather than commercial freight.
                                </p>

                                <div className="bg-orange-50 p-8 rounded-xl mb-8">
                                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Why We Recommend U-Haul</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Check className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-gray-900">Massive Network:</span>
                                                <p className="text-sm mt-1">21,000+ locations mean minimal travel for pickup/drop-off and better availability.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-gray-900">One-Stop Shop:</span>
                                                <p className="text-sm mt-1">Offers moving containers, storage, trailers, and packing supplies all in one place.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
                                            <div>
                                                <span className="font-bold text-gray-900">Household Focus:</span>
                                                <p className="text-sm mt-1">Trucks designed for DIY movers with lower loading decks and mom's attic storage.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Penske Detailed Section */}
            <section className="py-16 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">Penske Truck Rentals: #1 for Long-Distance Moves</h2>
                        <div className="prose prose-lg text-gray-700 mb-12">
                            <p className="mb-6">
                                Penske stands out as the top choice for long-distance moves and large loads, offering the newest fleet in the industry with five truck sizes ranging from cargo vans to 26-foot trucks suitable for 5-7 room homes.
                            </p>
                            <p>
                                With the best average pricing for moves over 100 miles and particularly competitive rates for 1,000+ mile relocations, Penske combines affordability with reliability and comprehensive service offerings.
                            </p>
                            <p className="mt-4">
                                Their extensive discount programs and full-service approach make them an excellent choice for budget-conscious movers who don't want to compromise on quality and reliability.
                            </p>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Pros */}
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-[#5cdb5c] py-3 px-6">
                                    <h3 className="font-bold text-white text-lg">Pros</h3>
                                </div>
                                <ul className="p-6 space-y-4">
                                    {[
                                        "Best prices for long-distance moves (100+ miles)",
                                        "Newest truck fleet in the industry",
                                        "Excellent for large loads (3-5 bedroom homes)",
                                        "Multiple discount programs (AAA, Military, Student)",
                                        "Comprehensive service offerings",
                                        "Superior customer reviews and service",
                                        "Lower breakdown risk with newer trucks"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-[#5cdb5c] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-[#ef4444] py-3 px-6">
                                    <h3 className="font-bold text-white text-lg">Cons</h3>
                                </div>
                                <ul className="p-6 space-y-4">
                                    {[
                                        "Higher average pricing for local moves",
                                        "Limited truck size variety (only 5 options)",
                                        "May not be most economical for short local moves"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <X className="h-5 w-5 text-[#ef4444] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Truck Sizes Table */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-[#0B2341] mb-6">Penske Truck Sizes and Specifications</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-200 text-sm">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="border border-gray-200 p-4 text-left font-bold text-[#0B2341]">Internal Dimensions</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">11'11" x 6'6" x 6'1"</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">12' x 6'6" x 6'1"</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">16' x 7'7" x 6'6"</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">21'11" x 8'1" x 8'1"</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">25'11" x 8'1" x 8'1"</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Capacity</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">Up to 1 room</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">1-2 rooms</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">2-3 rooms</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">3-5 rooms</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">5-7 rooms</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Weight Limit (lbs)</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">3,500</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">3,100</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">4,300</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">10,000</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">10,000</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Interior Space (cu. ft.)</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">404</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">450</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">800</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">1,200</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">1,700</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Fuel Tank (gallons)</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">Up to 31</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">Up to 33</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">Up to 33</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">Up to 50</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">Up to 50</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Miles Per Gallon</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">12</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">12</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">12</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">13</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">13</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 italic">*Data as of April 20, 2021.</p>
                        </div>

                        {/* Pricing Comparison */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-[#0B2341] mb-8">Pricing Comparison: Penske vs U-Haul</h3>
                            <div className="bg-gray-50 rounded-xl p-8 space-y-12">
                                {/* Long Distance */}
                                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="text-center md:text-left">
                                        <h4 className="font-bold text-gray-700 mb-1">Long-Distance Moves (100+ miles)</h4>
                                        <p className="text-sm text-gray-500">Penske Average</p>
                                        <p className="text-2xl font-bold text-[#5cdb5c]">$1,944</p>
                                    </div>
                                    <div className="text-[#5cdb5c] font-bold text-xl">VS</div>
                                    <div className="text-center md:text-right">
                                        <p className="text-sm text-gray-500">U-Haul Average</p>
                                        <p className="text-2xl font-bold text-[#ef4444]">$1,945</p>
                                    </div>
                                </div>

                                {/* Ultra Long Distance */}
                                <div className="relative">
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                        <div className="text-center md:text-left">
                                            <h4 className="font-bold text-gray-700 mb-1">Ultra Long-Distance (1,000-2,000 miles)</h4>
                                            <p className="text-sm text-gray-500">Penske Average</p>
                                            <p className="text-2xl font-bold text-[#5cdb5c]">$2,471</p>
                                        </div>
                                        <div className="text-[#5cdb5c] font-bold text-xl">VS</div>
                                        <div className="text-center md:text-right">
                                            <p className="text-sm text-gray-500">U-Haul Average</p>
                                            <p className="text-2xl font-bold text-[#ef4444]">$2,684</p>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <span className="inline-block bg-[#5cdb5c]/10 text-[#5cdb5c] font-bold px-4 py-1 rounded-full text-sm">
                                            Penske saves you over $200!
                                        </span>
                                    </div>
                                </div>

                                {/* Large Homes */}
                                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                    <div className="text-center md:text-left">
                                        <h4 className="font-bold text-gray-700 mb-1">Large Homes (3-5 bedrooms)</h4>
                                        <p className="text-sm text-gray-500">Penske Average</p>
                                        <p className="text-2xl font-bold text-[#5cdb5c]">$2,141</p>
                                    </div>
                                    <div className="text-[#5cdb5c] font-bold text-xl">VS</div>
                                    <div className="text-center md:text-right">
                                        <p className="text-sm text-gray-500">U-Haul Average</p>
                                        <p className="text-2xl font-bold text-[#ef4444]">$2,225</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Available Discounts */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-[#0B2341] mb-6">Available Discounts</h3>
                            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                                <ul className="space-y-4">
                                    {[
                                        { title: "AAA Discounts:", desc: "12% or more off truck rental" },
                                        { title: "Military Discounts:", desc: "10% off truck rental" },
                                        { title: "College Student Discounts:", desc: "10% off truck rental" },
                                        { title: "Seasonal/Promotional Discounts:", desc: "Varied savings throughout the year" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="h-2 w-2 rounded-full bg-[#5cdb5c] mt-2 shrink-0"></span>
                                            <p className="text-gray-700">
                                                <span className="font-bold text-[#0B2341]">{item.title}</span> {item.desc}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Why Penske Detailed */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-[#0B2341]">Why Penske Is Our #1 Choice</h3>
                            <p className="text-gray-700">
                                Penske combines competitive pricing with superior service quality and the industry's newest fleet, making them the top choice for most long-distance and large-scale moves.
                            </p>

                            <div>
                                <h4 className="text-xl font-bold text-[#0B2341] mb-3">Best Prices for Long-Distance Moves and Large Loads</h4>
                                <p className="text-gray-700 mb-4">
                                    Based on over 100 quotes from leading truck rental companies, Penske consistently offers the best average pricing for moves over 100 miles. While the margin is narrow for all long-distance moves (Penske: $1,944 vs U-Haul: $1,945), Penske's value becomes particularly evident for specific scenarios:
                                </p>
                                <ul className="space-y-2 pl-4">
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5cdb5c] mt-2 shrink-0"></span>
                                        <span><span className="font-bold">Ultra Long-Distance (1,000-2,000 miles):</span> Penske averages $2,471 vs U-Haul's $2,684—over $200 in savings</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5cdb5c] mt-2 shrink-0"></span>
                                        <span><span className="font-bold">Large Homes (3-5 bedrooms):</span> Penske averages $2,141 vs U-Haul's $2,225</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-[#0B2341] mb-3">Industry's Newest Fleet</h4>
                                <p className="text-gray-700">
                                    Penske claims to maintain one of the industry's newest truck fleets, significantly reducing the risk of breakdowns during your move. This reliability factor, combined with their competitive pricing, provides excellent value for money. Even though they offer only five truck sizes, this range covers all moving needs from single rooms to large 7-room homes.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-[#0B2341] mb-3">Comprehensive Service and Discount Programs</h4>
                                <p className="text-gray-700 mb-4">
                                    Penske offers everything needed for a successful truck rental move, including tow dollies, loading labor teams, high-quality moving coverage, and the right vehicle for any job size. Their discount programs provide additional value:
                                </p>
                                <p className="text-gray-700 mb-4">
                                    With more positive customer reviews than almost any other truck rental company, Penske ensures first-rate customer service without breaking the bank. While their local move pricing may be higher than competitors on average, they have been known to offer exceptional deals for local relocations, making it worthwhile to get a quote regardless of distance.
                                </p>
                                <p className="text-sm font-bold text-gray-900">
                                    Pro tip: <span className="font-normal text-gray-700">Even if you're moving locally, it's worth getting a Penske quote as they occasionally offer the best possible rates for short-distance moves.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Budget Detailed Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">Budget Truck Rentals: Unbeatable Local Move Pricing</h2>
                        <div className="prose prose-lg text-gray-700 mb-12">
                            <p className="mb-6">
                                Budget stands out as the most cost-effective option for local moves under 100 miles, combining the lowest upfront rates with extremely competitive mileage charges. Their average truck rental cost is just $27.60 compared to competitors charging $38.70-$328.09.
                            </p>
                            <p className="mb-6">
                                With five truck sizes ranging from cargo vans to 26-foot trucks, plus additional pickup truck options for small moves, Budget offers adequate variety for most moving needs while maintaining their focus on affordability.
                            </p>
                            <p>
                                Their partnership with Avis and extensive discount programs (up to 20% off) make Budget an excellent choice for budget-conscious movers, particularly those relocating locally or regionally.
                            </p>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Pros */}
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-[#5cdb5c] py-3 px-6">
                                    <h3 className="font-bold text-white text-lg">Pros</h3>
                                </div>
                                <ul className="p-6 space-y-4">
                                    {[
                                        "Unbeatable rates for local moves (under 100 miles)",
                                        "Lowest upfront rental costs ($27.60 average)",
                                        "Extremely low mileage rates ($0.47/mile)",
                                        "Extensive discount programs (up to 20% off)",
                                        "Partnership with Avis for wider availability",
                                        "Additional pickup truck options",
                                        "Excellent for mid-sized to large local moves"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-[#5cdb5c] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-[#ef4444] py-3 px-6">
                                    <h3 className="font-bold text-white text-lg">Cons</h3>
                                </div>
                                <ul className="p-6 space-y-4">
                                    {[
                                        "Limited truck size variety (only 4-5 options)",
                                        "May not be most competitive for long-distance moves",
                                        "Lower fuel efficiency (8-14 MPG)",
                                        "Fleet may be older than premium competitors"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <X className="h-5 w-5 text-[#ef4444] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Truck Sizes Table */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-[#0B2341] mb-6">Budget Truck Sizes and Specifications</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-200 text-sm">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th className="border border-gray-200 p-4 text-left font-bold text-[#0B2341]">Internal Dimensions</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">11' x 6'6" x 6'</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">10' x 6'3" x 6'</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">16' x 6'3" x 6'7"</th>
                                            <th className="border border-gray-200 p-4 text-center font-bold text-[#0B2341]">26' x 8'1" x 8'1"</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Capacity</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">1 room/studio</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">1-2 rooms</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">3-4 rooms</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">5-8 rooms</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Weight Limit (lbs)</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">3,400</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">3,100</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">4,400</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">10,000</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Interior Space (cu. ft.)</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">357</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">380</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">658</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">1,698</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Fuel Tank (gallons)</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">25</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">35</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">33</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">50</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-200 p-4 font-semibold text-gray-700">Miles Per Gallon</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">8-14</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">8-14</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">6-12</td>
                                            <td className="border border-gray-200 p-4 text-center text-gray-600">8-10</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 italic">*Data as of April 20, 2021.</p>
                        </div>

                        {/* Local Move Pricing Comparison */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-[#0B2341] mb-8">Local Move Pricing Comparison</h3>
                            <div className="bg-gray-50 rounded-xl p-8 space-y-12">
                                {/* Average Upfront Rental Cost */}
                                <div>
                                    <h4 className="text-center font-bold text-[#0B2341] mb-6">Average Upfront Rental Cost</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Budget</p>
                                            <p className="text-2xl font-bold text-[#5cdb5c]">$27.60</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">U-Haul</p>
                                            <p className="text-2xl font-bold text-[#ef4444]">$38.70</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Penske</p>
                                            <p className="text-2xl font-bold text-[#ef4444]">$328.09</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mileage Rate Comparison */}
                                <div>
                                    <h4 className="text-center font-bold text-[#0B2341] mb-6">Mileage Rate Comparison</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Budget</p>
                                            <p className="text-2xl font-bold text-[#5cdb5c]">$0.47/mile</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">U-Haul</p>
                                            <p className="text-2xl font-bold text-[#ef4444]">$0.99/mile</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1">Penske</p>
                                            <p className="text-2xl font-bold text-[#ef4444]">$1.29/mile</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Example Trip */}
                                <div className="bg-blue-50 rounded-lg p-6">
                                    <p className="text-sm font-bold text-[#0B2341] mb-4">60-Mile Round-Trip Example:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                        <div className="font-bold text-[#5cdb5c]">Budget: ~$60</div>
                                        <div className="font-bold text-[#ef4444]">U-Haul: ~$100</div>
                                        <div className="font-bold text-[#ef4444]">Penske: ~$400+</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Discount Programs */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-[#0B2341] mb-6">Discount Programs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { title: "Military Personnel", discount: "20% OFF", desc: "All rental types" },
                                    { title: "AARP Members", discount: "20% OFF", desc: "Sun-Thu / 10% Fri-Sat" },
                                    { title: "First Responders", discount: "20% OFF", desc: "Police, Fire, EMT (local) / 15% (one-way)" },
                                    { title: "Motor Club Members", discount: "20% OFF", desc: "Local moves / 15% one-way" },
                                    { title: "Bar Association", discount: "20% OFF", desc: "Local moves / 15% one-way" },
                                    { title: "Students", discount: "20% OFF", desc: "Local moves / 15% one-way" }
                                ].map((item, i) => (
                                    <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-[#0B2341] mb-1">{item.title}</h4>
                                        <p className="text-[#5cdb5c] font-bold text-xl mb-1">{item.discount}</p>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why We Recommend Budget */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-[#0B2341]">Why We Recommend Budget</h3>
                            <p className="text-gray-700">
                                Budget excels as the most economical choice for local and regional moves, combining rock-bottom upfront costs with the industry's lowest mileage rates to deliver unmatched value for shorter distances.
                            </p>

                            <div>
                                <h4 className="text-xl font-bold text-[#0B2341] mb-3">Unbeatable Rates for Local Moves</h4>
                                <p className="text-gray-700 mb-4">
                                    For moves under 100 miles, especially those requiring mid-sized to large trucks, Budget consistently offers the most affordable option in the market. The numbers speak for themselves:
                                </p>
                                <ul className="space-y-2 pl-4 mb-4">
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5cdb5c] mt-2 shrink-0"></span>
                                        <span><span className="font-bold">Upfront rental cost:</span> $27.60 average (vs $38.70 U-Haul, $328.09 Penske)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5cdb5c] mt-2 shrink-0"></span>
                                        <span><span className="font-bold">Mileage rate:</span> $0.47/mile (vs $0.99 U-Haul, $1.29 Penske)</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-gray-700">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5cdb5c] mt-2 shrink-0"></span>
                                        <span><span className="font-bold">Total cost example:</span> 60-mile round-trip costs ~$60 with Budget vs ~$100 U-Haul or $400+ Penske</span>
                                    </li>
                                </ul>
                                <p className="text-gray-700">
                                    While Enterprise and Home Depot may offer lower mileage rates in some cases, Enterprise's upfront fees average $129.77 (over $100 more than Budget), and Home Depot's unlimited mileage only applies to very small vehicles with limited capacity.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-[#0B2341] mb-3">Strategic Partnership with Avis</h4>
                                <p className="text-gray-700">
                                    Budget's collaboration with Avis Car Rental extends their reach and availability by providing cargo vans and larger moving trucks to Avis customers. This partnership increases access points and service areas, making Budget trucks more convenient to rent in various locations.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-[#0B2341] mb-3">Comprehensive Discount Programs</h4>
                                <p className="text-gray-700 mb-4">
                                    Budget offers some of the most generous discount programs in the truck rental industry, with savings up to 20% off for various groups. Notable discounts include:
                                </p>
                                <p className="text-gray-700 mb-4">
                                    The company also provides seasonal and special promotional discounts regularly, so it's worth checking their website or asking customer service representatives about current offers when booking your rental.
                                </p>
                                <p className="text-gray-700">
                                    These discounts can be combined with Budget's already low base rates, making them an unbeatable choice for local moves, especially for qualifying customers like military personnel, students, or AARP members.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-[#0B2341] mb-3">Adequate Fleet Variety with Added Options</h4>
                                <p className="text-gray-700">
                                    While Budget offers a more limited selection with four main truck sizes compared to some competitors, their range adequately covers most moving needs from studio apartments to large 8-room homes. Additionally, they provide full-size pickup trucks for small local moves and home renovation projects, offering flexibility for customers with minimal moving requirements or specific hauling needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* U-Haul Detailed Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">U-Haul: Maximum Availability & Comprehensive Services</h2>
                        <div className="prose prose-lg text-gray-700 mb-8">
                            <p className="mb-6">
                                U-Haul dominates the truck rental industry with unmatched availability through over 21,000 locations nationwide and the widest selection of seven distinct moving truck sizes designed specifically for domestic relocations rather than commercial freight.
                            </p>
                            <p className="mb-6">
                                Beyond truck rentals, U-Haul offers the most comprehensive suite of moving services in the industry, including moving containers, self-storage, cargo trailers, and an extensive selection of tow trailers and accessories.
                            </p>
                            <p>
                                While not always the cheapest option, U-Haul's massive network and service variety make it the most convenient and reliable choice for movers who value accessibility and one-stop shopping for all their moving needs.
                            </p>
                        </div>

                        {/* Green Banner */}
                        <div className="bg-[#4caf50] rounded-xl p-6 text-center text-white mb-12 shadow-md">
                            <h3 className="text-3xl font-bold mb-2">21,000+</h3>
                            <p className="text-xl font-semibold mb-1">Locations Nationwide</p>
                            <p className="text-sm opacity-90">More than any other truck rental company</p>
                        </div>

                        {/* Pros and Cons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {/* Pros */}
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-[#5cdb5c] py-3 px-6">
                                    <h3 className="font-bold text-white text-lg">Pros</h3>
                                </div>
                                <ul className="p-6 space-y-4">
                                    {[
                                        "Most locations (21,000+) for maximum availability",
                                        "Widest truck variety (7 different sizes)",
                                        "Most comprehensive service offerings",
                                        "Second-best pricing for local and one-way moves",
                                        "Trucks designed specifically for moving (not freight)",
                                        "Unmatched convenience for pickup/drop-off",
                                        "Best supply availability during peak times"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-[#5cdb5c] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Cons */}
                            <div className="border border-gray-200 rounded-lg overflow-hidden">
                                <div className="bg-[#ef4444] py-3 px-6">
                                    <h3 className="font-bold text-white text-lg">Cons</h3>
                                </div>
                                <ul className="p-6 space-y-4">
                                    {[
                                        "Not the cheapest option for any category",
                                        "Limited discount programs compared to competitors",
                                        "Mixed customer reviews",
                                        "Requires physical lifting and long driving hours",
                                        "Additional costs (gas, lodging) for long moves"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <X className="h-5 w-5 text-[#ef4444] shrink-0 mt-0.5" />
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* 7 Different Truck Sizes Indicator */}
                        <div className="border border-gray-200 rounded-xl p-8 text-center mb-16 shadow-sm">
                            <h3 className="text-4xl font-bold text-[#5cdb5c] mb-2">7</h3>
                            <h4 className="text-xl font-bold text-[#0B2341] mb-2">Different Truck Sizes</h4>
                            <p className="text-gray-500">Widest selection in the industry for any moving need</p>
                        </div>

                        {/* Comprehensive Service Offerings */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-[#0B2341] mb-8">Comprehensive Service Offerings</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    { icon: Truck, title: "Moving Trucks", desc: "7 different sizes designed specifically for household moves, not commercial freight", color: "text-orange-500" },
                                    { icon: Package, title: "Moving Containers", desc: "U-Box containers for flexible moving and storage solutions", color: "text-brown-500" },
                                    { icon: Warehouse, title: "Self-Storage", desc: "Storage facilities available at thousands of locations nationwide", color: "text-blue-500" },
                                    { icon: Truck, title: "Cargo Trailers", desc: "Extensive selection of cargo trailers for additional hauling capacity", color: "text-green-600" },
                                    { icon: Globe, title: "Tow Trailers", desc: "Larger selection of tow trailers than most competitors", color: "text-gray-600" },
                                    { icon: Shield, title: "Moving Coverage", desc: "Comprehensive insurance and protection options", color: "text-red-500" }
                                ].map((item, i) => (
                                    <div key={i} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow flex flex-col items-center">
                                        <item.icon className={`h-10 w-10 ${item.color} mb-4`} />
                                        <h4 className="font-bold text-[#0B2341] mb-2">{item.title}</h4>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Why We Recommend U-Haul */}
                        <div className="space-y-10 mb-16">
                            <h3 className="text-2xl font-bold text-[#0B2341]">Why We Recommend U-Haul</h3>

                            <div className="bg-blue-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Globe className="h-6 w-6 text-blue-600" />
                                    <h4 className="text-xl font-bold text-[#0B2341]">Unmatched Location Network</h4>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    With over 21,000 locations nationwide, U-Haul offers greater availability than any other moving truck provider. This massive network provides two critical advantages:
                                </p>
                                <ul className="space-y-2 pl-4">
                                    <li className="text-sm text-gray-700"><span className="font-bold text-green-600">• Cost savings:</span> More locations mean better supply management and competitive pricing during peak moving seasons</li>
                                    <li className="text-sm text-gray-700"><span className="font-bold text-green-600">• Convenience:</span> Minimal travel for pickup/drop-off and alternative locations if your preferred size isn't available</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <DollarSign className="h-6 w-6 text-yellow-600" />
                                    <h4 className="text-xl font-bold text-[#0B2341]">Competitive Pricing Through Scale</h4>
                                </div>
                                <p className="text-gray-700">
                                    While U-Haul doesn't always offer the absolute lowest prices, their massive fleet and location network allow them to maintain competitive rates and better availability during high-demand periods. Moving costs are largely driven by supply and demand, and U-Haul's scale helps stabilize pricing when equipment becomes scarce.
                                </p>
                            </div>

                            <div className="bg-orange-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <BarChart className="h-6 w-6 text-orange-600" />
                                    <h4 className="text-xl font-bold text-[#0B2341]">Performance Rankings</h4>
                                </div>
                                <p className="text-gray-700">
                                    U-Haul consistently ranks second for both local rentals and one-way moves, making them a reliable choice when the cheapest option isn't available or doesn't meet your specific needs.
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Wrench className="h-6 w-6 text-gray-600" />
                                    <h4 className="text-xl font-bold text-[#0B2341]">Purpose-Built Moving Trucks</h4>
                                </div>
                                <p className="text-gray-700">
                                    U-Haul claims to be the only company working directly with truck manufacturers to design vehicles exclusively for domestic relocations rather than commercial freight. This focus on household moving needs results in trucks better suited for furniture, appliances, and personal belongings with features like lower loading heights and residential-friendly designs.
                                </p>
                            </div>

                            <div className="bg-blue-50 rounded-xl p-6">
                                <div className="flex items-center gap-3 mb-3">
                                    <Package className="h-6 w-6 text-blue-600" />
                                    <h4 className="text-xl font-bold text-[#0B2341]">Most Comprehensive Service Menu</h4>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    U-Haul truly excels in service variety, offering everything competitors provide plus unique additions. While Penske and Budget offer broad service menus including moving coverage and labor, U-Haul extends beyond basic truck rental with:
                                </p>
                                <p className="text-gray-700">
                                    This comprehensive approach makes U-Haul a one-stop shop for all moving needs, reducing the hassle of coordinating with multiple vendors. Even though customer reviews are mixed, the sheer breadth of services available is hard to match in the industry.
                                </p>
                            </div>
                        </div>

                        {/* Important Considerations */}
                        <div className="bg-gray-50 rounded-xl p-8 mb-12 border border-gray-200">
                            <div className="flex items-center gap-3 mb-4">
                                <Lightbulb className="h-6 w-6 text-yellow-500" />
                                <h4 className="text-xl font-bold text-[#0B2341]">U-Haul vs. Full-Service Movers</h4>
                            </div>
                            <p className="text-gray-700 mb-4">
                                While renting a U-Haul is less expensive than hiring full-service movers, the savings may not be as substantial as expected when considering:
                            </p>
                            <ul className="space-y-2 pl-4">
                                <li className="text-sm text-gray-700 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> Physical demands of loading, driving, and unloading</li>
                                <li className="text-sm text-gray-700 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> Time investment for long-distance drives</li>
                                <li className="text-sm text-gray-700 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> Additional expenses like fuel, lodging, and meals</li>
                                <li className="text-sm text-gray-700 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-red-500"></span> Potential for damage without professional handling</li>
                            </ul>
                        </div>

                        {/* Best For */}
                        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                            <div className="flex items-center gap-3 mb-2">
                                <ThumbsUp className="h-6 w-6 text-green-600" />
                                <h4 className="text-lg font-bold text-[#0B2341]">Best For</h4>
                            </div>
                            <p className="text-sm text-gray-700">
                                U-Haul is ideal for movers who prioritize convenience, availability, and comprehensive service options over rock-bottom pricing. Their massive network makes them particularly valuable during peak moving seasons or in areas with limited competition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* FAQ Section */}
            <FAQSection items={faqData} />

            <section className="py-16 bg-gray-50 border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">How We Reviewed The Best Moving Truck Rental Companies?</h2>
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                We rank the best moving truck rental companies in the USA after analyzing them comprehensively. The process starts with researching several companies' pricing, vehicle availability, and customer service for more than five years. We then review each company's website, customer reviews, and fleet quality standards.
                            </p>
                            <p>
                                We often pay customers for real feedback to understand the company's reliability, vehicle condition, and overall rental experience. We repeat this process annually to keep our consumers up to date with current information. So, the prices and services of the companies mentioned are updated yearly based on actual market rates and seasonal variations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
