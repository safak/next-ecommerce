// "use client"

import Slider from "@/components/Slider"
import ProductPage from "@/components/ProductPage"
import ShopbyWears from "@/components/ShopbyWears"
// import { useContext, useEffect } from "react"
import { Suspense } from "react"
import { WixClientContext } from "@/context/wixContents"
import { wixClientServer } from "@/libs/wixClientSever"

const HomePage = async () => {

  // const wixClient = useContext(WixClientContext);

  // useEffect(() => {
  //   const getProviders  = async () => {
  //    const res = await wixClient.products.queryProducts().find();

  //    console.log(res);
  // };
  // getProviders();
  // }, [wixClient]);

  // const wixClient = await wixClientServer()
  // const res = await wixClient.products.queryProducts().find();

  // console.log(res)

  return (
    <div className=''>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1> 
         
        <Suspense fallback={"Loading..."}>
        <ProductPage ShopbyWearsId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
        </Suspense>
      </div>
        <div className="mt-24">
          <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12 ">Shop by wears</h1>
          <ShopbyWears />
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1 className="text-2xl">New this week</h1>
        </div>
  
    </div>
  )
}

export default HomePage