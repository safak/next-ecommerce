import Link from "next/link";
import Menu from "./Menu";
import Searchbar from "./Searchbar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <div className="h-20 relative">
      {/* MOBILE */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/" className="text-2xl font-bold">
          OSHUN
        </Link>
        <Menu />
      </div>
      {/* SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold">
            OSHUN
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Accueil</Link>
            <Link href="/">Nos Bijoux</Link>
            <Link href="/">À Propos</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
