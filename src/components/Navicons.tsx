"use client"


import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react"
import CartModal from "./CartModal";


const NavIcons = () => {

    const [Profile, isProfileOpen] = useState(false);
    const [Cart, isCartOpen] = useState(false);

    // const router = useRouter();

    // TEMPORARY
    const isLoggedIn = false;

    const handleProfile = () => {
        if (!isLoggedIn) {
            // router.push("/login");
        }
        isProfileOpen((prev) => !prev);
    };


    return(
        <div className="flex items-center gap-4 xl:gap-6 relative">
            <Image src="/profile.png" alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile}/>
            {Profile && 
                <div className="absolute p-4 rounded-md top-12 left-0 text-sm bg-gray-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                    <Link href="">Profile</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>
            }
            
            <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer"/>

            <div className=" relative cursor-pointer">
                <Image 
                    src="/cart.png" 
                    alt="" 
                    width={22} 
                    height={22}  
                    onClick={()=> 
                    isCartOpen((prev) => !prev)}
                />
                <div className="absolute -top-5 -right-5 w-7 h-7 bg-lime-400 text-black rounded-full flex items-center justify-center" >
                    3
                </div>
            </div>
            {Cart && <CartModal/>}
        </div>
    )
}

export default NavIcons