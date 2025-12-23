import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, X, Phone, Lock, Truck } from 'lucide-react';

export default function StorageGuidePage() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            {/* Header / Breacrumb Area */}
            <div className="bg-gray-50 pt-8 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs could go here if needed, keeping it clean for now or minimal */}
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* Hero Section - Split Card */}
                <div className="bg-[#0B2341] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px] mb-16">
                    {/* Left: Image */}
                    <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                        <Image
                            src="https://wowmover.com/wp-content/uploads/2020/07/storage-unit-2.jpg"
                            alt="Worker in storage unit"
                            fill
                            className="object-cover"
                            unoptimized
                            priority
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center text-white">
                        <h1 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                            Storage 101: The Ultimate Guide to Choosing the Right Storage Unit
                        </h1>
                        <p className="text-[#5BC236] font-semibold mb-8 text-sm uppercase tracking-wider">
                            June 3, 2024
                        </p>

                        <a
                            href="tel:8889695498"
                            className="inline-block px-10 py-4 bg-[#76Dba8] hover:bg-[#68c994] text-white font-bold rounded-full text-center transition-transform hover:scale-105 w-fit"
                        >
                            GET A QUOTE
                        </a>
                    </div>
                </div>

                {/* Main Content - Centered, No Sidebar */}
                <div className="max-w-4xl mx-auto">

                    {/* Intro */}
                    <div className="prose prose-lg max-w-none text-gray-700 mb-12">
                        <p className="not-prose text-gray-700 text-lg leading-relaxed mb-6">
                            <span className="font-bold text-[#0B2341]">What is a Storage Unit?</span> An apartment-like building but its rooms look like garages also known as <a href="#" className="text-[#0B2341] font-bold hover:underline">interstate moving and storage</a> units. You rent a unit and pay it monthly. These units are used only for the sake of storing stuff, you cannot live here but you can use them as a temporary workshop.
                        </p>

                        <div className="not-prose mb-8">
                            <p className="text-sm font-bold text-gray-900">
                                Also, Read: <Link href="/what-not-to-store-in-your-garage" className="text-[#5BC236] hover:underline">Why and What Not to Store in Your Garage</Link>
                            </p>
                        </div>

                        <p className="not-prose text-gray-700 text-lg leading-relaxed mb-6">
                            After dealing with the <a href="#" className="text-[#0B2341] font-bold hover:underline">best moving companies</a>. Imagine you have just arrived at your new home, not too long after, the moving truck arrives and unloads all your belongings. As you take them inside, you suddenly remember that you can’t put them all inside- you downsized. Where do you put them temporarily?
                        </p>

                        <div className="not-prose mb-12">
                            <p className="text-sm font-bold text-gray-900">
                                Also, Read: <Link href="/useful-furniture-storage-solutions-for-your-next-move" className="text-[#5BC236] hover:underline">Useful Furniture Storage Solutions for your Next Move</Link>
                            </p>
                        </div>
                    </div>

                    {/* Types of Storage Units */}
                    <section className="mb-16">

                        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image
                                src="https://wowmover.com/wp-content/uploads/2020/07/storage-unit-1024x768.jpg"
                                alt="Types of Storage Units"
                                width={1024}
                                height={768}
                                className="w-full h-auto object-cover"
                                unoptimized
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-8">Types of Storage Units</h2>
                        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                            <p>
                                Depending on your area, you can find different kinds of storage units. In urban areas, indoor storage facilities are common for the reason that they save more space, and can accommodate more than their counterpart. However, the downside on this kind of storage is that putting your stuff inside requires you to carry it. You cannot drive your car since it is compact and has little space to work with.
                            </p>
                            <p>
                                The other one is the drive-up access. These are more common in rural areas since space isn’t an issue there. Here you can drive your vehicle near the unit you rented and you can easily drop all the stuff you need to leave.
                            </p>
                        </div>
                    </section>

                    {/* Price Section */}
                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-[#0B2341] mb-4">Price</h3>
                        <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                            <p>
                                The price depends on many factors, size of the unit, season, location, security, and amenities. Of course, the larger unit will be more expensive than the smaller ones. There are times that storage units are in demand and prices are affected as well, for example in winter, when you cannot leave your stuff hanging around your garden along with your jet ski.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-[#0B2341] p-4 my-6">
                                <p className="font-medium text-[#0B2341] m-0">
                                    Also, Read: <Link href="/cleaning-out-a-storage-unit" className="text-[#5BC236] hover:underline">Cleaning Out a Storage Unit</Link>
                                </p>
                            </div>
                            <p>
                                Populated areas with smaller houses and apartments also have pricier storage units. Add to that a security camera and guards that monitor the place then prices will increase a little more. Lastly, a unit equipped with climate control will protect your belongings from harsh weather conditions, and yes, it comes with a price. All in all, these storage units vary in features. So if you have time to spare, then wander around and pick the one that satisfies your belongings’ needs. This way, you don’t get to spend money on storage more than the stuff that you put inside.
                            </p>
                        </div>
                    </section>

                    {/* Difference Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-6">Difference Between Full-Service Storage And Self Storage Units</h2>
                        <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                            In the event that you’ve searched for storage recently, you may have seen that there are now various sorts of storage to look over. To start with, there is the style of storage you’re presumably progressively acquainted with — Self-Storage. In any case, there are now supposed “Full-Service” storage activities. Yet, which is directly for your circumstance? Find out about each kind below and choose for yourself.
                        </p>

                        <div className="space-y-12">
                            {/* Self Storage */}
                            <div>
                                <h3 className="text-2xl font-bold text-[#0B2341] mb-4">Self-Storage</h3>
                                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                                    <p>
                                        Self-Storage is undoubtedly the kind of Storage you’re generally acquainted with. You’ve most likely observed them along the expressway with a great many columns of painted garage doors. These are what are known as “drive-up access” storage units. At the point when self-storage initially appeared, these units were the main sorts accessible. In any case, as the business developed, organizations acknowledged different clients favored storage units that were temperature-controlled and shielded from the elements.
                                    </p>
                                    <p>
                                        In this way, they started assembling storerooms that offered both indoor storage units and the previously mentioned drive-up style units. Both indoor storage units and drive-up get-to storage units arrive in an assortment of sizes running from as little as 5 x 5 to as extensive as 12 x 30. The expense for an average 5 x 5 storage unit can extend from $29 to $69 depending upon the market.
                                    </p>
                                    <p>
                                        In the wake of deciding the size of the storage unit you need and what will oblige your spending plan, you carry your belongings to your storage unit by means of your very own transportation (vehicle, pickup, van), or you lease a moving truck. On the off chance that you have one of the drive-up style storage units, you would park your vehicle in front of your unit and unload your assets into the unit.
                                    </p>
                                    <p>
                                        In the event that you have an indoor unit, numerous offices have secured and covered loading and unloading areas where you would leave your vehicle at. You would then utilize carts to move your stuff from your vehicle to the facility’s cargo lift, and afterward, unload your belongings into your unit. Clearly, with the self-storage sort of arrangement, it helps with having loved ones to get you out in the event that you’re moving an entire house’s worth of stuff.
                                    </p>
                                    <p>
                                        With most self-storage, rentals are month-to-month so you are not dedicated to any drawn-out agreement. Most will charge you for a lock in the event that you don’t give your own. You’ll additionally need to pay for protection inclusion insurance if your mortgage holder or rental protection covers storage rental, which many do. A few companies additionally charge a one-time administrator expense or fees that range between $25-$50 to take care of the expense of getting you to put in their system and the related paperwork.
                                    </p>
                                    <p>
                                        These facilities typically have access hours from prompt in the first part of the day until late around in the evening. Some offer 24-hour access, while a minority of offices are by arrangement or appointment as it were.
                                    </p>
                                    <p>
                                        Some storage offers temperature-controlled storage units, which means the temperature and humidity level are kept inside controlled levels. Others offer heated or warmed storage units where your assets remain safe throughout the winter months.
                                    </p>
                                    <p>
                                        It’s a smart thought to go to the facility that you’re considering storing at so as to visit it and get a direct look at the unit conditions and the upkeep of the property. Likewise, ask with respect to the degree of security. At top of the line tasks, you’ll see that they’ll have 24/7 video surveillance cameras, individual key code access at all entry sections, and cut-proof bolts on their storage units.
                                    </p>
                                </div>
                            </div>

                            {/* Full Service Storage */}
                            <div>
                                <h3 className="text-2xl font-bold text-[#0B2341] mb-4">Full-Service Storage Unit</h3>
                                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                                    <p>
                                        There are full-Service storage companies, also called on-demand storage. These activities will get, store, and return or deliver your stored items on demand
                                    </p>
                                    <p>
                                        Depending upon the plan of action, a few organizations will pack up your possessions for free or for a little fee. With others, you are liable for packing up your own things. For bigger things, for example, furniture, clients should consider wrapping these in a protective air pocket or bubble wrap. Some full-service may likewise offer free bins and boxes while others charge for boxes and packing supplies. Different organizations give bins to use for free, yet these must be returned within a certain time span to abstain from being charged for them.
                                    </p>
                                    <p>
                                        When you have your crates and different things all set, you have to plan an arrangement to have the company get them. depending upon the company, the pickup date can run anyplace from a day to seven days out from your call. Expenses for this underlying pickup extend from $200 with extra hours charged at an hourly rate.
                                    </p>
                                    <p>
                                        Once on the location, the company will stock the contents of each case and thing and take a photo of it. When this is entered into their computer system or database you can sign in to your account and inspect the stock inventory to really see what you’ve put away by means of the photos.
                                    </p>
                                    <p>
                                        Your things are then stored at the company’s stockrooms or warehouse. This can be located in a similar city or it may be 20-30 miles away relying upon the city.
                                    </p>
                                    <p>
                                        On the off chance that you have to recover a few or the entirety of your things, you’ll have to plan or schedule a delivery date and time. Similarly, as with the pickup, this date can extend up to a week. Expenses for deliveries may fluctuate, with certain companies offering one free delivery for every month while others charge for delivery. Delivery of bigger things, for example, furniture is regularly an additional expense.
                                    </p>
                                    <p>
                                        with storage costs concerns, this will shift depending upon the market you’re in. Urban communities, for example, some cities have the most significantly higher expenses, while different parts of the area are less.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Advantages and Disadvantages Section */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold text-[#0B2341] mb-8">Advantages and Disadvantages of Self-Storage versus Full-Service Storage</h2>

                        <div className="space-y-8">
                            {/* Self Storage Unit */}
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-[#0B2341]">Self Storage Unit</h3>

                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Pros</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Access your items when you need them. Likewise, offices commonly have extended periods of time</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Lower rates than Full-Service</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Single access to your storage unit, Since you move them in and out and have the main key to your unit, there’s no possibility of incidents when others handle your stuff</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4">Cons</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Not all storerooms are equivalent. Factors in security, tidiness or cleanliness, bug control, client or customer support</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Full-Service Storage Unit */}
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-[#0B2341]">Full-Service Storage Unit</h3>

                                <div className="mb-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Pros</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Items are picked up and delivered straight to you</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Some companies will pack things for you</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Items are photographed and stocked or have inventories. Clients can see inventories and photographs on the internet</span>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4">Cons</h4>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Some companies charge pickup expenses and delivery expenses</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Some companies have a base storage term of a minimum of 6months</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">Cannot visit the warehouse or storage site to get stuff out</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#76Dba8] flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-white stroke-[4]" />
                                            </div>
                                            <span className="text-gray-600 leading-relaxed font-normal">You need to plan the date and time for deliveries. Can be up to seven days or more .well – somewhere in the range of 1 and 6 hours</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>



                </div>
            </main>
        </div>
    );
}
