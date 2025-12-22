import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function CollegeHunkMovingPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Hero Section */}
            <div className="relative bg-white pb-8">
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-sm bg-[#fafafa]">
                        {/* Left: Image Container */}
                        <div className="w-full lg:w-3/5 relative min-h-[400px] bg-white flex items-center justify-center p-0">
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2020/06/College-Hunks-Hauling-Junk-and-Moving.jpg"
                                    alt="College Hunks Hauling Junk and Moving"
                                    fill
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Right: Content Card */}
                        <div className="w-full lg:w-2/5 bg-[#011627] p-12 flex flex-col justify-center relative overflow-hidden">
                            {/* Green decorative curve on the left edge */}
                            <div className="absolute left-1 top-0 bottom-0 w-2 bg-[#10b981] rounded-r-full transform -translate-x-2 skew-x-[-15deg]"></div>

                            <div className="relative z-10 pl-6">
                                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                    College Hunks Moving Services: Stress-Free and Affordable Relocation
                                </h1>
                                <p className="text-gray-300 mb-8 text-sm">
                                    June 3, 2024
                                </p>

                                <div className="w-full h-px bg-gray-700 mb-8"></div>

                                <button className="bg-[#76Dba8] text-white font-bold py-3 px-8 rounded-full hover:bg-[#68c994] transition-colors w-max uppercase text-sm tracking-wide">
                                    GET A QUOTE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-12 max-w-5xl">
                {/* Intro Text */}
                <div className="prose max-w-none text-gray-500 mb-8">
                    <p className="mb-4">
                        <Link href="#" className="font-semibold text-gray-800 hover:underline">College Hunks Hauling Junk</Link> and Moving have <span className="text-green-500 font-semibold underline">124 franchise locations</span> across Canada and the United States. The company provides moving services from start to finish; the reason why College and Hunk is one of the best moving companies available today.
                    </p>
                </div>

                {/* Secondary Image */}
                <div className="relative w-full h-[450px] mb-12">
                    <Image
                        src="https://wowmover.com/wp-content/uploads/2020/06/College-Hunks-Hauling-Junk-and-Moving.png"
                        alt="College Hunks Moving Truck"
                        fill
                        className="object-contain"
                        unoptimized
                    />
                </div>

                {/* Why We Love Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-6">Why We Love College Hunks Hauling Junk and Moving?</h2>
                    <p className="text-gray-500 mb-6">
                        College Hunks Hauling Junk and Moving specialize at long distance, office relocation, and local full-service relocation; ideal for a short-distance move. You can utilize their long list of moving services for your next move. They are known for full-service junk removal, from some spring cleaning, junk removal after renovation, and eliminating old stuff you don't need anymore. College and Hunk will all this junk removal for you.
                    </p>

                    {/* Also Read Box 1 */}
                    <div className="bg-[#f2f2f2] p-4 rounded-md mb-12 border-l-4 border-green-500">
                        <p className="text-sm">
                            <span className="font-bold">Also, read:</span> <Link href="#" className="text-green-500 font-semibold hover:underline decoration-2">Why Do We Recommend: All My Sons Moving and Storage?</Link>
                        </p>
                    </div>
                </div>

                {/* Services Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-6">College Hunks Hauling Junk and Moving Services</h2>

                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-y-3 mb-10">
                        {[
                            "Additional coverage options for your move.",
                            "Liability Coverage",
                            "Cleaning up services",
                            "Carpet and floor removal and placement",
                            "Furniture and carpet removal",
                            "Moving storage solution",
                            "Moving solution for college students",
                            "Picking up donation",
                            "Corporate and office relocation",
                            "Unpacking and packing",
                            "Recycling and junk donation pickups",
                            "Unloading and loading your belongings",
                            "Interstate and local relocation"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-500 text-[15px]">
                                <div className="bg-[#76Dba8] rounded-full p-1 mr-3 flex-shrink-0">
                                    <Check className="h-3 w-3 text-white" />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Also Read Box 2 */}
                    <div className="bg-[#f2f2f2] p-4 rounded-md mb-12 border-l-4 border-green-500">
                        <p className="text-sm">
                            <span className="font-bold">Also, Read:</span> <Link href="#" className="text-green-500 font-semibold hover:underline decoration-2">Why College Students Need A Self Storage Unit?</Link>
                        </p>
                    </div>
                </div>

                {/* Final Content Paragraphs */}
                <div className="prose max-w-none text-gray-500 mb-8 mt-12">
                    <p className="mb-6">
                        The company is a good choice for tidying your home, resources for planning a big relocation. The company's also great for long-distance moving, this what makes the company unique. College and Hunk Moving costs vary depending on your moving needs, services, and location. We can help you get a rough estimate of junk removal or moving you need.
                    </p>
                    <p className="mb-8 font-semibold">
                        Also, Read: <Link href="/budget-truck-rental-cost" className="text-green-500 hover:underline">Budget Truck Rental Pricing & Services: 2022 Review</Link>
                    </p>
                    <p className="mb-10">
                        If you consider College Hunks Hauling Junk and Moving for your next move, give us a call. If any service listed above for your situation, head over to our moving <Link href="#" className="text-green-500 hover:underline">provider search tool</Link>.
                    </p>
                </div>

                {/* Orange CTA Button */}
                <div className="mb-16">
                    <button className="bg-[#ffa448] text-white font-bold py-4 px-10 rounded-xl hover:bg-[#ef9337] transition-colors shadow-md text-lg">
                        Get An Estimate
                    </button>
                </div>

                {/* Articles We Recommend */}
                <div className="mt-12 border-t pt-12">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Articles We Recommend</h3>
                    <ul className="space-y-4">
                        {[
                            "Moving a Mobile Home: Costs and Considerations",
                            "Hidden Home Buying Costs You Shouldn't Overlook",
                            "Smart Packing Tips Using Modern Tools That Actually Make Moving Easier",
                            "Moving to a Smaller Home: Tips for Success",
                            "Relocate or Not: Key Factors to Consider First"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-500 text-[15px]">
                                <div className="bg-[#76Dba8] rounded-full p-1 mr-3 flex-shrink-0">
                                    <Check className="h-3 w-3 text-white" />
                                </div>
                                <Link href="#" className="hover:underline">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
