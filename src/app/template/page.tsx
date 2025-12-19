import Image from "next/image";
import Link from "next/link";
import { Star, StarHalf, Check, Phone, X, Truck, Calendar, MapPin, DollarSign, Globe, Package, Warehouse, Shield, BarChart, Wrench, Lightbulb, ThumbsUp } from 'lucide-react';
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
        name: "U-Pack",
        logo: "https://wowmover.com/wp-content/uploads/2018/08/Penske-Logo-scaled.jpg",
        badge: "Best tow dolly",
        onlineQuotes: "Yes",
        rating: 4.0,
        pros: ["Nationwide availability", "Guaranteed reservations if you reserve at least 48 hours in advance"],
        phone: "(866)883-6921",
        quoteLink: "https://wowmover.com/upack/"
    },

    {
        name: "U-Haul",
        logo: "https://wowmover.com/wp-content/uploads/2018/08/UH-7379AART-UH-AUTHORIZED-DEALER-1-scaled.jpg",
        badge: "Easy to use",
        onlineQuotes: "No",
        rating: 4,
        pros: ["Affordable car hauler", "Easy access loading ramp"],
        phone: "(833)891-0559",
        quoteLink: "https://wowmover.com/portable-in-demand/"
    },
    {
        name: "Budget Truck Rental",
        logo: "https://wowmover.com/wp-content/uploads/2018/08/logo-1-1.png",
        badge: "Most affordable",
        onlineQuotes: "No",
        rating: 5,
        pros: ["Looking for moving truck rental discounts", "Looking for budget-friendly one-way"],
        phone: "(833)715-1770",
        quoteLink: "https://wowmover.com/PACK-RAT"
    },
    {
        name: "America Freight",
        logo: "https://wowmover.com/wp-content/uploads/2023/06/amerifreight-svg.svg",
        badge: "Most truck sizes",
        onlineQuotes: "Yes",
        rating: 4,
        pros: ["17 years experience", "Guaranteed Rates", "BBB Accredited and Highly Rated"],
        phone: "(833)462-1107",
        quoteLink: "https://wowmover.com/u-haul/"
    },
    {
        name: "Home Depot",
        logo: "https://wowmover.com/wp-content/uploads/2023/06/Montway-Auto-Transport_idCIUP41Ej_1.svg",
        badge: "Best for quick moves",
        onlineQuotes: "Yes",
        rating: 4,
        pros: ["9 years experience", "Fast & reliable nationwide auto transport company"],
        phone: "(833)554-3260",
        quoteLink: "https://wowmover.com/home-depot/"
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
export default function BestCarCarrierCompaniesRecommendation() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#1e3a8a] mb-6 leading-tight">
                            Best Auto
                            <br />
                            Transport Companies
                        </h1>
                        <div className="text-gray-600 space-y-4 mb-4">
                            <p>
                                Whether you want to transport your vehicle, auto transport
                                companies are your best bet. But finding the best one is tough,
                                though. You have to do research and compare each company&apos;s
                                features.
                            </p>
                            <p>
                                This is a long and time-consuming process; if you want to follow
                                the easy path, read this whole article. Here, we discuss the best
                                5 auto transport companies by mentioning their prices, ratings,
                                services, and more–
                            </p>
                        </div>
                        <nav className="text-sm text-gray-500 mt-6">
                            <Link href="/" className="hover:text-blue-600 transition-colors">
                                Home
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-400">Auto Transport</span>
                        </nav>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-lg aspect-[4/3]">
                            <Image
                                src="https://wowmover.com/wp-content/uploads/2025/02/auto-transport-montway.jpg"
                                alt="Auto Transport Illustration showing a tow truck and a car"
                                fill
                                className="object-contain"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="mb-12">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-6">
                        What Are The Best Auto Transport Companies?
                    </h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span><strong className="text-gray-900">Penske:</strong> Best Overall</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span><strong className="text-gray-900">U-Haul:</strong> Best Easy to use</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span><strong className="text-gray-900">Montway:</strong> Best for Long-Distance Moves</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span><strong className="text-gray-900">AmeriFreight:</strong> Best for Discounts</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span><strong className="text-gray-900">Budget:</strong> Best for Price Matching</span>
                        </li>
                    </ul>
                </div>
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


                {/* Cheapest Moving Container Companies Section */}
                <section className="bg-white py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Images on the left with overlapping layout */}
                            <div className="relative">
                                {/* Top image - Moving truck */}
                                <div className="relative z-10">
                                    <Image
                                        src="https://wowmover.com/wp-content/uploads/2022/02/truck-rental-1.jpg"
                                        alt="Moving truck with container"
                                        width={463}
                                        height={309}
                                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                                {/* Bottom image - Shipping containers - overlapping and extending to the right */}
                                <div className="relative -mt-32 ml-auto w-[90%] z-20">
                                    <Image
                                        src="https://wowmover.com/wp-content/uploads/2022/02/truck-rental-2.jpg"
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
                                    Best Moving Truck Rentals Companies
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Over a hundred quotations were obtained, genuine customers were interviewed, and the services provided by the industry's leading moving truck rental firms were investigated. We'll help you choose the best moving truck business for your budget based on our combined 20 years of industry knowledge.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Section Title */}
                        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
                            Best Cheap Moving Containers
                        </h2>

                        {/* U-Pack Review */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                                {/* Left Content */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-[#0B2341]">
                                        1.  Truck Rentals: Penske Review
                                    </h3>

                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            Penske Truck Rental is one of the nation’s leading moving truck suppliers, with sites across the United States and Canada. Out of all the truck rental firms on our list, it routinely receives the largest number of positive customer ratings on platforms such as Yelp and Google Reviews.    </p>
                                        <p>
                                            Penske took the top rank on our list due to its extensive variety of services and inexpensive costs for long-distance movers (moves of more than 100 miles) and big truck rentals.
                                        </p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href="https://wowmover.com/upack/"
                                            className="px-6 py-3 rounded-lg bg-[#76Dba8] text-white font-bold text-sm hover:bg-[#68c994] transition-colors"
                                        >
                                            Get Free Quote
                                        </a>
                                        <a
                                            href="tel:(833)241-3873"
                                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                        >
                                            <Phone className="h-4 w-4" />
                                            (866)833-6921
                                        </a>
                                    </div>
                                </div>

                                {/* Right Image with Logo */}
                                <div className="relative">
                                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src="https://wowmover.com/wp-content/uploads/2022/02/penske-bg.jpg"
                                            alt="yellow truck"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* U-Pack Logo Overlay */}
                                        <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2018/08/Penske-Logo-scaled.jpg"
                                                alt="Penske Logo"
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
                                            src="https://wowmover.com/wp-content/uploads/2022/02/budget-truck-bg.jpg"
                                            alt="budget container"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* 1-800-PACK-RAT Logo Overlay */}
                                        <div className="absolute top-4 right-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2018/08/logo-1-1.png"
                                                alt="budget Logo"
                                                width={120}
                                                height={40}
                                                className="h-10 w-auto object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(4)].map((_, i) => (
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
                                        2. Truck Rentals: Budget Truck Review
                                    </h3>

                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            Budget has facilities around the country and provides every service that a moving truck business should. Unfortunately, Budget is outperformed by Penske in terms of truck rental sizes, customer satisfaction, and long-distance pricing.  </p>
                                        <p>
                                            However, for local movers (moves less than 100 miles), the firm provides the most bang for the buck, which should come as no surprise for a company-branded “Budget.” </p>
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
                                        3. U-Haul Truck Rental
                                    </h3>

                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            U-Haul is the most well-known moving truck firm in the market, and it is often associated with do-it-yourself moving. However, the organization does not provide the finest customer service or the most affordable moving truck rental rates.

                                        </p>
                                        <p>
                                            U-Haul, on the other hand, outperforms competitors in two ways: availability and the sheer amount of services.
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
                                            (833)831-0559
                                        </a>
                                    </div>
                                </div>

                                {/* Right Image with Logo */}
                                <div className="relative">
                                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src="https://wowmover.com/wp-content/uploads/2022/02/u-haul-bg-2.jpg"
                                            alt="uhaul moving container"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* PODS Logo Overlay - Top Left */}
                                        <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2018/08/UH-7379AART-UH-AUTHORIZED-DEALER-1-scaled.jpg"
                                                alt="uhaul Logo"
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
                                            src="https://wowmover.com/wp-content/uploads/2023/06/enterprise-rental-truck.jpg"
                                            alt="enterprise"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* U-Haul Logo Overlay - Top Right */}
                                        <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2023/06/Truck_Logo.png"
                                                alt="enterprise Logo"
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
                                            {[...Array(2)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-gray-300" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">3.5 Stars</span>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-[#0B2341]">
                                        4. Enterprise Truck Rental
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
                                            href="tel:(833)462-1107"
                                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0B2341] text-white font-bold text-sm hover:bg-[#1a3b5d] transition-colors"
                                        >
                                            <Phone className="h-4 w-4" />
                                            (833)554-3260
                                        </a>
                                    </div>
                                </div>

                                {/* Right Image with Logo */}
                                <div className="relative">
                                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                                        <Image
                                            src="https://wowmover.com/wp-content/uploads/2023/06/Home_Depot_truck_1168331786-1-e1687187192888.jpg"
                                            alt="home depot"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* Zippy Shell Logo Overlay - Top Left */}
                                        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2023/06/home-depot.png"
                                                alt="depot Logo"
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
            </div>
        </div>
    );
}
