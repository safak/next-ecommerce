"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const slides = [
    {
      id: 1,
      title: "winter sale",
      description: "sale! up to 50%",
      img: "https://images.pexels.com/photos/28570315/pexels-photo-28570315/free-photo-of-young-woman-with-tablet-and-headphones.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    {
      id: 2,
      title: "summer sale",
      description: "sale! up to 50%",
      img: "https://images.pexels.com/photos/27638606/pexels-photo-27638606/free-photo-of-portrait-of-newlyweds-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
    {
      id: 3,
      title: "autum sale",
      description: "sale! up to 50%",
      img: "https://images.pexels.com/photos/28759795/pexels-photo-28759795/free-photo-of-cozy-autumn-setup-with-camera-and-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* text con   */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  shop now
                </button>
              </Link>
            </div>
            {/* image con */}
            <div className="h-1/2 xl:h-full xl:w-1/2 relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
        <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
          {slides.map((slide, index) => (
            <div
              className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
                current === index ? "scale-150" : ""
              }`}
              key={slide.id}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-600 rounded-full "></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
