"use client";

import { useState } from "react";

const SelectQuantityAndAddToCart = ({ productId, variantId, stockNumber }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "increase" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }

    if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-semibold">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("decrease")}
            >
              -
            </button>
            {quantity}
            <button
              className="text-xl cursor-pointer"
              onClick={() => handleQuantity("increase")}
            >
              +
            </button>
          </div>
          {stockNumber > 0 ? (
            <div className="text-xs">
              Only <span className="text-orange-500">{stockNumber} Items</span>{" "}
              left!
              <br /> {`Dont't`} miss it
            </div>
          ) : (
            <div className="text-sm text-gray-500">Product is out of stock</div>
          )}
        </div>
        <button className="w-36 text-sm rounded-md ring-1 ring-[#003366] py-2 px-4 hover:bg-[#003366] hover:text-[#fbfbfb] transition-all duration-300 disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-[#fbfbfb] disabled:ring-none">
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default SelectQuantityAndAddToCart;
