"use client";
import CategoryList from "@/components/Categories";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Features from"@/components/Features";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";
import SaleProductList from "@/components/SaleProdcutList";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 800,
      easing:'ease-in-sine',
      delay: 100,
    });
  }, []);
  return (
    <div className="">

      <Slider />
      <Features/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <ProductList title={"Top Products"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum odiomodi"} semititle={"Top Selling Products"} />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#fdced5] py-2">
        <SaleProductList title={"Our weekly discount"} description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum odiomodi"} />
      </div>
      <div className="mt-24">
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <ProductList title={"New Proucts"} description={""} semititle={"Our new Collection!"} />
      </div>
       
    </div>
  );
};

export default HomePage;
