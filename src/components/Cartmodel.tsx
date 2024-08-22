"use client";
import Image from "next/image";
import React from "react";

const Cartmodel = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (<>
      <h2 className="text-xl font-bold">Shopping cart</h2>
      {/* List of items */}  
        <div className="flex flex-col gap-8 ">
        {/* Item */}
        <div className="flex gap-4">
          {" "}
          <Image
            src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="cart"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          {/* Top */}
          <div className="flex flex-col justify-between w-full gap-2">
            {/* Title  */}
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold">Maryoul</h3>
              <div className="p-1 bg-gray-50 rounded-sm">100 TND</div>
            </div>
          {/* Description */}
          <div className="text-sm text-gray-500">
            available
          </div>
          {/* BOTTOM */}
          <div className="flex  justify-between text-sm">
            <span className="text-gray-500">Qte</span>
            <span className="text-blue-500">Remove</span>
          </div>
          </div>
        </div>
        <div className="flex gap-4">
          {" "}
          <Image
            src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="cart"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          {/* Top */}
          <div className="flex flex-col justify-between w-full gap-2">
            {/* Title  */}
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold">Souriyaa</h3>
              <div className="p-1 bg-gray-50 rounded-sm">100 TND</div>
            </div>
          {/* Description */}
          <div className="text-sm text-gray-500">
            available
          </div>
          {/* BOTTOM */}
          <div className="flex  justify-between text-sm">
            <span className="text-gray-500">Qte</span>
            <span className="text-blue-500">Remove</span>
          </div>
          </div>
        </div>
        </div>
       <div>
       <div className="flex items-center justify-between font-semibold">
        <span>Total</span>
        <span>200 TND</span>
       </div>
    <p className="text-gray-500 text-sm mt-2 mb-4">
        Shipping and taxes calculated at checkout.
    </p>
    <div className="flex justify-between text-sm gap-4">
        <button className="btn">View Cart</button>
        <button className="btn-secondary">Checkout</button>
    </div>
       </div>
       </>
      )}
    </div>
  );
};

export default Cartmodel;
