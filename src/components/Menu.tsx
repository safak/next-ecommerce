'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

 const Menu = () => {

    const [open, setOpen] = useState(false)
  return (
    <div>
       <Image src='/menu.png' 
       alt="" 
       width={28} 
       height={28} 
       className="cursor-pointer " 
       onClick={()=> setOpen((prev)=> !prev)}/>
       {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-10 text-xl z-10 ">
            <Link href='/'>Homepage</Link>
            <Link href='/'>About us</Link>
            <Link href='/'>Contact Us</Link> 
        </div>
       )}
    </div>
  )
}
export default Menu;