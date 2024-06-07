import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NaveIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-4 lg:px-16 xl:32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl tracking-wide">Paddy</div>
        </Link>
        <Menu />
      </div>
      {/* Bigger screens */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left side */}
        <div className="w-1/3">
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="paddy logo icon"
              width={100}
              height={100}
            />
            <div className="text-2xl tracking-wide">Paddy</div>
          </Link>
        </div>
        {/* Right side */}
        <div className="w-2/3">
          <SearchBar />
          <NaveIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
