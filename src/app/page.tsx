"use client";
import { metadata } from "./metadata";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider";

const HomePage = () => {

  return (
    <div className=''>

      {/* Slider */}
      <Slider/>

      {/* Featured Product */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList filterType="featured"/>
      </div>

      {/* Categories */}
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList/>
      </div>

      {/* New Product */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList filterType="new"/>
      </div>
    </div>
  )
}

export default HomePage;