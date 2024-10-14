import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./Searchbar";
import NavIcons from "./NavIcons";

const Logo = () => (
  <Link href="/">
    <div className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Logo"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <div className="text-2xl tracking-wide">LAMA</div>
    </div>
  </Link>
);

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile Navbar */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Logo />
        <Menu />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left Side */}
        <div className="w-1/3 xl:w-1/4 flex items-center gap-12">
          <Logo />
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden xl:flex flex-grow justify-center gap-4">
          <Link href="/">home</Link>
          <Link href="/">shop</Link>
          <Link href="/">deals</Link>
          <Link href="/">about</Link>
        </div>

        {/* Right Side */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
