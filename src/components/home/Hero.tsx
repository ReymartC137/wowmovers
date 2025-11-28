"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function Hero() {
  const [zipCode, setZipCode] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for movers in:', zipCode);
    alert(`Searching for movers in ${zipCode}`);
  };

  return (
    <section className="relative w-full py-20 md:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1]">
              Moving Made <br />
              Simple, Stress-Free, <br />
              and Affordable!
            </h1>
          </div>

          {/* Right Column: Subtext and Search Form */}
          <div className="flex flex-col justify-center space-y-8 lg:pl-12">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Make your move stress-free! By letting us find you the
              best interstate movers or broker that will provide you with
              full service moving.
            </p>

            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                type="text"
                placeholder="Enter your zip code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="flex-1 h-14 rounded-full border border-gray-200 bg-gray-50 px-6 text-lg outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                required
              />
              <button
                type="submit"
                className="h-14 px-8 rounded-full bg-primary text-gray-900 font-bold text-lg shadow-sm hover:bg-[#68c994] transition-colors flex items-center justify-center gap-2"
              >
                <Search className="h-5 w-5" />
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
