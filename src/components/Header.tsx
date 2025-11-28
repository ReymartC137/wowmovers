"use client";

import Link from 'next/link';
import { Menu, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import QuoteForm from './QuoteForm';

export default function Header() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
        {/* Top Row: Logo and CTA */}
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2">
            <img src="/wowmover_logo.png" alt="Wow Mover" className="h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsQuoteOpen(true)}
              className="hidden md:inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-gray-900 shadow transition-colors hover:bg-[#68c994] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="md:hidden p-2">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <div className="hidden md:block border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center justify-between h-14 text-sm font-medium text-gray-600">
              <Link href="/interstate_moving_companies" className="hover:text-primary transition-colors">
                Long Distance Moving
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Top local movers
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Best moving container companies
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Truck rental
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Auto transport
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Storage and Junk Removal
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <QuoteForm isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
