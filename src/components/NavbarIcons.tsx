"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavbarIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isLoggedIn = false; //temporary
  const router = useRouter();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image
        src='/profile.png'
        alt=''
        width={22}
        height={22}
        className='cursor-pointer'
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className='absolute p-4 rounded-md top-12 left-0 text-sm custom-shadow bg-white z-20'>
          <Link href='/'>Profile</Link>
          <div className='mt-2 cursor-pointer'>Logout</div>
        </div>
      )}
      <Image
        src='/notification.png'
        alt=''
        width={22}
        height={22}
        className='cursor-pointer'
      />
      <div className='relative cursor-pointer'>
        <Image
          src='/cart.png'
          alt=''
          width={22}
          height={22}
          className='cursor-pointer'
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className='absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white text-sm flex justify-center items-center '>
          1
        </div>

        {isCartOpen && (
          <div>
            <CartModal />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarIcons;
