"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
    images: { id: number, image: string }[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
    
    const [index, setIndex] = useState(0);
    
    if (!images || images.length === 0) {
        return <div>No images available</div>;
    }

    const getFullImagePath = (img: string) => {
        const baseUrl = 'http://127.0.0.1:8000';
        return img.startsWith("http") ? img : `${baseUrl}${img}`;
    };
    
    return (
        <div className="">
            <div className="h-[500px] relative">
                {images[index] && getFullImagePath(images[index].image) ? (
                    <Image 
                        src={getFullImagePath(images[index].image)}
                        alt="image" 
                        fill
                        sizes="50vw"
                        className="object-cover rounded-md"
                    />
                ): (
                    <div className="h-[500px] flex items-center justify-center bg-gray-200 rounded-md">
                        <span>Image Not Available</span>
                    </div>
                )}
            </div>

            <div className="flex justify-between gap-4 mt-8">
                {images.map((img, i) => (
                    <div 
                        className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" 
                        key={img.id}
                        onClick={() => setIndex(i)}
                    >
                        {getFullImagePath(img.image) ? (
                            <Image
                                src={getFullImagePath(img.image)}
                                alt={`Thumbnail ${i}`}
                                fill
                                sizes="30vw"
                                className="object-cover rounded-md"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                <span>No Thumbnail</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImages;
