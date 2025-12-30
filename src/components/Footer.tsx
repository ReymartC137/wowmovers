import Link from 'next/link';

export default function Footer() {
    const networkLinks = [
        "Supplies",
        "Cheap Internet",
        "Roofing Service",
        "Wholesale Cellphone",
        "TV Internet Deals",
        "PODS Cost",
        "2 Men and a Truck",
        "Reviews",
        "Something Helpful"
    ];

    return (
        <footer className="bg-[#113857] text-white pt-48 mt-32">
            {/* Top Banner Section */}
            <div className="relative mx-auto max-w-6xl px-4 -mt-64 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-[2.5rem] bg-[#76Dba8] px-6 pt-12 sm:px-12 sm:pt-20 md:pt-24 lg:flex lg:items-center lg:justify-between lg:px-20 lg:pt-0">
                    <div className="lg:w-1/2 lg:py-24">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready for a Smooth Move?
                        </h2>
                        <p className="mt-4 max-w-xl text-lg text-white/90">
                            100% Free Instant Moving Quotes! America's Most Reliable and Affordable Long-Distance or Local Movers at WOW MOVER
                        </p>
                        <div className="mt-8">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center rounded-full bg-[#1a3b5d] px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-[#15304d] transition-colors"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-10 h-64 lg:mt-0 lg:h-auto lg:w-1/2">
                        <img
                            className="absolute bottom-0 right-0 w-full max-w-md object-contain lg:static lg:max-w-none"
                            src="/footer_assets/move.png"
                            alt="Movers carrying a fridge"
                        />
                    </div>
                </div>
            </div>

            {/* Networks Section */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white">Our Networks:</h3>
                    <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {networkLinks.map((link) => (
                            <Link key={link} href="#" className="text-base text-gray-300 hover:text-white transition-colors">
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
                <div className="rounded-xl bg-[#76Dba8] py-4">
                    <div className="mx-auto flex max-w-7xl items-center justify-center px-4 text-sm text-[#1a3b5d] sm:px-6 lg:px-8">
                        <p className="text-center">
                            © Copyright 2025 . Wow Mover. All Rights Reserved.{" "}
                            <span className="font-bold">
                                <Link href="#" className="hover:underline">Privacy Policy</Link> |{" "}
                                <Link href="#" className="hover:underline">Term of Use</Link> |{" "}
                                <Link href="#" className="hover:underline">Disclosure</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
