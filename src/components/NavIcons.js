"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NaveIcons = () => {
  // State to open and close profile and cart modal
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = false;

  // function that handle if the user is loggedin or not
  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }

    setIsProfileOpen((prev) => !prev);
  };

  // function that handle the cart modal
  const cartHandler = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile icon"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute p-4 rounded-lg top-12 -left-10 text-md shadow-custom z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt="notification icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="relative">
        <Image
          src="/cart.png"
          alt="cart icon"
          width={22}
          height={22}
          className="cursor-pointer"
          onClick={cartHandler}
        />
        <span className="absolute bg-red-600 text-[#FBFBFB] -top-4 -right-4 w-6 h-6 rounded-full flex justify-center items-center">
          2
        </span>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NaveIcons;
