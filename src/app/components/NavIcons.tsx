"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CartModel from './CartModel'

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const isLoggedIn = false
    const router = useRouter();
    const handleProfile = () => {
        if (isLoggedIn) {
            router.push('/login');
        }
        setIsProfileOpen(prev => !prev);
    }

    return (
        <div className='flex gap-4 items-center xl:gap-6 relative' >
            <Image src="/profile.png" className='cursor-pointer' alt="" width={22} height={22} onClick={handleProfile} />

            {isProfileOpen && (
                <div className='absolute p-4 rounded-m top-12 left-0 text-sm bg-gray-100 rounded-md drop-shadow z-20'>
                    <Link href="/">Profile</Link>
                    <div className="mt-2 cursor-pointer">Logout</div>
                </div>
            )}
            <Image src="/notification.png" className='cursor-pointer' alt="" width={22} height={22} />
            <div className='relative cursor-pointer'>
                <Image src="/cart.png" className='cursor-pointer' alt="" width={22} height={22} onClick={() => setIsCartOpen((prev) => !prev)} />
                <div className="absolute -top-3 -right-4 w-7 bg-trejan rounded-full text-white text-sm flex items-center justify-center">1</div>
            </div>
            {isCartOpen && (
                <CartModel />
            )
            }

        </div>
    )
}

export default NavIcons