import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

export default function NewsCard({ image, date, title, description, link }: NewsCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-medium text-gray-500">{date}</p>
        <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900">
          {title}
        </h3>
        <p className="mb-4 flex-1 text-sm text-gray-600">
          {description}
        </p>
        <Link
          href={link}
          className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
