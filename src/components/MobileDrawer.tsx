"use client";

import { X, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    onQuoteClick: () => void;
}

const navData = [
    {
        title: "Moving Companies",
        sections: [
            {
                title: "Moving Containers",
                links: [
                    { label: "Best Interstate Moving and Storage", href: "/best-interstate-moving-companies" },
                    { label: "Top Local Movers", href: "/top-local-movers" },
                    { label: "Best Moving Container Companies", href: "/best-moving-containers" },
                ]
            },
            {
                title: "Recommendation",
                links: [
                    { label: "Best Moving Truck Rental Companies", href: "/best-moving-truck-rental-companies-recommendation" },
                    { label: "Cheapest Moving Container Companies", href: "/cheapest-moving-container-recommendation" },
                ]
            },
            {
                title: "Moving Container Reviews",
                links: [
                    { label: "U-Pack", href: "/moving-containers/u-pack-review" },
                    { label: "1-800-PACK-RAT", href: "/moving-containers/1-800-pack-rat-review/" },
                    { label: "PODS", href: "/moving-containers/pods-review" },
                    { label: "SMARTBOX", href: "/moving-containers/smartbox-review" },
                    { label: "U-Haul", href: "/moving-containers/u-haul-review" },
                    { label: "Two Men And A Truck", href: "/two-men-and-a-truck-moving-review-2" },
                ]
            },
            {
                title: "Learn More",
                links: [
                    { label: "What Size Moving Container Do You Need?", href: "#" },
                    { label: "Things to Consider when using DIY Storage", href: "#" },
                    { label: "The Average Cost of Moving Containers", href: "#" },
                    { label: "How Moving Containers Can Save You Money and Stress", href: "#" },
                ]
            }
        ]
    },
    {
        title: "Truck Rental",
        sections: [
            {
                title: "Recommendation",
                links: [
                    { label: "Best Moving Truck Rental Companies", href: "/best-moving-truck-rental-companies-recommendation" },
                ]
            },
            {
                title: "Truck Rentals Reviews",
                links: [
                    { label: "U-Haul Truck Rental", href: "/truck-rentals/u-haul-truck-rental-review/" },
                    { label: "Budget Truck Rental", href: "/truck-rentals/budget-truck-review/" },
                    { label: "Penske Truck Rental", href: "/truck-rentals/penske-review/" },
                    { label: "Home Depot", href: "/home-depot-truck-rental-review" },
                    { label: "Sherpa Auto Transport", href: "/sherpa-auto-transport-review" },
                ]
            },
            {
                title: "Learn More",
                links: [
                    { label: "What to Consider Before Renting a Moving Truck", href: "/what-to-consider-before-renting-a-moving-truck" },
                    { label: "Rent The Cheapest Moving Truck", href: "/best-interstate-moving-companies" },
                    { label: "The Best Moving Companies That Provides Trailer Rental", href: "/trailer-rental" },
                    { label: "How Much Does It Cost to Rent A Truck?", href: "/budget-truck-rental-cost" },
                ]
            }
        ]
    },
    {
        title: "Auto Transport",
        sections: [
            {
                title: "Recommendation",
                links: [
                    { label: "Best Auto Transport Companies", href: "/best-car-carrier-companies-recommendation" },
                ]
            },
            {
                title: "Auto Transport Reviews",
                links: [
                    { label: "International Van lines", href: "/auto-transport/international-van-lines-review" },
                    { label: "United Van Lines", href: "/auto-transport/united-van-lines-review" },
                    { label: "Penske", href: "/auto-transport/penske-review" },
                    { label: "U-haul", href: "/auto-transport/u-haul-review" },
                    { label: "Budget", href: "/auto-transport/budget-truck-review" },
                ]
            },
            {
                title: "Learn More",
                links: [
                    { label: "How to Ship your Car Secure and Safe?", href: "#" },
                    { label: "Car Shipping Costs Explained", href: "#" },
                    { label: "What's The Cheapest Way and How to Calculate Car Shipping Services", href: "#" },
                ]
            }
        ]
    },
    {
        title: "Storage and Junk Removal",
        sections: [
            {
                title: "Storage Recommendations",
                links: [
                    { label: "Best Self-Storage Companies", href: "#" },
                    { label: "When It's Necessary To Use Climate Controlled Storage?", href: "#" },
                    { label: "The Ultimate Guide to Storage Unit", href: "#" },
                    { label: "How To Choose The Right Storage Unit For Your Furniture", href: "#" },
                ]
            },
            {
                title: "Storage Review",
                links: [
                    { label: "PODS", href: "/pods-container" },
                    { label: "1-800-Pack-Rat", href: "/storage-companies/1-800-pack-rat" },
                    { label: "United Van Lines Storage", href: "/storage-companies/united-van-lines-storage-review" },
                    { label: "College Hunks", href: "/college-hunk-moving" },
                ]
            },
            {
                title: "Junk Removal Recommendations",
                links: [
                    { label: "Best Junk Removal Companies", href: "#" },
                    { label: "Why We Love College Hunks Hauling Junk and Moving?", href: "#" },
                ]
            },
            {
                title: "Junk Removal Reviews",
                links: [
                    { label: "U-haul", href: "/storage-companies/u-haul-review" },
                    { label: "1-800-GOT-JUNK", href: "/storage-companies/1-800-got-junk-review" },
                ]
            }
        ]
    }
];

export default function MobileDrawer({ isOpen, onClose, onQuoteClick }: MobileDrawerProps) {
    const [expandedItems, setExpandedItems] = useState<string[]>([]);

    const toggleItem = (title: string) => {
        setExpandedItems(prev =>
            prev.includes(title)
                ? prev.filter(item => item !== title)
                : [...prev, title]
        );
    };

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
                    onClick={onClose}
                />
            )}

            {/* Drawer Panel */}
            <div
                className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#76Dba8] z-[70] transform transition-transform duration-300 ease-in-out shadow-xl overflow-y-auto ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="p-4 flex flex-col h-full">
                    {/* Close Button */}
                    <div className="flex justify-end mb-6">
                        <button onClick={onClose} className="p-1">
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={() => {
                            onClose();
                            onQuoteClick();
                        }}
                        className="w-full bg-[#0B2341] text-white font-bold py-3 rounded-full mb-8 hover:bg-[#1a3b5d] transition-colors"
                    >
                        Get a Quote
                    </button>

                    {/* Navigation Items */}
                    <div className="space-y-1">
                        {navData.map((item) => (
                            <div key={item.title} className="border-b border-white/20 last:border-0">
                                <button
                                    onClick={() => toggleItem(item.title)}
                                    className="w-full flex items-center justify-between py-4 text-left text-white font-bold text-lg"
                                >
                                    <span className="pr-4">{item.title}</span>
                                    {expandedItems.includes(item.title) ? (
                                        <Minus className="h-5 w-5 shrink-0" />
                                    ) : (
                                        <Plus className="h-5 w-5 shrink-0" />
                                    )}
                                </button>

                                {/* Expanded Sections */}
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${expandedItems.includes(item.title) ? 'max-h-[2000px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="pl-4 space-y-6">
                                        {item.sections.map((section) => (
                                            <div key={section.title}>
                                                <h4 className="text-[#0B2341] font-bold mb-2 text-sm uppercase tracking-wide opacity-80">
                                                    {section.title}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {section.links.map((link) => (
                                                        <li key={link.label}>
                                                            <Link
                                                                href={link.href}
                                                                onClick={onClose}
                                                                className="text-white text-sm hover:text-[#0B2341] transition-colors block py-1"
                                                            >
                                                                {link.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
