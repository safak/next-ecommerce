"use client";
import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const formRef = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = formRef.current;
        
        if (!form || !form.firstName.value || !form.lastName.value || !form.email.value || !form.phone.value || !form.message.value) {
            toast.error("Please fill all the detail carefully!");
            return;
        }

        setLoading(true); 
    
        emailjs.sendForm('service_mhny8xc', 'template_bcd14va', formRef.current!, {
            publicKey: 'y4b5wX7grM5IEeGm6',
        })
        .then((result) => {
                toast.success("Message has been sent successfully!");
                setLoading(false);   
                setTimeout(() => window.location.reload(), 2000); 
            },
            (error) => {
                toast.error("Something went wrong. Please try again.");
                setLoading(false);
            },
        );
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 0.5,
                    duration: 0.4,
                    ease: "easeIn"
                },
            }}
            className="py-6 flex justify-center items-center"
        >
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-[30px] justify-center items-center">
                    {/* form */}
                    <div className="xl:w-[70%] order-2 xl:order-noner">
                        <motion.form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" ref={formRef} onSubmit={sendEmail}>
                            <h3 className="text-4xl text-accent text-center">Feel Free to reach us!</h3> 

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input 
                                    type="firstname" 
                                    placeholder="First Name" 
                                    name="firstName" 
                                    className="p-3 border border-gray-600 rounded-lg bg-[#1f1f23] text-white focus:outline-none focus:ring-2 focus:ring-accent"
                                />

                                <input 
                                    type="lastname" 
                                    placeholder="Last Name" 
                                    name="lastName" 
                                    className="p-3 border border-gray-600 rounded-lg bg-[#1f1f23] text-white focus:outline-none focus:ring-2 focus:ring-accent"
                                />

                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    name="email"
                                    className="p-3 border border-gray-600 rounded-lg bg-[#1f1f23] text-white focus:outline-none focus:ring-2 focus:ring-accent"
                                />

                                <input 
                                    type="phone" 
                                    placeholder="Phone Number" 
                                    name="phone"
                                    className="p-3 border border-gray-600 rounded-lg bg-[#1f1f23] text-white focus:outline-none focus:ring-2 focus:ring-accent"
                                />
                            </div>

                            <input type="hidden" name="service"  />

                            {/* textarea */}
                            <textarea
                                className="p-3 border border-gray-600 rounded-lg bg-[#1f1f23] text-white focus:outline-none focus:ring-2 focus:ring-accent h-[200px]"
                                placeholder="Type your message here"
                                name="message"
                            />

                            {/* button */}
                            <button 
                                className="max-w-40 p-3 bg-accent text-white rounded-lg hover:bg-accent-dark flex justify-center items-center"
                                disabled={loading}
                            >
                                {loading ? (
                                    <div className="spinner border-t-4 border-white rounded-full w-6 h-6 animate-spin"></div>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </motion.form>
                    </div>
                </div>
                <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            </div>
        </motion.section>
    )
}

export default Contact;
