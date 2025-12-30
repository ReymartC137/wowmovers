"use client";

import { useState, useEffect } from "react";

type Mover = {
    ID?: number;
    company_name?: string;
    description?: string;
    phone?: string;
    rating?: number;
    logo?: string;
    cover_image?: string;
    image?: string,
    title?: string,
    content?: string,
};

type Meta = {
    from?: {
        zip?: string;
        city?: string;
    };
    to?: {
        zip?: string;
        city?: string;
    };
};

export default function Home() {

    const [meta, setMeta] = useState<Meta | null>(null);

    const [movers, setMovers] = useState<Mover[]>([]);
    const [loading, setLoading] = useState(false);

    const [fromZip, setFromZip] = useState("");
    const [toZip, setToZip] = useState("");

    const [movingService, setMovingService] = useState<string[]>([]);
    const [typeOfMove, setTypeOfMove] = useState<string[]>([]);
    const [preferredService, setPreferredService] = useState<string[]>([]);

    const toggleValue = (
        value: string,
        list: string[],
        setList: (v: string[]) => void
    ) => {
        setList(list.includes(value) ? list.filter(v => v !== value) : [...list, value]);
    };

    const fetchMovers = async () => {
        setLoading(true);

        const params = new URLSearchParams();
        if (fromZip) params.append("from", fromZip);
        if (toZip) params.append("to", toZip);

        movingService.forEach(v => params.append("moving_service[]", v));
        typeOfMove.forEach(v => params.append("type_of_move[]", v));
        preferredService.forEach(v => params.append("preferred_service[]", v));

        const res = await fetch(
            `https://wowmover.com/wp-json/movers/v1/free-quote?${params.toString()}`,
            { cache: "no-store" }
        );

        //this is the change for the meta fix
        const data = await res.json() as {
            data: Mover[];
            meta?: Meta;
        };

        //set the data to the array
        setMovers(Array.isArray(data.data) ? data.data : []);
        setMeta(data.meta ?? null);

        setLoading(false);
    };


    useEffect(() => {
        fetchMovers();
    }, []);

    return (
        <>

            <div className="p-4 bg-[#F0F0F0]">
                <div className="container mx-auto md:px-4 md:py-12 lg:py-16">
                    <div className="flex md:flex-row flex-col justify-between md:items-center items-start mb-6">
                        <h1 className="text-[50px] font-bold text-gray-800">
                            Best Moving Companies
                            {meta?.from?.zip && meta?.to?.zip && (
                                <>
                                    <br />
                                    from{" "}
                                    <span className="text-[#79d6a6]">
                                        {meta.from.city} ({meta.from.zip})
                                    </span>{" "}
                                    to{" "}
                                    <span className="text-[#79d6a6]">
                                        {meta.to.city} ({meta.to.zip})
                                    </span>
                                </>
                            )}
                        </h1>
                        <button className="bg-[#79D6A6] text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600 md:mt-0 mt-5">
                            Filter Search
                        </button>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#dcdcdc] pt-[60px] mt-[60px]">

                        <div className="space-y-2">
                            <p className="font-semibold text-gray-700 text-[18px]">Filter by:</p>
                            <input
                                required
                                type="text"
                                value={fromZip}
                                onChange={e => setFromZip(e.target.value)}
                                placeholder="ZIP Code From"
                                className="w-full bg-white rounded px-5 py-5 focus:ring-2 focus:ring-green-400 focus:outline-none"
                            />
                            <input
                                required
                                type="text"
                                value={toZip}
                                onChange={e => setToZip(e.target.value)}
                                placeholder="ZIP Code To"
                                className="w-full bg-white rounded px-5 py-5 focus:ring-2 focus:ring-green-400 focus:outline-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="space-y-2 mb-5">
                                <p className="font-semibold text-gray-700 text-[18px]">Moving Service</p>
                                <div className="flex gap-20">
                                    {["diy", "professional"].map(service => (
                                        <label key={service} className="relative flex items-center gap-2 cursor-pointer text-[#71787D] font-medium">
                                            <input
                                                type="checkbox"
                                                className="peer opacity-0 absolute"
                                                onChange={() => toggleValue(service, movingService, setMovingService)}
                                            />
                                            <span className="h-[25px] w-[25px] rounded bg-white border border-gray-300 
                                        peer-checked:bg-[#113854] peer-checked:border-[#113854] relative
                                        after:content-[''] after:absolute after:left-[8px] after:top-[3px]
                                        after:w-[8px] after:h-[15px] after:border-white after:border-r-2 after:border-b-2
                                        after:rotate-45 after:hidden peer-checked:after:block">
                                            </span>
                                            {service.toUpperCase()}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-5">
                                <p className="font-semibold text-gray-700 text-[18px]">Type of Move</p>
                                <div className="flex gap-20">
                                    {["in-state", "out-of-state"].map(type => (
                                        <label key={type} className="relative flex items-center gap-2 cursor-pointer text-[#71787D] font-medium">
                                            <input
                                                type="checkbox"
                                                className="peer opacity-0 absolute"
                                                onChange={() => toggleValue(type, typeOfMove, setTypeOfMove)}
                                            />
                                            <span className="h-[25px] w-[25px] rounded bg-white border border-gray-300
                                        peer-checked:bg-[#113854] peer-checked:border-[#113854] relative
                                        after:content-[''] after:absolute after:left-[8px] after:top-[3px]
                                        after:w-[8px] after:h-[15px] after:border-white after:border-r-2 after:border-b-2
                                        after:rotate-45 after:hidden peer-checked:after:block">
                                            </span>
                                            {type.replace("-", " ")}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="font-semibold text-gray-700 text-[18px]">Preferred Service</p>
                            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                {[
                                    "loading-unloading",
                                    "moving-coverage",
                                    "moving-supplies",
                                    "packing-unpacking",
                                    "professional-drivers",
                                    "storage"
                                ].map(service => (
                                    <label key={service} className="relative flex items-center gap-2 text-[#71787D] font-medium">
                                        <input
                                            type="checkbox"
                                            className="peer opacity-0 absolute"
                                            onChange={() => toggleValue(service, preferredService, setPreferredService)}
                                        />
                                        <span className="h-[25px] w-[25px] rounded bg-white border border-gray-300
                                    peer-checked:bg-[#113854] peer-checked:border-[#113854] relative
                                    after:content-[''] after:absolute after:left-[8px] after:top-[3px]
                                    after:w-[8px] after:h-[15px] after:border-white after:border-r-2 after:border-b-2
                                    after:rotate-45 after:hidden peer-checked:after:block">
                                        </span>
                                        {service.replace("-", " ")}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start mb-6 mt-6">
                        <button
                            onClick={() => {
                                if (!fromZip || !toZip) {
                                    alert("Please enter both From and To ZIP codes.");
                                    return;
                                }
                                fetchMovers();
                            }}
                            className="border border-green-400 text-green-500 px-[54px] py-[12px] rounded hover:bg-green-50"
                        >
                            UPDATE
                        </button>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="container mx-auto md:px-4 md:py-12 lg:py-16">
                    <div className="text-gray-700 mb-6">
                        <span className="font-semibold">{movers.length}</span> companies available
                    </div>

                    <div className="space-y-6">
                        {movers.map((mover, index) => (
                            <div key={mover.ID ?? index} className="bg-white md:p-6 flex flex-col md:flex-row">

                                <div className="relative md:w-1/2">
                                    <img
                                        src={mover.image || "/placeholder.jpg"}
                                        alt={mover.company_name}
                                        className="rounded-lg md:w-[503px] w-[80%] h-auto object-cover"
                                    />

                                    {mover.logo && (
                                        <div className="absolute md:top-[90px] top-[51px] md:right-[50px] right-0 bg-white p-2 rounded shadow md:w-[197px] w-[40%] md:h-[196px] h-[120px] flex">
                                            <img src={mover.logo} alt="Logo" className="w-auto h-auto object-contain" />
                                        </div>
                                    )}

                                    {mover.rating && (
                                        <div className="py-[30px] flex items-center gap-2 text-orange-500">
                                            <span>{"★".repeat(Math.round(mover.rating))}</span>
                                            <span className="text-green-500">{mover.rating} Stars</span>
                                        </div>
                                    )}
                                </div>

                                <div className="md:ml-10 md:w-1/2 mt-4 md:mt-0">
                                    <h2 className="md:text-[30px] text-[26px] font-bold mb-2 text-[#113854] font-sans">
                                        {index + 1}. {mover.title}
                                    </h2>

                                    <div
                                        className="text-gray-600 mb-4 md:text-lg text-md"
                                        dangerouslySetInnerHTML={{ __html: mover.content || "" }}
                                    />

                                    <div className="flex md:gap-4 gap-2 flex-wrap">
                                        <button className="bg-[#79d6a6] text-white md:px-10 md:py-5 px-[25px] py-3 rounded-[10px] hover:bg-[#79D6A6] md:text-[16px] text-[14px]">
                                            Get a Quote
                                        </button>

                                        {mover.phone && (
                                            <a
                                                href={`tel:${mover.phone}`}
                                                className="bg-[#113854] text-white md:px-10 md:py-5 px-[25px] py-3 rounded-[10px] hover:bg-[#113854] flex items-center gap-2 md:text-[16px] text-[14px]"
                                            >
                                                {mover.phone}
                                            </a>
                                        )}
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
