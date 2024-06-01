import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='pt-24 pb-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* top */}
      <div className='flex flex-col md:flex-row justify-between gap-24'>
        {/* left */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 text-center md:text-start'>
          <Link href='/'>
            <div className='text-2xl tracking-wide'>SHOPIFY</div>
          </Link>
          <p>Ganeshchowk 07, Buddhanilkantha</p>
          <span className='font-semibold'>suyogstha317@gmail.com</span>
          <span className='font-semibold'>9803348875</span>

          <div className='flex gap-6 items-center justify-center md:justify-start'>
            <Image
              src='/facebook.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/instagram.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/x.png'
              alt=''
              width={16}
              height={16}
            />
            <Image
              src='/pinterest.png'
              alt=''
              width={16}
              height={16}
            />
          </div>
        </div>

        {/* center */}
        <div className='hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/'>About Us</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Affilates</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/'>New Arrivals</Link>
              <Link href='/'>Accessories</Link>
              <Link href='/'>Men</Link>
              <Link href='/'>Women</Link>
              <Link href='/'>All products</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/'>Customers Services</Link>
              <Link href='/'>My Account</Link>
              <Link href='/'>Find a store</Link>
              <Link href='/'>Legal & Privacy</Link>
              <Link href='/'>Gift Card</Link>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 text-center md:text-start'>
          <h1 className='font-medium text-lg'>Subscribe</h1>
          <p>
            Be the first to get the latest news about trends, promotions and
            much more!
          </p>
          <div>
            <input
              type='text'
              placeholder='Email address'
              className='p-2 w-3/4 outline-none'
            />
            <button className='w-1/4 p-2 bg-primary text-white mb-5'>
              JOIN
            </button>
            <span className='font-semibold'>Secure Payments</span>
            <div className='flex justify-between mt-5'>
              <Image
                src='/visa.png'
                alt=''
                width={40}
                height={20}
              />
              <Image
                src='/discover.png'
                alt=''
                width={40}
                height={20}
              />
              <Image
                src='/skrill.png'
                alt=''
                width={40}
                height={20}
              />
              <Image
                src='/mastercard.png'
                alt=''
                width={40}
                height={20}
              />
              <Image
                src='/paypal.png'
                alt=''
                width={40}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
        <div>&#169; 2024 Shopify</div>
        <div className='flex flex-col gap-8 md:flex-row text-center'>
          <div>
            <span className='text-gray-500 mr-4'>Currency</span>
            <span className='font-medium'>$ USD</span>
          </div>
          <div>
            <span className='text-gray-500 mr-4'>Languages</span>
            <span className='font-medium'>United States | English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
