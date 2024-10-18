import Menu from "./Menu"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"

const Navber = () => {
    return (
        <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative" >
            {/* MOBILE */}
            <div className="h-full flex items-center justify-between">
                
                <Link href="/">
                    <div className="text-2xl tracking-wide">MARK4</div>
                </Link>
                <Menu />
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* LEFT */}
                <div className="w-1/3">
                    <Link href="/">
                        <Image src="/logo.png" alt="" width={24} height={24}/>
                        <div className="text-2xl tracking-wide">MARK4</div>
                    </Link>
                </div>
                {/* RIGHT */}
                <div className="w-2/3">
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>
        </div>
    )
}

export default Navber