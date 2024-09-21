import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import Navicons from "./Navicons"
import SearchBar from "./SearchBar"
const Navbar = () => {
    return (
        <div className=' h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative z-50'>
            {/* MOBILE SCREEN */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <Image src="/SLQST.svg" width={38} height={38} alt={""} />
                </Link>
                <Menu />
            </div>
            {/* BIGGER SCREENS */}
            <div className="hidden md:flex items-center justify-between gap-10 h-full">
                {/*LEFT SCREEN*/}
                <div className="w-1/3 xl:w-2/3 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-6">
                        <Image src="/SLQSTF.svg" alt={""} width={130} height={130} />
                    </Link>
                    <div className="hidden xl:flex text-sm gap-4 ">
                        <Link href="/">Home</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Customize</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                        <Link href="/">Cart(1)</Link>
                    </div>
                </div>
                {/*RIGHT SCREEN*/}
                <div className="w-2/3 xl:w-1/3 flex items-center justify-between gap-10">
                    <SearchBar />
                    <Navicons />
                </div>
            </div>
        </div>
    )
}

export default Navbar