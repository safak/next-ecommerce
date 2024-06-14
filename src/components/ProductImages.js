"use client";

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images.items[imageIndex]?.image?.url}
          alt={`${images.mainMedia?.title.split(".")[0]} image`}
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4 mt-8">
        {images?.items.map((image, index) => {
          return (
            <div
              key={image._id}
              className="w-1/4 h-32 gap-4 mt-6 relative"
              onClick={() => setImageIndex(index)}
            >
              <Image
                src={image.image?.url}
                alt={`${image.title.split(".")[0]} image`}
                fill
                sizes="30vw"
                className="object-cover rounded-md cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
