import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 flex g-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28716782/pexels-photo-28716782/free-photo-of-elegant-gold-earrings-on-white-silk-fabric.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw%"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/28856736/pexels-photo-28856736/free-photo-of-minimalist-floral-shadow-on-light-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw%"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          add to cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28716782/pexels-photo-28716782/free-photo-of-elegant-gold-earrings-on-white-silk-fabric.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw%"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/28856736/pexels-photo-28856736/free-photo-of-minimalist-floral-shadow-on-light-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw%"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          add to cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28716782/pexels-photo-28716782/free-photo-of-elegant-gold-earrings-on-white-silk-fabric.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw%"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/28856736/pexels-photo-28856736/free-photo-of-minimalist-floral-shadow-on-light-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw%"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          add to cart
        </button>
      </Link>

      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/28716782/pexels-photo-28716782/free-photo-of-elegant-gold-earrings-on-white-silk-fabric.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw%"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/28856736/pexels-photo-28856736/free-photo-of-minimalist-floral-shadow-on-light-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            sizes="25vw%"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">description</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
          add to cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
