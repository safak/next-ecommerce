import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easeIn duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>

        <div className='flex justify-between'>
          <span className='font-medium'>Product name</span>
          <span className='font-semibold'>$49</span>
        </div>

        <div>
          <div className='text-gray-500 text-sm'>description</div>
        </div>

        <button className='rounded-2xl ring-1 ring-primary text-primary px-4 py-2 w-max textsm hover:bg-primary hover:text-white'>
          Add to Cart
        </button>
      </Link>
      
      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easeIn duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>

        <div className='flex justify-between'>
          <span className='font-medium'>Product name</span>
          <span className='font-semibold'>$49</span>
        </div>

        <div>
          <div className='text-gray-500 text-sm'>description</div>
        </div>

        <button className='rounded-2xl ring-1 ring-primary text-primary px-4 py-2 w-max textsm hover:bg-primary hover:text-white'>
          Add to Cart
        </button>
      </Link>
      
      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easeIn duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>

        <div className='flex justify-between'>
          <span className='font-medium'>Product name</span>
          <span className='font-semibold'>$49</span>
        </div>

        <div>
          <div className='text-gray-500 text-sm'>description</div>
        </div>

        <button className='rounded-2xl ring-1 ring-primary text-primary px-4 py-2 w-max textsm hover:bg-primary hover:text-white'>
          Add to Cart
        </button>
      </Link>

      <Link
        href='/test'
        className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className='relative w-full h-80'>
          <Image
            src='https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easeIn duration-500'
          />
          <Image
            src='https://images.pexels.com/photos/4947543/pexels-photo-4947543.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
            fill
            sizes='25vw'
            className='absolute object-cover rounded-md'
          />
        </div>

        <div className='flex justify-between'>
          <span className='font-medium'>Product name</span>
          <span className='font-semibold'>$49</span>
        </div>

        <div>
          <div className='text-gray-500 text-sm'>description</div>
        </div>

        <button className='rounded-2xl ring-1 ring-primary text-primary px-4 py-2 w-max textsm hover:bg-primary hover:text-white'>
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
