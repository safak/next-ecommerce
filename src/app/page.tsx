"use client";

import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import useWixClient from "@/hooks/useWixClient";
import { log } from "console";
import { useEffect } from "react";

const HomePage = () => {
  const wixClient = useWixClient();

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };

    getProducts();
  }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="mt-24">
        <h1 className="text-2xl mb-8">Les Nouveautés</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl">Nos produits</h1>
        <CategoryList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl mb-8">Les Bayas avec pierre</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
