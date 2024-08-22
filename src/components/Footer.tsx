import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6 ">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">PRESTIGE.PEAK</div>
          </Link>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <span className="fonst-semibold">prestigne@email.com</span>
          <span className="fonst-semibold">+216 000 000 000</span>
          <div className="flex gap-6">
            <Link href={"/"}>
              <Image
                src="/facebook.png"
                alt="facebook"
                width={16}
                height={16}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/instagram.png"
                alt="instagram"
                width={16}
                height={16}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/pinterest.png"
                alt="pinterest"
                width={16}
                height={16}
              />
            </Link>
            <Link href={"/"}>
              <Image src="/x.png" alt="x" width={16} height={16} />
            </Link>
          </div>
        </div>
        {/* CENTER */}
        <div className="w-1/2 hidden lg:flex justify-between">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href={"/"}>About us</Link>
              <Link href={"/"}>Carrers</Link>
              <Link href={"/"}>Affiliates</Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Contact us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href={"/"}>New Arrivals</Link>
              <Link href={"/"}>Accessories</Link>
              <Link href={"/"}>Men</Link>
              <Link href={"/"}>Women</Link>
              <Link href={"/"}> All products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href={"/"}>Customer Service</Link>
              <Link href={"/"}>My Account</Link>
              <Link href={"/"}>Find A store</Link>
              <Link href={"/"}>Legal & Privacy</Link>
              <Link href={"/"}>Gift Cart</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-6 ">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex">
            <input
              className="p-4 w-3/4 outline-none"
              placeholder="Email address"
              type="text"
            />
            <button className="w-1/3 bg-lama text-white">JOIN US</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/visa.png" alt="visa" width={40} height={20} />
            <Image src="/mastercard.png" alt="master" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal" width={40} height={20} />
            <Image src="/skrill.png" alt="skrill" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <span>© 2024 Prestige. All rights reserved</span>
        <div className="flex flex-col gap-8 md:flex-row">
        <div className="">
          <span className="text-gray-500 mr-4">Language</span>
          <span className="font-medium">United States | English</span>
        </div>
        <div className="">
          <span className="text-gray-500 mr-4">Currency</span>
          <span className="font-medium">TND</span>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
