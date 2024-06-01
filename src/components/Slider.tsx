"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    desc: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/5709631/pexels-photo-5709631.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Spring Sale Collections",
    desc: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Winter Sale Collections",
    desc: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to yellow-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 3000);

//     return () => clearInterval(interval);
//   });

  return (
    <div className='custom-height overflow-hidden'>
      <div
        className='w-max h-full flex transition-all duration-1000 ease-in-out'
        style={{ transform: `translateX(-${current * 100}vw)` }}>
        {slides.map((slide) => {
          return (
            <div
              className={`${slide.bg} w-screen h-full flex flex-col gap-16  xl:flex-row`}
              key={slide.id}>
              {/* text */}
              <div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
                <h2 className='text-xl lg:text-3xl 2xl:text-5xl font-semibold'>
                  {slide.desc}
                </h2>
                <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                  {slide.title}
                </h1>
                <Link href={slide.url}>
                  <button className='rounded-md bg-black text-white px-3 py-4'>
                    SHOP NOW
                  </button>
                </Link>
              </div>
              {/* image */}
              <div className='h-1/2 xl:w-1/2 xl:h-full relative'>
                <Image
                  src={slide.img}
                  alt=''
                  fill
                  sizes='100%'
                  className='object-cover'
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* slider button */}
      <div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(index)}>
            {current === index && (
              <div className='w-[6px] h-[6px] bg-gray-600 rounded-full'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
