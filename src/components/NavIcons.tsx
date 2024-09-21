"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import CartModal from "./CartModal";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavIcons = () => {

    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [user, setUser] = useState({ token: '' });
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({token});
        }
    }, []);

    const handleProfile = () => {
        setIsProfileOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/logout/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${user.token}`
                }
            });

            const data = await response.json();

            if (data.status === 200) {
                toast.success('Logout Successful');
                localStorage.removeItem('token');
                setUser({ token: '' });
                setIsProfileOpen(false);
                router.push('/');
            } else {
                toast.error(data.message || 'Logout failed');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="flex items-center gap-4 xl:gap-6 relative">

            <ToastContainer/>

            <Image
                src="/profile.png" 
                alt="navicon" 
                width={22} 
                height={22} 
                className="cursor-pointer" 
                onClick={handleProfile} 
            />

            {
                isProfileOpen && (
                    <div className="absolute p-4 rounded-md top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                        {
                            user.token ? (
                                <>
                                    <Link href="/profile" className="font-semibold" onClick={()=> setIsProfileOpen((prev) => !prev)}>Profile</Link>
                                    <div className="mt-2 cursor-pointer font-semibold">
                                        <button  onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" className="font-semibold">Login</Link>
                                    <div className="mt-2 cursor-pointer font-semibold">
                                        <Link href="/register">Register</Link>
                                    </div>
                                </>
                            )
                        }
                    </div>
                )
            }

            <Image 
                src="/notification.png" 
                alt="navicon" 
                width={22} 
                height={22} 
                className="cursor-pointer" 
            />

            <div 
                className="relative cursor-pointer" 
                onClick={() => setIsCartOpen((prev) => !prev)} 
            >
                <Image 
                    src="/cart.png" 
                    alt="navicon" 
                    width={22} 
                    height={22}
                />
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-ashu rounded-full text-white text-sm flex items-center justify-center">2</div>
            </div>
            {
                isCartOpen && (
                    <CartModal/>
                )
            }
        </div>
    )
}

export default NavIcons
