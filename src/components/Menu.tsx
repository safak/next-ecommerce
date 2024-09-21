"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {

    const [open, setOpen] = useState(false);
    const [user, setUser] = useState({ token: '' });
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({token});
        }
    }, []);

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
                setOpen(false);
                router.push('/');
            } else {
                toast.error(data.message || 'Logout failed');
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <div className="">

            <ToastContainer/>

            <Image 
                src="/menu.png" 
                alt="menu" 
                width={28} 
                height={28} 
                className="cursor-pointer" 
                onClick={()=> setOpen((prev) => !prev)} 
            />
            {
                open && (
                    <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
                        <Link href="/" onClick={()=> setOpen((prev) => !prev)}>Home</Link>
                        <Link href="/allProduct" onClick={()=> setOpen((prev) => !prev)}>All Products</Link>
                        <Link href="/" onClick={()=> setOpen((prev) => !prev)}>About</Link>
                        <Link href="/contact" onClick={()=> setOpen((prev) => !prev)}>Contact</Link>
                        {
                            user.token ? (
                                <>
                                    <Link href="/profile" className="font-semibold" onClick={()=> setOpen((prev) => !prev)}>Profile</Link>
                                    <div className="mt-2 cursor-pointer font-semibold">
                                        <button  onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <Link href="/login" className="font-semibold" onClick={()=> setOpen((prev) => !prev)}>Login</Link>
                                    <div className="mt-2 cursor-pointer font-semibold">
                                        <Link href="/register" onClick={()=> setOpen((prev) => !prev)}>Register</Link>
                                    </div>
                                </>
                            )
                        }
                        <Link href="/" onClick={()=> setOpen((prev) => !prev)}>cart(1)</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu;
