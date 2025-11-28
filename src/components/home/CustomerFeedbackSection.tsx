"use client";

import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    text: string;
    rating: number;
    maxRating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Marcusion Elon",
        role: "Customers",
        image: "https://i.pravatar.cc/150?u=1",
        text: "WowMover made my move effortless! The team was professional, punctual, and handled everything with care. Highly recommend!",
        rating: 4.8,
        maxRating: 5
    },
    {
        id: 2,
        name: "Anggita Angel",
        role: "Customers",
        image: "https://i.pravatar.cc/150?u=2",
        text: "I was worried about hidden fees, but WowMover was transparent from the start. Great service at a great price!",
        rating: 4.8,
        maxRating: 5
    },
    {
        id: 3,
        name: "Jhon Mario",
        role: "Customers",
        image: "https://i.pravatar.cc/150?u=3",
        text: "From packing to unloading, WowMover exceeded my expectations. Friendly staff and seamless service!",
        rating: 4.8,
        maxRating: 5
    },
    {
        id: 4,
        name: "Sarah Jenkins",
        role: "Customers",
        image: "https://i.pravatar.cc/150?u=4",
        text: "The best moving experience I've ever had. Fast, efficient, and very careful with my belongings.",
        rating: 4.9,
        maxRating: 5
    },
    {
        id: 5,
        name: "Michael Chen",
        role: "Customers",
        image: "https://i.pravatar.cc/150?u=5",
        text: "Highly recommended! They made a stressful day so much easier. Will definitely use them again.",
        rating: 5.0,
        maxRating: 5
    }
];

export default function CustomerFeedbackSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive items per page
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= testimonials.length - itemsPerPage + 1 ? 0 : prevIndex + 1
        );
    }, [itemsPerPage]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - 1
        );
    };

    // Autoplay
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="w-full py-16 md:py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                        What Customers Say
                    </h2>
                    <div className="flex gap-4">
                        <button
                            onClick={prevSlide}
                            className="h-12 w-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="h-12 w-12 rounded-full bg-[#78D9A4] flex items-center justify-center hover:bg-[#68c994] transition-colors shadow-sm"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-6 w-6 text-white" />
                        </button>
                    </div>
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out gap-6"
                        style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                <div className="h-full rounded-xl border border-gray-100 bg-white p-8 shadow-sm flex flex-col items-center text-center">
                                    <div className="mb-6 h-20 w-20 rounded-full overflow-hidden bg-gray-100">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                                    <p className="text-[#8B5CF6] text-sm font-medium mb-6">{testimonial.role}</p>
                                    <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < Math.floor(testimonial.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs font-bold text-gray-900">{testimonial.rating}/5</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
