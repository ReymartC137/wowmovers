"use client";

import { useState } from 'react';
import { ArrowUpRight, Phone, CheckCircle2, ArrowRight, ArrowLeft, Search, Star, StarHalf } from 'lucide-react';
import Link from 'next/link';

interface Company {
  id: number;
  title: string;
  description: string;
  ratings: string;
  contact: string;
  logo: string;
  img: string;
}

const carouselItems = [
  {
    id: 1,
    title: "Plan ahead to save money",
    image: "/images/plan_ahead.png",
    description: "Moving to a new place is exciting, and it is a wonderful time in your life that you can enjoy. However, there are certain situations in which you should be cautious. If you're trying to stick to a schedule, there are a lot of details to keep in mind. This way, you'll always have access to the best long-distance moving deals. You will relax, and your transfer will be easy. Moving on a tight budget, on the other hand, is never fun. Thankfully, we're here to provide you with the best advice and make it easier for you!"
  },
  {
    id: 2,
    title: "Packed things with your friends and family.",
    image: "/images/packed_things.png",
    description: "Hiring professional movers to pack your things will charge you more. Ask your friends to help you pack your things, that's a friend for right. It doesn't require a professional to pack things, you can ask your dad or older brothers to help you. Just make sure to supervise loaders whiles loading your items."
  }
];

const afterMovingItems = [
  {
    id: 1,
    title: "Arrangement of Electricity and Other Utilities You Need",
    image: "/images/arrangement_of_electricity1.jpg",
    text: [
      "Probably the greatest concern is to guarantee that once you show up, or if nothing else not long after you do, that you will have power, water/sewage, gas, and trash removal all set.",
      "This is most significant. Contingent upon the planning and appointment of each company, it can take a couple of days as long as seven days for somebody to actuate them.",
      "A couple of days without water or power can appear to be a lifetime. So as to dodge this irritating issue, attempt to bring ahead of time and set up an appointment for either the day you show up or soon after. It is a simple fix, however in the event that you overlook it, it tends to be a truly irritating issue."
    ]
  },
  {
    id: 2,
    title: "Arrangement of Electricity and Other Utilities You Need",
    image: "/images/arrangement_of_electricity2.jpg",
    text: [
      "Probably the greatest concern is to guarantee that once you show up, or if nothing else not long after you do, that you will have power, water/sewage, gas, and trash removal all set.",
      "This is most significant. Contingent upon the planning and appointment of each company, it can take a couple of days as long as seven days for somebody to actuate them.",
      "A couple of days without water or power can appear to be a lifetime. So as to dodge this irritating issue, attempt to bring ahead of time and set up an appointment for either the day you show up or soon after. It is a simple fix, however in the event that you overlook it, it tends to be a truly irritating issue."
    ]
  }
];

