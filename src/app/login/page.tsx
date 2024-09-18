"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import CustomButton from '@/components/CustomButton';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [eyeIcon, setEyeIcon] = useState(false);
  
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {

    e.preventDefault();

    try {

      const response = await fetch('http://127.0.0.1:8000/login/', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({ email, password }),

      });

      const data = await response.json();

      if (data.status === 200) {

        toast.success('Login Successful');

        localStorage.setItem('token', data.token);

        setTimeout(() => {
          router.push('/'); 
        }, 1000);
        
      } else {
        toast.error(data.message || 'Invalid credentials');
      }

    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }

  };

  return (

    <main className="flex items-center justify-center h-screen bg-cover bg-center relative bg-gray-800">

      <ToastContainer />

      <motion.div
        className="bg-gray-300 p-8 rounded-2xl shadow-lg w-full max-w-lg h-[76vh] flex flex-col justify-center"
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2 }}
      >

        <motion.h1
          className="h3 font-bold mb-6 text-center text-accent"
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.2 }}
        >
          Login
        </motion.h1>

        <motion.form
          onSubmit={handleLogin}
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2 h5 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] border px-4 rounded-2xl"
              required
            />
          </div>
          
          <div className="relative flex flex-col">
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

          <div className="w-full flex justify-center mt-9">
            <CustomButton 
              text='Login' 
              containerStyles='w-[196px] h-[50px] rounded-lg'
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

          Don't have an account?{' '}
          <Link href="/register" className="text-accent hover:underline">
            Register
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

    </main>
  );
};

export default LoginPage;
