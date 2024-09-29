"use client"
import Image from "next/image"

const CartModal = () => {

    const cartItems = true
    return (
        <div className='w-max absolute p-4 rounded-md bg-gray-50 top-12 right-0 flex flex-col gap-6 z-10 border-gray-300"'>
            {!cartItems ?
                (<div className="">Cart is empty</div>) :


                (<>
                    <h2 className="text-md font-medium">Shopping Cart</h2>
                    {/*LIST */}
                    <div className="flex flex-col gap-8">
                        {/*ITEM */}
                        <div className="flex gap-4">
                            <Image src={"https://images.pexels.com/photos/1502216/pexels-photo-1502216.jpeg?auto=compress&cs=tinysrgb&w=600"} alt={""} width={72} height={96} className="object-cover rounded-md" />
                            <div className="flex flex-col justify-between w-full">
                                {/*TOP*/}
                                <div className="">
                                    {/*TITLE*/}
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">
                                            Product Name
                                            <div className="p-1 bg-gray-50 rounded-sm text-xs">$20</div>
                                        </h3>
                                    </div>
                                    {/*DESC*/}
                                    <div className="text-xs text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/*BOTTOM*/}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">Qty.2</span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*BOTTOM */}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold">
                            <span className="">Subtotal</span>
                            <span className="">$20</span>
                        </div>
                        <p className="text-gray-500 text-xs mt-2 mb-4">Delivery and taxes added during checkout.</p>
                        <div className="flex justify-between text-sm">
                            <button className="font-semibold rounded-md py-3 px-4 ring-1 ring-gray-300 hover:bg-gray-100 ">View Cart</button>
                            <button className="font-semibold rounded-md py-3 px-4 bg-black hover:bg-lime-300 hover:text-black text-white">Checkout</button>
                        </div>
                    </div>
                </>
                )}
        </div>
    )
}

export default CartModal