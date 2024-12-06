import Link from "next/link"
import Image from "next/image"
import Menu from "./Menu"
import SearchBar from "./SearchBar"
import NavIcons from "./NavIcons"

const NavbarPage = () => {
    return (
        <>
            <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
                <div className="h-full flex items-center justify-between md:hidden">
                    {/* Mobile */}
                    <Link href="/">
                        <Image src="/SLQST.svg" width={38} height={38} alt=""/>
                    </Link>
                <Menu/>
                </div>
                {/* Bigger screens */}
                <div className="hidden md:flex items-center h-full justify-between gap-8 ">
                    {/* Left */}
                    <div className="w-1/3 xl:w-3/4 flex items-center gap-12">
                        <Link href="/">
                            <Image src="/SLQSTF.svg" alt="" width={130} height={130} />
                        </Link>
                        <div className="hidden xl:flex gap-4 text-sm">
                        <Link href="/">Men</Link>
                        <Link href="/">Women</Link>
                        <Link href="/">Kids</Link>
                        <Link href="/">About</Link>                      
                        <Link href="/" className="text-blue-500">Customize</Link>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="w-2/3 flex items-center justify-between gap-8">
                        <SearchBar />
                        <NavIcons />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarPage