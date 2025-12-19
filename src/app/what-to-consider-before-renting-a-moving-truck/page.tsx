import Image from "next/image";
import Link from "next/link";
import { MoveRight } from 'lucide-react';

export default function WhatToConsiderPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 lg:px-8 py-8 max-w-7xl">

                {/* Hero Section */}
                <div className="relative bg-[#F9FAFB] rounded-3xl overflow-hidden mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left Side - Image */}
                        <div className="relative h-[400px] lg:h-auto min-h-[500px]">
                            <Image
                                src="https://wowmover.com/wp-content/uploads/2024/06/moving-truck.jpg"
                                alt="Moving truck illustration"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </div>

                        {/* Right Side - Dark Card Content */}
                        <div className="relative bg-[#0B2341] p-12 lg:p-16 flex flex-col justify-center text-white">
                            {/* Curved overlay effect */}
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#F9FAFB] lg:block hidden" style={{ clipPath: 'ellipse(100% 150% at 0% 50%)', transform: 'translateX(-50%)' }}></div>
                            {/* Green accent curve */}
                            <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#10B981] lg:block hidden rounded-r-full h-full" style={{ left: '-10px', boxShadow: '0 0 0 10px #F9FAFB' }}></div>


                            <div className="relative z-10 space-y-6">
                                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                                    What to Know Before Renting a Moving Truck
                                </h1>
                                <p className="text-sm font-medium text-gray-300">
                                    January 22, 2025
                                </p>

                                <div className="h-px w-full bg-gray-600 my-8"></div>

                                <button className="bg-[#78D9A4] text-white px-8 py-3 rounded-full font-bold uppercase tracking-wide hover:bg-[#62c08e] transition-colors w-fit text-sm">
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="max-w-4xl mx-auto space-y-10 text-gray-700 leading-relaxed">

                    <p>
                        When hiring a moving truck for your moving needs, there is a range of important aspects that you must remember. Note that it might seem fairly easy to hire a moving vehicle, but it does contain a few potential pitfalls that you might fall into if you're not careful enough.
                    </p>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1f2937] mb-3">Speak with the Truck Rental Company</h2>
                        <p>
                            If you can also rent the requisite moving equipment from them, such as a moving dolly, furniture sliders, moving blankets, or buy all the <span className="text-[#10B981] font-semibold">packing supplies</span> you would need to secure your goods from them. If yes, then compare the <span className="text-[#10B981] font-semibold">trailer rental</span> or selling prices with other suppliers in order to ensure that their rates are competitive and that you are not overcharged grossly.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1f2937] mb-3">Understand the Terms of Deposits</h2>
                        <p>
                            In order to reserve the truck for the date you need it, some truck rental companies will request a deposit. Ask your rental service if you need a credit card to pay the charge for the deposit. Often, ask when you would expect the deposit or the fee to be deducted from your credit card to be returned to you. Most importantly, ask them what will happen if, for some reason or another, you cancel your truck booking. Will you lose the deposit as a cancellation fee?
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1f2937] mb-3">Explore your options for Truck Rental Insurance</h2>
                        <p>
                            You will be given different forms of insurance coverage by the <span className="text-[#10B981] font-semibold">truck rental company</span> you have chosen to give you peace of mind when driving the freight vehicle. If an accident occurs on the lane, you should be helped with the incurred costs by the truck rental insurance you have bought. Keep in mind that most <span className="text-[#10B981] font-semibold">insurance plans</span> for rental vehicles will only cover the moving truck, so if you're concerned about damaging your stuff, then you're going to have to find extra insurance for freight.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1f2937] mb-3">Know What To Do If the Truck Breaks Down</h2>
                        <p>
                            Are you going to have to pay out of your own pocket to get reimbursed by the business then? Or is the truck rental agency going to pay in advance? Is there roadside assistance provided by the truck rental company? If the moving vehicle experiences a mechanical failure of some kind along the way, are you allowed to use particular service stations? Before you rent the <span className="text-[#10B981] font-semibold">moving van</span>, get the essential details.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1f2937] mb-3">Complete Truck Inspection</h2>
                        <p>
                            All you have to do is make sure you rent a moving vehicle that is in good technical condition and that you can drive it safely to wherever you need to go. For any visible signs of injury, check the truck and report something that is out of the ordinary. Then, check the tires, lights, signals, and side-mirrors of the vehicle. Before you rent it, make sure you are familiar with the fundamental controls of the moving truck.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1f2937] mb-3">Possible Fines and Additional Charges</h2>
                        <p className="mb-4">
                            Be mindful of potential fines and additional charges levied in specific conditions by the truck rental company.
                        </p>
                        <p>
                            You are supposed to return the leased truck with a full gas tank, for example, because at the time of renting it, that's how you would have it. The company will compensate you for the missing fuel, most frequently at a higher price than the current market rate, if you do not return the vehicle with its gas tank full. Even if you return the dirty, messy, and untidy truck, then you're likely to get a cleaning fee paid. There is also a penalty, of course, for returning the vehicle later than expected.
                        </p>
                    </section>

                    {/* Additional Link */}
                    <div className="font-bold text-gray-800">
                        Also, Read: <span className="text-[#10B981]">Things to know before Moving in the Rain</span>
                    </div>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1f2937] mb-3">Choose a Reliable Truck Rental Company</h2>
                        <p>
                            During your whole <span className="text-[#10B981] font-semibold">DIY move</span>, that is often the most critical step. When it comes to reacting appropriately to the needs of their clients, you need a moving truck agency that is proven time and again to be trustworthy and efficient.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
