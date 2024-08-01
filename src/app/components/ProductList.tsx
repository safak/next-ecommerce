import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductList = () => {
    return (
        <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408"
                        alt="product img"
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                    />
                    <Image
                        src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=60src=" alt="product img"
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md'
                    />
                </div>
                <div className="flex justify-between">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className='rounded-2xl ring-1 ring-trejan text-trejan py-2 px-4 text-xs hover:bg-trejan hover:text-white w-max'>Add to Cart</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600" alt="product img"
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                    />
                    <Image
                        src="https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="product img"
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md'
                    />
                </div>
                <div className="flex justify-between">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className='rounded-2xl ring-1 ring-trejan text-trejan py-2 px-4 text-xs hover:bg-trejan hover:text-white w-max'>Add to Cart</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/4170621/pexels-photo-4170621.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408"
                        alt="product img"
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                    />
                    <Image
                        src="https://images.pexels.com/photos/4386404/pexels-photo-4386404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408"
                        alt="product img"
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md'
                    />
                </div>
                <div className="flex justify-between">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className='rounded-2xl ring-1 ring-trejan text-trejan py-2 px-4 text-xs hover:bg-trejan hover:text-white w-max'>Add to Cart</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className="relative w-full h-80">
                    <Image
                        src="https://images.pexels.com/photos/4173114/pexels-photo-4173114.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408"
                        alt="product img"
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500'
                    />
                    <Image
                        src="https://images.pexels.com/photos/5053736/pexels-photo-5053736.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408"
                        alt="product img"
                        fill
                        sizes='25vw'
                        className='absolute object-cover rounded-md'
                    />
                </div>
                <div className="flex justify-between">
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className="text-sm text-gray-500">My description</div>
                <button className='rounded-2xl ring-1 ring-trejan text-trejan py-2 px-4 text-xs hover:bg-trejan hover:text-white w-max'>Add to Cart</button>
            </Link>
        </div>
    )
}

export default ProductList
