
import Filter from "@/components/Filter"
import ProductPage from "@/components/ProductPage"
import Image from "next/image"


const ListPage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      {/*CAMPAIGN*/}
      <div className="">
        <div className="hidden bg-lime-200 px-4 sm:flex justify-between h-64 rounded-sm">
          <div className="w-2/3 flex flex-col items-center justify-center gap-8">
            <h1 className="text-4xl font-semibold leading-[48px] text-black">Enjoy discounted prices for <br /> any of the selected product</h1>
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
      <h1 className="mt-12 text-xl font-semibold">Plain tees</h1>
      {/* <ProductPage/> */}
    </div>
  )
}

export default ListPage