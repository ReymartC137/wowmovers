import Image from 'next/image';
import Link from 'next/link';
import { Check, X, Star, Info } from 'lucide-react';
import FAQSection from '@/components/FAQSection';

export const metadata = {
    title: 'Home Depot Truck Rental Review: Cost, Availability & Experience',
    description: 'An in-depth review of Home Depot Truck Rental services, including pricing, truck sizes, and how it compares to other rental companies.',
};

export default function HomeDepotReviewPage() {
    const pros = [
        "Affordable rates for local moves",
        "Unlimited mileage on Load 'N Go rentals",
        "Available at most Home Depot stores",
        "No reservation required for some trucks"
    ];

    const cons = [
        "Not suited for long-distance moves",
        "High costs for longer rentals",
        "No large trucks available",
        "High prices for mileage on some rentals"
    ];

    const features = [
        "Multiple truck sizes",
        "Home repair supplies and equipment",
        "Moving and packing supplies",
        "Load 'N Go trucks for easy rentals",
        "Local round-trip rentals"
    ];

    const truckSizes = [
        { type: "F250 Flatbed Truck", capacity: "Small projects", weight: "3,000 lbs", interior: "N/A", tank: "34 gallons" },
        { type: "T250 Flatbed Truck", capacity: "Small projects", weight: "3,000 lbs", interior: "N/A", tank: "25 gallons" },
        { type: "Cargo Van", capacity: "Small projects", weight: "3,000 lbs", interior: "277 cu. ft.", tank: "25 gallons" },
        { type: "Box Truck", capacity: "1-2 rooms", weight: "3,850 lbs", interior: "515 cu. ft.", tank: "33 gallons" },
    ];

    const penskeTrucks = [
        { type: "Cargo Van", dims: "9'6\" x 6'4\" x 6'2\"", capacity: "1 room", weight: "3,500 lbs", interior: "404 cu. ft.", tank: "33 gallons", mpg: "12 mpg" },
        { type: "12 ft. Truck", dims: "12' x 6'6\" x 6'1\"", capacity: "1-2 rooms", weight: "3,100 lbs", interior: "450 cu. ft.", tank: "33 gallons", mpg: "12 mpg" },
        { type: "16 ft. Truck", dims: "16' x 7'7\" x 6'6\"", capacity: "2-3 rooms", weight: "4,300 lbs", interior: "800 cu. ft.", tank: "33 gallons", mpg: "12 mpg" },
        { type: "22 ft. Truck", dims: "21'11\" x 8'1\" x 8'1\"", capacity: "3-5 rooms", weight: "10,000 lbs", interior: "1,200 cu. ft.", tank: "50 gallons", mpg: "10 mpg" },
        { type: "26 ft. Truck", dims: "25'11\" x 8'1\" x 8'1\"", capacity: "5-7 rooms", weight: "10,000 lbs", interior: "1,700 cu. ft.", tank: "50 gallons", mpg: "10 mpg" },
    ];

    const comparisonData = [
        { company: "Home Depot", price: "$1,100.00", availability: "Yes", sizes: "11", website: "Get a Quote" },
        { company: "Budget", price: "$1,250", availability: "Yes", sizes: "5", website: "Get a Quote" },
        { company: "Penske", price: "$1,450.00", availability: "Yes", sizes: "5", website: "Get a Quote" },
        { company: "U-Haul", price: "$950.00", availability: "Yes", sizes: "7", website: "Get a Quote" },
        { company: "Enterprise", price: "$1,600 (Local only)", availability: "No", sizes: "14", website: "Get a Quote" },
    ];

    const faqData = [
        {
            question: "Does Home Depot offer unlimited mileage?",
            answer: "Yes, Home Depot offers unlimited mileage for their Load 'N Go rentals, which are typically for local, short-term use. However, for Penske truck rentals booked through Home Depot, mileage charges may apply depending on the specific rental agreement."
        },
        {
            question: "Can I rent a truck from Home Depot for a one-way move?",
            answer: "Home Depot's Load 'N Go trucks are generally for local, round-trip rentals. However, through their partnership with Penske, you can book one-way truck rentals for long-distance moves."
        },
        {
            question: "Do I need insurance to rent a truck from Home Depot?",
            answer: "You will need to provide proof of insurance. Home Depot requires a valid driver's license and proof of automobile insurance at the time of rental. They may also offer supplemental liability insurance."
        },
        {
            question: "What is the minimum age to rent a truck?",
            answer: "You must be at least 21 years old to rent a truck from Home Depot. You will also need a valid driver's license."
        }
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
                                    src="https://wowmover.com/wp-content/uploads/2025/03/home-depot-truck-rental.jpg"
                                    alt="Home Depot Truck Rental"
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
                                {/* Mobile top curve or just straight */}

                                {/* Green Curve Border on Left (Desktop) */}
                                <div className="absolute left-0 top-0 bottom-0 w-4 hidden lg:block">
                                    <svg viewBox="0 0 40 400" preserveAspectRatio="none" className="h-full w-full absolute -left-8 top-0 overflow-visible">
                                        <path d="M40,0 L40,400 C0,300 0,100 40,0 Z" fill="#021D32" />
                                        <path d="M40,0 C0,100 0,300 40,400" fill="none" stroke="#00D285" strokeWidth="4" />
                                    </svg>
                                </div>

                                <div className="relative z-10">
                                    <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                                        Home Depot Truck Rental Review: Cost, Availability & Experience
                                    </h1>
                                    <p className="text-gray-300 mb-8 text-sm font-medium">
                                        October 10, 2025
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
                    Home Depot is a popular option for home shifting. Our team at WowMover went through deep research to bring you an in-depth review of their truck rental services to help you move your belongings.
                </p>

                {/* Overview Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        Home Depot Truck Rental Service Overview
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Home Depot offers truck rentals through its Load 'N Go service and a partnership with Penske for larger, long-distance moves. It provides various truck sizes including flatbeds, cargo vans, and box trucks, with unlimited mileage for local moves. In addition to truck rentals, Home Depot offers moving supplies, such as boxes and dollies, for added convenience.
                    </p>

                    {/* Pros & Cons Grid */}
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

                {/* Features Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        Home Depot Truck Rental Features and Services
                    </h2>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h3 className="font-bold text-[#0B2341] mb-6 text-sm uppercase tracking-wider">Summary of Home Depot Services</h3>
                        <ul className="space-y-4">
                            {features.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                    <div className="mt-0.5 p-0.5 rounded-full bg-[#78D9A4] text-white flex-shrink-0">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Truck Sizes Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Home Depot Truck Sizes and Specifications
                    </h2>
                    <p className="text-gray-600 mb-8">
                        All Load 'N Go trucks under Home Depot offer you four different truck sizes for moving. In addition, its partnership with Penske gives you access to five additional truck options from Penske.
                    </p>

                    <div className="mb-8">
                        <h3 className="flex items-center gap-2 font-bold text-[#0B2341] mb-4">
                            <div className="p-1 rounded-full bg-[#78D9A4] text-white">
                                <Check className="w-3 h-3" />
                            </div>
                            Home Depot's Moving Truck Sizes
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            The four truck sizes that all Load 'N Go offers come with features to make moving easier. For example, the pickup has a backup alarm, while the cargo van includes a rearview sensing system. Meanwhile, the box truck is equipped with a rearview camera for better visibility.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Truck Type</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Capacity</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Weight Limit</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Interior Space</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Fuel Tank Capacity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {truckSizes.map((truck, i) => (
                                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="p-4 text-sm font-bold text-gray-800">{truck.type}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.capacity}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.weight}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.interior}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.tank}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h3 className="flex items-center gap-2 font-bold text-[#0B2341] mb-4">
                            <div className="p-1 rounded-full bg-[#78D9A4] text-white">
                                <Check className="w-3 h-3" />
                            </div>
                            Truck Sizes Home Depot Offers From Penske
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Home Depot, in partnership with Penske, offers five truck sizes:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse min-w-[800px]">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Truck Type</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Dimensions (LxWxH)</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Capacity</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Weight Limit</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Interior Space</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Fuel Tank</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">MPG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {penskeTrucks.map((truck, i) => (
                                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="p-4 text-sm font-bold text-gray-800">{truck.type}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.dims}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.capacity}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.weight}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.interior}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.tank}</td>
                                            <td className="p-4 text-sm text-gray-600">{truck.mpg}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Unlimited Mileage Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Unlimited Mileage for Load N' Go Rentals
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        The unlimited mileage is just another plus that separates Home Depot's Load 'N Go trucks. It is also a great benefit, as the majority of the other rental companies charge for mileage per use. For a local move, this averages around $0.79 per mile in the industry; this makes it really hard because the longer one holds their haul, the more one ends up paying in rental cost. Home Depot does not require any fees from trying to keep track of miles accumulated.
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        But keep in mind, this is only for Load 'N Go rentals. Penske trucks rented via Home Depot have a $1.29 per mile charge for local moves, though they do offer unlimited mileage for one-way rentals.
                    </p>
                </section>

                {/* Coverage Options Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Coverage Options
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        When you rent a Penske truck through Home Depot, you receive all the coverage benefits that Penske offers, including roadside assistance, liability protection, and damage waivers. This ensures you're covered for a range of unexpected situations during your move.
                    </p>

                    <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full border-collapse min-w-[600px]">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Coverage Option</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Penske Trucks (Rented through Home Depot)</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Home Depot Load 'N Go Trucks</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-100">
                                    <td className="p-4 text-sm font-bold text-gray-800">Roadside Assistance</td>
                                    <td className="p-4 text-sm text-gray-600">Included</td>
                                    <td className="p-4 text-sm text-gray-600">Not Included</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-4 text-sm font-bold text-gray-800">Damage Waiver</td>
                                    <td className="p-4 text-sm text-gray-600">Included</td>
                                    <td className="p-4 text-sm text-gray-600">Not Included</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-4 text-sm font-bold text-gray-800">Liability Coverage</td>
                                    <td className="p-4 text-sm text-gray-600">Included</td>
                                    <td className="p-4 text-sm text-gray-600">Not Included</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="p-4 text-sm font-bold text-gray-800">Personal Insurance Required</td>
                                    <td className="p-4 text-sm text-gray-600">No</td>
                                    <td className="p-4 text-sm text-gray-600">Yes (Must provide your own)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        Home Depot Vs. Other Truck Rental Companies
                    </h2>
                    <div className="overflow-x-auto border border-gray-200 rounded-xl">
                        <table className="w-full border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Moving Company</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Avg. Rental Price</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Car trailers/tow dollies availability</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Truck Sizes</th>
                                    <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Visit Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, i) => (
                                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 text-sm font-bold text-gray-800">{row.company}</td>
                                        <td className="p-4 text-sm text-gray-600">{row.price}</td>
                                        <td className="p-4 text-sm text-gray-600">{row.availability}</td>
                                        <td className="p-4 text-sm text-gray-600">{row.sizes}</td>
                                        <td className="p-4 text-sm">
                                            <Link href="#" className="text-[#78D9A4] hover:text-[#5db383] font-bold text-xs uppercase">
                                                {row.website}
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 mt-4 text-xs italic">
                        *Prices are estimates and may vary based on location and availability.
                    </p>
                </section>

                {/* Facts You Should Know Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        Facts You Should Know About Home Depot Truck Rental
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-[#0B2341] mb-4">Penske Truck Availability at Home Depot</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Not all Home Depot locations offer Penske truck rentals. While there are over 2,000 Home Depot stores across the U.S., some may not participate in the Penske partnership. Fortunately, you can check Home Depot's website to see if a nearby location has Penske trucks, saving you time on calls or in-person visits.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                However, since not every Home Depot carries Penske rentals, you may find it more convenient to rent directly from Penske if you need one of their trucks.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#0B2341] mb-4">Load 'N Go Rental Trucks – Limited Availability</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Home Depot's Load 'N Go trucks are in short supply at most locations. Plus, they operate on a first-come, first-served basis—you can't book them in advance. This means you might arrive at the store only to find no trucks available, making Load 'N Go rentals a less reliable option for time-sensitive moves.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                If you have a flexible schedule, waiting for an available truck could save you money. Additionally, if a U-Haul reservation falls through (which happens sometimes), Home Depot can serve as a good backup option.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#0B2341] mb-4">One-Stop Convenience for Moving and Repairs</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Moving can be unpredictable—furniture might get scratched, walls can get dented, and floors may take some damage. Home Depot's biggest advantage is its home improvement selection. After returning your rental truck, you can pick up supplies for quick repairs, saving you an extra trip.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Plus, Home Depot sells essential moving supplies like boxes, dollies, and furniture pads. Their online moving calculator even helps you estimate how many supplies you'll need, making your move smoother and more efficient.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-[#0B2341] mb-4">No Road Assistance</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Home Depot does not offer roadside assistance for its Load 'N Go rental trucks. While this might not be a big issue for short, local moves, it could be problematic if something goes wrong. If you get a flat tire or the engine fails, you'll need to cover the cost of the tow yourself.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Cost Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        How Much Does Home Depot Truck Rental Cost?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Home Depot offers two types of rental trucks, each with different pricing structures.
                    </p>

                    <div className="mb-12">
                        <h3 className="flex items-center gap-2 font-bold text-[#0B2341] mb-6 text-xl">
                            <div className="w-1 h-6 bg-[#78D9A4] rounded-full"></div>
                            Price Structure for Load 'N Go Trucks
                        </h3>
                        <p className="text-gray-600 mb-6 text-sm">
                            Load 'N Go trucks are perfect for quick moves, offering 75-minute, daily, and weekly rental options.
                        </p>

                        <div className="overflow-x-auto border border-gray-200 rounded-xl mb-6">
                            <table className="w-full border-collapse min-w-[600px]">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Truck Type</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">75-Minute Rate</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Daily Rate</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Weekly Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: "F250 Flatbed Truck", min: "$19", daily: "$129", weekly: "$903" },
                                        { type: "T250 Flatbed Truck", min: "$19", daily: "$129", weekly: "$903" },
                                        { type: "Cargo Van", min: "$19", daily: "$129", weekly: "$903" },
                                        { type: "Box Truck", min: "$29", daily: "$139", weekly: "$973" },
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="p-4 text-sm font-bold text-gray-800">{row.type}</td>
                                            <td className="p-4 text-sm text-gray-600">{row.min}</td>
                                            <td className="p-4 text-sm text-gray-600">{row.daily}</td>
                                            <td className="p-4 text-sm text-gray-600">{row.weekly}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Home Depot is great for short moves or small loads, especially with its affordable 75-minute rental rate. However, for full-day or longer rentals, <Link href="#" className="text-[#78D9A4] hover:underline font-bold">Budget Truck Rental</Link> usually offers better rates. Keep in mind that Home Depot's largest Load 'N Go truck is smaller than most Penske or Budget trucks, so it may not be ideal for bigger moves.
                        </p>
                    </div>

                    <div>
                        <h3 className="flex items-center gap-2 font-bold text-[#0B2341] mb-6 text-xl">
                            <div className="w-1 h-6 bg-[#78D9A4] rounded-full"></div>
                            Price Structure for Penske Trucks in Partnership With Home Depot
                        </h3>

                        <div className="overflow-x-auto border border-gray-200 rounded-xl mb-4">
                            <table className="w-full border-collapse min-w-[700px]">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">Truck Size</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">50 miles</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">450 miles</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">1,245 miles</th>
                                        <th className="p-4 text-left text-sm font-bold text-[#0B2341] border-b border-gray-200">2,050 miles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 text-sm font-bold text-gray-800">12-foot</td>
                                        <td className="p-4 text-sm text-gray-600">$210.00 + $1.29 per mile</td>
                                        <td className="p-4 text-sm text-gray-600">$780.44</td>
                                        <td className="p-4 text-sm text-gray-600">$1,270.78</td>
                                        <td className="p-4 text-sm text-gray-600">$2,482.10</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 hover:bg-gray-50">
                                        <td className="p-4 text-sm font-bold text-gray-800">16-foot</td>
                                        <td className="p-4 text-sm text-gray-600">-</td>
                                        <td className="p-4 text-sm text-gray-600">$780.44</td>
                                        <td className="p-4 text-sm text-gray-600">$2,482.10</td>
                                        <td className="p-4 text-sm text-gray-600">$2,482.10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-500 text-xs italic">
                            *Net moves as of October 2024. Rates may vary by location and do not include add-ons like moving coverage or additional equipment rentals.
                        </p>
                    </div>
                </section>

                {/* Factors Affecting Cost Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        Factors Affecting the Cost Of Home Depot
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Several factors determine the cost of Home Depot's moving truck rentals, including supply and demand, your move date, when you book, and additional services. These can impact your final price.
                    </p>

                    <p className="text-gray-600 mb-6 text-sm font-bold">Some other factors include:</p>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Taxes",
                            "Mileage",
                            "Add-on rentals and services",
                            "Moving coverage"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                <div className="mt-0.5 p-0.5 rounded-full bg-[#78D9A4] text-white flex-shrink-0">
                                    <Check className="w-3 h-3" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <p className="text-gray-600 leading-relaxed">
                        Prices for Load 'N Go trucks would be dependent on the availability at any given location but are generally much more stable compared to Penske's rates. More importantly, moving coverage, environmental fees, and mileage will not be factors in a Load 'N Go rental, making them more predictable in many ways.
                    </p>
                </section>

                {/* The Bottom Line Section */}
                <section className="mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-6">
                        The Bottom Line
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        For local moves, Home Depot is one of the cheapest options. If you can fit everything into a Load 'N Go truck and work quickly, it's an affordable choice.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        However, as their truck sizes are small, for large moving and long-distance moves, Home Depot is not as suitable. In this case, Home Depot works with Penske Truck Rental offering you an additional five-truck size option. However, Penske trucks may cost more at some Home Depot locations.
                    </p>
                </section>

                {/* FAQ Section */}
                <section>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0B2341] mb-8">
                        FAQs
                    </h2>
                    <FAQSection items={[
                        {
                            question: "Is there a one-way rental available with your truck rental?",
                            answer: "Yes, if you do a Penske truck rental through Home Depot, then you can get a one-way rental with unlimited miles. If you are using a Load 'N Go truck, you cannot do this, as this class of truck is for local moves only."
                        },
                        {
                            question: "Do you provide dolly rentals at Home Depot?",
                            answer: "Yes, Home Depot also offers hand trucks and dollies, and you can hire for moving items."
                        },
                        {
                            question: "What type of trucks does Home Depot rent?",
                            answer: "Home Depot offers Load 'N Go trucks, like cargo vans, flatbed trucks, and box trucks. You may also rent Penske trucks for larger or long-distance moves in 12-foot, 16-foot, 22-foot, and 26-foot sizes."
                        },
                        {
                            question: "What if I return the truck late?",
                            answer: "You can be liable for some extra charges on your part in Home Depot if you return the truck late. You must monitor the time of renting as Load 'N Go trucks are first come first serve, and no reservations will be made."
                        },
                        {
                            question: "Do I need to reserve a truck in advance?",
                            answer: "No, reservations are not available for Home Depot's Load 'N Go trucks; you can call ahead or check the website to confirm that a truck will be available. Or,"
                        },
                        {
                            question: "Does Home Depot provide insurance for its rental trucks?",
                            answer: "Home Depot doesn't provide insurance coverage for its rental trucks. You'll need to be 21 years old and show proof of your own insurance. It's a good idea to confirm with your auto insurer if your policy covers moving truck rentals."
                        }
                    ]} />
                </section>
            </div>
        </div>
    );
}

