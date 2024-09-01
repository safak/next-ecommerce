"use client"
import Image from 'next/image'
import React from 'react'

const CartModel = () => {

  const cartItems = true  


  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Panier vide</div>
      ) : (
        <>
        <h2 className='text-xl'>Votre Panier</h2>
          {/*LIST*/}
          <div className="flex flex-col gap-8">
            {/*ITEM 1 */}
            <div className="flex gap-4">
              <Image
                src="https://thumbs.dreamstime.com/z/vinayagar-images-ai-hd-photo-2023-289916691.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded -md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP*/}
                <div className=""></div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rouded-sm">305DT</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">disponible</div>
                {/* BOTTON*/}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/*ITEM 1 */}
            <div className="flex gap-4">
              <Image
                src="https://thumbs.dreamstime.com/z/vinayagar-images-ai-hd-photo-2023-289916691.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded -md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP*/}
                <div className=""></div>
                {/* TITLE */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rouded-sm">305DT</div>
                </div>
                {/* DESC */}
                <div className="text-sm text-gray-500">disponible</div>
                {/* BOTTON*/}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/*BOTTON */}
            <div>
              <div className='flex items-center justify-between font-semibold'>
                <span>TOTAL</span>
                <span>610DT</span>
              </div>
              <p className='text-gray-500 text-sm mt-2 mb-4'>
                Leodiplay pour la bonne qualite 
              </p>
              <div className='flex justify-between text-sm'>
                <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>Voir panier</button>
                <button className='rounded-md py-3 px-4 bg-black text-white'>Checkout</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModel
