"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className='w-max absolute p-4 rounded-md custom-shadow bg-white top-12 right-0 flex flex-col gap-6 z-10'>
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          {/* list */}
          <div className='flex flex-col gap-8'>
            {/* items */}
            <div className='flex gap-4'>
              <Image
                src='https://images.pexels.com/photos/18707791/pexels-photo-18707791/free-photo-of-a-road-in-a-village.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                alt=''
                width={72}
                height={96}
                className='object-cover rounded-md'
              />
              <div className='flex flex-col justify-between w-full'>
                {/* top */}
                <div>
                  {/* title */}
                  <div className='flex items-center justify-between gap-8'>
                    <h3 className='font-semibold'>Product Name</h3>
                    <div className='p-1 bg-gray-50 rounded-sm'>$49</div>
                  </div>
                  {/* desc */}
                  <div className='text-sm text-gray-500'>available</div>
                </div>
                {/* bottom */}
                <div className='flex justify-between text-sm'>
                  <span className=' text-gray-500'>Qty. 2</span>
                  <span className=' text-blue-500'>remove</span>
                </div>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div>
            <div className='flex items-center justify-between font-semibold'>
              <span>subtotal</span>
              <span>amount</span>
            </div>
            <p className='text-gray-500 text-sm mt-2 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='flex justify-between text-sm'>
              <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>
                View cart
              </button>
              <button className='rounded-md py-3 px-4 bg-black text-white'>
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
