import Link from 'next/link';
import { Star, StarHalf, Phone, Check, X, Clock, Heart, DollarSign } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

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

const reviewsData = [
    {
        "title": "PODS: Best at affordable price moving container company",
        "description": "PODS is one of the best and most well-known storage and moving container companies, founded in 1998, operating in 46 states, and offering 8, 12, and 16 ft containers.",
        "proscons": {
            "pros": [
                "Available in different-size containers",
                "Offer 30 days for loading and unloading",
                "Local and long-distance moving capacity",
                "Online shipment tracking",
                "New customer discounts",
                "Services available in 46 states"
            ],
            "cons": [
                "Poor online services",
                "Reservation can be tough during the summer season"
            ]
        },
        "details": [
            {
                "title": "How Much Does PODS Cost?",
                "description": "PODS pricing depends on distance and inventory size. Moving a one-bedroom item 100 miles costs around $850; long-distance moves average around $3,810.",
                "highlights": []
            },
            {
                "title": "Who Is Better Than PODS?",
                "description": "U-Pack offers better nationwide availability (50 states vs PODS’ 47). However, PODS provides more container size options and local + long-distance moving.",
                "highlights": []
            },
            {
                "title": "Is It Cheaper to Use a Pod or a Moving Truck?",
                "description": "Moving trucks are cheaper for short distances and small loads. Pods are better for safety and large-item moves.",
                "highlights": []
            },
            {
                "title": "Flexibility To Move Or Store",
                "description": "PODS is known for flexible timelines and offers moving boxes, loading assistance, and car shipping.",
                "highlights": []
            },
            {
                "title": "Customer Reviews",
                "description": "PODS has a 4.4/5 rating from 63,868 reviews, praising fast service, friendly support, and low pricing.",
                "highlights": [
                    {
                        "url": "public/png/icon.png",
                        "title": "Fast service",
                        "description": "Provides quick delivery and transport to destinations."
                    },
                    {
                        "url": "public/png/icon.png",
                        "title": "Friendly response",
                        "description": "Responds quickly to customer inquiries."
                    },
                    {
                        "url": "public/png/icon.png",
                        "title": "Low prices",
                        "description": "Offers lower prices than competitors, e.g., $540 for long-distance moves over 2,000 miles."
                    }
                ]
            }
        ]
    },
    {
        "title": "UNITS: Best customer service moving container storage",
        "description": "UNITS provides 24/7 customer service with climate-controlled, weather-resistant containers in 12 and 16 ft sizes. Available in 37 states and expanding.",
        "proscons": {
            "pros": [
                "High customer satisfaction",
                "Weather-resistant containers",
                "Can deliver containers in tight spaces",
                "30-day free storage"
            ],
            "cons": [
                "A little expensive"
            ]
        },
        "details": [
            {
                "title": "Customers Love UNITS",
                "description": "UNITS is popular for its reliable customer support and overall satisfaction despite limited coverage.",
                "highlights": []
            },
            {
                "title": "Stellar Service",
                "description": "Customers appreciate fast delivery and the company’s availability seven days a week.",
                "highlights": []
            },
            {
                "title": "High-quality Containers",
                "description": "Containers ensure dryness and safety across seasons, even with only two size options.",
                "highlights": []
            },
            {
                "title": "Every Location Is Locally Operated",
                "description": "Local operators provide direct support and easier issue resolution, though prices and container availability may vary.",
                "highlights": []
            }
        ]
    },
    {
        "title": "1-800-PACK-RAT: Strong-moving containers",
        "description": "A portable storage and moving company founded in 2002, operating in 34 states, offering all-steel, weatherproof containers.",
        "proscons": {
            "pros": [
                "Offer third-party packing services",
                "Many insurance options",
                "Climate-controlled containers",
                "Three different container sizes"
            ],
            "cons": [
                "No online quotes",
                "Adds a per-mile fuel surcharge"
            ]
        },
        "details": [
            {
                "title": "Kryptonite-proof Containers",
                "description": "Containers are steel-built and weatherproof for maximum protection.",
                "highlights": []
            },
            {
                "title": "Price Matching",
                "description": "Matches competitor prices, such as PODS, after reviewing your quotes.",
                "highlights": []
            },
            {
                "title": "Need Help Packing?",
                "description": "Customers can hire packing services through HireAHelper, paid hourly.",
                "highlights": []
            },
            {
                "title": "Hassle-Free Orders",
                "description": "Booking requires only basic information and takes around 5 minutes.",
                "highlights": []
            }
        ]
    },
    {
        "title": "U-Pack: Best for long distance move",
        "description": "U-Pack is known for excellent value, allowing customers to pay only for the space they use and offering nationwide service including Canada.",
        "proscons": {
            "pros": [
                "Fast delivery time frames",
                "Lowest cost for long-distance moves",
                "Online shipment tracking",
                "Service across the US and Canada"
            ],
            "cons": [
                "Not available for local moves",
                "Only three days to load and unload"
            ]
        },
        "details": []
    }
];

