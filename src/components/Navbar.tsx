"use client"

import React, { useState } from 'react'
import Link from "next/link"
import Menu from "./Menu"
import Image from "next/image"
import Navicons from "./Navicons"
import SearchBar from "./SearchBar"

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null)

    const navLinks = ['Men', 'Women', 'Kids', 'About']
    const categories = ['Summer Collection', 'T-shirt', 'Hats', 'Beanies', 'Tote bags', 'Masks', 'Gift Cards']

    return (
        <div className='relative'>
            <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative z-50'>
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
                            {navLinks.map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    className="hover:text-blue-600 transition-colors duration-200"
                                    onMouseEnter={() => setHoveredLink(item)}
                                    onMouseLeave={() => setHoveredLink(null)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link href="/" className="text-blue-400">
                                Customize
                            </Link>
                        </div>
                    </div>
                    {/*RIGHT SCREEN*/}
                    <div className="w-2/3 xl:w-1/3 flex items-center justify-between gap-10">
                        <SearchBar />
                        <Navicons />
                    </div>
                </div>
            </div>

            {/* Hover dropdown */}
            {hoveredLink && (
                <div
                    className="absolute left-0 w-full bg-white shadow-md z-40 transition-all duration-300 ease-in-out"
                    onMouseEnter={() => setHoveredLink(hoveredLink)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="grid grid-cols-3 gap-8">
                            <div className="col-span-1">
                                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                                <ul className="space-y-2">
                                    {categories.map((category) => (
                                        <li key={category}>
                                            <Link href="/" className="text-gray-600 hover:text-gray-900">
                                                {category}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-span-2 grid grid-cols-2 gap-4">
                                <div className="flex flex-col items-center">
                                    <Image src="/Model000.jpg" alt="Model 000" width={300} height={300} className="rounded-lg" />
                                    <p className="mt-2 text-center">Model 000</p>
                                    <p className="text-center text-gray-600">Cushiony Comfort</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Image src="/Model001.jpg" alt="Model 001" width={300} height={300} className="rounded-lg" />
                                    <p className="mt-2 text-center">Model 001</p>
                                    <p className="text-center text-gray-600">Supportive & Durable</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-gray-600">Not sure?</p>
                            <div className="mt-2 space-x-4">
                                <Link href="/" className="text-blue-600 hover:underline">Compare → </Link>
                                <Link href="/" className="text-blue-600 hover:underline">Take to Customize</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar