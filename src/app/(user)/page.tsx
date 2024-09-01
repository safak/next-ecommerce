//"use client"

import Slider from "@/components/Slider"
import ProductList from "@/components/ProductList" 
import { useWixClient } from "@/hooks/useWixClient"

import { Suspense, useEffect } from "react";
import { wixClientServer } from "@/lib/wixClientServer";



const HomePage = async () => {

  //const wixClient = useWixClient()

  //useEffect(() => {
    //const getProducts = async () => {
      //const res = await wixClient.products.queryProducts().find();
      //console.log(res)
    //};
    //getProducts();

  //}, [wixClient]);
  //const wixClient = await wixClientServer()
  //const res = await wixClient.products.queryProducts().find();
  //console.log(res);



  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Nos Produits</h1>
        <Suspense fallback = {"loading"}>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_ID!}
        Limit = {3}
        />
        </Suspense>
      </div>
      </div>
  )
}

export default HomePage