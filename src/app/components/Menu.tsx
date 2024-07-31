"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Menu = () => {
    const [open, setOpen] = useState(false)


    return (
        <div>
            <Image src="/menu.png" alt="" width={28} height={28} className="cursor-pointer" onClick={() => { setOpen(prev => !prev) }} />
            {open && (
                <div className=" flex flex-col justify-center gap-8 text-xl z-10 items-center absolute bg-black w-full left-0 top-20 text-white h-[calc(100vh-80px)]">
                    <Link href="/">HomePage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Logout</Link>
                    <Link href="/">Cart(1)</Link>
                </div>
            )}
        </div >
    )
}

export default Menu
