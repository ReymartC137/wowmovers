import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from 'lucide-react';

export default function BudgetTruckRentalCost() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Hero Section */}
            <div className="relative bg-white pb-8">
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-sm bg-[#fafafa]">
                        {/* Left: Truck Image */}
                        <div className="w-full lg:w-3/5 relative min-h-[400px] bg-white flex items-center justify-center p-8">
                            <div className="relative w-full h-[300px]">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2020/06/budget-truck-rental-cost.jpg"
                                    alt="Budget Moving Truck"
                                    fill
                                    className="object-contain"
                                    priority
                                    unoptimized
                                />
                            </div>
                        </div>

                        {/* Right: Content Card */}
                        <div className="w-full lg:w-2/5 bg-[#0B2341] p-12 flex flex-col justify-center relative overflow-hidden">
                            {/* Green decorative curve on the left edge */}
                            <div className="absolute left-0 top-0 bottom-0 w-4 bg-[#10b981] rounded-r-full transform -translate-x-2 skew-x-12"></div>

                            <div className="relative z-10 pl-6">
                                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                    Budget Truck Rental Cost Breakdown:
                                    <br />
                                    What You&apos;ll Pay and Why
                                </h1>
                                <p className="text-gray-300 mb-8 text-sm">
                                    June 3, 2024
                                </p>

                                <div className="w-full h-px bg-gray-700 mb-8"></div>

                                <button className="bg-[#76Dba8] text-white font-bold py-3 px-8 rounded-full hover:bg-[#68c994] transition-colors w-max uppercase text-sm tracking-wide">
                                    Get a quote
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 max-w-5xl pb-20">
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                    <p>
                        If money is not a problem, everyone would hire full-service moving companies without hesitation. Unfortunately, everything has a price in this world we live in. Even DIY costs you money or even worst especially if your not an expert on moving.
                    </p>

                    <p>
                        <span className="text-[#10b981] font-bold">Budget Truck Rental</span> has some of the lowest pricing in the industry. They can certainly help with your moving budget. Continue reading for some things to look out for to ensure the best deals for your budget.
                    </p>

                    <p>
                        Some truck rental companies advertise their prices at a very low rate then they raise it up with hidden fees such as fuel fees and environmental fees. Be sure to read all details before you sign any contracts. <span className="font-bold">Budget Rental Truck</span> prices are cheaper than other truck rental companies but it doesn&apos;t mean that its the cheapest overall. Rates depend on gas fuel, travel distance, and truck size.
                    </p>

                    <p>
                        <span className="font-bold text-gray-900">Also, Read: </span>
                        <Link href="#" className="text-[#10b981] font-medium hover:underline">
                            The Ultimate Guide Moving to other States
                        </Link>
                    </p>

                    <p>
                        Before signing a contract or making a decision about hiring a truck rental company, be sure to talk to company representatives to get the actual cost, add ons and insurance fees. (<span className="italic">Learn More: <Link href="#" className="text-[#10b981]">Why is it Very Important to Ask for A Moving Quotes</Link></span>) That way, you will know what is the actual cost and most especially if it fits your budget. With that being said, here are the rates of Budget Truck Rental for different truck sizes and different types of moves.
                    </p>

                    <p>
                        <span className="font-bold text-gray-900">Also, Read: </span>
                        <Link href="#" className="text-[#10b981] font-medium hover:underline">
                            Things to Consider When Choosing Between Renting or Buying a House
                        </Link>
                    </p>

                    <h2 className="text-2xl font-bold text-[#0B2341] mt-8 mb-4">How Much Does It Cost to Rent a Budget Moving Truck?</h2>

                    <div className="relative w-full h-[300px] my-8">
                        <Image
                            src="https://wowmover.com/wp-content/uploads/2020/06/budget-truck-rental.png"
                            alt="Budget Truck Graphic"
                            fill
                            className="object-contain object-left"
                            unoptimized
                        />
                    </div>

                    <p className="font-bold text-gray-900">Note: Here&apos;s how to compute your total cost.</p>
                    <p className="text-gray-500 text-sm">Fees/Taxes + Add-ons + Gas Refill + Truck + Milage + Liabilities = Final Cost</p>

                    <div className="mt-8 space-y-6">
                        <div>
                            <h3 className="font-bold text-gray-900">Local Round Trips under 50 miles</h3>
                            <p className="text-sm">12 Foot Truck costs $29.99 per day and an additional $0.79 per mile.</p>
                            <p className="text-sm">16 Foot Truck costs $29.99 per day and an additional $0.79 per mile.</p>
                            <p className="text-sm">26 Foot Truck costs $39.99 per day and an additional $0.79 per mile</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900">Medium Distance -250 miles</h3>
                            <p className="text-sm">12 Foot Truck cost $252 with unlimited mileage</p>
                            <p className="text-sm">16 Foot Truck cost $285 with unlimited mileage</p>
                            <p className="text-sm">26 Foot Truck cost $330 with unlimited mileage</p>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-900">Cross Country Move</h3>
                            <p className="text-sm">12 Foot Truck cost $1,287 with unlimited mileage</p>
                            <p className="text-sm">16 Foot Truck cost $1,287 with unlimited mileage</p>
                            <p className="text-sm">26 Foot Truck cost $1,287 with unlimited mileage</p>
                        </div>
                    </div>

                    <p className="mt-8">
                        Choosing the right truck rental companies takes a lot of time and research. Only consider what you really need for a moving company to decide what is best for your move. Budget Truck Rental offers reliable moving truck rental at plain prices. And one good thing is, they are almost available everywhere in the US.
                    </p>

                    <p>
                        <span className="font-bold text-gray-900">Also, Read: </span>
                        <Link href="#" className="text-[#10b981] font-medium hover:underline">
                            Guide on How to Budget your Move in 2022
                        </Link>
                    </p>

                    <div className="mt-8">
                        <button className="bg-[#fbbf24] text-white font-bold py-3 px-10 rounded-full hover:bg-[#f59e0b] transition-colors shadow-md">
                            (855) 770-5993
                        </button>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-bold text-gray-900 mb-4">Next Article To Read:</h3>
                        <ul className="space-y-2">
                            {[
                                "How to Properly Secure your Furniture while Moving",
                                "Why Do We Recommend All My Sons Moving and Storage?",
                                "PODS Container: Why We Love Portable On Demand Storage?",
                                "Why is it Very Important to Ask for A Moving Quotes",
                                "Should You Hire Professional Packers For Your Next Move?"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center text-[#10b981]">
                                    <CheckCircle className="w-5 h-5 mr-2 fill-[#76Dba8] text-white" />
                                    <Link href="#" className="hover:underline text-sm font-medium">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
