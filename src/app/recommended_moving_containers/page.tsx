import Link from 'next/link';
import { Star, StarHalf, Phone } from 'lucide-react';

interface Company {
    tier: string;
    logo: string;
    title: string;
    rating: number;
    feature: string[];
    number: string;
}

const companies: Company[] = [
    {
        "tier": "Best overall",
        "logo": "/png/upack.png",
        "title": "U-Pack",
        "rating": 4.5,
        "feature": [
            "Nationwide availability",
            "Multiple delivery options"
        ],
        "number": "(833)241-3873"
    },
    {
        "tier": "Tons of deals",
        "logo": "/png/packrat.png",
        "title": "1-800-PACK-RAT",
        "rating": 4.5,
        "feature": [
            "Offer 30 days of storage",
            "Flexible loading and unloading time"
        ],
        "number": "(855)898-8943"
    },
    {
        "tier": "Great customer service",
        "logo": "/png/pods.png",
        "title": "PODS",
        "rating": 4,
        "feature": [
            "High container quality",
            "Multiple container sizes"
        ],
        "number": "(833)742-0934"
    },
    {
        "tier": "Straightforward pricing",
        "logo": "/png/smartbox.png",
        "title": "SMARTBOX",
        "rating": 3.5,
        "feature": [
            "Pay-for-what-you-use policy",
            "College student discounts"
        ],
        "number": "(833)601-6856"
    },
    {
        "tier": "Low prices",
        "logo": "/png/zippy-shell.png",
        "title": "Zippy Shell",
        "rating": 4,
        "feature": [
            "Climate-controlled storage facility",
            "On-site and warehouse storage"
        ],
        "number": "(833)462-1107"
    }
];

