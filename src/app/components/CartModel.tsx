"use client"
import React from 'react'
import Image from 'next/image'

const CartModel = () => {
    const CartItems = true
    return (
        <div className='absolute drop-shadow-sm bg-gray-200 top-12 -right-4 flex flex-col gap-6 z-20 rounded-md'>
            {!CartItems ? (
                <div className=''>Cart is Empty</div>
            ) : (
                <div className="">
                    <Image src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width={72} height={96} className="object-cover rounded-md" />
                    <div className="">
                        {/* top section */}
                        <div className="">
                            <h3>Product Name</h3>
                            <div className="">$49</div>
                        </div>
                        {/* desc */}
                        <div className="">
                            available
                        </div>
                        {/* botom section */}
                    </div>

                </div>
            )}
            <div className='btns flex justify-between'>


            </div>
        </div>
    )
}

export default CartModel