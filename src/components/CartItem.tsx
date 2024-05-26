import Image from "next/image";
import { RiDeleteBin2Line } from "react-icons/ri";

const CartItem = () => {
  return (
    <div className="flex justify-between">
      <div className="w-24 h-24 relative rounded-lg ring-1 ring-gray-300">
        <Image
          src="/product-1.jpeg"
          alt="baya bin bin oshun jewelry"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between gap-8">
        <div>
          <div className="flex items-center justify-between gap-12">
            <h3 className="font-semibold">Product Name</h3>
            <div className="">49€</div>
          </div>
          <div className="text-xs text-green-500">En stock</div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Quantité: 1x</span>
          <RiDeleteBin2Line className="text-xl cursor-pointer hover:text-red-light" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