const companies: Company[] = [
  {
    id: 1,
    title: "American Van Lines",
    description: "Founded in 1995, American Van Lines is licensed, insured and registered with the American Moving & Storage Association (ProMover) standard. They serve residential and commercial relocations with multiple truck locations across the U.S.",
    ratings: "4.5/5",
    contact: "(855) 584-1894",
    logo: "/images/interstate_assets/inter1-logo.png",
    img: "/images/interstate_assets/inter1-img.png"
  },
  {
    id: 2,
    title: "United Van Lines",
    description: "A full-service mover with over 340 agent partners, offering local, long-distance, corporate and government relocation services. Known for straightforward pricing and specialty services.",
    ratings: "4.5/5",
    contact: "(888) 969-5498",
    logo: "/images/interstate_assets/inter2-logo.png",
    img: "/images/interstate_assets/inter2-img.png"
  },
  {
    id: 3,
    title: "College Hunks Hauling Junk and Moving",
    description: "A national full-service mover that also specializes in junk removal and donation pickup. A good choice if you want to declutter during your move.",
    ratings: "4.5/5",
    contact: "(888) 965-3032",
    logo: "/images/interstate_assets/inter3-logo.png",
    img: "/images/interstate_assets/inter3-img.png"
  },
  {
    id: 4,
    title: "1-800-PACK-RAT",
    description: "Offers portable storage containers and moving support for local, cross-country and even sea transport. Services include moving supplies, loading/unloading, and secure transport.",
    ratings: "4/5",
    contact: "(888) 968-8475",
    logo: "/images/interstate_assets/inter4-logo.png",
    img: "/images/interstate_assets/inter4-img.png"
  },
  {
    id: 5,
    title: "Bekins Van Lines",
    description: "With decades of experience, Bekins emphasizes smooth transitions for interstate and commercial moves — from packing and planning to delivery.",
    ratings: "3.5/5",
    contact: "(888) 969-4926",
    logo: "/images/interstate_assets/inter5-logo.png",
    img: "/images/interstate_assets/inter5-img.png"
  },
  {
    id: 6,
    title: "Two Men And A Truck",
    description: "A full-service mover operating over 380 locations globally, originally started by two students in the 1980s. Known for customer-focused service and local/long-distance moves.",
    ratings: "4/5",
    contact: "(888) 671-3606",
    logo: "/images/interstate_assets/inter6-logo.png",
    img: "/images/interstate_assets/inter6-img.png"
  },
  {
    id: 7,
    title: "All My Sons Moving & Storage",
    description: "A family-owned and operated moving company with four generations of moving knowledge, offering complete moving services with emphasis on local support.",
    ratings: "4/5",
    contact: "(888) 965-2825",
    logo: "/images/interstate_assets/inter7-logo.png",
    img: "/images/interstate_assets/inter7-img.png"
  },
  {
    id: 8,
    title: "PODS",
    description: "Leading provider of portable storage containers for moving and storage. Offers flexible container options for local and long-distance moves.",
    ratings: "4.5/5",
    contact: "(888) 961-9476",
    logo: "/images/interstate_assets/inter8-logo.png",
    img: "/images/interstate_assets/inter8-img.png"
  },
  {
    "id": 9,
    "title": "U-Haul",
    "description": "A household name in truck rentals and moving equipment. Offers multiple truck sizes, trailers, and moving supplies — ideal for DIY local moves.",
    "ratings": "3.5/5",
    "contact": "(888) 969-5254",
    "logo": "/images/interstate_assets/inter9-logo.png",
    "img": "/images/interstate_assets/inter9-img.png"
  },
  {
    "id": 10,
    "title": "Penske",
    "description": "One of the largest truck rental companies in the U.S., offering newer trucks and reliable service for rentals and self-moves.",
    "ratings": "4/5",
    "contact": "(888) 964-4932",
    "logo": "/images/interstate_assets/inter10-logo.png",
    "img": "/images/interstate_assets/inter10-img.png"
  },
  {
    "id": 11,
    "title": "UPack",
    "description": "Offers a ‘pay-for-what-you-use’ model for long-distance moves, no deposit required. A budget-friendly full-service option.",
    "ratings": "4.5/5",
    "contact": "(888) 964-3505",
    "logo": "/images/interstate_assets/inter11-logo.png",
    "img": "/images/interstate_assets/inter11-img.png"
  },
  {
    "id": 12,
    "title": "Smartbox",
    "description": "A lower-cost moving container company offering portable storage and moving container services at competitive prices.",
    "ratings": "3.5/5",
    "contact": "(888) 965-3342",
    "logo": "/images/interstate_assets/inter12-logo.png",
    "img": "/images/interstate_assets/inter12-img.png"
  },
  {
    "id": 13,
    "title": "Budget Truck Rental",
    "description": "An affordable truck rental service option, aimed at cost-conscious local moves (though add-ons may bring extra cost).",
    "ratings": "4/5",
    "contact": "(888) 676-0151",
    "logo": "/images/interstate_assets/inter13-logo.png",
    "img": "/images/interstate_assets/inter13-img.png"
  },
  {
    "id": 14,
    "title": "International Van lines",
    "description": "A full-service mover offering domestic and international relocation, commercial moves, storage and packing/crating services. Features include 30 days free storage with every move.",
    "ratings": "5/5",
    "contact": "(888) 963-7266",
    "logo": "/images/interstate_assets/inter14-logo.png",
    "img": "/images/interstate_assets/inter14-img.png"
  },
  {
    "id": 15,
    "title": "Ace Relocation Systems",
    "description": "With 10 U.S. locations, global coverage and partnership with Atlas Van Lines, Ace offers residential and corporate relocation support with dedicated technology and customer service.",
    "ratings": "4.5/5",
    "contact": "(888) 970-2361",
    "logo": "/images/interstate_assets/inter15-logo.png",
    "img": "/images/interstate_assets/inter15-img.png"
  }
];

