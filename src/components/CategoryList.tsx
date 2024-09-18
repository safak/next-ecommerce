"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CategoryData {
  id: number;
  category_name: string;
  category_image: string;
}

const CategoryList = () => {

  const [category, setCategory] = useState<CategoryData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('http://127.0.0.1:8000/category/');
        let data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {
          category.map((item) => {
            return(
              <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/5">
                <div className="relative bg-slate-100 w-full h-96">
                  <Image src={item.category_image} alt="image" fill sizes="24vw" className="object-cover" />
                </div>
                <h1 className="mt-8 font-light text-xl tracking-wide">{item.category_name}</h1>
              </Link>
            );
          })
        }
      </div>
    </div>
  )
}

export default CategoryList;
