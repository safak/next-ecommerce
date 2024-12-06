"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {

    const [open,setOpen] = useState(false)


    return(
        <div className=""> 
            <Image src="/menu.png" width={28} height={28} alt="" className="cursor-pointer" onClick={()=>setOpen((prev) => !prev)} />
            
            {
                open && (
                    <div className="absolute bg-black left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-20 text-white">
                       <Link href="/">Home</Link>
                        <Link href="/">Men</Link>
                        <Link href="/">Women</Link>
                        <Link href="/">Kids</Link>
                        <Link href="/">Customize</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Logout</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu