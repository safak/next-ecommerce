"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-custom bg-[#FBFBFB] top-12 right-0 flex flex-col ">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-2xl mt-4 mb-5 ">Shopping Cart</h2>
          {/* Cart Items Wrapper */}
          <div className="flex flex-col gap-8">
            {/* Cart Item */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/16070779/pexels-photo-16070779/free-photo-of-mur-equipement-materiel-loisir.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="product in cart image"
                width={72}
                height={72}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col gap-12">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className=" flex items-center justify-center gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$50</div>
                  </div>
                  {/* Description */}
                  <div className="text-sm text-gray-500">Available</div>
                </div>
                {/* Bottom*/}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">$49</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-2">
                mur-equipement-materiel-loisir
              </p>
              <div className="flex justify-between text-sm mt-4">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
                <button className="rounded-md py-3 px-4 bg-black text-[#FBFBFB]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
