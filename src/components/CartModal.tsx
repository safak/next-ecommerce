"use client"


import Image from "next/image"


const CartModal = () => {

    const cartItems = true
    return(
        <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartItems ? (
                <div className="">Cart is Empty</div>
            ) : (
                <>
                <h2 className="font-semibold">Shopping Cart</h2>
                {/* // list */}
                <div className=" flex flex-col gap-8">
                    {/* Items */}
                <div className="flex gap-4"> 
                    <Image src="/Girl.jpg" alt="" width={72} height={96} className="onject-cover rounded-md"/>

                    <div className="flex flex-col justify-between w-full gap-8">
                        {/* Top */}
                        <div className="">
                            {/* Title */}
                                <div className="flex items-center justify-between gap-8">
                                    <h3 className="font-semibold">Product Name</h3>
                                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                </div>
                            {/* Description */}
                            <div className="text-sm text-gray-500">
                                available
                            </div>
                        </div>
                        {/* Bottom */}
                        <div className=" flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 2</span>
                            <span className="text-red-300 cursor-pointer hover:text-red-500">Remove</span>
                        </div>
                    </div>
                </div>



                <div className="flex gap-4"> 
                    <Image src="/Girl.jpg" alt="" width={72} height={96} className="onject-cover rounded-md"/>

                    <div className="flex flex-col justify-between w-full gap-8">
                        {/* Top */}
                        <div className="">
                            {/* Title */}
                                <div className="flex items-center justify-between gap-8">
                                    <h3 className="font-semibold">Product Name</h3>
                                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                </div>
                            {/* Description */}
                            <div className="text-sm text-gray-500">
                                available
                            </div>
                        </div>
                        {/* Bottom */}
                        <div className=" flex justify-between text-sm">
                            <span className="text-gray-500">Qty. 2</span>
                            <span className="text-red-300 cursor-pointer hover:text-red-500">Remove</span>
                        </div>
                    </div>
                </div>
                <div className="/">
                    <div className=" flex justify-between items-center">
                        <span className="font-semibold">Subtotal</span>
                        <span>$49</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 mb-4">
                        Lorem ipsum dolor sit amet consectetur.
                    </p>

                    <div className="flex justify-between text-sm">
                        <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                        <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>

                    </div>
                </div>
            </div>
            </>
            )}
        </div>
    )
}


export default CartModal