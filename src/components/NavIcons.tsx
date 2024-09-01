"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModel from "./CartModel"
import { useWixClient } from "@/hooks/useWixClient"

const NavIcons = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const route = useRouter();
  const isLoggedIn = false;
  const handleProfile = () => {
    if (!isLoggedIn) {
      route.push("/login");
    }
    setProfileOpen((prev) => !prev);

    const wixClient = useWixClient();
    const login = () => {
      const loginRequestData = wixClient.auth.generateOAuthData(
        'https://localhost:3000'
      );

      console.log(loginRequestData);
    }



  };
  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
        //onClick={login}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-md top-12 lef-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Deconnecter</div>
        </div>
      )}
      <div className="relative cursor-pointer" onClick={() => setCartOpen((prev) => !prev)}>
        <Image
          src="/cart.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
          2
        </div>
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
}

export default NavIcons