const otherCompanies = [
    {
        "logo": "/png/uhaul.png",
        "title": "U-Haul U-Box",
        "description": "This company is famous among college students. U-Haul offers services like moving cargo, trucks, and wooden shipping containers. It is less expensive and offers 24/7 services. Ideal for smaller moves."
    },
    {
        "logo": "/png/smartbox.png",
        "title": "SmartBox",
        "description": "SmartBox helps you save money when moving your goods. It has no hidden fees and provides a price match guarantee. Offers both local and long-distance moving options."
    },
    {
        "logo": "/png/cows.png",
        "title": "COWs (Containers on Wheels)",
        "description": "Most COWs locations offer two container sizes: 8 ft and 16 ft. They also provide daily, weekly, and monthly rental options, letting you book based on your needs."
    },
    {
        "logo": "/png/mayflower.png",
        "title": "United and Mayflower",
        "description": "United and Mayflower provide weatherproof steel containers for added safety. You can choose to pack yourself or hire their full moving services."
    }
];

const faqData = [
    {
        question: "What is the best moving company?",
        answer: "The best moving company is International Van Lines, which is known for its comprehensive insurance plans. And American Van Lines is ideal for long-distance moves. However, the best moving container company is PODS."
    },
    {
        question: "How much do moving containers cost?",
        answer: "Moving container costs vary depending on size, distance, and rental duration. Local moves typically range from $150 to $600 for a one-bedroom home, while long-distance moves can cost between $1,000 to $4,000 or more."
    },
    {
        question: "What are other companies like PODS?",
        answer: "Other companies similar to PODS include U-Pack ReloCubes, SMARTBOX, U-Haul U-Box, 1-800-PACK-RAT, and Zippy Shell. Each offers portable storage containers with different features, sizes, and pricing structures."
    },
    {
        question: "Is PODS better than a moving company?",
        answer: "PODS offers more flexibility and control over your timeline, allowing you to pack at your own pace. It's often more cost-effective for DIY movers. However, traditional moving companies provide full-service options with professional packing and loading, which may be better for those who prefer hands-off moving."
    },
    {
        question: "What is portable storage?",
        answer: "Portable storage is a service where a storage container is delivered to your location. You can pack it at your convenience, and the company picks it up for transport or storage. It combines the flexibility of self-storage with the convenience of delivery services."
    },
    {
        question: "What companies have portable storage containers?",
        answer: "Major companies offering portable storage containers include PODS, U-Pack, SMARTBOX, 1-800-PACK-RAT, U-Haul U-Box, Zippy Shell, United Mayflower, and COWs (Containers on Wheels). Each company offers different container sizes and service areas."
    },
    {
        question: "What can you put in a portable moving container?",
        answer: "You can store furniture, appliances, clothing, books, electronics, and most household items in portable moving containers. However, avoid storing perishables, hazardous materials, flammable items, plants, pets, or valuable documents that require special handling."
    },
    {
        question: "What should I not pack in my moving container?",
        answer: "Don't pack hazardous materials (paint, propane, chemicals), perishable food, plants, pets, important documents, jewelry, cash, firearms, ammunition, or items with sentimental value that can't be replaced. Check with your container company for their specific prohibited items list."
    },
    {
        question: "What is a moving pod?",
        answer: "A moving pod is a portable storage container that's delivered to your location for packing. Once loaded, it can be transported to your new location or stored at a facility. The term \"pod\" is often used generically, but PODS is actually a specific company brand name."
    },
    {
        question: "Who is PODS' biggest competitor?",
        answer: "PODS' biggest competitors include 1-800-PACK-RAT, U-Pack ReloCubes, and SMARTBOX. These companies offer similar portable storage and moving container services with competitive pricing and nationwide coverage."
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

            {/* Best Storage & Moving Container Company Reviews Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-bold text-[#0B2341] sm:text-4xl mb-16">
                        Best Storage & Moving Container Company Reviews
                    </h2>

                    <div className="space-y-24">
                        {reviewsData.map((company, index) => (
                            <div key={index} className="space-y-12 border-b border-gray-200 pb-24 last:border-0 last:pb-0">
                                {/* Company Header */}
                                <div className="space-y-6">
                                    <h3 className="text-2xl font-bold text-[#0B2341] sm:text-3xl">
                                        {index + 1}. {company.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {company.description}
                                    </p>
                                </div>

                                {/* Pros & Cons */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Pros */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-[#56C058] py-3 px-6">
                                            <h4 className="text-white font-bold text-lg">Pros</h4>
                                        </div>
                                        <div className="p-6 bg-white">
                                            <ul className="space-y-4">
                                                {company.proscons.pros.map((pro, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <Check className="h-5 w-5 text-[#56C058] flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700 text-sm">{pro}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Cons */}
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <div className="bg-[#E85D45] py-3 px-6">
                                            <h4 className="text-white font-bold text-lg">Cons</h4>
                                        </div>
                                        <div className="p-6 bg-white">
                                            <ul className="space-y-4">
                                                {company.proscons.cons.map((con, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <X className="h-5 w-5 text-[#E85D45] flex-shrink-0 mt-0.5" />
                                                        <span className="text-gray-700 text-sm">{con}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-12">
                                    {company.details.map((detail, i) => (
                                        <div key={i} className="space-y-4">
                                            <h4 className="text-xl font-bold text-[#0B2341]">
                                                {detail.title}
                                            </h4>
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                {detail.description}
                                            </p>

                                            {/* Highlights */}
                                            {detail.highlights && detail.highlights.length > 0 && (
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                                                    {detail.highlights.map((highlight, hIndex) => (
                                                        <div key={hIndex} className="border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
                                                            <div className="h-12 w-12 rounded-full bg-[#F0FDF7] flex items-center justify-center text-[#76Dba8]">
                                                                {highlight.title.includes("Fast") ? <Clock className="h-6 w-6" /> :
                                                                    highlight.title.includes("Friendly") ? <Heart className="h-6 w-6" /> :
                                                                        highlight.title.includes("Low") ? <DollarSign className="h-6 w-6" /> :
                                                                            <Check className="h-6 w-6" />}
                                                            </div>
                                                            <h5 className="font-bold text-[#0B2341] text-lg">{highlight.title}</h5>
                                                            <p className="text-sm text-gray-600">{highlight.description}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Moving Container Companies Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl">
                            Other Moving Container Companies
                        </h2>
                        <p className="text-lg text-gray-600">
                            Let's see some more of the moving container company here-
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {otherCompanies.map((company, index) => (
                            <div key={index} className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <div className="h-12 mb-6">
                                    <img
                                        src={company.logo}
                                        alt={`${company.title} logo`}
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-[#0B2341] mb-4">
                                    {company.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {company.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Perfect For City Moves Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl">
                                Perfect For City Moves
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                As you can see, there are several storage and moving container companies available. So choosing the best one, you have to consider a few things-
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-[#0B2341]">Container sizes</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    You have to choose the container sizes depending on your belongingness. Different companies offer containers in multiple sizes, so select the one that matches your item's size. However, you can rent multiple containers if needed.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-[#0B2341]">Durability and security</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Before renting, the company checks that the container is durable and can withstand different environmental changes. And inspect security features like locks and insurance options to safeguard your belongings during transport and storage.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-[#0B2341]">Delivery and pickup flexibility</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Different companies offer different types of delivery and pickup options. Hence, analyze and select the one that is flexible about time and narrow street delivery.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-[#0B2341]">Pricing structure</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Companies vary pricing models based on container size, rental duration, and distance of transport. And inquires if the company has a policy about hidden fees.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-[#0B2341]">Customer reviews and reputation</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Research customer reviews and reputation before making a decision. Also, look for testimonials that highlight experiences related to customer service, delivery punctuality, and overall satisfaction.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-[#0B2341]">Licensing and certifications</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Last but not least, ensure that the company has proper licensing and certifications. This guarantees that they comply with industry standards and regulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Moving Container Vs Truck Rental Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl">
                            Moving Container Vs Truck Rental:<br />
                            Which One Is Better For Moving?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Here, let's see the difference between moving containers and truck rental and find which one is best-
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Row 1: 2 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#0B2341] mb-4">Timeline For Packing</h3>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <p>One of the significant advantages of using moving containers is the flexibility they offer regarding packaging time. Many companies allow you to keep the container for up to 30 days. This way, you can take as much time as needed and pack items at your convenience.</p>
                                    <p>In contrast, truck rentals typically require you to load and unload your belongings within a single day. This can create time stress and pressure. Also, the time limitation can lead to rushed packing and unpacking, potentially resulting in disorganization.</p>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#0B2341] mb-4">Quantity Of Furniture And Belongings</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Containers come in multiple sizes made from metal. Therefore, you can easily store your 2 bedroom belongings and furniture in 16-foot containers. However, if you have small items then you can rent the trunk.
                                </p>
                            </div>
                        </div>

                        {/* Row 2: 2 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#0B2341] mb-4">Driving</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    With a moving container, you do not need to drive; the company handles transportation. This can significantly reduce stress for those uncomfortable with driving large vehicles. While renting a truck means you must drive it yourself. This can be daunting, mainly for long distances or in urban areas with heavy traffic.
                                </p>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#0B2341] mb-4">Size</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Both moving containers and rental trucks come in various sizes. However, containers often provide more flexibility in terms of space management during the moving process.
                                </p>
                            </div>
                        </div>

                        {/* Row 3: 3 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#0B2341] mb-4">Storage</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Many container services offer storage options as part of their package. You can keep your belongings in the container at your location or at a facility until you're ready to unpack. However, truck rentals do not typically include storage options once you unload the truck.
                                </p>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#0B2341] mb-4">Safety And Security</h3>
                                <div className="text-gray-600 leading-relaxed space-y-4">
                                    <p>Containers provide enhanced security for your belongings. They are typically weatherproof and can be locked. Also, many companies allow you to keep the container on your property or at a secure facility. This adds an extra layer of safety as you can monitor your items closely.</p>
                                    <p>In comparison, truck rentals do not offer that level of security and protection from weather conditions.</p>
                                </div>
                            </div>
                            <div className="border border-gray-200 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-[#0B2341] mb-4">Pricing</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Moving containers is generally more expensive than truck rentals. For example, local moves with containers can range from $150 to $600 for a one-bedroom home. Whereas, trucks are more cost-effective for DIY movers. Typically, local moves can cost as little as $20 to $200.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection items={faqData} />

            {/* How We Reviewed Section */}
            <section className="bg-white pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl">
                            How We Reviewed The Best Storage And Moving Container Companies?
                        </h2>
                        <div className="text-lg text-gray-600 leading-relaxed space-y-6">
                            <p>
                                We rank the best moving container companies in the USA after analyzing them closely. The process starts with researching several companies' 300 quotes for more than five years. We then review each company's website and customer reviews.
                            </p>
                            <p>
                                We often pay customers for real feedback to understand the company's quality. We repeat this process annually to keep our consumers up to date with the information. So, the prices of the companies mentioned change every year based on the actual prices posted on the website.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

