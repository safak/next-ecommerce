

import Filter from "@/components/Filter"
import ProductList from "@/components/ProductList"
import Image from "next/image"
import { wixClientServer } from "@/libs/wixClientServer"
import { Suspense } from "react"


const ListPage = async ({ searchParams}: { searchParams:any}) => {

  const wixClient = await wixClientServer();

  const cat = await wixClient.collections.getCollectionBySlug( searchParams.cat || "all-products")



  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      {/*CAMPAIGN*/}
      <div className="">
        <div className="hidden bg-lime-200 px-4 sm:flex justify-between h-64 rounded-sm">
          <div className="w-2/3 flex flex-col items-center justify-center gap-8">
            <h1 className=" text-2xl md:text-3xl lg:text-4xl font-semibold leading-[48px] text-black">Enjoy discounted prices for <br /> any of the selected product</h1>
            <button className="rounded-3xl bg-black text-white hover:bg-lime-400 hover:text-black w-max py-3 px-5 text-sm font-semibold">Buy now</button>
          </div>
          <div className="relative w-1/3">
            <Image src="/woman.png" alt={""} fill className="object-contain"></Image>
          </div>
        </div>
      </div>
      {/*FILTER*/}
      <Filter />
      {/*PRODUCTS*/}
      <h1 className="mt-12 text-xl font-semibold">All Products</h1>
      <Suspense fallback={"Loading..."}>
         <ProductList shopbyWearsId={cat.collection?._id || "00000000-000000-000000-000000000001"} searchParams={searchParams}/>
      </Suspense>
     
    </div>
  )
}

export default ListPage