"use client";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

interface AddProps {
    initialStock: number | null;
    product_variation_id: number | null; 
}

const Add = ({ initialStock, product_variation_id }: AddProps) => {

    const [quantity, setQuantity] =useState(1);
    const [user, setUser] = useState({ token: '' });
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({token});
        }
    }, []);

    const handleQuantity = (type: "i" | "d") => {

        if (initialStock === null) return;        

        if (type === "d" && quantity > 1){
            setQuantity((prev) => prev - 1);
        }

        if (type === "i" && quantity < (initialStock ?? 0)){
            setQuantity((prev) => prev + 1);
        }
    }

    const handleAddToCart = async () => {
        if (!user.token) {
            toast.error("Please log in to add items to your cart.");
            router.push('/login');
            return; 
        }

        if (initialStock != 0){
            try {
                const response = await fetch('http://127.0.0.1:8000/add-to-cart/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${user.token}`,
                    },
                    body: JSON.stringify({
                        product_variation_id,
                        quantity,
                    }),
                });
    
                if (response.ok) {
                    const data = await response.json();
                    toast.success("Added to cart successfully!");
                } else {
                    const errorData = await response.json();
                    toast.error(`Error adding to cart: ${errorData.message}`);
                }
            } catch (error) {
                console.error('Error adding to cart:', error);
                toast.error("An unexpected error occurred. Please try again.");
            }
        }
        else {
            toast.error("Out of stock");
        }
    };

    return (
        <div className="flex flex-col gap-4">

            <h4 className="font-medium">Choose a Quantity</h4>
            
            <div className="flex justify-between">
                
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button className="cursor-pointer text-xl" onClick={() => handleQuantity("d")}>-</button>
                        {quantity}
                        <button className="cursor-pointer text-xl" onClick={() => handleQuantity("i")}>+</button>
                    </div>
                    {
                        initialStock !== null && initialStock === 0 ? (
                            <div className="text-xl">
                                <span className="text-red-500">Out of Stock</span>
                            </div>
                        ):(
                            initialStock !== null && initialStock <= 10 && (
                                <div className="text-xs">
                                    Only <span className="text-orange-500">{initialStock} items </span>
                                    left!<br/> {"Don't"}{""} miss it
                                </div>
                            )
                        )
                    }
                </div>
                
                <button
                    className="w-36 text-sm rounded-3xl ring-1 ring-ashu text-ashu py-2 px-4 hover:bg-ashu hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none"
                    onClick={handleAddToCart}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default Add;