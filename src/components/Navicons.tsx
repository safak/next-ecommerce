"use client"
import { UserCircleIcon } from "@heroicons/react/24/outline"
import { BellIcon } from "@heroicons/react/24/outline"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModal from "./CartModal"

const Navicons = () => {
    const [profile, isProfile] = useState(false)
    const [cart, iscart] = useState(false)

    const router = useRouter()

    const isloggedin = false

    const handleProfile = () => {
        if (isloggedin) {
            router.push("/login")
        }
        isProfile(prev => !prev)
    }

    return (
        <div className='flex items-center gap-8 xl:gap-5 relative'>
            <UserCircleIcon
                className="
                 w-6
                 h-6
                 cursor-pointer"
                onClick={handleProfile}
            />
            {profile && <div className="absolute p-4 rounded-md top-12 left-0 text-sm bg-gray-50 gap-4 z-10">
                <Link href="/">Profile</Link>
                <div className="mt-2 cursor-pointer">Log out</div>
            </div>}
            <BellIcon
                className="
             w-6
             h-6
             cursor-pointer"
            />

            <div className="relative cursor-pointer">
                <ShoppingBagIcon
                    className="
             w-6
             h-6
             cursor-pointer"
                    onClick={() => iscart((prev) => !prev)}
                />
                <div className="absolute -top-4 -right-3 w-6 h-6 bg-lime-400 text-black text-sm rounded-full flex items-center justify-center">1</div>
            </div>
            {cart && (
                <CartModal />
            )}
        </div>
    )
}

export default Navicons