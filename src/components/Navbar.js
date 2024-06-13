import Link from "next/link";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NaveIcons from "./NavIcons";

const Navbar = () => {
  return (
    <nav className="h-20 px-4 md:px-4 lg:px-16 xl:32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">Eleganza</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left side */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide">Eleganza</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/deals">Deals</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* Right side */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NaveIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
