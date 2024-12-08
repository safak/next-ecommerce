// "use client"

import ProductList from "@/components/ProductList"
import ShopbyWears from "@/components/ShopbyWears"
import Slider from "@/components/Slider"
import { WixClientContext } from "@/context/wixContext"
import { useContext,  } from "react"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/libs/wixClientServer"
import { Suspense } from "react"

const HomePage = async () =>  {

  // const wixClient = useWixClient();

  // useEffect(() => {
  //    const getProviders  = async () => {
  //     const res = await wixClient.products.queryProducts().find();

  //     console.log(res);
  //  };
  //  getProviders();
  //  }, [wixClient]);

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();

  // console.log(res)

   
  return(
    <>
     <div className=""> 
      <div className="-z-40">
         <Slider />
      </div>
     
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Featured Products</h1>
        <Suspense fallback={"Loading..."}>
            <ProductList
              shopbyWearsId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
            limit={4} />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Shop by wears</h1>
        <Suspense fallback={"Loading..."}>
           <ShopbyWears />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">New Products</h1>
        <ProductList   shopbyWearsId={process.env.FEATURED_PRODUCT_CATEGORY_ID!}
            limit={4} />
      </div>
     </div>
    </>
  )
}

export default HomePage