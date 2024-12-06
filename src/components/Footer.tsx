
import Link from "next/link"
import Image from "next/image"


const Footerpage = () => {
    return (

    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-24">
            {/* Left */}
            <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
            <Link href="/">
                <Image src="/SLQSTF.svg" alt="" width={130} height={130} />
            </Link>
            <p>
                3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
                States
            </p>
            <span className="font-semibold">hello@Sleekquest.com</span>
            <span className="font-semibold">+234 81 622 055 40 </span>

            <div className="flex gap-6">
                <Image src="/facebook.png" alt="" width={16} height={16} />
                <Image src="/instagram.png" alt="" width={16} height={16} />
                <Image src="/youtube.png" alt="" width={16} height={16} />
                <Image src="/pinterest.png" alt="" width={16} height={16} />
                <Image src="/x.png" alt="" width={16} height={16} />
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
              <Link href="">Customer Service</Link>
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
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lime-300 text- font-semibold">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
            <div className="flex gap-8 cursor-pointer">
                <Image src="/paypal.png" alt="" width={40} height={35} />
                <Image src="/mastercard.png" alt="" width={40} height={35} />
                <Image src="/visa.png" alt="" width={40} height={35} />
                <Image src="/stripe.png" alt="" width={40} height={35} />
            </div>
            </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Sleekquest</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Nigeria | English</span>
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

export default Footerpage