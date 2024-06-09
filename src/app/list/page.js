import Image from "next/image";
import ProductList from "../../components/ProductList";
import Filter from "../../components/Filter";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 ls:px-16 xl:32 2xl:px-64 relative">
      {/* Banner section */}
      <div className="px-4 mt-8 flex justify-between h-64 bg-[#ffe9e9] rounded-lg">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-lg sm:text-4xl font-semibold sm:leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br />
            Selected Products
          </h1>
          <button className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image
            src="/woman.png"
            alt="list page banner image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* Filter section */}
      <Filter />

      {/* Product List */}
      <h1 className="my-12 text-xl font-semibold">Just For You!</h1>
      <ProductList />
    </div>
  );
};

export default ListPage;
