import Image from "next/image";

const ProductImages = () => {
  return (
    <div>
      <div className="relative w-full pt-[100%]">
        <Image
          src="/baya.jpeg"
          alt="oshun jewelery bijoux artisanaux"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className=""></div>
    </div>
  );
};

export default ProductImages;
