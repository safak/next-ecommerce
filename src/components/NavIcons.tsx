"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PiUser, PiShoppingBag } from "react-icons/pi";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const router = useRouter();

  // Temporary
  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <PiUser className="cursor-pointer text-3xl" onClick={handleProfile} />
      {isProfileOpen && (
        <div className="absolute p-4 top-12 left-0 text-sm rounded-lg shadow-md border border-gray-100 z-20">
          <Link href="/">Mon Profil</Link>
          <div className="mt-2 cursor-pointer text-nowrap">Se Déconnecter</div>
        </div>
      )}
      <div
        className="relative cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <PiShoppingBag className="cursor-pointer text-3xl" />
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-light rounded-full text-white text-xs flex items-center justify-center ">
          2
        </div>
      </div>
      {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
    </div>
  );
};

export default NavIcons;
