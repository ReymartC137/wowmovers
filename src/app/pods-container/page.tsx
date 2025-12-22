import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PodsContainerPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-800">
            {/* Hero Section */}
            <div className="relative bg-white pb-8">
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-sm bg-[#fafafa]">
                        {/* Left: PODS Container Image */}
                        <div className="w-full lg:w-3/5 relative min-h-[400px] bg-white flex items-center justify-center p-8">
                            <div className="relative w-full h-[300px]">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2020/06/pods-container.jpg"
                                    alt="PODS Container"
                                    fill
                                    className="object-contain"
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
                                    PODS Containers Explained: Sizes, Costs, and Moving Tips
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
                        <span className="text-green-500 font-semibold">Portable On Demand Storage</span> commonly known as a PODS container, a moving and storage container service that allows you to pack your items into rented storage or PODS container. They have pioneered the storage and moving containers system. If you are a budget-conscious, PODS is a great option for you. Some long-distance move costs a lot more but this always depends on areas.
                    </p>
                    <p className="mb-4">
                        <strong>PODS</strong> makes moving and storage more affordable and easy to schedule for business, local, military, or government relocation. Whether these storage placed at <strong>PODS</strong> container facility, relocation site, or at your home, the company will take care of safely in place.
                    </p>
                </div>

                {/* Gray Box */}
                <div className="bg-[#f2f2f2] p-4 rounded-md mb-12">
                    <p className="text-sm">
                        Learn More: <Link href="#" className="text-green-400 font-semibold hover:underline">Updated: Learn More About Pods Moving Cost, FAQs, and Tips!</Link>
                    </p>
                </div>

                {/* What Makes PODS Container Special? */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-4">What Makes PODS Container Special?</h2>
                    <p className="text-gray-500 mb-6">
                        PODS specialty is <span className="text-green-400 font-semibold">residential relocation</span>, business, long-distance, local moving, government, and even military relocations. <strong>PODS</strong> containers are available around the world and it is available in the United States. PODS lives by its name, you need to book far in advance because they are in demand and containers rent quickly. If you are planning to park your container somewhere in your cities, you need to check your local regulation to confirm it is legal.
                    </p>

                    {/* Blue Box */}
                    <div className="bg-[#d1effb] p-6 rounded-md mb-12">
                        <p className="font-bold text-gray-800 text-sm mb-1 text-[13px]">Need Truck for moving?</p>
                        <p className="text-green-400 font-semibold text-sm text-[13px]">
                            <Link href="#" className="hover:underline">The Best Moving Companies That Provides Trailer Rental</Link>
                        </p>
                    </div>
                </div>

                {/* Is PODS worth it? */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-4">Is PODS worth it?</h2>
                    <p className="text-gray-500 mb-8">
                        Portable On Demands has two options for Insurance, Content Insurance, and container-only insurance. Content Insurance means you are covered both the belonging packed inside and for the container. While Container-only insurance covers any damage to the storage while it's on your property or where its located.
                    </p>

                    {/* Second Image (Large) */}
                    <div className="relative w-full h-[500px] mb-8">
                        <Image
                            src="https://wowmover.com/wp-content/uploads/2020/06/pods-moving-containers-1024x576.jpg"
                            alt="Man loading boxes into PODS container"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>

                    <p className="text-gray-500 mb-4 mt-6">
                        PODS also offers moving supplies such as moving blankets, locks, cushioning materials, tapes, and dispensers, packing supplies, rubber moving band, lifting straps, and more.
                    </p>
                    <p className="text-gray-500 mb-8">
                        If you are looking for affordable ways to move, PODS Container might worth it for you. PODS also offers 30-day rental which gives you more time to pack your belongings and it is useful for your long-distance relocation.
                    </p>
                </div>

                {/* Related Articles Checklist */}
                <div className="mt-12">
                    <ul className="space-y-3">
                        {[
                            "Moving a Mobile Home: Costs and Considerations",
                            "Hidden Home Buying Costs You Shouldn't Overlook",
                            "Smart Packing Tips Using Modern Tools That Actually Make Moving Easier",
                            "Moving to a Smaller Home: Tips for Success",
                            "Relocate or Not: Key Factors to Consider First"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center text-gray-500 text-sm">
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
