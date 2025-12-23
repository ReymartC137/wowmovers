import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, X, Phone, Lock, Truck } from 'lucide-react';

export default function ChoosingStoragePage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Header / Breacrumb Area (Optional, keeping consistent with other pages) */}
            <div className="bg-white pt-4 pb-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

                {/* Hero Section */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[500px] mb-16 bg-[#0B2341]">
                    {/* Left: Image Container (55% width) */}
                    <div className="relative w-full md:w-[55%] h-[300px] md:h-auto">
                        <Image
                            src="https://wowmover.com/wp-content/uploads/2021/07/How-To-Choose-The-Right-Storage-Unit-For-Your-Furniture-1.jpg"
                            alt="Boxes and furniture in a room"
                            fill
                            className="object-cover"
                            unoptimized
                            priority
                        />
                    </div>

                    {/* Curve Divider - Positioned to overlap the image from the right */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-[55%] w-[100px] -ml-[99px] h-full z-10 pointer-events-none">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {/* Fill Shape - Convex curve pointing left */}
                            <path d="M 100 0 C 30 50 30 50 100 100 Z" fill="#0B2341" />
                            {/* border line */}
                            <path d="M 100 0 C 30 50 30 50 100 100" stroke="#5BC236" strokeWidth="3" fill="none" />
                        </svg>
                    </div>

                    {/* Right: Content (45% width) */}
                    <div className="relative z-20 w-full md:w-[45%] p-8 lg:p-16 flex flex-col justify-center text-white bg-[#0B2341]">

                        <h1 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                            How to Choose the Right Storage Unit for Your Furniture
                        </h1>
                        <p className="text-gray-300 text-sm mb-8">
                            June 3, 2024
                        </p>

                        <div className="w-full border-t border-gray-600 mb-8 opacity-50"></div>

                        <a
                            href="tel:8889695498"
                            className="inline-block px-8 py-3 bg-[#76Dba8] hover:bg-[#68c994] text-white font-semibold rounded-full text-center transition-transform hover:scale-105 w-fit uppercase text-sm tracking-wide"
                        >
                            Get A Quote
                        </a>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-full px-4 sm:px-0">

                    {/* Intro Content */}
                    <div className="text-gray-600 mb-12">
                        <p className="leading-relaxed mb-6">
                            There are a variety of situations in which you may want furniture storage services. You may be moving homes, your children may be returning home from university for a bit, or you may be renovating your home — the list is infinite. If you find yourself in need of storage, a storage company can assist you in a variety of ways. Finding a place to store your belongings is now easier than ever before thanks to the help of professional staff.
                        </p>
                        <p className="leading-relaxed mb-6">
                            So, to assist anyone who is currently looking for a storage facility for their furniture, here are some key considerations.
                        </p>

                        <div className="not-prose mb-8 mt-8">
                            <p className="font-bold text-gray-900 mb-0">
                                Also, Read
                            </p>
                            <Link href="/sell-used-furniture-ways-to-get-the-most-money" className="text-[#5BC236] font-semibold hover:underline">
                                Sell Used Furniture: Ways to Get the Most Money
                            </Link>
                        </div>
                    </div>

                    {/* Section 1 */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341] mb-6">
                            What Kind Of Furniture Do You Want To Keep?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Of course, the amount of furniture you need to store will influence the size of the unit you need and, as a result, your storage options. Consider if you’ll be able to deconstruct the items you’ll be storing and how much space they’ll take up once they’re dismantled. You should also consider how many square feet you’ll need, regardless of whether you’re removing the furniture or not. Remember to factor in how you’ll get the furnishings into the apartment as well.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341] mb-6">
                            The Time You’ll Need To Store Your Furniture
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Which storage facility is appropriate for you depends depend on whether you need short-term or long-term storage. The vast majority of storage alternatives have a minimum storage length, which is usually one week, and you can sometimes obtain a loyalty discount if you need a storage unit for a longer amount of time. So, think about how long you’ll need storage for your furniture.
                        </p>
                    </section>

                    {/* Section 3: Probability */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341] mb-6">
                            The Probability That You Will Need To Get To The Furniture
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Depending on whether you require access to the furniture you’re storing, different storage alternatives will be more appropriate. If you need access, self-storage is normally suggested, as you may come and go as you want, whereas container storage is best if you don’t need frequent access. Consider whether you need access to your <Link href="#" className="text-[#5BC236] font-semibold hover:underline">stored large furniture</Link> or whether you can just leave it at a facility until the conclusion of your apartment rental.
                        </p>

                        <div className="rounded-2xl overflow-hidden shadow-lg mb-8 relative h-[400px] w-full">
                            <Image
                                src="https://wowmover.com/wp-content/uploads/2020/07/storage-unit-1024x768.jpg"
                                alt="Storage unit interior with boxes and furniture"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </section>

                    {/* Section 4: Security */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341] mb-6">
                            What Kind Of Security Do You Need For Your Furniture?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            When storing <span className="font-bold">valuable</span> or <span className="text-[#5BC236] font-bold">moving artwork</span>, security is likely to be a worry, and not all storage facilities offer the same level of safety to your stuff. Consider how important security is to you and what type of security you consider to be essential. Ideally, you should look for a secure storage facility that has 24/7 CCTV and is only accessible by authorized visitors, but consider how important security is to you and what type of security you consider to be essential. It’s also a good idea to look into insurance options.
                        </p>
                    </section>

                    {/* Middle Also Read */}
                    <div className="bg-[#F0FDF4] p-6 rounded-lg mb-12 border-l-4 border-[#76Dba8]">
                        <span className="font-bold text-gray-900">Also Read: </span>
                        <Link href="/how-to-move-valuables-the-right-way" className="text-[#5BC236] font-semibold hover:underline ml-1">
                            How To Move Valuables The Right Way
                        </Link>
                    </div>

                    {/* Section 5: Cost */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341] mb-6">
                            How Much Money Do You Need To Spend On Storage?
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            When it comes to picking storage there is a lot to <Link href="#" className="text-[#5BC236] font-semibold hover:underline">consider when renting storage unit</Link>, your money will always be a factor, and different storage facilities will charge you varying amounts for furniture storage. In general, different sized storage units cost varying amounts, thus the quantity of storage space you require will have a direct impact on how much your storage will cost. Consider how much you can afford to spend on storage and then compare storage estimates.
                        </p>
                    </section>

                    {/* Section 6: Organizing */}
                    <section className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0B2341] mb-6">
                            Organizing Your Furniture Storage
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Thankfully, no matter what their specific demands are, there will be a few convenient storage alternatives available for all homeowners who need a secure place to store their furniture today. Hopefully, by considering everything said above, you will be able to choose the best storage solution for your furniture and ensure that you are selecting the most appropriate storage facility as well.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            At <span className="font-bold">WowMover</span>, we can assist you in finding a secure storage solution. We provide a number of adaptable storage choices, and no matter what your needs are, we will be able to provide you with the ideal solution. When you choose to store your furniture with us, we can either collect it from you or you can deliver it yourself; whichever option you pick, our helpful storing team will be happy to help.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-12">
                            Please <span className="font-bold">contact us</span> if you’d like to learn more about our furniture storage options.
                        </p>

                        <a
                            href="tel:8448581971"
                            className="inline-block px-10 py-3 bg-[#42E196] hover:bg-[#34c982] text-white font-bold rounded-lg text-center transition-transform hover:scale-105 text-lg"
                        >
                            Call (844) 858-1971
                        </a>
                    </section>

                    {/* Bottom Also Read (Previous one) */}
                    <div className="bg-[#F0FDF4] p-6 rounded-lg mb-12 border-l-4 border-[#76Dba8]">
                        <span className="font-bold text-gray-900">Also Read: </span>
                        <Link href="/whats-the-difference-between-pods-self-storage-units" className="text-[#5BC236] font-semibold hover:underline ml-1">
                            What’s The Difference Between PODS & Self-Storage Units
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
