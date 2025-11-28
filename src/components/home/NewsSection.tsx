import NewsCard from './NewsCard';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function NewsSection() {
    const newsItems = [
        {
            image: "https://wowmover.com/wp-content/uploads/2024/06/How-to-Safely-Share-the-Road-With-Big-Moving-Trucks-1024x683.png",
            date: "November 24, 2025",
            title: "How to Safely Share the Road With Big Moving Trucks",
            description: "Large trucks are part of daily life on highways and city roads. These vehicles transport...",
            link: "#"
        },
        {
            image: "https://wowmover.com/wp-content/uploads/2024/06/Moving-with-a-Disability-Tips-for-Easy-Relocation.png",
            date: "November 24, 2025",
            title: "Moving with a Disability: Your Complete Guide to a Smooth Relocation",
            description: "Moving can be stressful for anyone, but relocating with a disability adds extra layers of...",
            link: "#"
        },
        {
            image: "https://wowmover.com/wp-content/uploads/2025/11/How-to-Track-Your-Shipment-During-a-Long-Distance-Move.png",
            date: "November 21, 2025",
            title: "How to Track Your Shipment During a Long-Distance Move",
            description: "Moving to a new city or state is an exciting adventure, but it can also...",
            link: "#"
        }
    ];

    return (
        <section className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Stay Update with Our Recent News
                    </h2>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {newsItems.map((item, index) => (
                        <NewsCard key={index} {...item} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <Link
                        href="#"
                        className="inline-flex items-center rounded-full bg-green-400 px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        All Blog Posts <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
