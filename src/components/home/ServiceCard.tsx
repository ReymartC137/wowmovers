import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    return (
        <div className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
            <div className="space-y-2">
                {icon && <div className="mb-4 inline-block rounded-lg bg-blue-100 p-3 text-blue-600">{icon}</div>}
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="mt-4">
                <Link
                    href={href}
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                >
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
