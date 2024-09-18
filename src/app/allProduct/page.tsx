"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProductImage {
    id: number;
    image: string;
}

interface Color {
    id: number;
    color_name: string;
}

interface Size {
    id: number;
    size_name: string;
}

interface ProductVariation {
    id: number;
    color: Color;
    size: Size;
    discount_price: number;
}

interface ProductData {
    id: number;
    product_name: string;
    variations: ProductVariation[];
    images: ProductImage[];
    featured: boolean;
    new: boolean;
    list_image1: string;
    list_image2: string;
}

interface ProductListProps {
    filterType?: "featured" | "new";
}

const AllProduct: React.FC<ProductListProps> = ({ filterType }) => {
    const [products, setProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch('http://127.0.0.1:8000/products/');
                let data: ProductData[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);    

    return (
        <motion.div 
            className="mt-12 ps-6 pe-6 flex gap-x-8 gap-y-16 justify-center flex-wrap"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.5,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
        >
            {products.map((product) => (
                <Link 
                    href={{
                        pathname: `/${product.id}`,
                        query: { id: product.id}
                    }}
                    key={product.id} 
                    className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
                >
                    <div className="relative w-full h-80">
                        {product.list_image1 ? (
                            <>
                                <Image
                                    src={product.list_image1}
                                    alt={product.product_name}
                                    fill
                                    sizes="25vw"
                                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                                    style={{ objectFit: "cover" }}
                                />
                                {product.list_image2 && (
                                    <Image
                                        src={product.list_image2}
                                        alt={product.product_name}
                                        fill
                                        sizes="25vw"
                                        className="absolute object-cover rounded-md"
                                        style={{ objectFit: "cover" }}
                                    />
                                )}
                            </>
                        ) : (
                            <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                                <span>No Image Available</span>
                            </div>
                        )}
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">{product.product_name}</span>
                        <span className="font-semibold">
                            ${product.variations[0]?.discount_price}
                        </span>
                    </div>
                    <div className="text-sm text-gray-500">
                        {product.variations[0]?.color.color_name}
                    </div>
                    <button className="rounded-2xl ring-1 ring-ashu text-ashu w-max py-2 px-4 text-xs hover:bg-ashu hover:text-white">
                        Add to Cart
                    </button>
                </Link>
            ))}
        </motion.div>
    );
};

export default AllProduct;