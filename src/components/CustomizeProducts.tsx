"use client";
import { useState, useEffect } from "react";

interface Size {
    size: string;
    stock: number;
    id: number;
}

interface CustomizeProductsProps {
    colors: { id: number; color: string }[];
    sizes: Size[];
    onSizeChange: (size: string) => void;
    onColorChange: (colorId: number) => void;
    selectedColor: number | null;
}

const CustomizeProducts = ({ colors, sizes, onSizeChange, onColorChange, selectedColor }: CustomizeProductsProps) => {
    const [currentColor, setCurrentColor] = useState<number | null>(selectedColor);
    const [currentSize, setCurrentSize] = useState<string | null>(null);

    useEffect(() => {
        if (selectedColor !== null) {
            setCurrentColor(selectedColor);
            onColorChange(selectedColor);
        }
    }, [selectedColor]);

    useEffect(() => {
        if (currentColor !== null && sizes.length > 0) {

            const defaultSize = sizes.reduce((prev, curr) => (prev.id < curr.id ? prev : curr), sizes[0]);
            setCurrentSize(defaultSize.size);
            onSizeChange(defaultSize.size);
        }
    }, [currentColor, sizes]);

    const handleColorClick = (colorId: number) => {
        setCurrentColor(colorId);
        onColorChange(colorId);
    };

    const handleSizeChange = (size: string) => {
        setCurrentSize(size);
        onSizeChange(size);
    };

    const backgroundColorSplit = (colorName: string) => {
        const words = colorName.split(" ");
        return words.length > 1 ? words[words.length - 1] : words[0];
    };
    

    return (
        <div className="flex flex-col gap-6">
            <h4 className="font-medium">Choose a color</h4>
            <ul className="flex items-center gap-3">
                {colors.map((color, index) => (
                    <li
                        key={index}
                        onClick={() => handleColorClick(color.id)}
                        className={`w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative
                            ${currentColor === color.id ? 'ring-2 ring-blue-500' : ''}
                        `}
                        style={{ backgroundColor: backgroundColorSplit(color.color) }}
                    >
                        {currentColor === color.id && ( 
                            <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                    </li>
                ))}
            </ul>

            <h4 className="font-medium">Choose a size</h4>
            <ul className="grid grid-cols-2 gap-3">
                {sizes.map((size) => (
                    <li
                        key={size.id}
                        onClick={() => size.stock > 0 && handleSizeChange(size.size)}
                        className={
                            size.stock <= 0
                                ? 'ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-3 px-4 text-sm cursor-not-allowed text-center w-[80%]'
                                : `ring-1 ring-ashu text-ashu rounded-md py-3 px-4 text-sm cursor-pointer text-center w-[80%]
                                ${currentSize === size.size ? 'bg-ashu text-white' : ''}`
                        }
                    >
                        {size.size} 
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomizeProducts;