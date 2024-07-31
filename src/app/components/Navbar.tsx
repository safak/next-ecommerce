
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';



const Navbar = () => {
    return (
        <div className='h-20 px-8 lg:px-16 xl:32 2xl:px-64 relative'>
            {/* mobile */}
            <div className="flex items-center justify-between h-full md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide">LAMA</div>
                </Link>
                <Menu />

            </div>
            {/* bigger screens */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* left */}
                <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
                    <Link href="/" className='flex items-center gap-3'>
                        <Image src="/logo.png" alt="logo" width={24} height={24} />
                        <div className='text-2xl tracking-wide'>LAMA</div>

                    </Link>
                </div>
                <div className="hidden xl:flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>

                </div>
                {/* right */}
                <div className='w-2/3  xl:w-1/2 flex items-center justify-between gap-8'>
                    <SearchBar />
                    <NavIcons />
                </div>
            </div>


        </div>
    )
}

export default Navbar
