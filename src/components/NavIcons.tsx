"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Cartmodel from "./Cartmodel";

const NavIcons = () => {
  const [isProfileOpen, setProfileOpen] = React.useState(false);
  const [isCartOpen, setCartOpen] = React.useState(false);
  const router=useRouter();
 // temporary
 const isLoggedIn=false;
  const handleProfile = () => {
     if(!isLoggedIn){
       router.push("/login");
     }
     setProfileOpen(prev=>!prev);
 }
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className=" absolute p-5 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] gap-4 z-20">
          <Link href="/">Profile</Link>
          <div className="cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notification"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative cursor-pointer">
      <Image
        src="/cart.png"
        alt="cart"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={()=>setCartOpen(prev=>!prev)}
      />
      <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-lama flex justify-center items-center text-white text-xs ">2</div>
      </div>
    
      {isCartOpen &&(
        <Cartmodel />
      ) }
    </div>
  );
};

export default NavIcons;
