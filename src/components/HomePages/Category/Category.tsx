"use client";

import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Category: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "MakeUp1",
      price: "₦3000",
      category: "Hair",
      rating: 3.5,
      image:
        "https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFrZXVwJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D",
      link: "/",
    },
    {
      id: 2,
      title: "MakeUp2",
      price: "₦3000",
      category: "Hair",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1551723454-7565a1f5b161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1ha2V1cHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/",
    },
    {
      id: 3,
      title: "MakeUp3",
      price: "₦3000",
      category: "Hair",
      rating: 2.5,
      image:
        "https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFrZXVwJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D",
      link: "/",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center pt-12">
      <h1 className="text-2xl md:text:4xl font-bold">
        <Fade>Shop With Us</Fade>
      </h1>
      <div className="w-[90%] flex flex-wrap  gap-8 mt-8 lg:justify-between">
        {products.map((product) => (
          <div
            key={product.id}
            className="md:w-[30%] w-[100%] bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <div className="flex text-yellow-500">
                  {Array.from({ length: Math.floor(product.rating) }).map(
                    (_, index) => (
                      <BsStarFill key={index} />
                    )
                  )}
                  {product.rating % 1 !== 0 && <BsStarHalf />}
                </div>
              </div>
              <p className="text-gray-700 mt-2">NGN: {product.price}</p>
              <p className="text-gray-500 mt-1">Category: {product.category}</p>
              <Link
                href={product.link}
                className="block w-full text-center bg-[#F27E98] text-white py-2 mt-4 rounded hover:bg-[#f27e97cc] transition"
              >
                View Recipes
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href="/recipies"
        className="m-10 px-6 py-2 border border-[#F27E98] rounded hover:bg-[#F27E98] hover:text-white transition"
      >
        View more
      </Link>
    </div>
  );
};

export default Category;
