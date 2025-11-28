"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

interface QuoteFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function QuoteForm({ isOpen, onClose }: QuoteFormProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        console.log('Quote Request:', data);
        alert('Quote request submitted! Check console for data.');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Get a Free Quote</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <X className="h-6 w-6" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="fromZip" className="block text-sm font-medium text-gray-700">
                            Moving From (Zip Code)
                        </label>
                        <input
                            type="text"
                            name="fromZip"
                            id="fromZip"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="toZip" className="block text-sm font-medium text-gray-700">
                            Moving To (Zip Code)
                        </label>
                        <input
                            type="text"
                            name="toZip"
                            id="toZip"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="moveDate" className="block text-sm font-medium text-gray-700">
                            Move Date
                        </label>
                        <input
                            type="date"
                            name="moveDate"
                            id="moveDate"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Get Quotes
                    </button>
                </form>
            </div>
        </div>
    );
}
