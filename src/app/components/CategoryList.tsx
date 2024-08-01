import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
    return (
        <div className='px-4 overflow-x-scroll scrollbar-hide'>
            <div className="flex gap-4 md:gap-8">
                <Link href="/list?cat=test" className='flex-shrink-0 sm:w-1/2 lg:w-1/4 rounded-sm'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image
                            src="https://images.pexels.com/photos/1416377/pexels-photo-1416377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Fried Chicken"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Title</h1>
                </Link>
                <Link href="/list?cat=test2" className='flex-shrink-0 sm:w-1/2 lg:w-1/4 rounded-sm'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image
                            src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Pizza"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Title</h1>
                </Link>
                <Link href="/list?cat=test3" className='flex-shrink-0 sm:w-1/2 lg:w-1/4'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image
                            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Burger"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Title</h1>
                </Link>
                <Link href="/list?cat=test4" className='flex-shrink-0 sm:w-1/2 lg:w-1/4'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image
                            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Pasta"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Title</h1>
                </Link>
                <Link href="/list?cat=test5" className='flex-shrink-0 sm:w-1/2 lg:w-1/4'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image
                            src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Salmon"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Title</h1>
                </Link>
                <Link href="/list?cat=test6" className='flex-shrink-0 sm:w-1/2 lg:w-1/4'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image
                            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Steak"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Title</h1>
                </Link>
                <Link href="/list?cat=test7" className='flex-shrink-0 sm:w-1/2 lg:w-1/4'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image
                            src="https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Sushi"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Title</h1>
                </Link>
                <Link href="/list?cat=test8" className='flex-shrink-0 sm:w-1/2 lg:w-1/4'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image
                            src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Dessert"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h1 className="mt-8 font-light text-cl tracking-wide">Category Title</h1>
                </Link>
            </div>
        </div>
    )
}

export default CategoryList;
