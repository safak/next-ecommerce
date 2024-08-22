import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsEyeFill, BsPlus } from 'react-icons/bs'

type Data = {
  id: number,
  name: string,
  price: number,
  description: string,
  category: string,
  image: string,
  isOnSale: boolean,
  discountPercentage: number // For example, 50 for 50% discount
}

const ProductSale = (data: Data) => {
  // Calculate discounted price if the product is on sale
  const discountedPrice = data.isOnSale
    ? (data.price - (data.price * (data.discountPercentage / 100))).toFixed(2)
    : null;

  return (
    <div className="w-full relative"> {/* Limit the card width */}
      <div className='mb-4 relative overflow-hidden group transition bg-white'>
        {/* Sale Badge */}
        {data.isOnSale && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
            -{data.discountPercentage}%
          </div>
        )}
        {/* Make sure the parent container is relative to position the image correctly */}
        <div className="w-full flex justify-center items-center relative h-80">
          <Image 
            src={data.image}
            alt={`${data.name} image`} 
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition duration-300" 
          />
        </div>
        {/* BUTTONS */}
        <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button>
            <div className='flex justify-center items-center w-12 h-12 bg-lama'>
              <BsPlus className='text-white text-3xl'/>
            </div>
          </button>
          <Link href={'/'} className='w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl'>
            <BsEyeFill />
          </Link>
        </div>
        {/* Category */}
        <div className='mt-4 mb-4'>
          <div className='text-sm capitalize text-gray-500 mb-1 text-center'>{data.category}</div>
          {/* Name and Price */}
          <div className="flex justify-between items-center px-2"> {/* Added flex container for name and price */}
            <Link href={'/'} className='font-semibold'>{data.name}</Link>
            <div className="flex items-center">
              {data.isOnSale && (
                <span className="text-sm text-gray-500 line-through mr-2">{data.price} TND</span>
              )}
              <span className={`text-sm ${data.isOnSale ? 'text-red-500 font-semibold' : 'text-lama'}`}>
                {data.isOnSale ? `${discountedPrice} TND` : `${data.price} TND`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSale;
