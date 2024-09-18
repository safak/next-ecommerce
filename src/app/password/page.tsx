"use client";
import { useEffect, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import CustomButton from '@/components/CustomButton';

const Password = () => {

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [firstEyeIcon, setFirstEyeIcon] = useState(false);
  const [secondEyeIcon, setSecondEyeIcon] = useState(false);
  
  const token = localStorage.getItem('token');
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push('/login')
    }
  },[token,router])

  const handlePassword = async (e: FormEvent) => {

    e.preventDefault();

    try {

      const response = await fetch('http://127.0.0.1:8000/password/', {

        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Token ${token}`,
        },

        body: JSON.stringify({ oldPassword, newPassword }),

      });

      const data = await response.json();

      if (data.status === 200) {

        toast.success(data.message);

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
          Change Password
        </motion.h1>

        <motion.form
          onSubmit={handlePassword}
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative flex flex-col mb-5">
            <label htmlFor="old_password" className="mb-2 h5 font-medium">Old Password</label>
            <input
              type={firstEyeIcon ? 'text' : 'password'}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              className="h-[50px] border px-4 rounded-2xl pr-12"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl mt-5"
              onClick={() => setFirstEyeIcon(!firstEyeIcon)}
            >
              {firstEyeIcon ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          
          <div className="relative flex flex-col">
            <label htmlFor="new_password" className="mb-2 h5 font-medium">New Password</label>
            <input
              type={secondEyeIcon ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="h-[50px] border px-4 rounded-2xl pr-12"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl mt-5"
              onClick={() => setSecondEyeIcon(!secondEyeIcon)}
            >
              {secondEyeIcon ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="w-full flex justify-center mt-9">
            <CustomButton 
              text='Update' 
              containerStyles='w-[196px] h-[50px] rounded-lg'
            />
          </div>

        </motion.form>

        <motion.p
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className="mt-1 text-center"
        >
          <button onClick={() => router.push('/profile')} className="text-accent hover:underline">
            Go back
          </button>
        </motion.p>

      </motion.div>

    </main>
  );
};

export default Password;
