"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Array to store category data
const data = [
  {
    id: 1,
    name: "Hats",
    image:
      "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Shoes",
    image:
      "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Jackets",
    image:
      "https://images.pexels.com/photos/974339/pexels-photo-974339.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Jeans",
    image:
      "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "T-Shirts",
    image:
      "https://images.pexels.com/photos/3657429/pexels-photo-3657429.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Accessories",
    image:
      "https://images.pexels.com/photos/1399286/pexels-photo-1399286.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const CategoryList = () => {
  // State to track the active category index
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle scrolling and updating active index
  const handleScroll = (e: any) => {
    const scrollLeft = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <div className="mt-12 px-4 overflow-x-hidden">
     <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-sm text-lama" data-aos="fade-down">Discover our various categories</p>
        <h1 className="text-3xl font-bold" data-aos="fade-down">Category</h1>
        
      </div>
    <div className=" grid gap-8 gap-y-16 sm:grid-cols-1 lg:grid-cols-4"></div>
      <div
        className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide snap-x"
        onScroll={handleScroll}
      >
        {data.map((category, index) => (
          <Link
            key={category.id}
            href={`/list?cat=${category.name.toLowerCase()}`}
            className="snap-start flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
            data-aos="fade-right"
            data-aos-delay={category.id -1*100}
          >
            <div className="relative bg-slate-100 w-full h-96 overflow-hidden">
              <Image
                src={category.image}
                fill
                sizes="20vw"
                className="object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                alt={category.name}
              />
            </div>
            <h1 className="mt-8 font-light text-lg tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>

      {/* Indicator */}
      <div className="flex justify-center mt-4 md:hidden">
        {data.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${
              activeIndex === index ? "bg-lama" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
