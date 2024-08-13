"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Summer sale collection",
    description: "Up to 50% off",
    link: "/",
    img: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=600",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Wonderland",
    description: "Stay cozy with 30% off",
    link: "/",
    img: "https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=600",
    bg: "bg-gradient-to-r from-blue-100 to-indigo-200",
  },
  {
    id: 3,
    title: "Spring Blossom",
    description: "New arrivals for a fresh start",
    link: "/",
    img: "https://images.pexels.com/photos/4937223/pexels-photo-4937223.jpeg?auto=compress&cs=tinysrgb&w=600",
    bg: "bg-gradient-to-r from-green-100 to-teal-100",
  },
];

const Slider = () => {
  const [slide, setSlide] = React.useState(0);
   useEffect(() => {
      const interval = setInterval(() => {
        setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${slide * 100}vw)` }}
      >
        {slides.map((item) => (
          <div
            className={`${item.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={item.id}
          >
            {/* Text container */}
            <div className="h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 xl:gap-12 text-center">
              <motion.h2
                className="text-xl lg:text-3xl 2xl:text-5xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {item.description}
              </motion.h2>
              <motion.h1
                className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold uppercase overflow-hidden relative"
                initial="initial"
                whileHover="hovered"
              >
               <motion.div
  variants={{
    initial: { y: 0 },
    hovered: { y: "-100%", transition: { duration: 0.2, ease: "linear" } }, // Further reduced duration
  }}
>
  {item.title}
</motion.div>
<motion.div
  className="absolute inset-0"
  variants={{
    initial: { y: "100%" },
    hovered: { y: 0, transition: { duration: 0.2, ease: "linear" } }, // Further reduced duration
  }}
>
  {item.title}
</motion.div>
              </motion.h1>
              <Link href={item.link}>
                <motion.button
                  className="btn-secondary"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Shop Now
                </motion.button>
              </Link>
            </div>
            {/* Image container */}
            <div className="relative xl:h-full h-1/2 xl:w-1/2">
              <Image
                src={item.img}
                alt="image"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((item, index) => (
          <motion.div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              slide === index ? "scale-150" : ""
            }`}
            key={item.id}
            onClick={() => setSlide(index)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
          >
            {slide === index ? (
              <div className="w-[6px] h-[6px] rounded-full bg-gray-600"></div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
