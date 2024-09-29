"use client"
import { useState } from "react"

const Add = () => {
    const stock = 4
    const [quantity, setQuantity] = useState(1)
    const handleQunatity = (type: "i" | "d") => {
        if (type == "d" && quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
        if (type == "i" && quantity < stock) {
            setQuantity((prev) => prev + 1)
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-medium">Choose a quantity</h1>
            <div className="flex justify-between">
                <div className="flex items-center gap-4">
                    <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
                        <button className="cursor-pointer text-xl" onClick={() => handleQunatity("d")}>-</button>
                        {quantity}
                        <button className="cursor-pointer text-xl" onClick={() => handleQunatity("i")}>+</button>
                    </div>
                    <div className="text-sm">Only <span className="text-lime-600">4 items <br /> </span>{" Don't"}{" "} left!</div>
                </div>
                <button className="w-36 font-semibold text-sm rounded-3xl ring-1 ring-black text-black py-2 px-4 hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:bg-lime-200 disabled:text-black disabled:ring-none ">
                    Add to cart
                </button>
            </div>
        </div>

    )
}

export default Add