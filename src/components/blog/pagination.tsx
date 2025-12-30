import Link from 'next/link';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath?: string; // e.g., "/blog/page"
}

function getPangeRage(currentPage = 1, pagesPerGroup = 10) {
    const groupIndex = Math.floor((currentPage - 1) / pagesPerGroup);
    const startPage = groupIndex * pagesPerGroup + 1;
    const endPage = startPage + pagesPerGroup - 1;

    return { startPage, endPage };
}

export default function Pagination({ currentPage, totalPages, basePath = '/blog-page' }: PaginationProps) {

    console.log(currentPage, "current page");

    const pageNeighbours = 1; // pages to show around current page
    const pages: (number | '...')[] = [];

    //this will calculate the page per pagination (e.g page 1 goes to 1-10 page 14 goes to 11-20 etc.)
    const range = getPangeRage(currentPage);

    for (let i = range.startPage; i <= range.endPage; i++) {
        pages.push(i);
    }

    if (range.endPage < totalPages - 1) pages.push('...');

    if (totalPages > 1) pages.push(totalPages);

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
            {/* Previous Button */}
            {currentPage > 1 ? (
                <Link
                    href={`${basePath}/${currentPage - 1}`}
                    className="px-4 py-2 border border-green-400 rounded text-green-600 hover:bg-green-50"
                >
                    «
                </Link>
            ) : (
                <span className="px-4 py-2 border border-gray-200 rounded text-gray-400 cursor-not-allowed">
                    «
                </span>
            )}

            {/* Page Numbers */}
            {pages.map((page, idx) =>
                <Link
                    key={page}
                    href={`${basePath}/${page}`}
                    className={`px-4 py-2 rounded font-semibold transition-colors ${Number(page) === Number(currentPage)
                        ? 'bg-green-400 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {page}
                </Link>
            )}

            {/* Next Button */}
            {currentPage < totalPages ? (
                <Link
                    href={`${basePath}/${Number(currentPage) + 1}`}
                    className="px-4 py-2 border border-green-400 rounded text-green-600 hover:bg-green-50"
                >
                    »
                </Link>
            ) : (
                <span className="px-4 py-2 border border-gray-200 rounded text-gray-400 cursor-not-allowed">
                    »
                </span>
            )}
        </div>
    );
}
