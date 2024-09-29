"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "Find the Sleek in modern today",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/17245487/pexels-photo-17245487/free-photo-of-a-young-man-holding-a-skateboard-in-his-hand.jpeg?auto=compress&cs=tinysrgb&w=1200", // High-res image URL
        url: "/",
        hero: "Shop.Customize.Drip",
        bg: "bg-gradient-to-r from-lime-100 to-pink-50",
    },
    {
        id: 2,
        title: "Self made customs T-shirts",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/8905137/pexels-photo-8905137.jpeg?auto=compress&cs=tinysrgb&w=1000", // High-res image URL
        hero: "Start customizing now!",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/17221305/pexels-photo-17221305/free-photo-of-portrait-of-woman-in-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1000", // High-res image URL
        hero: "Summer is here!",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-[calc(100vh-80px)] overflow-hidden">
            <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${current * 100}vw)` }}>
                {slides.map((slide) => (
                    <div
                        className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
                        key={slide.id}
                    >
                        {/* TEXT CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-6 2xl:gap-10 text-center">
                            <h2 className="text-sm lg:text-xl 2xl:text-3xl">{slide.description}</h2>
                            <h1 className="text-5xl lg:text-7xl 2xl:text-5xl font-semibold">
                                {slide.title}
                            </h1>
                            <p className="text-md lg:text-xl 2xl:text-3xl font-medium">{slide.hero}</p>
                            <Link href={slide.url}>
                                <button className="rounded-2xl bg-black hover:bg-lime-300  hover:text-black text-white text-md py-3 px-4 font-semibold">
                                    Shop now
                                </button>
                            </Link>
                        </div>

                        {/* IMAGE CONTAINER */}
                        <div className="h-1/2 xl:w-1/2 xl:h-full relative">
                            <Image
                                src={slide.img}
                                alt={slide.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={100}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
                {slides.map((slide, index) => (
                    <div
                        className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${current === index ? "scale-150" : ""
                            }`}
                        key={slide.id}
                        onClick={() => setCurrent(index)}
                    >
                        {current === index && (
                            <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
