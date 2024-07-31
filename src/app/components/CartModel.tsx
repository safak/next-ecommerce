"use client"
import React from 'react'
import Image from 'next/image'

const CartModel = () => {
    const CartItems = true;
    return (
        <div className='w-max absolute drop-shadow-sm bg-gray-200 top-12 -right-4 flex flex-col gap-6 z-20 rounded-lg'>
            {!CartItems ? (
                <div className=''>Cart is Empty</div>
            ) : (
                <>
                    <h2 className="text-xl">Shopping Cart</h2>
                    {/* List */}
                    <div className="flex flex-col gap-8">
                        <div className="flex gap-4">
                            <Image
                                src="https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408"
                                alt="Image not found"
                                width={72}
                                height={96}
                                className="object-cover rounded-md p-1"
                            />
                            <div className="flex flex-col justify-between w-full">
                                {/* Top section */}
                                <div>
                                    {/* Title */}
                                    <div className="flex items-center justify-between gap-8 p-1">
                                        <h3 className='font-semibold'>Product Name</h3>
                                        <div className="p-1 bg-gray-200 rounded-sm">$49</div>
                                    </div>
                                    {/* Description */}
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/* Bottom section */}
                                <div className="flex justify-between text-sm p-1">
                                    <span>Qty .2</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom */}
                    <div>
                        <div className="flex items-center justify-between font-semibold">
                            <span>Subtotal</span>
                            <span>$49</span>
                        </div>
                        <p className='text-gray-500 text-sm mt-2 mb-4'>Shipping and taxes calculated at checkout</p>
                        <div className='flex justify-between text-sm p-1'>
                            <button className='rounded-md py-2 px-3 ring-1 ring-gray-300'>View Cart</button>
                            <button className='rounded-md py-2 px-3 bg-black text-white'>Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartModel;
