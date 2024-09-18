"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import CustomButton from '@/components/CustomButton';

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [country, setCountry] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [eyeIcon, setEyeIcon] = useState(false);

    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {

        e.preventDefault();

        try {

            const response = await fetch('http://127.0.0.1:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email, password, first_name, last_name, country, address, city, state, zip, phone 
                }),
            });

            const data = await response.json();
            if (data.status === 200) {

                toast.success(data.message);

                setTimeout(() => {
                    router.push('/login'); 
                }, 1000);

            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    };

    return (
        <main className="flex items-center justify-center h-screen bg-gray-700 bg-cover bg-center relative">

            <ToastContainer />

            <motion.div
                className="bg-gray-300 p-8 rounded-2xl shadow-lg w-full max-w-3xl flex flex-col justify-center"
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
            >
                <motion.div 
                    className="overflow-y-auto custom-scrollbar"
                    style={{ maxHeight: '80vh' }}
                >
                    <motion.h1
                        className="h3 font-bold mb-6 text-center text-accent"
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        Register
                    </motion.h1>
                    <motion.form
                        onSubmit={handleRegister}
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <div className="flex flex-wrap justify-between mb-5">
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="first_name" className="mb-2 h5 font-semibold">First Name</label>
                                <input
                                    type="text"
                                    value={first_name}
                                    onChange={(e) => setFirst_name(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="last_name" className="mb-2 h5 font-semibold">Last Name</label>
                                <input
                                    type="text"
                                    value={last_name}
                                    onChange={(e) => setLast_name(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between mb-5">
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="email" className="mb-2 h5 font-semibold">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                            <div className="relative flex flex-col w-[48%] mb-5">
                                <label htmlFor="password" className="mb-2 h5 font-semibold">Password</label>
                                <input
                                    type={eyeIcon ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl pr-12"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl mt-5"
                                    onClick={() => setEyeIcon(!eyeIcon)}
                                >
                                    {eyeIcon ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between mb-5">
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="phone" className="mb-2 h5 font-semibold">Contact Number</label>
                                <input
                                    type="number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="zip" className="mb-2 h5 font-semibold">Zip Code</label>
                                <input
                                    type="number"
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between mb-5">
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="address" className="mb-2 h5 font-semibold">Address</label>
                                <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="city" className="mb-2 h5 font-semibold">City</label>
                                <input
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-between mb-5">
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="state" className="mb-2 h5 font-semibold">State</label>
                                <input
                                    type="text"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                            <div className="flex flex-col w-[48%] mb-5">
                                <label htmlFor="country" className="mb-2 h5 font-semibold">Country</label>
                                <input
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    className="h-[50px] border px-4 rounded-2xl"
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-full flex justify-center mt-9">
                            <CustomButton 
                                text='Register' 
                                containerStyles='w-[196px] h-[50px] rounded-2xl'
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
                        Already have an account?{' '}
                        <Link href="/login" className="text-accent hover:underline">
                            Login
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
                </motion.div>
            </motion.div>
        </main>
    );
};

export default RegisterPage;
