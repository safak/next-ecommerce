"use client";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import FindIcon from "./FindIcon";
import Items from "./Items";

const Header = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:64 relative">
      {/* MOBILE */}
      <div className="h-20 flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Head$Toe</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger screen */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* left */}
        <div className="W-1/3 xl:1/2  flex items-center gap-12 ">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="text-2xl tracking-wide text-bold">Head$Toe</div>
          </Link>
          <div className="hidden xl:flex gap-4 items-center justify-between ">
            <Link href="/">Homepage</Link>
            <Link href="/">About</Link>
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 xl:1/2 flex items-center justify-between gap-8 ">
          <FindIcon />
          <Items />
        </div>
      </div>
    </div>
  );
};

export default Header;
