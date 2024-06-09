import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/4823553/pexels-photo-4823553.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-sm z-10 hover:opacity-0 transition-all ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4823478/pexels-photo-4823478.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-sm"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] py-2 px-4 hover:bg-[#fbfbfb] hover:text-[#0c0c0c] transition-all ease-in-out duration-700 hover:border-[#0c0c0c] hover:border">
          ADD TO CART
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/4823553/pexels-photo-4823553.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-sm z-10 hover:opacity-0 transition-all ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4823478/pexels-photo-4823478.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-sm"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] py-2 px-4 hover:bg-[#fbfbfb] hover:text-[#0c0c0c] transition-all ease-in-out duration-700 hover:border-[#0c0c0c] hover:border">
          ADD TO CART
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/4823553/pexels-photo-4823553.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-sm z-10 hover:opacity-0 transition-all ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4823478/pexels-photo-4823478.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-sm"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] py-2 px-4 hover:bg-[#fbfbfb] hover:text-[#0c0c0c] transition-all ease-in-out duration-700 hover:border-[#0c0c0c] hover:border">
          ADD TO CART
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/4823553/pexels-photo-4823553.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-sm z-10 hover:opacity-0 transition-all ease-in duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/4823478/pexels-photo-4823478.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="product image"
            fill
            sizes="25vw"
            className="absolute object-cover rounded-sm"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">49$</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="rounded-md bg-[#0c0c0c] text-[#fbfbfb] py-2 px-4 hover:bg-[#fbfbfb] hover:text-[#0c0c0c] transition-all ease-in-out duration-700 hover:border-[#0c0c0c] hover:border">
          ADD TO CART
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
