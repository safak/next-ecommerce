import AddButton from "@/UI/AddButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Array to store product data
const data = [
  {
    id: 1,
    image1: "https://images.pexels.com/photos/4210863/pexels-photo-4210863.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jean",
    price: "100 TND",
    description: "Comfortable and stylish jeans.",
  },
  {
    id: 2,
    image1: "https://images.pexels.com/photos/12446409/pexels-photo-12446409.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/12452982/pexels-photo-12452982.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "T-Shirt",
    price: "50 TND",
    description: "Classic t-shirt for everyday wear.",
  },
  {
    id: 3,
    image1: "https://images.pexels.com/photos/3353466/pexels-photo-3353466.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/2210899/pexels-photo-2210899.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Hoodie",
    price: "150 TND",
    description: "Warm and cozy hoodie.",
  },
  {
    id: 4,
    image1: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/1475384/pexels-photo-1475384.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Cap",
    price: "30 TND",
    description: "Stylish cap for sunny days.",
  },
  {
    id: 5,
    image1: "https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg?auto=compress&cs=tinysrgb&w=600",
    image2: "https://images.pexels.com/photos/1475384/pexels-photo-1475384.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Cap",
    price: "30 TND",
    description: "Stylish cap for sunny days.",
  },
];

const ProductList = ({title, description,semititle}:{title:string,description:string,semititle:string}) => {
  return (<div className="mt-12">
 <div className="text-center mb-10 max-w-[600px] mx-auto">
        <p className="text-sm text-lama" data-aos="fade-down">{semititle}</p>
        <h1 className="text-3xl font-bold" data-aos="fade-down">{title}</h1>
        <p className="text-xs text-gray-400" data-aos="fade-down">
          {description}
        </p>
      </div>
    <div className=" grid gap-8 gap-y-16 sm:grid-cols-1 lg:grid-cols-4">
      
     
       {data.map((product) => (
        <Link
          key={product.id}
          href={"/"}
          className="flex flex-col gap-4 w-full"
          data-aos="fade-up"
          data-aos-delay={product.id -1*100}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.image1}
              alt={`${product.name} image`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            <Image
              src={product.image2}
              alt={`${product.name} image`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between space-x-4">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">{product.price}</span>
          </div>
          <div className="text-gray-500 text-sm">
            {product.description}
          </div>
          <div className="pb-4">
            <AddButton text="Add to cart" />
          </div>
        </Link>
      ))}
     </div>
    </div>

    
  );
};

export default ProductList;
