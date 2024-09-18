"use client";
import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "@/components/CustomButton";
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import Link from "next/link";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
    const [profile, setProfile] = useState({
        first_name: "",
        last_name: "",
        email: "",
        city: "",
        state: "",
        country: "",
        zip: "",
        phone: "",
        address: ""
    });

    const token = localStorage.getItem('token');
    const router = useRouter();

    useEffect(() => {

        if(!token){
            router.push('/login');
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/profile/", {
                    method: "GET",
                    headers: {
                        "Authorization": `Token ${token}`,
                    },
                });
                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfile();
    }, [token, router]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch("http://127.0.0.1:8000/profile/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Token ${token}`,
                },
                body: JSON.stringify(profile),
            });
            const data = await response.json();
            if (data.status === 200) {
                toast.success(data.message);
            } else {
                toast.error("Error updating profile");
            }
        } catch (error) {
            console.error("Error updating profile:", error);
        }
    };

    return (
        <motion.div className="container mx-auto px-4 py-10"
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount: 0.2 }}
        >
            <ToastContainer />
            <div className="flex justify-center">
                <div className="w-full lg:w-3/4">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="mb-8">
                            <motion.h4 className="h2 font-semibold mb-8 text-accent text-center"
                                variants={fadeIn('up', 0.4)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.2 }}
                            >
                                My Profile
                            </motion.h4>
                            <motion.form className="grid grid-cols-1 md:grid-cols-2 gap-6"
                                variants={fadeIn('up', 0.6)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                onSubmit={handleSubmit}
                            >
                                <div className="">
                                    <label className="block h5 font-medium mb-2">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={profile.first_name}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="">
                                    <label className="block h5 font-medium mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={profile.last_name}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="">
                                    <label className="block h5 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="">
                                    <label className="block h5 font-medium mb-2">City</label>
                                    <input
                                        type="text"
                                        name="city"
                                        value={profile.city}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="">
                                    <label className="block h5 font-medium mb-2">State</label>
                                    <input
                                        type="text"
                                        name="state"
                                        value={profile.state}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="">
                                    <label className="block h5 font-medium mb-2">Country</label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={profile.country}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="">
                                    <label className="block h5 font-medium mb-2">Pincode</label>
                                    <input
                                        type="text"
                                        name="zip"
                                        value={profile.zip}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="">
                                    <label className="block h5 font-medium mb-2">Contact</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={profile.phone}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="md:col-span-2 input-box mx-60">
                                    <label className="block h5 font-medium mb-2">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={profile.address}
                                        onChange={handleChange}
                                        className="input-box border rounded-lg p-2 w-full"
                                    />
                                </div>
                                <div className="mt-10 md:col-span-2 flex justify-center"> 
                                    <CustomButton
                                        text='Update' 
                                        containerStyles='w-[196px] h-[62px] rounded-lg'
                                    />
                                </div>
                            </motion.form>
                            <motion.p
                                variants={fadeIn('up', 0.8)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className="mt-4 text-center"
                            >

                                Want to Change Password?{' '}
                                <Link href="/password" className="text-accent hover:underline">
                                    Click Here
                                </Link>

                            </motion.p>

                            <motion.p
                                variants={fadeIn('up', 0.8)}
                                initial="hidden"
                                whileInView={'show'}
                                viewport={{ once: false, amount: 0.3 }}
                                className="mt-1 text-center"
                            >
                                <button onClick={() => router.push('/')} className="text-accent hover:underline">
                                    Go back
                                </button>
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Profile;
