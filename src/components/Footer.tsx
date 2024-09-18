import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">

        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">ASHU</div>
          </Link>
          <p>
            B-2/9, Flat 21, Metropolis City Rudrapur Uttarkhand, India
          </p>
          <span className="font-semibold">hello@gmail.com</span>
          <span className="font-semibold">+91 1234567890</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="icon" width={16} height={16} />
            <Image src="/instagram.png" alt="icon" width={16} height={16} />
            <Image src="/youtube.png" alt="icon" width={16} height={16} />
            <Image src="/pinterest.png" alt="icon" width={16} height={16} />
            <Image src="/x.png" alt="icon" width={16} height={16} />
          </div>
        </div>

        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/2">

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Services</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>Be the first to get the latest new about trends, promotions, and much more!</p>
          <div className="flex">
            <input type="text" placeholder="Email Address" className="p-4 w-3/4" />
            <button className="w-1/4 bg-ashu text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
            <div className="flex justify-between">
              <Image src="/discover.png" alt="image" width={40} height={20} />
              <Image src="/skrill.png" alt="image" width={40} height={20} />
              <Image src="/paypal.png" alt="image" width={40} height={20} />
              <Image src="/mastercard.png" alt="image" width={40} height={20} />
              <Image src="/visa.png" alt="image" width={40} height={20} />
            </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">&#169; 2024 Ashu Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">

          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">India | English</span>
          </div>
          
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}
