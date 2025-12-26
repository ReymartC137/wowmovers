"use client";

import Link from 'next/link';
import { Menu, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import QuoteForm from './QuoteForm';
import MobileDrawer from './MobileDrawer';
export default function Header() {
   const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <div className="hidden md:block border-b border-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <nav className="flex items-center justify-between h-14 text-sm font-medium text-gray-600">
              <div className="group static">
                <Link href="#" className="flex items-center h-14 hover:text-primary transition-colors relative z-10">
                  Moving Companies
                </Link>
                <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="container mx-auto px-4 md:px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Column 1 */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Moving Containers</h3>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/best-interstate-moving-companies" className="hover:text-primary hover:underline">Best Interstate Moving and Storage</Link></li>
                            <li><Link href="/top-local-movers" className="hover:text-primary hover:underline">Top Local Movers</Link></li>
                            <li><Link href="/best-moving-containers" className="hover:text-primary hover:underline">Best Moving Container Companies</Link></li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Recommendation</h3>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/best-moving-truck-rental-companies-recommendation" className="hover:text-primary hover:underline">Best Moving Container Companies</Link></li>
                            <li><Link href="/cheapest-moving-container-recommendation" className="hover:text-primary hover:underline">Cheapest Moving Container Companies</Link></li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Moving Container Reviews</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/moving-containers/u-pack-review" className="hover:text-primary hover:underline">U-Pack</Link></li>
                          <li><Link href="/moving-containers/1-800-pack-rat-review/" className="hover:text-primary hover:underline">1-800-PACK-RAT</Link></li>
                          <li><Link href="/moving-containers/pods-review" className="hover:text-primary hover:underline">PODS</Link></li>
                          <li><Link href="/moving-containers/smartbox-review" className="hover:text-primary hover:underline">SMARTBOX</Link></li>
                          <li><Link href="/moving-containers/u-haul-review" className="hover:text-primary hover:underline">U-Haul</Link></li>
                          <li><Link href="/two-men-and-a-truck-moving-review-2" className="hover:text-primary hover:underline">Two Men And A Truck</Link></li>
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Learn More</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/best-interstate-moving-companies" className="hover:text-primary hover:underline">What Size Moving Container Do You Need?</Link></li>
                          <li><Link href="/things-to-consider-when-using-diy-storage-for-your-upcoming-move" className="hover:text-primary hover:underline">Things to Consider when using DIY Storage</Link></li>
                          <li><Link href="/best-interstate-moving-companies" className="hover:text-primary hover:underline">The Average Cost of Moving Containers</Link></li>
                          <li><Link href="/things-to-consider-when-using-diy-storage-for-your-upcoming-move" className="hover:text-primary hover:underline">How Moving Containers Can Save You Money and Stress</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group static">
                <Link href="#" className="flex items-center h-14 hover:text-primary transition-colors relative z-10">
                  Truck Rental
                </Link>
                <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="container mx-auto px-4 md:px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Column 1 */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Recommendation</h3>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/best-moving-truck-rental-companies-recommendation" className="hover:text-primary hover:underline">Best Moving Truck Rental Companies</Link></li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Truck Rentals Reviews</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/truck-rentals/u-haul-truck-rental-review/" className="hover:text-primary hover:underline">U-Haul Truck Rental</Link></li>
                          <li><Link href="/truck-rentals/budget-truck-review/" className="hover:text-primary hover:underline">Budget Truck Rental</Link></li>
                          <li><Link href="/truck-rentals/penske-review/" className="hover:text-primary hover:underline">Penske Truck Rental</Link></li>
                          <li><Link href="/home-depot-truck-rental-review" className="hover:text-primary hover:underline">Home Depot</Link></li>
                          <li><Link href="/sherpa-auto-transport-review" className="hover:text-primary hover:underline">Sherpa Auto Transport</Link></li>
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Learn More</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/what-to-consider-before-renting-a-moving-truck" className="hover:text-primary hover:underline">What to Consider Before Renting a Moving Truck</Link></li>
                          <li><Link href="/best-interstate-moving-companies" className="hover:text-primary hover:underline">Rent The Cheapest Moving Truck</Link></li>
                          <li><Link href="/trailer-rental" className="hover:text-primary hover:underline">The Best Moving Companies That Provides Trailer Rental</Link></li>
                          <li><Link href="/budget-truck-rental-cost" className="hover:text-primary hover:underline">How Much Does It Cost to Rent A Truck?</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group static">
                <Link href="#" className="flex items-center h-14 hover:text-primary transition-colors relative z-10">
                  Auto Transport
                </Link>
                <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="container mx-auto px-4 md:px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Column 1 */}
                      <div className="space-y-8">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Recommendation</h3>
                          <ul className="space-y-3 text-sm text-gray-600">
                            <li><Link href="/best-car-carrier-companies-recommendation" className="hover:text-primary hover:underline">Best Auto Transport Companies</Link></li>
                          </ul>
                        </div>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Auto Transport Reviews</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/auto-transport/international-van-lines-review" className="hover:text-primary hover:underline">International Van lines</Link></li>
                          <li><Link href="/auto-transport/united-van-lines-review" className="hover:text-primary hover:underline">United Van Lines</Link></li>
                          <li><Link href="/auto-transport/penske-review" className="hover:text-primary hover:underline">Penske</Link></li>
                          <li><Link href="/auto-transport/u-haul-review" className="hover:text-primary hover:underline">U-haul</Link></li>
                          <li><Link href="/auto-transport/budget-truck-review" className="hover:text-primary hover:underline">Budget</Link></li>
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Learn More</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/auto-transport" className="hover:text-primary hover:underline">How to Ship your Car Secure and Safe?</Link></li>
                          <li><Link href="/best-interstate-moving-companies" className="hover:text-primary hover:underline">Car Shipping Costs Explained</Link></li>
 <li><Link href="/shipping-a-car" className="hover:text-primary hover:underline">The Average Cost of Moving Containers</Link></li>
                          <li><Link href="/things-to-consider-when-using-diy-storage-for-your-upcoming-move" className="hover:text-primary hover:underline">What's The Cheapest Way and How to Calculate Car Shipping Services</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group static">
                <Link href="#" className="flex items-center h-14 hover:text-primary transition-colors relative z-10">
                  Storage and Junk Removal
                </Link>
                <div className="absolute left-0 top-full w-full bg-white shadow-lg border-t border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                  <div className="container mx-auto px-4 md:px-6 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      {/* Column 1 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Storage Recommendations</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/best-self-storage-companies-recommendation" className="hover:text-primary hover:underline">Best Self-Storage Companies</Link></li>
                          <li><Link href="/best-interstate-moving-companies" className="hover:text-primary hover:underline">When It's Necessary To Use Climate Controlled Storage?</Link></li>
                          <li><Link href="/storage-101-the-ultimate-guide-to-storage-unit" className="hover:text-primary hover:underline">The Ultimate Guide to Storage Unit</Link></li>
                          <li><Link href="/how-to-choose-the-right-storage-unit-for-your-furniture" className="hover:text-primary hover:underline">How To Choose The Right Storage Unit For Your Furniture</Link></li>
                        </ul>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Storage Review</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/pods-container" className="hover:text-primary hover:underline">PODS</Link></li>
                          <li><Link href="/storage-companies/1-800-pack-rat" className="hover:text-primary hover:underline">1-800-Pack-Rat</Link></li>
                          <li><Link href="/storage-companies/united-van-lines-storage-review" className="hover:text-primary hover:underline">United Van Lines Storage</Link></li>
                          <li><Link href="/college-hunk-moving" className="hover:text-primary hover:underline">College Hunks</Link></li>
                        </ul>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Junk Removal Recommendations</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/best-junk-removal-companies-recommendation" className="hover:text-primary hover:underline">Best Junk Removal Companies</Link></li>
                          <li><Link href="/college-hunk-moving" className="hover:text-primary hover:underline">Why We Love College Hunks Hauling Junk and Moving?</Link></li>
                        </ul>
                      </div>

                      {/* Column 4 */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Junk Removal Reviews</h3>
                        <ul className="space-y-3 text-sm text-gray-600">
                          <li><Link href="/storage-companies/u-haul-review" className="hover:text-primary hover:underline">U-haul</Link></li>
                          <li><Link href="/storage-companies/1-800-got-junk-review" className="hover:text-primary hover:underline">1-800-GOT-JUNK</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header >
      <QuoteForm isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onQuoteClick={() => setIsQuoteOpen(true)}
      />
    </>
  );
}
