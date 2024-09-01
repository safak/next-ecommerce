"use client"

import { useState } from "react"


const Add = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "i" | "d") => {
    if (type == "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type == "i" ) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      <h4 className='font-medium'>Quantite :</h4>
      <div className='flex justify-between'>
        <div className='flex items-center gap-4'>
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
          <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("d")}>-</button>
            {quantity}
            <button className="cursor-pointer text-xl" onClick={()=>handleQuantity("i")}>+</button>
          </div>
        </div>
      <button className='w-40 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed'>
         Ajouter au panier
      </button>
      </div>
    </div>
  )
}

export default Add
