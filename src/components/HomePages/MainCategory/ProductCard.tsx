import React from "react";

interface AllCategoryProps {
  imageUrl: string;
  text: string;
}

const ProductCard: React.FC<AllCategoryProps> = ({ imageUrl, text }) => {
  return (
    <div className="mt-4 w-44 h-56 overflow-hidden relative flex items-end justify-center bg-red-500">
      <div className="bg-gray-100 flex items-center flex-col hover:cursor-pointer h-full justify-between w-full">
        <img
          src={imageUrl}
          alt={text}
          className="transition-transform duration-300 ease-in-out hover:scale-110 w-full h-5/6 object-cover rounded-md"
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-50 flex items-center justify-center">
          <h1 className="text-white text-lg font-semibold">{text}</h1>
        </div>
        <h2 className="mt-2 text-gray-700 font-medium">{text}</h2>
      </div>
    </div>
  );
};

export default ProductCard;
