
import ProductList from "@/components/ProductList"
import ShopbyWears from "@/components/ShopbyWears"
import Slider from "@/components/Slider"


const HomePage = () =>  {
  return(
    <>
     <div className=""> 
      <div className="-z-40">
         <Slider />
      </div>
     
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Shop by wears</h1>
        <ShopbyWears />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">New Products</h1>
        <ProductList />
      </div>
     </div>
    </>
  )
}

export default HomePage