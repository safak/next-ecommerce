import React from "react";

import { SlideTabsExample } from "./SlideTabs";
import Link from "next/link";

import Image from "next/image";
import Menu from "./Menu";
import Search from "./Search";
import NavIcons from "./NavIcons";
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      <div className=" h-full flex justify-between items-center md:hidden">
        {/* Mobile */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={24} height={24} />
          <div className="text-2xl tracking-wide">PRESTIGE.PEAK</div>
        </Link>
    
        <Menu />
        
      
      </div>
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between gap-12 h-full">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">PRESTIGE.PEAK</div>
          </Link>
          <div className="hidden xl:flex gap-4">
<SlideTabsExample/>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3xl:w-1/2  flex items-center justify-between gap-8">
        <Search/>
        <NavIcons/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;