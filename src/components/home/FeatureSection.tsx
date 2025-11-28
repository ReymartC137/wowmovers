import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    iconSrc: string;
    href: string;
    colorClass: string;
}

function ServiceCard({ title, description, iconSrc, href, colorClass }: ServiceCardProps) {
    return (
        <div className="flex flex-col rounded-lg border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md h-full">
            <div className={`mb-6 h-16 w-16 rounded-full flex items-center justify-center ${colorClass}`}>
                <img src={iconSrc} alt={title} className="h-8 w-8 brightness-0 invert" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-500 leading-relaxed mb-4 flex-grow">{description}</p>
        </div>
    );
}

export default function FeatureSection() {
    const services = [
        {
            title: "Prepare for Your Next Move",
            description: "Find out how to prepare and organize",
            iconSrc: "/service_we_offer/prepare_you_next_move.png",
            href: "#",
            colorClass: "bg-blue-500",
        },
        {
            title: "Packing Hacks",
            description: "Packing hacks and tricks to help you stay organize and save space",
            iconSrc: "/service_we_offer/packing_hacks.png",
            href: "#",
            colorClass: "bg-green-400",
        },
        {
            title: "Setting Up Home Services",
            description: "Set up and support to help keep your home devices connected and secure",
            iconSrc: "/service_we_offer/setting_up_home_services.png",
            href: "#",
            colorClass: "bg-purple-500",
        },
        {
            title: "Moving Day",
            description: "Come moving day, you'll be ready to supervise ...",
            iconSrc: "/service_we_offer/moving_day.png",
            href: "#",
            colorClass: "bg-yellow-500",
        },
        {
            title: "Taking Care of your Pets",
            description: "Relaxing for both you and your pet",
            iconSrc: "/service_we_offer/taking_care_of_your_pets.png",
            href: "#",
            colorClass: "bg-teal-400",
        },
    ];

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col lg:flex-row items-start justify-between mb-16 gap-8">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Services We Offer
                    </h2>
                    <p className="max-w-2xl text-gray-500 text-lg leading-relaxed lg:text-right">
                        Make your move stress-free! By letting us find you the best interstate movers
                        or broker that will provide you with full service moving. Leave the packing,
                        unpacking, disassembling, and reassembling of all articles of furniture to our
                        professional and reliable movers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {services.slice(0, 3).map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {services.slice(3, 5).map((service, index) => (
                        <ServiceCard key={index + 3} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
