import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function TrailerRentalPage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Hero Section */}
            <div className="relative bg-white pb-8">
                <div className="container mx-auto px-4 py-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-sm bg-[#fafafa]">
                        {/* Left: Truck Image */}
                        <div className="w-full lg:w-3/5 relative min-h-[400px] bg-white flex items-center justify-center p-8">
                            <div className="relative w-full h-[300px]">
                                <Image
                                    src="https://wowmover.com/wp-content/uploads/2021/06/trailer-rental.png"
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
                                    Trailer Rental Guide: Affordable Options for Every Move
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

            <div className="container mx-auto px-4 pb-12 max-w-5xl">
                {/* Intro Text */}
                <div className="prose max-w-none text-gray-600 mb-12">
                    <p className="mb-4">
                        Either you’re relocating your studio-sized life across town or moving to a new house, a <strong>trailer rental</strong> is a less expensive alternative to a full-sized moving truck—as long as you’re prepared to haul it.
                    </p>
                    <p className="mb-4">
                        A trailer rental service or tow dolly may also be viable solutions if you need to transfer your automobile and auto shipping is out of your budget.
                    </p>
                    <p>
                        <Link href="https://wowmover.com/u-haul/" className="text-green-500 font-semibold hover:underline">U-Haul</Link> has the largest assortment of enclosed trailers and car carriers of any national company we’ve looked at. However, if you’re already renting one of their moving trucks, <Link href="https://wowmover.com/budget-truck-rental/" className="text-green-500 font-semibold hover:underline">Budget</Link> and Penske are excellent choices for car carrier rentals.
                    </p>
                </div>

                {/* Best Option: U-Haul */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-4">Best Option: U-Haul</h2>
                    <p className="text-gray-600 mb-4">
                        You may rent U-Haul’s trailers individually, so you don’t have to rent a moving vehicle to get a cargo trailer or a tow dolly. This set U-Haul apart from its rivals, which need you to hire both moving trailers and auto trailers/tow dollies.
                    </p>
                    <p className="text-gray-600 mb-4">
                        In addition to car carriers and tow dollies, U-Haul is the only firm on our list that offers moving trailers (the others don’t). In fact, U-Haul outperforms the competition with its thirteen trailer selections.
                    </p>
                    <p className="text-gray-600">
                        However, be wary of hidden fees—U-Haul has a reputation for adding extra charges to your final bill.
                    </p>
                </div>

                {/* Trailer Rental by U-Haul */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-8">Trailer Rental by U-Haul</h2>

                    {/* Cargo trailers */}
                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Cargo trailers</h3>
                    <p className="text-gray-600 mb-4">
                        Cargo trailers are less than rental trucks, but they provide the same level of weather protection. If you’re relocating bedroom furniture, fragile things, or that costly West Elm chest you always use a coaster with, you’ll need one of these.
                    </p>
                    <p className="text-gray-600 mb-8">
                        It all boils down to this: if you want to be safe, cargo trailers are the way to go. You won’t have to worry about highway debris getting into your possessions, and you won’t have to worry about a sudden torrential rainfall destroying your velvet sofa.
                    </p>

                    <h4 className="text-lg font-bold text-[#0B2341] mb-6">Cargo Trailer rates</h4>

                    <div className="overflow-x-auto mb-12">
                        <table className="w-full text-sm text-center border-collapse border-[0.66px] border-black">
                            <thead>
                                <tr className="bg-white">
                                    <th className="p-4 border-b-[0.66px] border-black font-bold text-[#333333]"></th>
                                    <th className="p-4 border-b-[0.66px] border-black font-bold text-[#333333]">4' x 8'</th>
                                    <th className="p-4 border-b-[0.66px] border-black font-bold text-[#333333]">5' x 8'</th>
                                    <th className="p-4 border-b-[0.66px] border-black font-bold text-[#333333]">5' x 10'</th>
                                    <th className="p-4 border-b-[0.66px] border-black font-bold text-[#333333]">6' x 12'</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 border-b-[0.66px] border-black font-semibold text-left text-[#333333]">Weight Limit</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">1,650 lbs.</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">1,800 lbs.</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">1,550 lbs.</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">2,480 lbs.</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 border-b-[0.66px] border-black font-semibold text-left text-[#333333]">Long-distance vs. local</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">Long-distance</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">Long-distance</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">Long-distance</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">Long-distance</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 border-b-[0.66px] border-black font-semibold text-left text-[#333333]">Price per day</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">$14.95</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">$18.95</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">$29.95</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">$29.95</td>
                                </tr>
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 border-b-[0.66px] border-black font-semibold text-left text-[#333333]">Best for</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">Single room, dorm room</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">Single room, twin bed, couches, chairs</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">1-2 bedrooms</td>
                                    <td className="p-4 border-b-[0.66px] border-black text-[#333333]">Larger loads of furniture</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Utility trailers */}
                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Utility trailers</h3>
                    <p className="text-gray-600 mb-4">
                        Outdoor or larger items, such as landscaping equipment or your brand-new gas barbecue, are great for utility trailers.
                    </p>
                    <p className="text-gray-600 mb-4">
                        We wouldn’t put your Restoration Hardware sectional in one of them, but if you’re carrying patio furniture, a lawnmower, or other items that can handle an open highway trip, we say go for it.
                    </p>
                    <p className="text-gray-600 mb-12">
                        EZ Ramps are available on several utility trailer sizes, allowing you to slide large items onto the bed rather than lifting them. Although these open trailers are not lockable, they do come with tie-down rings to keep your belongings secure.
                    </p>

                    {/* Auto trailers */}
                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Auto trailers</h3>
                    <p className="text-gray-600 mb-4">
                        You can rent a car or motorcycle trailer to tow your vehicle if you don’t want to spend money on auto shipment. Your car rides on top of the trailer, preventing wear and tear on your tires while on the road.
                    </p>
                    <p className="text-gray-600 mb-4">
                        As a result, if you’re moving lengthy distances, we recommend investing in a car trailer (i.e. 300 miles or more).
                    </p>
                    <p className="text-gray-600 mb-12">
                        U-Haul Car Hauler: Car trailers from U-Haul can tow vehicles weighing up to 5,290 pounds. To put this in context, a Ford F-150, a heavy-duty pickup truck, weighs between 5,000 and 7,000 pounds. Before you rent an auto trailer, double-check your car’s specs to verify if it’s towable.
                    </p>

                    {/* Tow Dolly */}
                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Tow Dolly</h3>
                    <p className="text-gray-600 mb-4">
                        Although a tow dolly is less expensive than a car or motorcycle trailer, it provides less protection. It simply supports the front wheels, rather than elevating the vehicle totally off the ground. Even though your car’s back tires drag on the road, it still saves you money on gas.
                    </p>
                    <p className="text-gray-600 mb-12">
                        A tow dolly may be all you need if you have a smaller automobile and a limited budget. However, this apparatus is appropriate for local moves; long-distance moves will put too much wear and strain on your back wheels.
                    </p>
                </div>

                {/* Cost Section */}
                <div className="mb-12">
                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">So How much exactly it will cost?</h3>
                    <p className="text-gray-600 mb-6">
                        Renting a trailer from U-Haul is less expensive than renting a trailer from any of the other companies we looked at. Because you can reserve a U-Haul trailer without paying the entire price of a truck rental, this is the case.
                    </p>
                    <p className="text-gray-600 mb-4">The following factors influence U-basic Haul’s rates:</p>

                    <ul className="space-y-3 mb-6">
                        <li className="flex items-center text-gray-600">
                            <div className="bg-[#76Dba8] rounded-full p-1 mr-3">
                                <Check className="h-3 w-3 text-white" />
                            </div>
                            Gas mileage
                        </li>
                        <li className="flex items-center text-gray-600">
                            <div className="bg-[#76Dba8] rounded-full p-1 mr-3">
                                <Check className="h-3 w-3 text-white" />
                            </div>
                            Seasonality
                        </li>
                        <li className="flex items-center text-gray-600">
                            <div className="bg-[#76Dba8] rounded-full p-1 mr-3">
                                <Check className="h-3 w-3 text-white" />
                            </div>
                            Trailer type
                        </li>
                        <li className="flex items-center text-gray-600">
                            <div className="bg-[#76Dba8] rounded-full p-1 mr-3">
                                <Check className="h-3 w-3 text-white" />
                            </div>
                            Trailer size
                        </li>
                        <li className="flex items-center text-gray-600">
                            <div className="bg-[#76Dba8] rounded-full p-1 mr-3">
                                <Check className="h-3 w-3 text-white" />
                            </div>
                            Move distance
                        </li>
                    </ul>

                    <p className="text-gray-600 mb-8">
                        U-base Haul’s rates, to be honest, appear to be too good to be true. Here’s the catch: U-Haul has a habit of jacking up your bill with last-minute surcharges like gas and mileage fees, as well as damage protection policies.
                    </p>

                    <button className="bg-[#F0A800] hover:bg-[#D99800] text-white font-bold py-4 px-8 rounded-md transition-colors uppercase tracking-wide text-lg shadow-md w-full sm:w-auto">
                        U-HAUL FREE QUOTE
                    </button>
                </div>

                {/* Best in Tow Dollies: Penske */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-6">Best in Tow Dollies: Penske</h2>
                    <p className="text-gray-600 mb-4">
                        Penske, unlike U-Haul, has a solid reputation for customer service and transparency, and it delivers on the features and perks it advertises. When it comes to Penske, you can trust what you see, which is something that only a few moving firms can boast.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Penske, for example, ensures that your selected truck size and pickup location are available. Other businesses may provide this service but only at a premium.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Our only quibble? Penske rents automobile trailers but does not lend out other sorts of trailers. Furthermore, you are not permitted to pull its trailers with anything other than a Penske rental vehicle.
                    </p>
                </div>

                {/* Trailer Rental offers by Penske */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-8">Trailer Rental offers by Penske</h2>

                    {/* Car trailers */}
                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Car trailers</h3>
                    <p className="text-gray-600 mb-4">
                        The three-point tie-down mechanism on Penske's car trailers keeps your vehicle secure and prevents it from shifting. They also have a ramp to make loading everything from motorcycles to the beat-up Toyota you bought in college a little easier.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Penske specializes in the transportation of automobiles.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Penske's car trailers are best for automobiles. A real sense of rear wheel drive, and their weight restriction is lower than U-Haul's. Consider whether Penske is the best choice for your vehicle type before making a reservation.
                    </p>

                    <h4 className="text-lg font-bold text-[#0B2341] mb-4">Features</h4>
                    <div className="mb-8 space-y-2">
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Weight limit:</span>
                            <span className="text-gray-600">4,900 lbs.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Front-wheel drive:</span>
                            <span className="text-gray-600">Yes</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Four-wheel drive:</span>
                            <span className="text-gray-600">Yes</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">All-wheel drive:</span>
                            <span className="text-gray-600">Yes</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Best for:</span>
                            <span className="text-gray-600">All-wheel or rear-wheel drive cars</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Long-distance vs. local:</span>
                            <span className="text-gray-600">Long-distance</span>
                        </div>
                    </div>

                    {/* Car dolly */}
                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Car dolly</h3>
                    <p className="text-gray-600 mb-4">
                        Penske's vehicle dollies, like its car trailers, can only be pulled behind a Penske truck. However, unlike its vehicle trailers, its vehicle dollies have a higher weight restriction than U-Haul.
                    </p>
                    <p className="text-gray-600 mb-6">
                        One reason to use Penske over U-Haul if you know your automobile is heavier than typical.
                    </p>

                    <h4 className="text-lg font-bold text-[#0B2341] mb-4">Features</h4>
                    <div className="mb-8 space-y-2">
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Weight limit:</span>
                            <span className="text-gray-600">4,300 lbs.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Front-wheel drive:</span>
                            <span className="text-gray-600">Yes</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Four-wheel drive:</span>
                            <span className="text-gray-600">No</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">All-wheel drive:</span>
                            <span className="text-gray-600">No</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Best for:</span>
                            <span className="text-gray-600">Front-wheel drive cars</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Long-distance vs. local:</span>
                            <span className="text-gray-600">Local</span>
                        </div>
                    </div>
                </div>

                {/* Penske Moving Cost */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-4">Penske Moving Cost</h2>
                    <p className="text-gray-600 mb-4">
                        Penske does not have a predetermined rental rate. The price of its automobile trailers and tow dollies is determined upon availability. The more car carriers and tow dollies it has on hand, the less it may be able to justify that.
                    </p>
                    <p className="text-gray-600 mb-4">
                        It was difficult to determine the exact cost of Penske trailers because the corporation is secretive about its costs.
                    </p>
                    <p className="text-gray-600 mb-4">
                        For example, we received a quotation of $275 for a car trailer from Salt Lake City, Utah, to Portland, Oregon. However, depending on how many trailers the business had on hand, the cost of moving from Portland to Salt Lake City may be quadruple that.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Seasonality has an impact on rates as well. The figures we received were for the winter, but fees might easily rise if we planned again in May or June.
                    </p>

                    <button className="bg-[#F0A800] hover:bg-[#D99800] text-white font-bold py-4 px-8 rounded-md transition-colors uppercase tracking-wide text-lg shadow-md w-full sm:w-auto">
                        PENSKE FREE QUOTE
                    </button>
                </div>

                {/* Budget Truck */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-6">Budget Truck</h2>
                    <p className="text-gray-600 mb-4">
                        If you're wondering what <Link href="https://wowmover.com/budget-truck-rental/" className="text-green-500 font-semibold hover:underline">Budget</Link> is great for, its name should tell you all you need to know.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Budget is great for those on a tight budget. While you can only rent a car trailer or car dolly as part of an existing truck reservation, the company provides reasonable rates and a variety of promotions to help you save money.
                    </p>
                    <p className="text-gray-600 mb-4">
                        And if you're relocating locally, the charges are considerably lower.
                    </p>
                </div>

                {/* Budget Trailer Rental Offers */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-8">Budget Trailer Rental Offers</h2>
                    <p className="text-gray-600 mb-4">
                        Budget's car trailers lift your vehicle off the ground and secure it to the back of your rental truck.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Budget, like <Link href="https://wowmover.com/penske-truck-rental/" className="text-green-500 font-semibold hover:underline">Penske</Link>, does not allow you to attach a trailer to your personal vehicle. But there's a catch: you can only tow a Budget car trailer with a Budget truck that's 26 feet long.
                    </p>
                    <p className="text-gray-600 mb-6">
                        While the weight capacity of this trailer is equivalent to that of the two firms, Budget nevertheless has the lowest weight capacity of the three.
                    </p>

                    <h3 className="text-lg font-bold text-[#0B2341] mb-4">Budget trailer rental features</h3>
                    <div className="mb-8 space-y-2">
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Weight limit:</span>
                            <span className="text-gray-600">4,785 lbs.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Maximum width of the car:</span>
                            <span className="text-gray-600">6' 7"</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Vehicle compatibility:</span>
                            <span className="text-gray-600">Four-wheel and all-wheel-drive cars</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Long-distance vs. local:</span>
                            <span className="text-gray-600">Long-distance</span>
                        </div>
                    </div>

                    {/* Tow Dolly */}
                    <h3 className="text-xl font-bold text-[#0B2341] mb-4">Tow Dolly</h3>
                    <p className="text-gray-600 mb-4">
                        In terms of design and functioning, Budget's tow dollies are identical to those of U-Haul and Penske. A tow dolly, regardless of which business you choose, helps limit tire wear.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Budget's tow dollies, on the other hand, are only available for one-way movements. Budget, on the other hand, has a distinct edge in terms of pricing, especially if you qualify for one of its discounts.
                    </p>

                    <h4 className="text-lg font-bold text-[#0B2341] mb-4">Tow Dolly features</h4>
                    <div className="mb-8 space-y-2">
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Weight limit:</span>
                            <span className="text-gray-600">3,200–3,600 lbs.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Maximum width of the car:</span>
                            <span className="text-gray-600">6' 4"</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Vehicle compatibility:</span>
                            <span className="text-gray-600">All-wheel, four-wheel, and rear-wheel-drive cars</span>
                        </div>
                        <div className="flex items-start">
                            <span className="font-semibold text-gray-800 w-48">Long-distance vs. local:</span>
                            <span className="text-gray-600">Local</span>
                        </div>
                    </div>
                </div>

                {/* Budget Trailer Rental Cost */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-4">Budget Trailer Rental Cost</h2>
                    <p className="text-gray-600 mb-4">
                        It doesn't list prices for flat prices for car trailers and tow dollies. However, unlike Penske, Budget bases the price of each trailer rental and tow dolly on the number of days you move—this means you won't be charged exorbitantly based only on your destination.
                    </p>
                    <p className="text-gray-600 mb-8">
                        Because trailer rental isn't included in Budget's online quote generator, you'll have to phone a Budget agent to find out how much they'll add to your bill.
                    </p>

                    <button className="bg-[#F0A800] hover:bg-[#D99800] text-white font-bold py-4 px-8 rounded-md transition-colors uppercase tracking-wide text-lg shadow-md w-full sm:w-auto">
                        BUDGET FREE QUOTE
                    </button>
                </div>

                {/* Conclusion */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#0B2341] mb-4">Conclusion</h2>
                    <p className="text-gray-600 mb-4">
                        If your moving dates and price are both flexible, we recommend U-Haul for trailer rental. (Just keep an eye out for any additional charges!)
                    </p>
                    <p className="text-gray-600 mb-4">
                        Penske's trailers are also excellent, especially for auto transportation, particularly because they are generally less expensive than U-Haul and, in some cases, offer higher weight restrictions. Penske provides more generous weight limits, while Budget has more affordable rates.
                    </p>
                    <p className="text-gray-600">
                        However, in the end, price and availability are the deciding factors. While U-Haul has stores in all 50 states and provides a wide range of services, it cannot guarantee reservations and does not share rate fees.
                    </p>
                </div>

            </div>
        </div>
    );
}
