import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-6 py-20 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-[#0c0c0c] text-[#fbfbfb] text-sm mt-24">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-4xl tracking-wide">Eleganza</div>
          </Link>
          <p>1410 Rue Parthenais, H2K 3R9, Montreal, QC, Canada</p>
          <span className="text-medium">+1-438-929-9531</span>
          <span className="text-medium">gherdaineaymen@gmail.com</span>
          <div className="flex gap-6">
            <div className="bg-[#fbfbfb] rounded-full p-2">
              <Image
                src="/facebook.png"
                alt="facebook icon"
                width={16}
                height={16}
              />
            </div>
            <div className="bg-[#fbfbfb] rounded-full p-2">
              <Image
                src="/instagram.png"
                alt="instagram icon"
                width={16}
                height={16}
              />
            </div>
            <div className="bg-[#fbfbfb] rounded-full p-2">
              <Image
                src="/youtube.png"
                alt="youtube icon"
                width={16}
                height={16}
              />
            </div>
            <div className="bg-[#fbfbfb] rounded-full p-2">
              <Image
                src="/pinterest.png"
                alt="pinterest icon"
                width={16}
                height={16}
              />
            </div>
            <div className="bg-[#fbfbfb] rounded-full p-2">
              <Image src="/x.png" alt="x icon" width={16} height={16} />
            </div>
          </div>
        </div>
        {/* Center */}
        <div className=" hidden lg:flex lg:justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accesoires</Link>
              <Link href="/">Men</Link>
              <Link href="/">Wowen</Link>
              <Link href="/">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-2xl">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4 rounded-sm"
            />
            <button className="w-1/4 bg-[#fbfbfb] text-[#0c0c0c] rounded-sm">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image
              src="/discover.png"
              alt="discover payment icon"
              width={40}
              height={20}
            />
            <Image
              src="/skrill.png"
              alt="skrill payment icon"
              width={40}
              height={20}
            />
            <Image
              src="/paypal.png"
              alt="paypal payment icon"
              width={40}
              height={20}
            />
            <Image
              src="/mastercard.png"
              alt="mastercard payment icon"
              width={40}
              height={20}
            />
            <Image
              src="/visa.png"
              alt="visa payment icon"
              width={40}
              height={20}
            />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">@ 2024 Eleganza Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Canada | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
