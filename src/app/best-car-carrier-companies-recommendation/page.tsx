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
                                        src="https://wowmover.com/wp-content/uploads/2022/02/car-carrier-1.jpg"
                                        alt="car transport"
                                        width={463}
                                        height={309}
                                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                                {/* Bottom image - Shipping containers - overlapping and extending to the right */}
                                <div className="relative -mt-32 ml-auto w-[90%] z-20">
                                    <Image
                                        src="https://wowmover.com/wp-content/uploads/2022/02/car-carrier-2.jpg"
                                        alt="car towing"
                                        width={416}
                                        height={277}
                                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Content on the right */}
                            <div className="space-y-6">
                                <h2 className="text-4xl font-bold text-[#0B2341] leading-tight">
                                    Best Auto Transport Companies
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Collected over a hundred quotes, interviewed real customers, and researched the services offered by the industry's best moving truck and trailer rental companies. With over 20 years of industry experience, we'll help you find the right moving company that offers trailers for your budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        {/* Section Title */}
                        <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">
                            Top 5 Best Auto Transport Companies
                        </h2>

                        {/* U-Pack Review */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                                {/* Left Content */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-[#0B2341]">
                                        1.  Auto Transport: Penske Review

                                    </h3>

                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            Unlike U-Haul, Penske has a great reputation for customer service and transparency: It makes good on the features and benefits it advertises. Basically, what you see is what you get when it comes to Penske, and that’s something few moving companies can claim.
                                            For example, Penske guarantees reservations for your preferred truck size and pickup location. Other companies may offer this—but only at an added cost.

                                        </p>
                                        <p>Our only complaint? Penske rents car trailers but doesn’t offer other types of moving trailers. Plus, it doesn’t allow you to tow its trailers behind anything other than a Penske rental truck.

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
                                            src="https://wowmover.com/wp-content/uploads/2022/02/penske-bg-4.jpg"
                                            alt="PENSKE truck"
                                            width={400}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />

                                        <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2025/12/penske-svg.svg"
                                                alt="penske Logo"
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
                                            src="https://wowmover.com/wp-content/uploads/2022/02/u-haul-bg-4.jpg"
                                            alt="budget container"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* 1-800-PACK-RAT Logo Overlay */}
                                        <div className="absolute top-4 right-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2025/12/U-Haul_idzM6WsrVO_0.svg"
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
                                            {[...Array(5)].map((_, i) => (
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
                                        2. Auto Transport: U-haul Review
                                    </h3>

                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>

                                            Auto Transport: U-haul Review
                                            banner 4 Stars
                                            2. Auto Transport: U-haul Review
                                            U-Haul allows you to rent its moving trailers a la carte, which means you don’t have to rent a moving truck to get a cargo trailer or tow dolly. This sets U-Haul apart from its competitors, who require you to rent moving trailers and car trailers/tow dollies all at the same time.
                                        </p>
                                        <p>
                                            U-Haul is also the only company on our list to offer moving trailers in addition to car carriers and tow dollies (the others don’t offer trailers). In fact, U-Haul knocks it out of the park with its thirteen trailer options.
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
                                            href="tel:(833)891-0559"
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
                                        3. Auto Transport: Budget Truck Review
                                    </h3>

                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            If you’re wondering what Budget is best for, its name is a straight giveaway.
                                        </p>
                                        <p>
                                            Budget is ideal for the price-conscious mover. And while the company only allows you to rent a car trailer or car dolly as part of an existing truck reservation, it offers low rates plus a slew of discounts to curb your overall cost.
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
                                            href="tel:(833)715-1770"
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
                                            src="https://wowmover.com/wp-content/uploads/2022/02/budget-truck-bg-4.jpg"
                                            alt="amerifreight"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* PODS Logo Overlay - Top Left */}
                                        <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2025/12/budget-svg.svg"
                                                alt="amerifreight Logo"
                                                width={100}
                                                height={40}
                                                className="h-10 w-auto object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="mt-4 flex items-center justify-end gap-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
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
                                            src="https://wowmover.com/wp-content/uploads/2023/06/IMG_3724-1-e1686959307296.jpg"
                                            alt="amerifreight"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* U-Haul Logo Overlay - Top Right */}
                                        <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2023/06/amerifreight-svg.svg"
                                                alt="amerifreight Logo"
                                                width={100}
                                                height={100}
                                                className="h-16 w-16 object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Star Rating */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[...Array(4)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            {[...Array(1)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-gray-300" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">3.5 Stars</span>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-[#0B2341]">
                                        4. AmeriFreight Review

                                    </h3>

                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            With AmeriFreight, moving is as simple as making a phone call (or following our easy online quote process). Whether you are looking for a door-to-door service, moving to the other side of the country, or just crossing state lines, we put our customers first. We understand that your car is one of your most prized possessions, and with the help of the latest auto shipping technology and personalized customer service, you can expect your car to be delivered to its destination just like royalty! It’s what makes us a top-rated car shipping company!

                                        </p>
                                        <p>
                                            By choosing AmeriFreight, you are choosing a smooth moving experience with a top-rated car shipping company. Your car is at the center of all our efforts. You just point the way and we’ll get moving! Our goal is to offer customized car shipping services at the lowest rates possible, providing updates along the way.


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
                                            href="tel:(833)462-1107"
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
                                        5. Montway
                                    </h3>

                                    <div className="space-y-4 text-gray-700 leading-relaxed">
                                        <p>
                                            We’re a top-rated auto transport company, so your car will get from point A to point B without you having to break a single sweat. By having your car delivered straight to your door, you’re allowing the experts to handle every step of the process and ensure there are no speed bumps along the way.</p>
                                        <p>
                                            Why choose our auto transport company? Montway Auto Transport works with you through every step of your car or truck’s move. Experience hassle-free shipping when you choose us as your car transporter and enjoy an easy and painless shipment process.

                                        </p>
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
                                            src="https://wowmover.com/wp-content/uploads/2023/06/91776405982428ed7f406f78e8c20588-e1686959508139.jpg"
                                            alt="home depot"
                                            width={450}
                                            height={300}
                                            className="w-full h-auto object-cover"
                                        />
                                        {/* Zippy Shell Logo Overlay - Top Left */}
                                        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                                            <Image
                                                src="https://wowmover.com/wp-content/uploads/2023/06/Montway-Auto-Transport_idCIUP41Ej_1.svg"
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
                                            {[...Array(4)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                            ))}
                                            {[...Array(1)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 text-gray-300" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">3.5 Stars</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Penske Section */}
                <section className="bg-white py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">Penske</h2>
                        <p className="text-gray-700 mb-6">
                            When hiring Penske for a giant reputable firm, you can ask questions like does Penske trail car? Yes, but when you look for car trailer rental or truck to haul, you will find no other moving companies options.
                        </p>
                        <p className="text-gray-700 mb-8">
                            Only simple moving trucks are available for your problem of how does a car tow a trailer? So our perspective says that it trails only at an extra cost.
                        </p>
                        <p className="text-gray-700 mb-12">
                            Usually, tow dollies are not so reliable but cheap options? Moving unless truck doesn&apos;t allow you a native hitch and raising wheel chain is always a problem.
                        </p>

                        <h3 className="text-2xl font-bold text-[#0B2341] mb-6">Trailers Penske offers</h3>

                        <h4 className="text-xl font-bold text-[#0B2341] mb-4">Car carriers</h4>
                        <p className="text-gray-700 mb-4">
                            Penske car carrier weight limit is 4,050 lbs. Penske car carrier sizes only one. There are no size issues to detail out but safety chain and renting truck you need maximum while for your trip with moving.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Penske car carrier instructions will tell about drive over wheel chain. They tell how to use weight limit tow dolly. Before tow, you need to check wheel road to the load we use for your trips.
                        </p>

                        <h5 className="font-bold text-[#0B2341] mb-2">Penske car carrier specs</h5>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-sm text-left border-collapse border border-gray-200">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r w-1/3">Weight limit</th>
                                        <td className="py-2 px-4 text-gray-700">4,050 lbs.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Accommodates</th>
                                        <td className="py-2 px-4 text-gray-700">Yes</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Four-wheel drive</th>
                                        <td className="py-2 px-4 text-gray-700">Yes</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Maximum tire width</th>
                                        <td className="py-2 px-4 text-gray-700">Yes</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Best for</th>
                                        <td className="py-2 px-4 text-gray-700">All vehicles (up to 4,050 lbs.)</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Long distance % haul</th>
                                        <td className="py-2 px-4 text-gray-700">Any proximity</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="text-xl font-bold text-[#0B2341] mb-4">Car dolly</h4>
                        <p className="text-gray-700 mb-6">
                            Like car carriers, Penske has dolly rent too. The features of Penske truck rental tow dolly make budget truck rental auto tow dolly a rival.
                            Try driving your own car over. With rear wheels, there will be no issue to transport ever with truck.
                        </p>

                        <h5 className="font-bold text-[#0B2341] mb-2">Penske tow dolly low down</h5>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-sm text-left border-collapse border border-gray-200">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r w-1/3">Weight limit</th>
                                        <td className="py-2 px-4 text-gray-700">4,300 lbs.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Front-wheel drive</th>
                                        <td className="py-2 px-4 text-gray-700">Yes</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Four-wheel drive</th>
                                        <td className="py-2 px-4 text-gray-700">No</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Maximum tire width</th>
                                        <td className="py-2 px-4 text-gray-700">No</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Best for</th>
                                        <td className="py-2 px-4 text-gray-700">Front-wheel drive vehicles</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Long distance % haul</th>
                                        <td className="py-2 px-4 text-gray-700">Local</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold text-[#0B2341] mb-4">How much does it cost to move with Penske?</h3>
                        <p className="text-gray-700 mb-4">
                            Penske asks for a valid driver license like credit cards. Before you use other credit cards and banks similar to that $$$. If loss of your brother, the charge for credit card, like cash available they use some deposit during trip.
                        </p>
                        <p className="text-gray-700 mb-4">
                            If you need a tow dolly rental, Penske is a good option. They are not very expensive issues to use like 'pay up now, we save rate'.
                        </p>
                        <p className="text-gray-700 mb-4">
                            For home, we just paid price of <span className="text-green-600 font-bold">$2,275</span> for a move car using truck rental and car hauling. In contrast, U-Haul cost a little less. The cost to rent which would be double the expense on how many miles the trailer license you or need.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Similarly cost effectiveness, if the same we get a free move advice, if we rented again in my moving, our rates could easily be double.
                        </p>
                    </div>
                </section>

                {/* U-Haul Section */}
                <section className="bg-white py-16 border-t border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">U-Haul</h2>
                        <p className="text-gray-700 mb-4">
                            2. U-Haul asks you to rent moving trailers to order. When mover of your own house or rent a moving to be get cargo trailer when duly. The only U-Haul would have its own offers. All consider you are moving trailers and car trailers that do alike at the same time.
                        </p>
                        <p className="text-gray-700 mb-8">
                            U-Haul is the only company on our list offering moving trailer capabilities to consumers and relocation (the others don&apos;t offer rent). In fact, U-Haul makes it at the pass with U-Haul rental service.
                        </p>
                        <p className="text-gray-700 mb-12">
                            We continue our overview, though with U-Haul car trailer cost details some trailers!
                        </p>

                        <h3 className="text-2xl font-bold text-[#0B2341] mb-6">Trailers U-Haul offers</h3>

                        <h4 className="text-xl font-bold text-[#0B2341] mb-4">Cargo trailers</h4>
                        <p className="text-gray-700 mb-6">
                            Cargo trailers are covered trailers that are boxy but protected the same your diamond, most enclosed one of three on square transporting bedroom furniture, big items or best goods fixed instability control and also good in rain.
                        </p>
                        <p className="text-gray-700 mb-6">
                            However described the Cargo trailers are one, if you need protection for a long range will be your safe from highway debris and you won&apos;t have to worry about a surprise weather downpour ruining your business.
                        </p>
                        <p className="text-gray-700 mb-6">
                            They offer cargos trailers that add little items to help keep trips safe from theft.
                        </p>

                        <h5 className="font-bold text-[#0B2341] mb-2">U-Haul cargo trailer rates</h5>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-sm text-center border-collapse">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-4 border-b border-gray-200"></th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">4' x 8'</th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">5' x 8'</th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">6' x 12'</th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">6' x 12' R</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Max load (ft)</th>
                                        <td className="py-3 px-4 text-gray-700">Small</td>
                                        <td className="py-3 px-4 text-gray-700">Mid-size</td>
                                        <td className="py-3 px-4 text-gray-700">Medium</td>
                                        <td className="py-3 px-4 text-gray-700">Medium</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Weight limit</th>
                                        <td className="py-3 px-4 text-gray-700">1,600 lbs.</td>
                                        <td className="py-3 px-4 text-gray-700">1,800 lbs.</td>
                                        <td className="py-3 px-4 text-gray-700">2,480 lbs.</td>
                                        <td className="py-3 px-4 text-gray-700">2,480 lbs.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Best for</th>
                                        <td className="py-3 px-4 text-gray-700">College room, studio dorm</td>
                                        <td className="py-3 px-4 text-gray-700">Single room, seasonal household, others</td>
                                        <td className="py-3 px-4 text-gray-700">Home or office</td>
                                        <td className="py-3 px-4 text-gray-700">Large household items</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Long distance % haul</th>
                                        <td className="py-3 px-4 text-gray-700">Local distance</td>
                                        <td className="py-3 px-4 text-gray-700">Long distance</td>
                                        <td className="py-3 px-4 text-gray-700">Long distance</td>
                                        <td className="py-3 px-4 text-gray-700">Long distance</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="text-xl font-bold text-[#0B2341] mb-4">Utility trailers</h4>
                        <p className="text-gray-700 mb-6">
                            Utility trailers are open-top trailers that look relatively open-air trailer, towing big items.
                        </p>
                        <p className="text-gray-700 mb-6">
                            But don&apos;t worry where renting your destination continues to rain or snow... but if you like rain moving, your items will dry though. At times some may not handle well open top moving trailer very well.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Typically utility trailers are not if 26 mpg as you can make more belongings at the bed. Other than filling them open-top items can be locked, 1-2 items come with 4' tall ramp to make your team U-Haul?
                        </p>

                        <h5 className="font-bold text-[#0B2341] mb-2">U-Haul utility trailer rates</h5>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-sm text-center border-collapse">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-4 border-b border-gray-200"></th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">4' x 7'</th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">5' x 8'</th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">5' x 9' with ramp</th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">6' x 12'</th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">6' x 12' with ramp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Max load (ft)</th>
                                        <td className="py-3 px-4 text-gray-700">Small</td>
                                        <td className="py-3 px-4 text-gray-700">Small</td>
                                        <td className="py-3 px-4 text-gray-700">Mid-size</td>
                                        <td className="py-3 px-4 text-gray-700">Medium</td>
                                        <td className="py-3 px-4 text-gray-700">Medium</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Weight limit</th>
                                        <td className="py-3 px-4 text-gray-700">1,770 lbs.</td>
                                        <td className="py-3 px-4 text-gray-700">1,890 lbs.</td>
                                        <td className="py-3 px-4 text-gray-700">1,650 lbs.</td>
                                        <td className="py-3 px-4 text-gray-700">2,600 lbs.</td>
                                        <td className="py-3 px-4 text-gray-700">2,100 lbs.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Best for</th>
                                        <td className="py-3 px-4 text-gray-700">Trash, Lawn items, Building Material</td>
                                        <td className="py-3 px-4 text-gray-700">Trash, Lawn items, Building Material</td>
                                        <td className="py-3 px-4 text-gray-700">Furniture</td>
                                        <td className="py-3 px-4 text-gray-700">Furniture, Lawn items, Building Material</td>
                                        <td className="py-3 px-4 text-gray-700">Furniture, Lawn items, Building Material</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Has ramp/deck</th>
                                        <td className="py-3 px-4 text-gray-700">No</td>
                                        <td className="py-3 px-4 text-gray-700">No</td>
                                        <td className="py-3 px-4 text-gray-700">Yes</td>
                                        <td className="py-3 px-4 text-gray-700">No</td>
                                        <td className="py-3 px-4 text-gray-700">Yes</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Long distance % haul</th>
                                        <td className="py-3 px-4 text-gray-700">Local distance</td>
                                        <td className="py-3 px-4 text-gray-700">Local distance</td>
                                        <td className="py-3 px-4 text-gray-700">Long distance</td>
                                        <td className="py-3 px-4 text-gray-700">Local distance</td>
                                        <td className="py-3 px-4 text-gray-700">Long distance</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="text-xl font-bold text-[#0B2341] mb-4">Auto trailers</h4>
                        <p className="text-gray-700 mb-6">
                            If your car doesn&apos;t back up with u-haul towing, you can rent auto trailers to use your time. Other rental trailers are rigid in their policies on safe tow, and most new while we use most.
                        </p>
                        <p className="text-gray-700 mb-6">
                            For this reason, we aren&apos;t even going to mention U-Haul moving distance (ie. 500 miles count).
                        </p>
                        <p className="text-gray-700 mb-6">
                            3. Auto Transport: U-Haul auto transport offers you full platform in perspective of a 4 - wheel car carrier. It is an auto transport trailer for 4000 to 5290 pounds. Or a car dolly used to mount 2 front wheels to back on your trailer.
                        </p>

                        <h5 className="font-bold text-[#0B2341] mb-2">U-Haul auto trailer rates</h5>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-sm text-center border-collapse">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="py-3 px-4 border-b border-gray-200"></th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">Auto transport</th>
                                        <th className="py-3 px-4 font-bold text-gray-900 border-b border-gray-200">Motorcycle trailer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Max load (ft)</th>
                                        <td className="py-3 px-4 text-gray-700">Vehicle</td>
                                        <td className="py-3 px-4 text-gray-700">Small</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Weight limit</th>
                                        <td className="py-3 px-4 text-gray-700">5,290 lbs.</td>
                                        <td className="py-3 px-4 text-gray-700">950 lbs.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Best for</th>
                                        <td className="py-3 px-4 text-gray-700">Cars up to 5,290 lbs. (larger vehicles)</td>
                                        <td className="py-3 px-4 text-gray-700">Motorcycles</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Has ramp/deck</th>
                                        <td className="py-3 px-4 text-gray-700">Yes</td>
                                        <td className="py-3 px-4 text-gray-700">Yes</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 font-bold text-gray-900 bg-gray-50 text-left">Long distance % haul</th>
                                        <td className="py-3 px-4 text-gray-700">Any distance</td>
                                        <td className="py-3 px-4 text-gray-700">Local distance</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="text-xl font-bold text-[#0B2341] mb-4">Tow dolly</h4>
                        <p className="text-gray-700 mb-6">
                            A tow dolly is open for two front-wheel drive your car, that means there is no powertrain issues of dragging the rear tires. In spite of this, this prevent any costly tire maintenance. This cost from $100 up to $150 – much lower cost of moving trailer for vehicle.
                        </p>
                        <p className="text-gray-700 mb-6">
                            If you do not have own U-Haul trailer, Budget car tow dolly have an affordable price fix. The bottom line is car tow - the movement have to can your truck wheels will be in tow with only two rear.
                        </p>

                        <h5 className="font-bold text-[#0B2341] mb-2">U-Haul tow dolly rates</h5>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-sm text-left border-collapse border border-gray-200">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r w-1/3">Price per day</th>
                                        <td className="py-2 px-4 text-gray-700">$45-50</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Weight limit</th>
                                        <td className="py-2 px-4 text-gray-700">3,450 to 3,900 lbs.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Best for</th>
                                        <td className="py-2 px-4 text-gray-700">Front-wheel drive light vehicles</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Long distance % haul</th>
                                        <td className="py-2 px-4 text-gray-700">Any proximity</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold text-[#0B2341] mb-4">How much does it cost to move with U-Haul?</h3>
                        <p className="text-gray-700 mb-4">
                            Finding a rental truck through U-Haul site also has cost in part with other companies are removed. This is because price increases such U-Haul trailer without having to pay a full price of a trailer move.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Usually the factors that affect our costs are the:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-green-600 font-medium">
                            <li>Trailer time</li>
                            <li>Trailer size</li>
                            <li>Move distance</li>
                            <li>Season / days</li>
                            <li>Liability (so means damage reassurance)</li>
                        </ul>
                        <p className="text-gray-700 mb-4">
                            So a common U-Haul moving week costs you $100 to bear a trailer expense. We advice if staying up your service is one without free, ranging from gas, toll roads or mileage taxes - moving protection plans.
                        </p>
                    </div>
                </section>

                {/* Budget Section */}
                <section className="bg-white py-16 border-t border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">Budget</h2>
                        <p className="text-gray-700 mb-6">
                            If you&apos;re wondering what Budget is best for... its name is a straight giveaway.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Budget is ideal for the price-conscious mover. And while the company only allows you to rent a car trailer or car dolly as part of an existing truck reservation, it offers low rates plus a slew of discounts to curb your overall cost.
                        </p>
                        <p className="text-gray-700 mb-12">
                            And, if you&apos;re moving locally, its rates get even cheaper.
                        </p>

                        <h3 className="text-2xl font-bold text-[#0B2341] mb-6">Trailers Budget offers</h3>

                        <h4 className="text-xl font-bold text-[#0B2341] mb-4">Car trailers</h4>
                        <p className="text-gray-700 mb-4">
                            Budget&apos;s car trailers secure your car above the ground on a trailer attached to the back of your rental truck.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Like with Penske, you don&apos;t have the option of attaching a Budget trailer to your personal vehicle. But there&apos;s another caveat: <span className="font-bold">you can only pull a Budget car trailer with Budget&apos;s 26-foot truck.</span>
                        </p>
                        <p className="text-gray-700 mb-6">
                            While this trailer&apos;s weight limit is fairly comparable to the other two companies&apos; offerings, Budget still has the lowest weight capacity of all three.
                        </p>

                        <h5 className="font-bold text-[#0B2341] mb-2">Budget car trailer features</h5>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-sm text-left border-collapse border border-gray-200">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r w-1/3">Weight limit</th>
                                        <td className="py-2 px-4 text-gray-700">4,055 lbs.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Maximum width of car</th>
                                        <td className="py-2 px-4 text-gray-700">6'7"</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Vehicle compatibility</th>
                                        <td className="py-2 px-4 text-gray-700">Four-wheel, All-wheel, Rear-wheel drive cars</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Long distance vs. local</th>
                                        <td className="py-2 px-4 text-gray-700">Long-distance</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="text-xl font-bold text-[#0B2341] mb-4">Tow dolly</h4>
                        <p className="text-gray-700 mb-6">
                            Budget&apos;s tow dollies operate just like U-Haul&apos;s and Penske&apos;s, both in design and functionality. Regardless of which company you choose, a tow dolly helps limit extra mileage on your car (just not as much as a car trailer).
                        </p>
                        <p className="text-gray-700 mb-6">
                            The difference with Budget is that its tow dollies are only available for one-way moves. But the clear advantage with Budget is its affordable rates—especially if you qualify for one of its discounts.
                        </p>

                        <h5 className="font-bold text-[#0B2341] mb-2">Budget tow dolly features</h5>
                        <div className="overflow-x-auto mb-10">
                            <table className="w-full text-sm text-left border-collapse border border-gray-200">
                                <tbody>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r w-1/3">Weight limit</th>
                                        <td className="py-2 px-4 text-gray-700">3,300-3,600 lbs.</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Maximum width of car</th>
                                        <td className="py-2 px-4 text-gray-700">6'4"</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Vehicle compatibility</th>
                                        <td className="py-2 px-4 text-gray-700">All-wheel, Four-wheel, Rear-wheel drive cars</td>
                                    </tr>
                                    <tr className="border-b">
                                        <th className="py-2 px-4 font-bold text-gray-900 bg-gray-50 border-r">Long distance vs. local</th>
                                        <td className="py-2 px-4 text-gray-700">Local</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold text-[#0B2341] mb-4">How much does it cost to move with Budget?</h3>
                        <p className="text-gray-700 mb-4">
                            Like Penske, Budget doesn&apos;t have flat rates for its car trailers and tow dollies. But unlike Penske, Budget determines the price of each car trailer and tow dolly based on the number of days your move takes and your mile count—this means you won&apos;t get sky-high prices based solely on where you live.
                        </p>
                        <p className="text-gray-700 mb-4">
                            You&apos;ll need to call a Budget representative to find out how much a trailer or car dolly rental will cost for your specific move.
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white py-16 border-t border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="col-span-1">
                                <h2 className="text-3xl font-bold text-[#0B2341]">
                                    Frequently Asked Questions
                                </h2>
                            </div>
                            <div className="col-span-1 md:col-span-2 space-y-4">
                                {/* FAQ Items using details/summary for accordion effect */}
                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">Who is the best auto transport company?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Based on our reviews, companies like Montway Auto Transport, Sherpa Auto Transport, and SGT Auto Transport consistently rank high for reliability and customer service. However, the "best" company often depends on your specific route and vehicle needs.</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">What types of vehicles can be transported?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Carriers can transport almost any type of vehicle, including sedans, SUVs, trucks, motorcycles, classic cars, and even inoperable vehicles (though this may incur an extra fee).</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">How much does auto transport typically cost?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Costs vary widely based on distance, vehicle size, and season, but typically range from $500 for short moves to over $1,500 for cross-country transport. Open transport is generally 30-40% cheaper than enclosed transport.</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">What&apos;s the difference between open and enclosed transport?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Open transport is the most common and affordable method, where vehicles are shipped on an open trailer exposed to the elements. Enclosed transport protects vehicles from weather and road debris, recommended for luxury or classic cars.</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">How long does auto transport take?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Transport times depend on distance. Coast-to-coast moves can take 7-14 days, while shorter trips (up to 500 miles) might take 1-3 days. Pickup windows are usually 1-3 days.</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">Do I need to be present for pickup and delivery?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Yes, you or a designated representative (usually 18+) must be present to sign the Bill of Lading and inspect the vehicle for any damage at both pickup and delivery.</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">Is auto transport insured against damage?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Legally, carriers must have liability insurance. However, coverage limits vary. Always verify the carrier&apos;s insurance policy and consider gap coverage if your vehicle is highly valuable.</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">Can I put personal items in my car during transport?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Most carriers allow up to 100 lbs of personal items in the trunk or below the window line, but it&apos;s not recommended as these items are typically not covered by the carrier&apos;s insurance.</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">What preparation is needed before auto transport?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Wash your car, remove custom accessories (like spoilers or antenna), disable alarms, check tire pressure and battery, and leave about 1/4 tank of gas.</p>
                                    </div>
                                </details>

                                <details className="group border border-gray-200 rounded-lg">
                                    <summary className="flex justify-between items-center cursor-pointer p-4 bg-white rounded-lg group-open:rounded-t-lg group-open:bg-gray-50 transition-colors">
                                        <span className="font-bold text-[#0B2341]">How do I choose a reliable auto transport company?</span>
                                        <span className="text-[#0B2341] group-open:rotate-180 transition-transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-4 text-gray-700 bg-white border-t border-gray-200">
                                        <p>Check reviews on BBB and TransportReviews, verify their MC number with the FMCSA, ask about insurance coverage, and ensure they are transparent about pricing and cancellation policies.</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Methodology Section */}
                <section className="bg-white py-16 border-t border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">
                            How We Reviewed The Best Auto Transport Companies?
                        </h2>
                        <div className="text-gray-700 space-y-4">
                            <p>
                                We rank the best auto transport companies in the USA after analyzing them comprehensively. The process starts with researching several companies&apos; pricing, service quality, and customer satisfaction for more than five years. We then review each company&apos;s licensing, insurance coverage, and safety records.
                            </p>
                            <p>
                                We often pay customers for real feedback to understand the company&apos;s reliability, communication, vehicle handling, and delivery performance. We repeat this process annually to keep our consumers up to date with current information. So, the prices and services of the companies mentioned are updated yearly based on actual market rates and industry standards.
                            </p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
