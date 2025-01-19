'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { ProductData } from "./ProductData";    

const ProductCategory: React.FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "25px",
        },
      },
    ],
  };

  return (
    <div className="p-2 md:p-4 bg-gray-50 overflow-x-hidden">
      <Link href="/shop-now">
        <Slider {...settings} className="w-full">
          {ProductData.map((category, index) => (
            <div key={index} className="flex justify-center">
              <ProductCard imageUrl={category.imageUrl} text={category.text} />
            </div>
          ))}
        </Slider>
      </Link>
    </div>
  );
};

export default ProductCategory;