function StarRating({ rating }: { rating: string }) {
  const score = parseFloat(rating.split('/')[0]);
  const fullStars = Math.floor(score);
  const hasHalfStar = score % 1 !== 0;

  return (
    <div className="flex items-center gap-1">
      <span className="mr-2 text-sm font-bold text-gray-700">{rating}</span>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />;
        } else if (i === fullStars && hasHalfStar) {
          return <StarHalf key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />;
        } else {
          return <Star key={i} className="h-4 w-4 text-gray-300" />;
        }
      })}
    </div>
  );
}

export default function InterStateMovingCompaniesPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAfterMovingSlide, setCurrentAfterMovingSlide] = useState(0);
  const [activeReason, setActiveReason] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image */}
      <div className="relative h-[500px] w-full">
        <img
          src="/images/truck-interstate.png"
          alt="Interstate Moving Truck"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Card */}
      <div className="relative z-10 mx-auto -mt-32 max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#0B2341] sm:text-5xl">
              Best Local Moving Companies
            </h1>

            <div className="mt-8 space-y-6 text-lg text-gray-600">
              <p>
                We have researched a lot of interstate moving and storage companies to find the best for your move. We will direct you to the best moving companies with low expenses. We are working hard to find a reliable company that will provide what you need!
              </p>
              <p>
                Moving to a new state can be exciting, but it also comes with challenges—finding the right moving company shouldn't be one of them. With so many options available, choosing a reliable and affordable mover can feel overwhelming. That's why we've done the research for you!
              </p>
              <p>
                With so many interstate moving companies to choose from, making a decision can be overwhelming. Lucky for you, we narrowed down your selection for your next move. Below is a list of the best interstate moving companies
              </p>
            </div>

            {/* Search Form */}
            <div className="mt-12 flex justify-center">
              <form className="flex w-full max-w-md items-center gap-4">
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="h-12 flex-1 rounded-full border border-gray-300 bg-gray-50 px-6 text-base outline-none focus:border-[#76Dba8] focus:ring-2 focus:ring-[#76Dba8]"
                />
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#76Dba8] px-8 text-base font-medium text-[#0B2341] shadow-sm hover:bg-[#68c994] focus:outline-none focus:ring-2 focus:ring-[#76Dba8] focus:ring-offset-2"
                >
                  <Search className="h-5 w-5" />
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Companies List */}
      <div className="w-full flex flex-col gap-12 py-12">
        {companies.map((company) => (
          <div
            key={company.id}
            className={`w-full py-12 ${company.id % 2 === 0 ? 'bg-[#F0FDF7]' : 'bg-white'}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col gap-12 lg:flex-row lg:items-start ${company.id % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Image Side */}
                <div className={`w-full lg:w-auto flex gap-6 ${company.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Main Image */}
                  <div className="relative w-full max-w-[411px] h-[502px] overflow-hidden rounded-[10px] shadow-lg shrink-0">
                    <img
                      src={company.img}
                      alt={company.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Side Column: Ratings then Logo */}
                  <div className="flex flex-col gap-4 shrink-0">
                    {/* Ratings */}
                    <div className="w-[192px] flex items-center justify-center rounded-lg bg-[#FFF9F0] px-4 py-3 shadow-sm">
                      <StarRating rating={company.ratings} />
                    </div>

                    {/* Logo */}
                    <div className="h-[192px] w-[192px] flex items-center justify-center rounded-lg bg-[#E8FDF5] p-4 shadow-sm border border-gray-100">
                      <img
                        src={company.logo}
                        alt={`${company.title} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:flex-1 pt-4">
                  <h2 className="text-3xl font-bold text-[#0B2341] sm:text-4xl mb-6">
                    {company.id}. {company.title}
                  </h2>

                  <div className="space-y-4 text-lg text-gray-600 mb-8">
                    <p>{company.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center rounded-full bg-[#76Dba8] px-8 py-3 text-base font-bold text-[#0B2341] shadow-sm hover:bg-[#68c994] transition-colors">
                      Get a Quote <ArrowUpRight className="ml-2 h-4 w-4" />
                    </button>
                    <button className="inline-flex items-center justify-center rounded-full bg-[#0B2341] px-8 py-3 text-base font-bold text-white shadow-sm hover:bg-[#1a3b5d] transition-colors">
                      <Phone className="mr-2 h-4 w-4" />
                      {company.contact}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Moving Tips Section */}
      <section className="relative overflow-hidden bg-[#0B2341] py-24">
        {/* Truck Silo Background */}
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
          <img
            src="/images/truck-silo.png"
            alt="Truck Background"
            className="w-[600px] h-auto object-contain"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Column 1: Book Your Move Early */}
            <div className="flex flex-col">
              <div className="mb-8 overflow-hidden rounded-2xl">
                <img
                  src="/images/book_your_move_early.png"
                  alt="Couple moving boxes"
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                Book Your Move Early
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  For a better and smoother move, we recommend booking 1 to 2 months before the moving date. Book as early as possible to avoid any hassle. Plan what to do; ask a moving professional what they provide and what you need.
                </p>
              </div>
            </div>

            {/* Column 2: How can I move cheaply? */}
            <div className="flex flex-col">
              <div className="mb-8 overflow-hidden rounded-2xl">
                <img
                  src="/images/how_can_i_move.png"
                  alt="Movers wrapping furniture"
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
                How can I move cheaply?
              </h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Save money by moving. Everybody wants to save money by moving to a new location. Everyone knows that moving to other places can be expensive, with plenty of hidden charges or visible.
                </p>
                <p>
                  Planning, preparations, and wasted energy on a moving day can cost you. However, the biggest expense you encountered was hiring a professional mover or renting a trailer truck.
                </p>
                <p>
                  Hiring a professional mover or renting a truck is never cheap. However, doing the things listed below can save you money when hiring a good mover. With our wide network of the best moving companies that serve the United States, we can help you easily with your move. Here are some things to do when moving to save money:
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Trusted Interstate Moving Companies Section */}
      <section className="bg-[#F0FDF7] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-[#0B2341] sm:text-5xl mb-6 leading-tight">
                Trusted Interstate Moving Companies in the US
              </h2>
              <p className="text-lg text-[#0B2341]">
                Here are the interstate services you can trust:
              </p>
            </div>

            {/* Right Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 lg:w-1/2">
              <div className="flex flex-col gap-4">
                <Link href="#" className="text-lg text-[#0B2341] underline decoration-1 underline-offset-4 hover:text-[#76Dba8]">
                  College Hunk
                </Link>
                <Link href="#" className="text-lg text-[#0B2341] underline decoration-1 underline-offset-4 hover:text-[#76Dba8]">
                  Two Men and a Truck
                </Link>
                <Link href="#" className="text-lg text-[#0B2341] underline decoration-1 underline-offset-4 hover:text-[#76Dba8]">
                  All My Sons Moving and Storage
                </Link>
                <Link href="#" className="text-lg text-[#0B2341] underline decoration-1 underline-offset-4 hover:text-[#76Dba8]">
                  U-Haul
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link href="#" className="text-lg text-[#0B2341] underline decoration-1 underline-offset-4 hover:text-[#76Dba8]">
                  PODS
                </Link>
                <Link href="#" className="text-lg text-[#0B2341] underline decoration-1 underline-offset-4 hover:text-[#76Dba8]">
                  Budget Truck Rental
                </Link>
                <Link href="#" className="text-lg text-[#0B2341] underline decoration-1 underline-offset-4 hover:text-[#76Dba8]">
                  1-800-PACK-RAT
                </Link>
                <Link href="#" className="text-lg text-[#0B2341] underline decoration-1 underline-offset-4 hover:text-[#76Dba8]">
                  Penske
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Preparation Tips Carousel Section */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-[#0B2341] sm:text-5xl max-w-2xl leading-tight">
              How to Prepare and Save Money For Your Next Move?
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 z-10"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselItems.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#76Dba8] text-white transition-colors hover:bg-[#68c994] z-10"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden -mx-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}
            >
              {[...carouselItems, ...carouselItems].map((item, index) => (
                <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-4">
                  <div className="group relative overflow-hidden rounded-2xl bg-gray-100 p-6 transition-all hover:shadow-lg h-full">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#76Dba8] text-lg font-bold text-white">
                        {item.id}
                      </div>
                      <h3 className="text-xl font-bold text-[#0B2341]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* What to Pack First Section */}
      <section className="relative w-full">
        {/* Background Image Container */}
        <div className="relative h-[600px] w-full">
          <img
            src="/images/what_to_pack_first.png"
            alt="Couple packing boxes"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 mx-auto -mt-64 max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-12">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left Column */}
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-[#0B2341] sm:text-4xl">
                  What to Pack First Before the Moving Day?
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Packing may seem like the next impossible puzzle, but packing is a process that requires patience and foresight. There is no rhyme or reason for everything, so before you start packing your stuff and moving into a new apartment, remember that there are no rhymes or reasons behind everything. Some are hesitant and leave packaging in the wrong place, which can lead to lost or damaged items.
                  </p>
                  <p>
                    Before placing even one item in a box, you need to prepare carefully for the next step. Here are some tips on what to pack first and when to move to a new location, as well as some of the best packaging tips.
                  </p>
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-[#0B2341]">
                      Get Prepared
                    </h3>
                    <p>
                      First, create a packing calendar to keep your packing plan up to date, and also make sure you have packing tape. By interrupting each step every day, you can help to ward off the feeling of being overwhelmed.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-[#0B2341]">
                    Start Early
                  </h3>
                  <p>
                    Once you have a good idea of what you're dealing with, it's time to address the question of when to pack first when you move. Next, create a detailed inventory of all the items you own and divide them into categories you will keep, such as items you need to sell, donate, or discard. If you are satisfied with a number of employees or articles, you can take the opportunity to throw away non-essential items and save valuable space and effort.
                  </p>
                </div>
                <p>
                  Remember that you should have a calendar that dictates your schedule, not a schedule dictated by your calendar, such as your work schedule or your personal schedule. Here's a better breakdown of what to pack and when to pack, but if you start with the little things four weeks before the move, you're lagging behind.
                </p>
                <p>
                  When you start packing, make sure you keep your basic needs and daily needs in mind. If you don't pack vital things, don't pack them until you've started with the "little things" four months before you move.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Moving and Packing Checklist Section */}
      <section className="bg-[#F0FDF7] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column: Text */}
            <div>
              <h2 className="mb-8 text-3xl font-bold leading-tight text-[#0B2341] sm:text-4xl">
                Moving and Packing Checklist
              </h2>
              <div className="space-y-6 text-gray-600">
                <p>
                  In the first few weeks of the move, pack your pet things along with all remaining puzzles, books, toys, clothes, and other items. Residents should bring bed linen and towels that are still in use, such as towels, blankets, pillows, and sheets. Make sure that all devices except phones, computers, tablets, and all other electronic devices are omitted.
                </p>
                <p>
                  The rest of the kitchen should now be ready for use, including cutlery, crockery, and drinking glasses. Make sure you have enough clean clothes just to get you where you are going; if you carry a bag of dirty laundry, it will slow you down.
                </p>
                <p>
                  Pack everything that is not vital, such as recipes, but make sure you have your first aid kit with you. This is not the easiest part of moving, but it is one of the most important parts of any move, especially in the first few months of your life.
                </p>
              </div>
            </div>

            {/* Right Column: Checklist */}
            <div className="space-y-4">
              {[
                "Electronics: phone, computers, tablets, etc.",
                "Kitchen Equipment: cutlery, dishes, and drinking glasses",
                "Laundry: trail bags and bags of dirty laundry.",
                "Medicines and Bathroom Supplies: Make a first aid kit that can be carried around.",
                "Furniture and Appliances: Disassemble furniture so that they can fit the boxes",
                "Curtains, Rugs, and Other Furnishings: The \"miscellaneous\" category Toolbox: basic tools for assembly jobs at your new place",
                "Bed and Bedding: It's now time to transport your bed and sheets",
                "Items for Children and Pets: getting back into a daily routine quickly after the move",
                "Cleaning Supplies: clean up your place one last time before you leave",
                "Remaining Toiletries: be prepared"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-[#76Dba8]" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Things To Do After Moving Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl font-bold text-[#0B2341] sm:text-5xl max-w-2xl leading-tight">
              Things To Do After Moving To A New State
            </h2>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentAfterMovingSlide((prev) => (prev - 1 + afterMovingItems.length) % afterMovingItems.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 z-10"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => setCurrentAfterMovingSlide((prev) => (prev + 1) % afterMovingItems.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#76Dba8] text-white transition-colors hover:bg-[#68c994] z-10"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="rounded-2xl bg-gray-100 p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#76Dba8] text-xl font-bold text-white">
                    {afterMovingItems[currentAfterMovingSlide].id}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2341]">
                    {afterMovingItems[currentAfterMovingSlide].title}
                  </h3>
                </div>
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={afterMovingItems[currentAfterMovingSlide].image}
                    alt={afterMovingItems[currentAfterMovingSlide].title}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  {afterMovingItems[currentAfterMovingSlide].text.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-gray-100 p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#76Dba8] text-xl font-bold text-white">
                    {afterMovingItems[(currentAfterMovingSlide + 1) % afterMovingItems.length].id}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B2341]">
                    {afterMovingItems[(currentAfterMovingSlide + 1) % afterMovingItems.length].title}
                  </h3>
                </div>
                <div className="mb-6 overflow-hidden rounded-xl">
                  <img
                    src={afterMovingItems[(currentAfterMovingSlide + 1) % afterMovingItems.length].image}
                    alt={afterMovingItems[(currentAfterMovingSlide + 1) % afterMovingItems.length].title}
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  {afterMovingItems[(currentAfterMovingSlide + 1) % afterMovingItems.length].text.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose the Best Interstate Moving Company Section */}
      <section className="bg-white">
        {/* Hero Image */}
        <div className="relative h-[500px] w-full">
          <img
            src="/images/house-moving.png"
            alt="Couple moving with boxes"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Title and Intro Paragraphs - Side by Side */}
          <div className="mb-12 grid gap-8 lg:grid-cols-2">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-4xl font-bold leading-tight text-[#0B2341] sm:text-5xl">
                How to Choose the Best Interstate Moving Company?
              </h2>
            </div>

            {/* Right Column - Intro Paragraphs */}
            <div className="space-y-6 text-gray-600">
              <p>
                Choosing a good interstate moving company can be a hassle for work. Last year, consumers viewed moving companies in BBB profiles more than 1.4 million times, with over 5,700 complaints about moving companies or professional movers in the United States alone. Most complaints are about damages or loss of belongings, overcharging, not honoring estimates, and arriving late.
              </p>
              <p>
                With countless moves, each year in the US, scams or shady practices occur, and it's a miracle that most of them go smoothly according to plans. Hiring a good moving company is a must!
              </p>
            </div>
          </div>

          {/* Image and Text Layout */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Large Image */}
            <div>
              <img
                src="/images/moving_package.png"
                alt="Moving truck with packages"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6 text-gray-600">
              <p>
                Moving can be stressful without having broken glasses or a surprise unworked hour bill. You want a professional moving company to avoid it. It's in your interest to be informed about every step in the process.
              </p>
              <p>
                After you decide where and when to move, there is still one question that you need to answer. Looking for a good and cheap moving company will make or break your long-planned relocation. So to make sure that you get yourself a good moving company, here is a list of things that you should see from them, or things that they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Reasons Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
            {/* Left Sidebar - Clickable Reasons */}
            <div className="space-y-2">
              {[
                "They don't require you a large deposit",
                "Good Website and Office",
                "Insurance and protection",
                "A thorough estimate",
                "Good reviews"
              ].map((reason, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveReason(index);
                    document.getElementById(`reason-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }}
                  className={`w-full rounded-lg px-6 py-4 text-left text-sm font-medium transition-colors ${activeReason === index
                      ? 'bg-[#76Dba8] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  {index + 1}. {reason}
                </button>
              ))}
            </div>

            {/* Right Content Area */}
            <div className="space-y-8">
              {/* Reason 1 */}
              <div id="reason-0" className="rounded-2xl bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#0B2341]">
                  1. They don't require you a large deposit
                </h3>
                <p className="text-gray-600">
                  If they are really confident in their performance, they will not demand a large deposit or any money at all. Plus, if you pay before the move, then the chances of getting any problems will be higher.
                </p>
              </div>

              {/* Reason 2 */}
              <div id="reason-1" className="rounded-2xl bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#0B2341]">
                  2. Good Website and Office
                </h3>
                <p className="text-gray-600">
                  Whilst this is optional if they have one or both of these here is a good sign. If you see them having an organized headquarters, then you can expect that they will do the same on your belongings upon moving. Also, a good website means that they are willing to spend extra bucks online to showcase what they offer.
                </p>
              </div>

              {/* Reason 3 */}
              <div id="reason-2" className="rounded-2xl bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#0B2341]">
                  3. Insurance and protection
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    This should be compulsory to all professional movers. If they offer full value protection, that means that any damages article will be repaired to its same condition before they received it. If not pay you, or replace the article with a new one of the same kind.
                  </p>
                  <p>
                    If you find all of these in your professional mover then you might have found the best one! Always remember that your mover will be the one handling all of your belongings on the way to your new home. So finding the best professional mover is securing the safety of your belongings.
                  </p>
                </div>
              </div>

              {/* Reason 4 */}
              <div id="reason-3" className="rounded-2xl bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#0B2341]">
                  4. A thorough estimate
                </h3>
                <p className="text-gray-600">
                  Once you have chosen a professional mover, a good thorough estimate should follow shortly. The more questions and details the estimator asks, the better. It also means that they can prepare better for your stuff.
                </p>
              </div>

              {/* Reason 5 */}
              <div id="reason-4" className="rounded-2xl bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#0B2341]">
                  5. Good reviews
                </h3>
                <p className="text-gray-600">
                  Previous customers are one of your good sources on how a professional mover performs. If you can't find any on their website, then you can look for it as over the internet. You can also ask them for previous customers in the past week or month or you to interview.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}