const detailedCompanies = [
    {
        "id": 1,
        "title": "U-Pack Review: Cost, Service, and Real Customer Experience",
        "description": "U-Pack helps you save around $400 compared to other moving container companies. It offers a pay-for-what-you-use policy, fast online quotes, and excellent customer service. However, it does not allow storing the ReloCube at your home and only supports long-distance moves.",
        "main_img": "/images/upack-main-img.jpg",
        "logo": "/png/upack.png",
        "rating": 4.5,
        "tel": "(833) 241-3873"
    },
    {
        "id": 2,
        "title": "1-800-PACK-RAT Review: Secure, Easy, and Efficient Moving Containers",
        "description": "1-800-PACK-RAT offers strong savings and price matching deals, with durable containers that are among the toughest on the market. It supports both local and long-distance moves. However, its invoice system can be confusing due to many separated fees.",
        "main_img": "/images/packrat-main-img.jpg",
        "logo": "/png/packrat.png",
        "rating": 4.5,
        "tel": "(855) 898-8943"
    },
    {
        "id": 3,
        "title": "PODS Review: Is It Worth It for Your Move?",
        "description": "PODS provides exceptional customer service, multiple container sizes, and availability in almost every state. It supports both local and long-distance moves. Downsides include missing taxes in estimates and requiring a phone quote for moves over 50 miles.",
        "main_img": "/images/pods-main-img.jpg",
        "logo": "/png/pods.png",
        "rating": 4,
        "tel": "(833) 742-0934"
    },
    {
        "id": 4,
        "title": "SMARTBOX Review: Affordable and Convenient Moving Container Option",
        "description": "SMARTBOX offers upfront pricing with no hidden fees, student discounts, and weatherproof covers. However, it receives complaints about difficult phone support and limited availability, along with higher fees in some areas.",
        "main_img": "/images/smartbox-main-img.jpg",
        "logo": "/png/smartbox.png",
        "rating": 3.5,
        "tel": "(833) 601-6856"
    },
    {
        "id": 5,
        "title": "Zippy Shell",
        "description": "Zippy Shell focuses on stress-free long-distance moving with simple processes, secure transport, and flexible options. It eliminates the need for truck rentals or repeated packing and loading.",
        "main_img": "/images/zippy-shell-main-img.webp",
        "logo": "/png/zippy-shell.png",
        "rating": 4,
        "tel": "(833) 462-1107"
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

export default function RecommendedMovingContainersPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
                    {/* Left Column: Content */}
                    <div className="flex-1 space-y-8">
                        <h1 className="text-4xl font-bold text-[#0B2341] sm:text-5xl leading-tight">
                            Best Storage & Moving Container Companies
                        </h1>

                        <div className="space-y-6 text-lg text-gray-600">
                            <p>
                                Looking for the best storage and moving container companies for your next move? Then, this article is for you.
                            </p>
                            <p>
                                We have spent years analyzing each company and mentioned here the 5 best moving companies. We also separate them based on the best features and categorize them into 1 to 5. All you have to do is read the whole article without skipping and learn about each one's specific features. So let's find your best match.
                            </p>
                        </div>

                        {/* Breadcrumbs */}
                        <nav className="flex items-center text-sm text-gray-500">
                            <Link href="/" className="hover:text-[#0B2341] transition-colors">
                                Home
                            </Link>
                            <span className="mx-2">/</span>
                            <Link href="#" className="hover:text-[#0B2341] transition-colors">
                                Moving
                            </Link>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900 font-medium">Professional Moving</span>
                        </nav>
                    </div>

                    {/* Right Column: Image */}
                    <div className="flex-1 mt-12 lg:mt-0">
                        <div className="relative w-full">
                            <img
                                src="/png/delivery-man.png"
                                alt="Delivery man with boxes and truck"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Moving Container FAQs Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto w-[90%] px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {/* Block 1: What Is A Moving Container? */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl">
                                What Is A Moving Container?
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    A moving container is a portable storage unit used to move belongings from one place to another. More specifically, you can rent moving companies and then store your home or business furniture or other things in the container. After that, the company will deliver the container to your new place.
                                </p>
                                <p>
                                    The best part about moving containers is that you can choose the right size based on your items. Also, it is more cost-effective as you don't have to hire a full-service moving company.
                                </p>
                            </div>
                        </div>

                        {/* Block 2: How Do Moving Container Companies Work? */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl">
                                How Do Moving Container Companies Work?
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    First, you have to book the moving company, and most companies rent containers for 30 days. Then, the company will send the container to your place, and you can pack your items during your leisure time. At the same time, you can hire movers to pack.
                                </p>
                                <p>
                                    When the container is loaded, they will drop it off at your destination. After that, you have to unpack your item and call them to pick up the containers.
                                </p>
                                <p>
                                    Apart from container fees, you have to pay the pickup or transportation fees based on the company. Often, some can ask for fuel money.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Top 5 Storage & Moving Containers Companies Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold text-[#0B2341] sm:text-4xl mb-16">
                        Top 5 Storage & Moving Containers Companies
                    </h2>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                        {companies.map((company, index) => (
                            <div
                                key={index}
                                className={`flex flex-col overflow-hidden rounded-xl border ${index === 0 ? 'border-[#0B2341] shadow-lg scale-105 z-10' : 'border-gray-200 shadow-sm'
                                    } bg-white transition-all hover:shadow-md`}
                            >
                                {/* Tier Header */}
                                <div className={`py-3 text-center text-sm font-bold uppercase tracking-wider ${index === 0 ? 'bg-[#0B2341] text-white' : 'bg-gray-50 text-gray-700'
                                    }`}>
                                    {company.tier}
                                </div>

                                <div className="flex flex-1 flex-col p-6 items-center text-center">
                                    {/* Logo */}
                                    <div className="mb-6 h-16 w-full flex items-center justify-center">
                                        <img
                                            src={company.logo}
                                            alt={`${company.title} logo`}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-2 text-lg font-bold text-[#0B2341]">
                                        {company.title}
                                    </h3>

                                    {/* Rating */}
                                    <div className="mb-6 flex justify-center">
                                        <StarRating rating={company.rating} />
                                    </div>

                                    {/* Features */}
                                    <ul className="mb-8 space-y-2 text-sm text-gray-600 flex-1">
                                        {company.feature.map((feat, i) => (
                                            <li key={i} className="flex items-start justify-center">
                                                <span className="mr-2">•</span>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Buttons */}
                                    <div className="w-full space-y-3 mt-auto">
                                        <button className="w-full rounded-lg bg-[#76Dba8] px-4 py-2.5 text-sm font-bold text-[#0B2341] transition-colors hover:bg-[#68c994]">
                                            Get a Quote
                                        </button>
                                        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#0B2341] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1a3b5d]">
                                            <Phone className="h-4 w-4" />
                                            {company.number}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Best Moving Container Companies Intro Section */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                        {/* Left Column: Images */}
                        <div className="relative">
                            {/* Decorative Line Pattern */}
                            <img
                                src="/images/gray-line.png"
                                alt=""
                                className="absolute -right-20 -top-20 z-0 w-96 opacity-50"
                            />

                            {/* Main Vertical Image */}
                            <div className="relative z-10 w-[80%]">
                                <img
                                    src="/images/moving_top_container-img.jpg"
                                    alt="Trucks on the road"
                                    className="h-auto w-full rounded-lg object-cover shadow-lg"
                                />
                            </div>

                            {/* Overlapping Horizontal Image */}
                            <div className="absolute bottom-[-10%] right-0 z-20 w-[60%]">
                                <img
                                    src="/images/moving_top_container-img2.jpg"
                                    alt="Shipping containers"
                                    className="h-auto w-full rounded-lg border-4 border-white object-cover shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Right Column: Text */}
                        <div className="space-y-6 lg:pl-12">
                            <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl leading-tight">
                                Best Moving Container Companies
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    First time hearing moving container? Yes, they exist! Here, we guide you on how to choose the best company for your next move. Relocating long distance from another state or just the same town, a moving container is a budget-friendly and effective way to make your moving experience a lot easier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Company Reviews Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {detailedCompanies.map((company) => (
                            <div key={company.id} className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
                                {/* Text Column */}
                                <div className={`flex-1 space-y-8 ${company.id % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <h3 className="text-2xl font-bold text-[#0B2341] sm:text-3xl leading-tight">
                                        {company.id}. {company.title}
                                    </h3>
                                    <div className="text-lg text-gray-600 leading-relaxed">
                                        <p>{company.description}</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <button className="rounded-lg bg-[#76Dba8] px-8 py-3 text-base font-bold text-[#0B2341] transition-colors hover:bg-[#68c994]">
                                            Get Free Quote
                                        </button>
                                        <button className="flex items-center justify-center gap-2 rounded-lg bg-[#0B2341] px-8 py-3 text-base font-bold text-white transition-colors hover:bg-[#1a3b5d]">
                                            <Phone className="h-5 w-5" />
                                            {company.tel}
                                        </button>
                                    </div>
                                </div>

                                {/* Image Column */}
                                <div className={`flex-1 ${company.id % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="relative">
                                        {/* Main Image */}
                                        <img
                                            src={company.main_img}
                                            alt={company.title}
                                            className="w-full h-auto rounded-2xl object-cover shadow-lg"
                                        />

                                        {/* Logo Overlay */}
                                        <div className="absolute left-8 top-8 rounded-xl bg-white p-4 shadow-md w-32">
                                            <img
                                                src={company.logo}
                                                alt={`${company.title} logo`}
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>

                                        {/* Rating Overlay */}
                                        <div className="absolute bottom-8 right-8 rounded-lg bg-[#F0FDF7] px-4 py-2 shadow-md flex items-center gap-2">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < Math.floor(company.rating) ? 'fill-current' : i === Math.floor(company.rating) && company.rating % 1 !== 0 ? 'fill-current' : 'text-gray-300'}`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="font-bold text-[#76Dba8]">{company.rating} Stars</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why you can trust WOW Mover Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {/* Trust Text */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl">
                                #Why you can trust WOW Mover
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                WOW Mover spends years understanding a company and collecting authentic information before rating it. Then, we compare the companies and decide which one is the best. So, if you want real details and the best company, WOW Mover is your option.
                            </p>
                        </div>

                        {/* Best of 2025 Summary */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl">
                                What Are The Best Storage & Moving Container Companies Of 2025?
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center">
                                    <span className="text-gray-700 font-medium">PODS: Best for affordable price</span>
                                </div>
                                <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center">
                                    <span className="text-gray-700 font-medium">UNITS: Best for customer service</span>
                                </div>
                                <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center">
                                    <span className="text-gray-700 font-medium">1-800-PACK-RAT: Strong containers</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center">
                                    <span className="text-gray-700 font-medium">U-Pack: Best for long distance move</span>
                                </div>
                                <div className="rounded-lg border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center text-center">
                                    <span className="text-gray-700 font-medium">Zippy Shell: Best for reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Of The Best Container-Moving Companies Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl mb-12">
                        Comparison Of The Best Container-Moving Companies
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px] border-collapse">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-4 px-6 text-left text-sm font-bold text-[#0B2341] border-r border-gray-200">Company</th>
                                    <th className="py-4 px-6 text-center text-sm font-bold text-[#0B2341] border-r border-gray-200">Least expensive quote</th>
                                    <th className="py-4 px-6 text-center text-sm font-bold text-[#0B2341] border-r border-gray-200">Median quote</th>
                                    <th className="py-4 px-6 text-center text-sm font-bold text-[#0B2341] border-r border-gray-200">Most expensive quote</th>
                                    <th className="py-4 px-6 text-center text-sm font-bold text-[#0B2341] border-r border-gray-200"># of states</th>
                                    <th className="py-4 px-6 text-center text-sm font-bold text-[#0B2341]">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: 'PODS', min: '$848', med: '$4,511', max: '$13,040', states: '46', btnColor: 'green' },
                                    { name: 'UNITS', min: '$973', med: '$4349', max: '$8708', states: '37', btnColor: 'blue' },
                                    { name: '1-800-PACK-RAT', min: '$1170', med: '$2887', max: '$6572', states: '33', btnColor: 'green' },
                                    { name: 'U-Pack', min: '$1151', med: '$3065', max: '$7876', states: '50', btnColor: 'blue' },
                                    { name: 'Zippy Shell', min: '$1111', med: '$2743', max: '$6243', states: '34', btnColor: 'green' },
                                ].map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200 transition-transform hover:scale-[1.01] hover:shadow-md bg-white"
                                    >
                                        <td className="py-6 px-6 text-sm font-bold text-[#0B2341] border-r border-gray-200">{row.name}</td>
                                        <td className="py-6 px-6 text-center text-sm text-gray-600 border-r border-gray-200">{row.min}</td>
                                        <td className="py-6 px-6 text-center text-sm text-gray-600 border-r border-gray-200">{row.med}</td>
                                        <td className="py-6 px-6 text-center text-sm text-gray-600 border-r border-gray-200">{row.max}</td>
                                        <td className="py-6 px-6 text-center text-sm text-gray-600 border-r border-gray-200">{row.states}</td>
                                        <td className="py-6 px-6 text-center">
                                            <button className={`px-6 py-2 rounded font-bold text-sm transition-colors ${row.btnColor === 'green'
                                                    ? 'bg-[#76Dba8] text-white hover:bg-[#68c994]'
                                                    : 'bg-[#0B2341] text-white hover:bg-[#1a3b5d]'
                                                }`}>
                                                Get a Quote
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>


        </div>
    );
}

